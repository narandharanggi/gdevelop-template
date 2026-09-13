import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { access, readFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { exportProject, loadProject } from "gdcore-tools";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const gameFile = path.join(projectDirectory, "game.json");
const exportDirectory = path.join(projectDirectory, "preview-web");

const project = await loadProject(gameFile);
const report = project.getWholeProjectDiagnosticReport();
if (report.hasAnyIssue()) {
  const issues = [];
  for (let reportIndex = 0; reportIndex < report.count(); reportIndex += 1) {
    const sceneReport = report.get(reportIndex);
    for (let issueIndex = 0; issueIndex < sceneReport.count(); issueIndex += 1) {
      const issue = sceneReport.get(issueIndex);
      issues.push(
        `${sceneReport.getSceneName()}: ${issue.getMessage()} | actual=${issue.getActualValue()} expected=${issue.getExpectedValue()}`
      );
    }
  }
  throw new Error(`GDCore diagnostics:\n${issues.join("\n")}`);
}

assert.equal(project.getFirstLayout(), "Game");
assert.equal(project.getLayout("Game").getObjects().getObjectGroups().has("Enemies"), true);

const data = JSON.parse(await readFile(gameFile, "utf8"));
const scene = data.layouts.find((layout) => layout.name === "Game");
assert.ok(scene, "Scene Game tidak ditemukan.");
assert.equal(
  scene.events.some((event) => event.type === "BuiltinCommonInstructions::JsCode"),
  false,
  "Proyek tidak boleh memakai JavaScript event."
);
assert.ok(scene.events.length >= 30, "Event visual belum lengkap.");
assert.deepEqual(
  scene.objectsGroups
    .find((group) => group.name === "Enemies")
    .objects.map((object) => object.name),
  ["EnemyBasic", "EnemyFast", "EnemyTank"]
);
assert.ok(
  scene.objects.some((object) => object.name === "DefenseZone"),
  "Objek DefenseZone tidak ditemukan."
);
for (const healthBarObject of ["EnemyHPBack", "EnemyHPFill"]) {
  assert.ok(
    scene.objects.some((object) => object.name === healthBarObject),
    `Objek ${healthBarObject} tidak ditemukan.`
  );
}
for (const [enemyName, expectedHP] of [
  ["EnemyBasic", 50],
  ["EnemyFast", 30],
  ["EnemyTank", 160],
]) {
  const enemy = scene.objects.find((object) => object.name === enemyName);
  assert.ok(enemy, `Objek ${enemyName} tidak ditemukan.`);
  assert.equal(
    enemy.variables.find((variable) => variable.name === "HP")?.value,
    expectedHP,
    `HP awal ${enemyName} tidak sesuai.`
  );
  assert.equal(
    enemy.variables.find((variable) => variable.name === "MaxHP")?.value,
    expectedHP,
    `MaxHP ${enemyName} tidak sesuai.`
  );
}
assert.deepEqual(
  scene.instances
    .filter((instance) => instance.name === "SpawnPoint")
    .map((instance) => [instance.x, instance.y]),
  [
    [1178, 145],
    [1178, 280],
    [1178, 415],
    [1178, 550],
  ],
  "Posisi portal tidak sesuai empat jalur horizontal."
);
const houseAsset = await readFile(
  path.join(projectDirectory, "assets", "house.svg"),
  "utf8"
);
assert.match(
  houseAsset,
  /width="270" height="520"/,
  "Ukuran rumah harus 270 x 520 px."
);

await rm(exportDirectory, { recursive: true, force: true });
await exportProject(project, exportDirectory);
const indexFile = path.join(exportDirectory, "index.html");
const compiledCodeFile = path.join(exportDirectory, "code0.js");
await access(indexFile);

const compiledCode = await readFile(compiledCodeFile, "utf8");
assert.match(
  compiledCode,
  /resetTimer\(runtimeScene, "SpawnTimer"\)/,
  "SpawnTimer tidak dikompilasi dengan nama yang benar."
);
assert.match(
  compiledCode,
  /getTimerElapsedTimeInSecondsOrNaN\(runtimeScene, "ShootTimer"\) >= 0\.22/,
  "Cooldown tembakan tidak dikompilasi dengan benar."
);
assert.match(
  compiledCode,
  /getTimerElapsedTimeInSecondsOrNaN\(runtimeScene, "SpawnTimer"\) >= gdjs\.evtTools\.variable/,
  "SpawnDelay tidak terbaca sebagai scene variable."
);
for (const boundary of [
  /setX\(Math\.max\(300,/,
  /setX\(Math\.min\(580,/,
  /setY\(Math\.max\(130,/,
  /setY\(Math\.min\(555,/,
]) {
  assert.match(
    compiledCode,
    boundary,
    "Batas area gerak pemain tidak dikompilasi dengan benar."
  );
}
assert.match(
  compiledCode,
  /GDEnemyBasicObjects2\[i\]\.getX\(\) > 286/,
  "Musuh tidak memiliki kondisi bergerak menuju garis rumah."
);
assert.match(
  compiledCode,
  /GDEnemyBasicObjects2\[i\]\.setX\(\(gdjs\.GameCode\.GDEnemyBasicObjects2\[i\]\.getPointX\(""\)\) -/,
  "Musuh Basic tidak dikompilasi bergerak lurus ke kiri."
);
assert.match(
  compiledCode,
  /GDEnemyBasicObjects2\[i\]\.setX\(286\)/,
  "Musuh tidak berhenti tepat di garis serang rumah."
);
assert.doesNotMatch(
  compiledCode,
  /GDEnemy(?:Basic|Fast|Tank)Objects\d+\[i\]\.setY/,
  "AI musuh tidak boleh mengubah posisi Y."
);
assert.doesNotMatch(
  compiledCode,
  /distanceTest\(/,
  "AI jalur lurus tidak boleh lagi bergantung pada jarak ke pusat rumah."
);
assert.match(
  compiledCode,
  /replaceScene\(runtimeScene, "Game", true\)/,
  "Aksi restart tidak menuju scene Game."
);
assert.match(
  compiledCode,
  /gdjs\.evtTools\.linkedObjects\.linkObjects\(runtimeScene,/,
  "Health bar tidak ditautkan ke instance musuh."
);
assert.match(
  compiledCode,
  /gdjs\.evtTools\.linkedObjects\.pickObjectsLinkedTo\(runtimeScene,/,
  "Health bar tertaut tidak dipilih saat diperbarui."
);
assert.match(
  compiledCode,
  /setWidth\(Math\.max\(0, 82 \* .*get\("HP"\).*get\("MaxHP"\)/,
  "Lebar health bar musuh tidak mengikuti rasio HP / MaxHP."
);
assert.match(
  compiledCode,
  /GDEnemyHPFillObjects\d+\[i\]\.deleteFromScene\(runtimeScene\)/,
  "Health bar tidak ikut dihapus ketika musuh mati."
);
assert.doesNotMatch(
  compiledCode,
  /resetTimer\(runtimeScene, ""\)/,
  "Ditemukan timer tanpa nama pada hasil kompilasi."
);
execFileSync(process.execPath, ["--check", compiledCodeFile], {
  stdio: "ignore",
});

console.log(
  `Validation passed: ${scene.events.length} top-level visual events, 3 enemy types, no JavaScript event, runtime invariants verified, and HTML5 export succeeded.`
);
