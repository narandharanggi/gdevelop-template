import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { gd } from "gdcore-tools";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const gameFile = path.join(projectDirectory, "game.json");

await mkdir(path.join(projectDirectory, "assets"), { recursive: true });

const project = gd.ProjectHelper.createNewGDJSProject();
project.setName("Garden Guard: Penjaga Rumah");
project.setDescription(
  "Game survival top-down: bergerak di halaman, menembak tiga tipe monster, dan mempertahankan rumah. Seluruh gameplay dibuat dengan visual events GDevelop."
);
project.setVersion("1.2.0");
project.setAuthor("Prototipe pembelajaran GDevelop");
project.setPackageName("id.ac.gardenguard.game");
project.setProjectUuid("6a8eea27-9785-4f47-93b6-3806728891cf");
project.setOrientation("landscape");
project.setGameResolutionSize(1280, 720);
project.setAdaptGameResolutionAtRuntime(true);
project.setScaleMode("linear");
project.setSizeOnStartupMode("adaptWidth");
project.setPixelsRounding(false);
project.setMaximumFPS(60);
project.setMinimumFPS(20);
project.setPlayableWithKeyboard(true);
project.setPlayableWithMobile(false);
project.setPlayableWithGamepad(false);
project.setProjectFile(gameFile);
project.getLoadingScreen().showGDevelopLogoDuringLoadingScreen(false);
project.getLoadingScreen().setMinDuration(0.1);
project.getLoadingScreen().setBackgroundColor(0x102a43);
project.getWatermark().showGDevelopWatermark(false);

const resourceFiles = [
  "background.svg",
  "defense_zone.svg",
  "house.svg",
  "player.svg",
  "bullet.svg",
  "enemy_basic.svg",
  "enemy_fast.svg",
  "enemy_tank.svg",
  "enemy_hp_back.svg",
  "enemy_hp_fill.svg",
  "spawn_point.svg",
  "hud_panel.svg",
  "health_bar_back.svg",
  "health_bar_fill.svg",
  "overlay.svg",
  "button.svg",
];

for (const filename of resourceFiles) {
  const resourceName = `assets/${filename}`;
  // Fail early if an asset referenced by the project is missing.
  await readFile(path.join(projectDirectory, resourceName));
  const resource = new gd.ImageResource();
  resource.setName(resourceName);
  resource.setFile(resourceName);
  resource.setUserAdded(true);
  resource.setSmooth(true);
  project.getResourcesManager().addResource(resource);
}

const layout = project.insertNewLayout("Game", 0);
layout.setBackgroundColor(16, 42, 67);
layout.setWindowDefaultTitle("Garden Guard: Penjaga Rumah");
layout.setStopSoundsOnStartup(true);
project.setFirstLayout("Game");

const addNumberVariable = (container, name, value) => {
  container.insertNew(name, container.count()).setValue(value);
};

const addStringVariable = (container, name, value) => {
  container.insertNew(name, container.count()).setString(value);
};

const addSpriteObject = (name, resourceName, variables = {}) => {
  const object = layout
    .getObjects()
    .insertNewObject(project, "Sprite", name, layout.getObjects().getObjectsCount());
  const configuration = gd.asSpriteConfiguration(object.getConfiguration());
  configuration.setUpdateIfNotVisible(true);
  const animation = new gd.Animation();
  animation.setName("Default");
  animation.setDirectionsCount(1);
  animation.setUseMultipleDirections(false);
  const direction = animation.getDirection(0);
  direction.setLoop(false);
  direction.setTimeBetweenFrames(0.08);
  const sprite = new gd.Sprite();
  sprite.setImageName(resourceName);
  sprite.setFullImageCollisionMask(true);
  direction.addSprite(sprite);
  configuration.getAnimations().addAnimation(animation);
  for (const [variableName, value] of Object.entries(variables)) {
    if (typeof value === "number") {
      addNumberVariable(object.getVariables(), variableName, value);
    } else {
      addStringVariable(object.getVariables(), variableName, value);
    }
  }
  return object;
};

const addTextObject = (
  name,
  text,
  size,
  color,
  { bold = false, alignment = "left", outline = true } = {}
) => {
  const object = layout
    .getObjects()
    .insertNewObject(
      project,
      "TextObject::Text",
      name,
      layout.getObjects().getObjectsCount()
    );
  const configuration = gd.asTextObjectConfiguration(object.getConfiguration());
  configuration.setText(text);
  configuration.setCharacterSize(size);
  configuration.setColor(color);
  configuration.setBold(bold);
  configuration.setTextAlignment(alignment);
  configuration.setVerticalTextAlignment("top");
  configuration.setOutlineEnabled(outline);
  configuration.setOutlineThickness(outline ? Math.max(2, Math.round(size / 12)) : 0);
  configuration.setOutlineColor(outline ? "13;31;51" : color);
  configuration.setShadowEnabled(false);
  return object;
};

const addInstance = (
  objectName,
  x,
  y,
  zOrder,
  { opacity = 255, width = null, height = null } = {}
) => {
  const instance = layout.getInitialInstances().insertNewInitialInstance();
  instance.setObjectName(objectName);
  instance.setX(x);
  instance.setY(y);
  instance.setZOrder(zOrder);
  instance.setOpacity(opacity);
  instance.setLayer("");
  if (width !== null && height !== null) {
    instance.setHasCustomSize(true);
    instance.setCustomWidth(width);
    instance.setCustomHeight(height);
  }
  return instance;
};

addSpriteObject("Background", "assets/background.svg");
addSpriteObject("DefenseZone", "assets/defense_zone.svg");
addSpriteObject("House", "assets/house.svg");
addSpriteObject("Player", "assets/player.svg");
addSpriteObject("Bullet", "assets/bullet.svg", { Damage: 25 });
addSpriteObject("EnemyBasic", "assets/enemy_basic.svg", {
  HP: 50,
  MaxHP: 50,
  Speed: 70,
  Damage: 8,
  AttackInterval: 1.0,
  AttackClock: 0,
  ScoreValue: 10,
});
addSpriteObject("EnemyFast", "assets/enemy_fast.svg", {
  HP: 30,
  MaxHP: 30,
  Speed: 125,
  Damage: 5,
  AttackInterval: 0.65,
  AttackClock: 0,
  ScoreValue: 15,
});
addSpriteObject("EnemyTank", "assets/enemy_tank.svg", {
  HP: 160,
  MaxHP: 160,
  Speed: 42,
  Damage: 18,
  AttackInterval: 1.3,
  AttackClock: 0,
  ScoreValue: 30,
});
addSpriteObject("EnemyHPBack", "assets/enemy_hp_back.svg");
addSpriteObject("EnemyHPFill", "assets/enemy_hp_fill.svg");
addSpriteObject("SpawnPoint", "assets/spawn_point.svg");
addSpriteObject("HudPanel", "assets/hud_panel.svg");
addSpriteObject("HouseHPBack", "assets/health_bar_back.svg");
addSpriteObject("HouseHPFill", "assets/health_bar_fill.svg");
addSpriteObject("GameOverOverlay", "assets/overlay.svg");
addSpriteObject("RestartButton", "assets/button.svg");

addTextObject("TitleText", "GARDEN GUARD", 32, "255;246;196", { bold: true });
addTextObject("ScoreText", "SKOR  0", 24, "255;255;255", { bold: true });
addTextObject("WaveText", "GELOMBANG  1", 22, "223;250;255", { bold: true });
addTextObject("TimeText", "BERTAHAN  0 dtk", 20, "223;250;255", { bold: true });
addTextObject("HouseHPText", "RUMAH  100 / 100", 18, "255;255;255", { bold: true });
addTextObject(
  "HelpText",
  "GERAK: W/A/S/D atau panah     •     BIDIK: mouse     •     TEMBAK: tahan klik kiri",
  17,
  "239;255;230",
  { bold: true, alignment: "center" }
);
addTextObject("GameOverTitle", "RUMAH JATUH!", 48, "255;244;214", {
  bold: true,
  alignment: "center",
});
addTextObject("FinalScoreText", "Skor akhir: 0", 28, "255;255;255", {
  bold: true,
  alignment: "center",
});
addTextObject("RestartText", "MAIN LAGI", 25, "255;255;255", {
  bold: true,
  alignment: "center",
});
addTextObject("RestartHintText", "Klik tombol atau tekan R", 18, "219;237;255", {
  alignment: "center",
});

addInstance("Background", 0, 0, 0);
addInstance("DefenseZone", 286, 122, 1);
addInstance("House", 16, 120, 4);
addInstance("Player", 385, 335, 12);

for (const y of [145, 280, 415, 550]) {
  addInstance("SpawnPoint", 1178, y, 2);
}

addInstance("HudPanel", 18, 16, 20);
addInstance("TitleText", 41, 27, 21, { width: 280, height: 42 });
addInstance("ScoreText", 370, 30, 21, { width: 205, height: 34 });
addInstance("WaveText", 610, 31, 21, { width: 230, height: 32 });
addInstance("TimeText", 882, 34, 21, { width: 260, height: 30 });
addInstance("HouseHPBack", 370, 73, 21);
addInstance("HouseHPFill", 370, 73, 22);
addInstance("HouseHPText", 462, 70, 23, { width: 250, height: 28 });
addInstance("HelpText", 170, 682, 21, { width: 940, height: 26 });

addInstance("GameOverOverlay", 0, 0, 40);
addInstance("GameOverTitle", 420, 225, 41, { width: 440, height: 65 });
addInstance("FinalScoreText", 440, 305, 41, { width: 400, height: 45 });
addInstance("RestartButton", 460, 385, 41);
addInstance("RestartText", 535, 411, 42, { width: 210, height: 36 });
addInstance("RestartHintText", 490, 492, 41, { width: 300, height: 30 });

const enemiesGroup = layout
  .getObjects()
  .getObjectGroups()
  .insertNew("Enemies", layout.getObjects().getObjectGroups().count());
enemiesGroup.addObject("EnemyBasic");
enemiesGroup.addObject("EnemyFast");
enemiesGroup.addObject("EnemyTank");

const sceneVariables = layout.getVariables();
addNumberVariable(sceneVariables, "Score", 0);
addNumberVariable(sceneVariables, "HouseHP", 100);
addNumberVariable(sceneVariables, "GameTime", 0);
addNumberVariable(sceneVariables, "Wave", 1);
addNumberVariable(sceneVariables, "SpawnRoll", 0);
addNumberVariable(sceneVariables, "SpawnDelay", 1.5);
addNumberVariable(sceneVariables, "EnemyKills", 0);
addStringVariable(sceneVariables, "GameState", "playing");

const appendInstruction = (list, type, parameters, inverted = false) => {
  const instruction = new gd.Instruction();
  instruction.setType(type);
  instruction.setParametersCount(parameters.length);
  parameters.forEach((parameter, index) =>
    instruction.setParameter(index, String(parameter))
  );
  instruction.setInverted(inverted);
  list.insert(instruction, list.size());
};

const addStandardEvent = (eventsList, conditions = [], actions = []) => {
  const baseEvent = eventsList.insertNewEvent(
    project,
    "BuiltinCommonInstructions::Standard",
    eventsList.getEventsCount()
  );
  const event = gd.asStandardEvent(baseEvent);
  conditions.forEach(([type, parameters, inverted = false]) =>
    appendInstruction(event.getConditions(), type, parameters, inverted)
  );
  actions.forEach(([type, parameters]) =>
    appendInstruction(event.getActions(), type, parameters)
  );
  return event;
};

const addForEachEvent = (eventsList, objectName, conditions = [], actions = []) => {
  const baseEvent = eventsList.insertNewEvent(
    project,
    "BuiltinCommonInstructions::ForEach",
    eventsList.getEventsCount()
  );
  const event = gd.asForEachEvent(baseEvent);
  event.setObjectToPick(objectName);
  conditions.forEach(([type, parameters, inverted = false]) =>
    appendInstruction(event.getConditions(), type, parameters, inverted)
  );
  actions.forEach(([type, parameters]) =>
    appendInstruction(event.getActions(), type, parameters)
  );
  return event;
};

const addComment = (text, color = [35, 103, 126]) => {
  const baseEvent = layout.getEvents().insertNewEvent(
    project,
    "BuiltinCommonInstructions::Comment",
    layout.getEvents().getEventsCount()
  );
  const comment = gd.asCommentEvent(baseEvent);
  comment.setComment(text);
  comment.setBackgroundColor(...color);
  comment.setTextColor(255, 255, 255);
};

const gameIsPlaying = () => [
  "StringVariable",
  ["GameState", "=", JSON.stringify("playing")],
];
const gameIsOver = () => [
  "StringVariable",
  ["GameState", "=", JSON.stringify("over")],
];
const setText = (objectName, expression) => [
  "TextObject::String",
  [objectName, "=", expression],
];

addComment(
  "01_INIT — atur variabel, mulai timer spawn/tembak, dan sembunyikan panel game over.",
  [35, 112, 81]
);
addStandardEvent(layout.getEvents(), [["SceneJustBegins", [""]]], [
  ["SetNumberVariable", ["Score", "=", "0"]],
  ["SetNumberVariable", ["HouseHP", "=", "100"]],
  ["SetNumberVariable", ["GameTime", "=", "0"]],
  ["SetNumberVariable", ["Wave", "=", "1"]],
  ["SetNumberVariable", ["EnemyKills", "=", "0"]],
  ["SetNumberVariable", ["SpawnDelay", "=", "1.5"]],
  ["SetStringVariable", ["GameState", "=", JSON.stringify("playing")]],
  ["ResetTimer", ["", JSON.stringify("SpawnTimer")]],
  ["ResetTimer", ["", JSON.stringify("ShootTimer")]],
  ["Hide", ["GameOverOverlay"]],
  ["Hide", ["GameOverTitle"]],
  ["Hide", ["FinalScoreText"]],
  ["Hide", ["RestartButton"]],
  ["Hide", ["RestartText"]],
  ["Hide", ["RestartHintText"]],
]);

addComment(
  "02_INPUT_TOPDOWN — pemain bergerak dengan W/A/S/D atau panah, tetapi dibatasi pada zona dekat rumah (X 300–580, Y 130–555).",
  [31, 91, 143]
);
const movementEvents = [
  ["Left", "SetX", "max(300, Player.X() - 260 * TimeDelta())"],
  ["a", "SetX", "max(300, Player.X() - 260 * TimeDelta())"],
  ["Right", "SetX", "min(580, Player.X() + 260 * TimeDelta())"],
  ["d", "SetX", "min(580, Player.X() + 260 * TimeDelta())"],
  ["Up", "SetY", "max(130, Player.Y() - 260 * TimeDelta())"],
  ["w", "SetY", "max(130, Player.Y() - 260 * TimeDelta())"],
  ["Down", "SetY", "min(555, Player.Y() + 260 * TimeDelta())"],
  ["s", "SetY", "min(555, Player.Y() + 260 * TimeDelta())"],
];
for (const [key, actionType, expression] of movementEvents) {
  addStandardEvent(
    layout.getEvents(),
    [gameIsPlaying(), ["KeyPressed", ["", key]]],
    [[actionType, ["Player", "=", expression]]]
  );
}

addComment(
  "03_AIM_AND_SHOOT — pemain selalu menghadap kursor; klik kiri membuat Bullet dengan force permanen.",
  [117, 76, 33]
);
addStandardEvent(layout.getEvents(), [gameIsPlaying()], [
  [
    "SetAngle",
    [
      "Player",
      "=",
      "AngleBetweenPositions(Player.CenterX(), Player.CenterY(), CursorX(\"\", 0), CursorY(\"\", 0))",
    ],
  ],
  ["SetZOrder", ["Player", "=", "Player.Y() + 100"]],
]);

addStandardEvent(
  layout.getEvents(),
  [
    gameIsPlaying(),
    ["MouseButtonPressed", ["", "Left"]],
    ["CompareTimer", ["", JSON.stringify("ShootTimer"), ">=", "0.22"]],
  ],
  [
    [
      "Create",
      [
        "",
        "Bullet",
        "Player.CenterX() - 12",
        "Player.CenterY() - 5",
        "",
      ],
    ],
    [
      "SetAngle",
      [
        "Bullet",
        "=",
        "AngleBetweenPositions(Bullet.CenterX(), Bullet.CenterY(), CursorX(\"\", 0), CursorY(\"\", 0))",
      ],
    ],
    [
      "AddForceTowardPosition",
      [
        "Bullet",
        "CursorX(\"\", 0)",
        "CursorY(\"\", 0)",
        "900",
        "1",
      ],
    ],
    ["SetZOrder", ["Bullet", "=", "14"]],
    ["ResetTimer", ["", JSON.stringify("ShootTimer")]],
  ]
);

addComment(
  "04_RANDOM_SPAWN — pilih satu SpawnPoint acak lalu gunakan SpawnRoll untuk menentukan tipe musuh.",
  [102, 61, 139]
);
const spawnEvent = addStandardEvent(
  layout.getEvents(),
  [
    gameIsPlaying(),
    [
      "CompareTimer",
      ["", JSON.stringify("SpawnTimer"), ">=", "Variable(SpawnDelay)"],
    ],
    ["NbObjet", ["Enemies", "<", "35"]],
    ["PickRandomInstance", ["", "SpawnPoint"]],
  ],
  [
    ["SetNumberVariable", ["SpawnRoll", "=", "RandomInRange(1, 100)"]],
    [
      "SetNumberVariable",
      [
        "SpawnDelay",
        "=",
        "max(0.75, RandomInRange(13, 24) / 10 - Variable(Wave) * 0.08)",
      ],
    ],
    ["ResetTimer", ["", JSON.stringify("SpawnTimer")]],
  ]
);

const enemySpawnActions = (enemyName) => [
  ["Create", ["", enemyName, "SpawnPoint.X()", "SpawnPoint.Y()", ""]],
  [
    "Create",
    [
      "",
      "EnemyHPBack",
      `${enemyName}.CenterX() - 44`,
      `${enemyName}.Y() - 20`,
      "",
    ],
  ],
  [
    "Create",
    [
      "",
      "EnemyHPFill",
      `${enemyName}.CenterX() - 41`,
      `${enemyName}.Y() - 17`,
      "",
    ],
  ],
  ["LinkedObjects::LinkObjects", ["", enemyName, "EnemyHPBack"]],
  ["LinkedObjects::LinkObjects", ["", enemyName, "EnemyHPFill"]],
  ["SetZOrder", ["EnemyHPBack", "=", `${enemyName}.ZOrder() + 1`]],
  ["SetZOrder", ["EnemyHPFill", "=", `${enemyName}.ZOrder() + 2`]],
];

addStandardEvent(
  spawnEvent.getSubEvents(),
  [["NumberVariable", ["SpawnRoll", "<=", "55"]]],
  enemySpawnActions("EnemyBasic")
);
addStandardEvent(
  spawnEvent.getSubEvents(),
  [
    ["NumberVariable", ["SpawnRoll", ">", "55"]],
    ["NumberVariable", ["SpawnRoll", "<=", "82"]],
  ],
  enemySpawnActions("EnemyFast")
);
addStandardEvent(
  spawnEvent.getSubEvents(),
  [["NumberVariable", ["SpawnRoll", ">", "82"]]],
  enemySpawnActions("EnemyTank")
);

addComment(
  "05_ENEMY_AI — semua musuh keluar dari portal dan berjalan lurus horizontal ke kiri. Pada X 286 mereka berhenti dan menyerang rumah.",
  [132, 51, 51]
);
addForEachEvent(
  layout.getEvents(),
  "Enemies",
  [gameIsPlaying(), ["PosX", ["Enemies", ">", "286"]]],
  [
    [
      "SetX",
      [
        "Enemies",
        "=",
        "Enemies.X() - Enemies.Variable(Speed) * TimeDelta()",
      ],
    ],
    ["SetNumberObjectVariable", ["Enemies", "AttackClock", "=", "0"]],
    ["SetZOrder", ["Enemies", "=", "Enemies.Y() + 100"]],
  ]
);

const attackEvent = addForEachEvent(
  layout.getEvents(),
  "Enemies",
  [gameIsPlaying(), ["PosX", ["Enemies", "<=", "286"]]],
  [
    ["SetX", ["Enemies", "=", "286"]],
    ["SetNumberObjectVariable", ["Enemies", "AttackClock", "+", "TimeDelta()"]],
  ]
);
addStandardEvent(
  attackEvent.getSubEvents(),
  [
    [
      "NumberObjectVariable",
      ["Enemies", "AttackClock", ">=", "Enemies.Variable(AttackInterval)"],
    ],
  ],
  [
    ["SetNumberVariable", ["HouseHP", "-", "Enemies.Variable(Damage)"]],
    ["SetNumberObjectVariable", ["Enemies", "AttackClock", "=", "0"]],
  ]
);

addComment(
  "06_COMBAT — collision Bullet/Enemies mengurangi HP. For Each memastikan skor tiap musuh mati dihitung satu per satu.",
  [139, 90, 28]
);
addStandardEvent(
  layout.getEvents(),
  [gameIsPlaying(), ["CollisionNP", ["Bullet", "Enemies", "", "", ""]]],
  [
    [
      "SetNumberObjectVariable",
      ["Enemies", "HP", "-", "Bullet.Variable(Damage)"],
    ],
    ["Delete", ["Bullet", ""]],
  ]
);

addComment(
  "06A_ENEMY_HEALTH_BAR — ambil bar yang tertaut ke setiap musuh, ikuti posisinya, lalu ubah lebar fill sesuai HP / MaxHP.",
  [48, 112, 70]
);
addForEachEvent(
  layout.getEvents(),
  "Enemies",
  [],
  [
    [
      "LinkedObjects::PickObjectsLinkedTo",
      ["", "EnemyHPBack", "Enemies", ""],
    ],
    [
      "LinkedObjects::PickObjectsLinkedTo",
      ["", "EnemyHPFill", "Enemies", ""],
    ],
    ["SetX", ["EnemyHPBack", "=", "Enemies.CenterX() - 44"]],
    ["SetY", ["EnemyHPBack", "=", "Enemies.Y() - 20"]],
    ["SetX", ["EnemyHPFill", "=", "Enemies.CenterX() - 41"]],
    ["SetY", ["EnemyHPFill", "=", "Enemies.Y() - 17"]],
    [
      "ChangeWidth",
      [
        "EnemyHPFill",
        "=",
        "max(0, 82 * Enemies.Variable(HP) / Enemies.Variable(MaxHP))",
      ],
    ],
    ["SetZOrder", ["EnemyHPBack", "=", "Enemies.ZOrder() + 1"]],
    ["SetZOrder", ["EnemyHPFill", "=", "Enemies.ZOrder() + 2"]],
  ]
);

addForEachEvent(
  layout.getEvents(),
  "Enemies",
  [["NumberObjectVariable", ["Enemies", "HP", "<=", "0"]]],
  [
    [
      "LinkedObjects::PickObjectsLinkedTo",
      ["", "EnemyHPBack", "Enemies", ""],
    ],
    [
      "LinkedObjects::PickObjectsLinkedTo",
      ["", "EnemyHPFill", "Enemies", ""],
    ],
    ["Delete", ["EnemyHPBack", ""]],
    ["Delete", ["EnemyHPFill", ""]],
    ["SetNumberVariable", ["Score", "+", "Enemies.Variable(ScoreValue)"]],
    ["SetNumberVariable", ["EnemyKills", "+", "1"]],
    ["Delete", ["Enemies", ""]],
  ]
);

for (const [axisCondition, operator, value] of [
  ["PosX", ">", "1320"],
  ["PosX", "<", "-60"],
  ["PosY", ">", "760"],
  ["PosY", "<", "-60"],
]) {
  addStandardEvent(
    layout.getEvents(),
    [[axisCondition, ["Bullet", operator, value]]],
    [["Delete", ["Bullet", ""]]]
  );
}

addComment(
  "07_TIME_AND_UI — tingkat kesulitan naik tiap 30 detik; HUD membaca langsung Scene Variables.",
  [39, 104, 121]
);
addStandardEvent(layout.getEvents(), [gameIsPlaying()], [
  ["SetNumberVariable", ["GameTime", "+", "TimeDelta()"]],
  [
    "SetNumberVariable",
    ["Wave", "=", "floor(Variable(GameTime) / 30) + 1"],
  ],
]);

addStandardEvent(layout.getEvents(), [], [
  setText("ScoreText", '"SKOR  " + ToString(Variable(Score))'),
  setText("WaveText", '"GELOMBANG  " + ToString(Variable(Wave))'),
  setText(
    "TimeText",
    '"BERTAHAN  " + ToString(floor(Variable(GameTime))) + " dtk"'
  ),
  setText(
    "HouseHPText",
    '"RUMAH  " + ToString(max(0, Variable(HouseHP))) + " / 100"'
  ),
  [
    "ChangeWidth",
    ["HouseHPFill", "=", "max(0, 300 * Variable(HouseHP) / 100)"],
  ],
]);

addComment(
  "08_GAME_OVER_AND_RESTART — saat HouseHP habis, gameplay dibekukan dan scene dapat dimulai ulang.",
  [78, 60, 135]
);
addStandardEvent(
  layout.getEvents(),
  [
    gameIsPlaying(),
    ["NumberVariable", ["HouseHP", "<=", "0"]],
    ["BuiltinCommonInstructions::Once", []],
  ],
  [
    ["SetNumberVariable", ["HouseHP", "=", "0"]],
    ["SetStringVariable", ["GameState", "=", JSON.stringify("over")]],
    ["Delete", ["Bullet", ""]],
    ["Show", ["GameOverOverlay", ""]],
    ["Show", ["GameOverTitle", ""]],
    ["Show", ["FinalScoreText", ""]],
    ["Show", ["RestartButton", ""]],
    ["Show", ["RestartText", ""]],
    ["Show", ["RestartHintText", ""]],
    setText(
      "FinalScoreText",
      '"Skor akhir: " + ToString(Variable(Score)) + "   •   Musuh: " + ToString(Variable(EnemyKills))'
    ),
  ]
);

addStandardEvent(
  layout.getEvents(),
  [
    gameIsOver(),
    ["KeyPressed", ["", "r"]],
    ["BuiltinCommonInstructions::Once", []],
  ],
  [["Scene", ["", JSON.stringify("Game"), "yes"]]]
);

addStandardEvent(
  layout.getEvents(),
  [
    gameIsOver(),
    ["MouseButtonReleased", ["", "Left"]],
    ["IsCursorOnObject", ["RestartButton", "", "yes", ""]],
  ],
  [["Scene", ["", JSON.stringify("Game"), "yes"]]]
);

const serializedElement = new gd.SerializerElement();
project.serializeTo(serializedElement);
const projectData = JSON.parse(gd.Serializer.toJSON(serializedElement));
serializedElement.delete();

await writeFile(gameFile, `${JSON.stringify(projectData, null, 2)}\n`, "utf8");
console.log(`Generated ${path.relative(process.cwd(), gameFile)}`);
