gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.forEachCount0_2 = 0;

gdjs.GameCode.forEachCount1_2 = 0;

gdjs.GameCode.forEachCount2_2 = 0;

gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDDefenseZoneObjects1= [];
gdjs.GameCode.GDDefenseZoneObjects2= [];
gdjs.GameCode.GDDefenseZoneObjects3= [];
gdjs.GameCode.GDDefenseZoneObjects4= [];
gdjs.GameCode.GDHouseObjects1= [];
gdjs.GameCode.GDHouseObjects2= [];
gdjs.GameCode.GDHouseObjects3= [];
gdjs.GameCode.GDHouseObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDBulletObjects1= [];
gdjs.GameCode.GDBulletObjects2= [];
gdjs.GameCode.GDBulletObjects3= [];
gdjs.GameCode.GDBulletObjects4= [];
gdjs.GameCode.GDEnemyBasicObjects1= [];
gdjs.GameCode.GDEnemyBasicObjects2= [];
gdjs.GameCode.GDEnemyBasicObjects3= [];
gdjs.GameCode.GDEnemyBasicObjects4= [];
gdjs.GameCode.GDEnemyFastObjects1= [];
gdjs.GameCode.GDEnemyFastObjects2= [];
gdjs.GameCode.GDEnemyFastObjects3= [];
gdjs.GameCode.GDEnemyFastObjects4= [];
gdjs.GameCode.GDEnemyTankObjects1= [];
gdjs.GameCode.GDEnemyTankObjects2= [];
gdjs.GameCode.GDEnemyTankObjects3= [];
gdjs.GameCode.GDEnemyTankObjects4= [];
gdjs.GameCode.GDEnemyHPBackObjects1= [];
gdjs.GameCode.GDEnemyHPBackObjects2= [];
gdjs.GameCode.GDEnemyHPBackObjects3= [];
gdjs.GameCode.GDEnemyHPBackObjects4= [];
gdjs.GameCode.GDEnemyHPFillObjects1= [];
gdjs.GameCode.GDEnemyHPFillObjects2= [];
gdjs.GameCode.GDEnemyHPFillObjects3= [];
gdjs.GameCode.GDEnemyHPFillObjects4= [];
gdjs.GameCode.GDSpawnPointObjects1= [];
gdjs.GameCode.GDSpawnPointObjects2= [];
gdjs.GameCode.GDSpawnPointObjects3= [];
gdjs.GameCode.GDSpawnPointObjects4= [];
gdjs.GameCode.GDHudPanelObjects1= [];
gdjs.GameCode.GDHudPanelObjects2= [];
gdjs.GameCode.GDHudPanelObjects3= [];
gdjs.GameCode.GDHudPanelObjects4= [];
gdjs.GameCode.GDHouseHPBackObjects1= [];
gdjs.GameCode.GDHouseHPBackObjects2= [];
gdjs.GameCode.GDHouseHPBackObjects3= [];
gdjs.GameCode.GDHouseHPBackObjects4= [];
gdjs.GameCode.GDHouseHPFillObjects1= [];
gdjs.GameCode.GDHouseHPFillObjects2= [];
gdjs.GameCode.GDHouseHPFillObjects3= [];
gdjs.GameCode.GDHouseHPFillObjects4= [];
gdjs.GameCode.GDGameOverOverlayObjects1= [];
gdjs.GameCode.GDGameOverOverlayObjects2= [];
gdjs.GameCode.GDGameOverOverlayObjects3= [];
gdjs.GameCode.GDGameOverOverlayObjects4= [];
gdjs.GameCode.GDRestartButtonObjects1= [];
gdjs.GameCode.GDRestartButtonObjects2= [];
gdjs.GameCode.GDRestartButtonObjects3= [];
gdjs.GameCode.GDRestartButtonObjects4= [];
gdjs.GameCode.GDTitleTextObjects1= [];
gdjs.GameCode.GDTitleTextObjects2= [];
gdjs.GameCode.GDTitleTextObjects3= [];
gdjs.GameCode.GDTitleTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDWaveTextObjects1= [];
gdjs.GameCode.GDWaveTextObjects2= [];
gdjs.GameCode.GDWaveTextObjects3= [];
gdjs.GameCode.GDWaveTextObjects4= [];
gdjs.GameCode.GDTimeTextObjects1= [];
gdjs.GameCode.GDTimeTextObjects2= [];
gdjs.GameCode.GDTimeTextObjects3= [];
gdjs.GameCode.GDTimeTextObjects4= [];
gdjs.GameCode.GDHouseHPTextObjects1= [];
gdjs.GameCode.GDHouseHPTextObjects2= [];
gdjs.GameCode.GDHouseHPTextObjects3= [];
gdjs.GameCode.GDHouseHPTextObjects4= [];
gdjs.GameCode.GDHelpTextObjects1= [];
gdjs.GameCode.GDHelpTextObjects2= [];
gdjs.GameCode.GDHelpTextObjects3= [];
gdjs.GameCode.GDHelpTextObjects4= [];
gdjs.GameCode.GDGameOverTitleObjects1= [];
gdjs.GameCode.GDGameOverTitleObjects2= [];
gdjs.GameCode.GDGameOverTitleObjects3= [];
gdjs.GameCode.GDGameOverTitleObjects4= [];
gdjs.GameCode.GDFinalScoreTextObjects1= [];
gdjs.GameCode.GDFinalScoreTextObjects2= [];
gdjs.GameCode.GDFinalScoreTextObjects3= [];
gdjs.GameCode.GDFinalScoreTextObjects4= [];
gdjs.GameCode.GDRestartTextObjects1= [];
gdjs.GameCode.GDRestartTextObjects2= [];
gdjs.GameCode.GDRestartTextObjects3= [];
gdjs.GameCode.GDRestartTextObjects4= [];
gdjs.GameCode.GDRestartHintTextObjects1= [];
gdjs.GameCode.GDRestartHintTextObjects2= [];
gdjs.GameCode.GDRestartHintTextObjects3= [];
gdjs.GameCode.GDRestartHintTextObjects4= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyFastObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects = Hashtable.newFrom({"EnemyBasic": gdjs.GameCode.GDEnemyBasicObjects1, "EnemyFast": gdjs.GameCode.GDEnemyFastObjects1, "EnemyTank": gdjs.GameCode.GDEnemyTankObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpawnPointObjects1Objects = Hashtable.newFrom({"SpawnPoint": gdjs.GameCode.GDSpawnPointObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects2Objects = Hashtable.newFrom({"EnemyBasic": gdjs.GameCode.GDEnemyBasicObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects = Hashtable.newFrom({"EnemyHPBack": gdjs.GameCode.GDEnemyHPBackObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects = Hashtable.newFrom({"EnemyHPFill": gdjs.GameCode.GDEnemyHPFillObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyFastObjects2Objects = Hashtable.newFrom({"EnemyFast": gdjs.GameCode.GDEnemyFastObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects = Hashtable.newFrom({"EnemyHPBack": gdjs.GameCode.GDEnemyHPBackObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects = Hashtable.newFrom({"EnemyHPFill": gdjs.GameCode.GDEnemyHPFillObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects = Hashtable.newFrom({"EnemyTank": gdjs.GameCode.GDEnemyTankObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects1Objects = Hashtable.newFrom({"EnemyHPBack": gdjs.GameCode.GDEnemyHPBackObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects1Objects = Hashtable.newFrom({"EnemyHPFill": gdjs.GameCode.GDEnemyHPFillObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 55);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDSpawnPointObjects1, gdjs.GameCode.GDSpawnPointObjects2);

gdjs.copyArray(gdjs.GameCode.GDEnemyBasicObjects1, gdjs.GameCode.GDEnemyBasicObjects2);

gdjs.GameCode.GDEnemyHPBackObjects2.length = 0;

gdjs.GameCode.GDEnemyHPFillObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects2Objects, (( gdjs.GameCode.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects2[0].getPointX("")), (( gdjs.GameCode.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects, (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getCenterXInScene()) - 44, (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getPointY("")) - 20, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects, (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getCenterXInScene()) - 41, (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getPointY("")) - 17, "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : null), (gdjs.GameCode.GDEnemyHPBackObjects2.length !== 0 ? gdjs.GameCode.GDEnemyHPBackObjects2[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : null), (gdjs.GameCode.GDEnemyHPFillObjects2.length !== 0 ? gdjs.GameCode.GDEnemyHPFillObjects2[0] : null));
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getZOrder()) + 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > 55);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 82);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDSpawnPointObjects1, gdjs.GameCode.GDSpawnPointObjects2);

gdjs.copyArray(gdjs.GameCode.GDEnemyFastObjects1, gdjs.GameCode.GDEnemyFastObjects2);

gdjs.GameCode.GDEnemyHPBackObjects2.length = 0;

gdjs.GameCode.GDEnemyHPFillObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyFastObjects2Objects, (( gdjs.GameCode.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects2[0].getPointX("")), (( gdjs.GameCode.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects, (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getCenterXInScene()) - 44, (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getPointY("")) - 20, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects, (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getCenterXInScene()) - 41, (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getPointY("")) - 17, "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : null), (gdjs.GameCode.GDEnemyHPBackObjects2.length !== 0 ? gdjs.GameCode.GDEnemyHPBackObjects2[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : null), (gdjs.GameCode.GDEnemyHPFillObjects2.length !== 0 ? gdjs.GameCode.GDEnemyHPFillObjects2[0] : null));
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyFastObjects2[0].getZOrder()) + 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > 82);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSpawnPointObjects1 */
gdjs.GameCode.GDEnemyHPBackObjects1.length = 0;

gdjs.GameCode.GDEnemyHPFillObjects1.length = 0;

/* Reuse gdjs.GameCode.GDEnemyTankObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects, (( gdjs.GameCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.GameCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnPointObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects1Objects, (( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getCenterXInScene()) - 44, (( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getPointY("")) - 20, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects1Objects, (( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getCenterXInScene()) - 41, (( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getPointY("")) - 17, "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyTankObjects1.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects1[0] : null), (gdjs.GameCode.GDEnemyHPBackObjects1.length !== 0 ? gdjs.GameCode.GDEnemyHPBackObjects1[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDEnemyTankObjects1.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects1[0] : null), (gdjs.GameCode.GDEnemyHPFillObjects1.length !== 0 ? gdjs.GameCode.GDEnemyHPFillObjects1[0] : null));
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects1[i].setZOrder((( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects1[i].setZOrder((( gdjs.GameCode.GDEnemyTankObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyTankObjects1[0].getZOrder()) + 2);
}
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDEnemyBasicObjects2, gdjs.GameCode.GDEnemyBasicObjects3);

gdjs.copyArray(gdjs.GameCode.GDEnemyFastObjects2, gdjs.GameCode.GDEnemyFastObjects3);

gdjs.copyArray(gdjs.GameCode.GDEnemyTankObjects2, gdjs.GameCode.GDEnemyTankObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyBasicObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyBasicObjects3[i].getVariableNumber(gdjs.GameCode.GDEnemyBasicObjects3[i].getVariables().get("AttackClock")) >= (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyBasicObjects3[i].getVariables().get("AttackInterval"))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyBasicObjects3[k] = gdjs.GameCode.GDEnemyBasicObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyBasicObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyFastObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyFastObjects3[i].getVariableNumber(gdjs.GameCode.GDEnemyFastObjects3[i].getVariables().get("AttackClock")) >= (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyFastObjects3[i].getVariables().get("AttackInterval"))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyFastObjects3[k] = gdjs.GameCode.GDEnemyFastObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyFastObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyTankObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyTankObjects3[i].getVariableNumber(gdjs.GameCode.GDEnemyTankObjects3[i].getVariables().get("AttackClock")) >= (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyTankObjects3[i].getVariables().get("AttackInterval"))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyTankObjects3[k] = gdjs.GameCode.GDEnemyTankObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyTankObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDEnemyBasicObjects3 */
/* Reuse gdjs.GameCode.GDEnemyFastObjects3 */
/* Reuse gdjs.GameCode.GDEnemyTankObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(1).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDEnemyTankObjects3.length === 0 ) ? ((gdjs.GameCode.GDEnemyFastObjects3.length === 0 ) ? ((gdjs.GameCode.GDEnemyBasicObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDEnemyBasicObjects3[0].getVariables()) : gdjs.GameCode.GDEnemyFastObjects3[0].getVariables()) : gdjs.GameCode.GDEnemyTankObjects3[0].getVariables()).get("Damage"))));
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects3[i].returnVariable(gdjs.GameCode.GDEnemyBasicObjects3[i].getVariables().get("AttackClock")).setNumber(0);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects3[i].returnVariable(gdjs.GameCode.GDEnemyFastObjects3[i].getVariables().get("AttackClock")).setNumber(0);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects3[i].returnVariable(gdjs.GameCode.GDEnemyTankObjects3[i].getVariables().get("AttackClock")).setNumber(0);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyFastObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects = Hashtable.newFrom({"EnemyBasic": gdjs.GameCode.GDEnemyBasicObjects1, "EnemyFast": gdjs.GameCode.GDEnemyFastObjects1, "EnemyTank": gdjs.GameCode.GDEnemyTankObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects = Hashtable.newFrom({"EnemyHPBack": gdjs.GameCode.GDEnemyHPBackObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects = Hashtable.newFrom({"EnemyHPFill": gdjs.GameCode.GDEnemyHPFillObjects2});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects = Hashtable.newFrom({"EnemyHPBack": gdjs.GameCode.GDEnemyHPBackObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects = Hashtable.newFrom({"EnemyHPFill": gdjs.GameCode.GDEnemyHPFillObjects2});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.GameCode.GDRestartButtonObjects1});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.GameCode.GDFinalScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverOverlay"), gdjs.GameCode.GDGameOverOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartHintText"), gdjs.GameCode.GDRestartHintTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(100);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1.5);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("playing");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootTimer");
}
{for(var i = 0, len = gdjs.GameCode.GDGameOverOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverOverlayObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDGameOverTitleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverTitleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartHintTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartHintTextObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(Math.max(300, (gdjs.GameCode.GDPlayerObjects1[i].getPointX("")) - 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(Math.max(300, (gdjs.GameCode.GDPlayerObjects1[i].getPointX("")) - 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(Math.min(580, (gdjs.GameCode.GDPlayerObjects1[i].getPointX("")) + 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(Math.min(580, (gdjs.GameCode.GDPlayerObjects1[i].getPointX("")) + 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setY(Math.max(130, (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) - 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setY(Math.max(130, (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) - 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setY(Math.min(555, (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) + 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setY(Math.min(555, (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) + 260 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.GameCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.GameCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setZOrder((gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) + 100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShootTimer") >= 0.22;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.GameCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getCenterXInScene()) - 12, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getCenterYInScene()) - 5, "");
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].setAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.GameCode.GDBulletObjects1[i].getCenterXInScene()), (gdjs.GameCode.GDBulletObjects1[i].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 900, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].setZOrder(14);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.GameCode.GDSpawnPointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnTimer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyFastObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects) < 35;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpawnPointObjects1Objects);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, 100));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(Math.max(0.75, gdjs.randomInRange(13, 24) / 10 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * 0.08));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);

gdjs.GameCode.forEachTotalCount2 = 0;
gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachCount0_2 = gdjs.GameCode.GDEnemyBasicObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount0_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.GameCode.forEachCount1_2 = gdjs.GameCode.GDEnemyFastObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount1_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyFastObjects1);
gdjs.GameCode.forEachCount2_2 = gdjs.GameCode.GDEnemyTankObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount2_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyTankObjects1);
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;

gdjs.GameCode.GDEnemyFastObjects2.length = 0;

gdjs.GameCode.GDEnemyTankObjects2.length = 0;


if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2) {
    gdjs.GameCode.GDEnemyBasicObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2) {
    gdjs.GameCode.GDEnemyFastObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2) {
    gdjs.GameCode.GDEnemyTankObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyBasicObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyBasicObjects2[i].getX() > 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyBasicObjects2[k] = gdjs.GameCode.GDEnemyBasicObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyBasicObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyFastObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyFastObjects2[i].getX() > 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyFastObjects2[k] = gdjs.GameCode.GDEnemyFastObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyFastObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyTankObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyTankObjects2[i].getX() > 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyTankObjects2[k] = gdjs.GameCode.GDEnemyTankObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyTankObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].setX((gdjs.GameCode.GDEnemyBasicObjects2[i].getPointX("")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyBasicObjects2[i].getVariables().get("Speed"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].setX((gdjs.GameCode.GDEnemyFastObjects2[i].getPointX("")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyFastObjects2[i].getVariables().get("Speed"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].setX((gdjs.GameCode.GDEnemyTankObjects2[i].getPointX("")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDEnemyTankObjects2[i].getVariables().get("Speed"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].returnVariable(gdjs.GameCode.GDEnemyBasicObjects2[i].getVariables().get("AttackClock")).setNumber(0);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].returnVariable(gdjs.GameCode.GDEnemyFastObjects2[i].getVariables().get("AttackClock")).setNumber(0);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].returnVariable(gdjs.GameCode.GDEnemyTankObjects2[i].getVariables().get("AttackClock")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].setZOrder((gdjs.GameCode.GDEnemyBasicObjects2[i].getPointY("")) + 100);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].setZOrder((gdjs.GameCode.GDEnemyFastObjects2[i].getPointY("")) + 100);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].setZOrder((gdjs.GameCode.GDEnemyTankObjects2[i].getPointY("")) + 100);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);

gdjs.GameCode.forEachTotalCount2 = 0;
gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachCount0_2 = gdjs.GameCode.GDEnemyBasicObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount0_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.GameCode.forEachCount1_2 = gdjs.GameCode.GDEnemyFastObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount1_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyFastObjects1);
gdjs.GameCode.forEachCount2_2 = gdjs.GameCode.GDEnemyTankObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount2_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyTankObjects1);
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;

gdjs.GameCode.GDEnemyFastObjects2.length = 0;

gdjs.GameCode.GDEnemyTankObjects2.length = 0;


if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2) {
    gdjs.GameCode.GDEnemyBasicObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2) {
    gdjs.GameCode.GDEnemyFastObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2) {
    gdjs.GameCode.GDEnemyTankObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyBasicObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyBasicObjects2[i].getX() <= 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyBasicObjects2[k] = gdjs.GameCode.GDEnemyBasicObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyBasicObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyFastObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyFastObjects2[i].getX() <= 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyFastObjects2[k] = gdjs.GameCode.GDEnemyFastObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyFastObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyTankObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyTankObjects2[i].getX() <= 286 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyTankObjects2[k] = gdjs.GameCode.GDEnemyTankObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyTankObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].setX(286);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].setX(286);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].setX(286);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].returnVariable(gdjs.GameCode.GDEnemyBasicObjects2[i].getVariables().get("AttackClock")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].returnVariable(gdjs.GameCode.GDEnemyFastObjects2[i].getVariables().get("AttackClock")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].returnVariable(gdjs.GameCode.GDEnemyTankObjects2[i].getVariables().get("AttackClock")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

{ //Subevents: 
gdjs.GameCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyBasicObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyFastObjects1ObjectsGDgdjs_9546GameCode_9546GDEnemyTankObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
/* Reuse gdjs.GameCode.GDEnemyBasicObjects1 */
/* Reuse gdjs.GameCode.GDEnemyFastObjects1 */
/* Reuse gdjs.GameCode.GDEnemyTankObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects1[i].returnVariable(gdjs.GameCode.GDEnemyBasicObjects1[i].getVariables().get("HP")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects1[i].returnVariable(gdjs.GameCode.GDEnemyFastObjects1[i].getVariables().get("HP")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects1[i].returnVariable(gdjs.GameCode.GDEnemyTankObjects1[i].getVariables().get("HP")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);

gdjs.GameCode.forEachTotalCount2 = 0;
gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachCount0_2 = gdjs.GameCode.GDEnemyBasicObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount0_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.GameCode.forEachCount1_2 = gdjs.GameCode.GDEnemyFastObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount1_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyFastObjects1);
gdjs.GameCode.forEachCount2_2 = gdjs.GameCode.GDEnemyTankObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount2_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyTankObjects1);
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHPBack"), gdjs.GameCode.GDEnemyHPBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHPFill"), gdjs.GameCode.GDEnemyHPFillObjects2);
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;

gdjs.GameCode.GDEnemyFastObjects2.length = 0;

gdjs.GameCode.GDEnemyTankObjects2.length = 0;


if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2) {
    gdjs.GameCode.GDEnemyBasicObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2) {
    gdjs.GameCode.GDEnemyFastObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2) {
    gdjs.GameCode.GDEnemyTankObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : (gdjs.GameCode.GDEnemyTankObjects2.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects2[0] : null))), null);
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : (gdjs.GameCode.GDEnemyTankObjects2.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects2[0] : null))), null);
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].setX((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getCenterXInScene()) :gdjs.GameCode.GDEnemyFastObjects2[0].getCenterXInScene()) :gdjs.GameCode.GDEnemyTankObjects2[0].getCenterXInScene()) - 44);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].setY((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getPointY("")) :gdjs.GameCode.GDEnemyFastObjects2[0].getPointY("")) :gdjs.GameCode.GDEnemyTankObjects2[0].getPointY("")) - 20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setX((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getCenterXInScene()) :gdjs.GameCode.GDEnemyFastObjects2[0].getCenterXInScene()) :gdjs.GameCode.GDEnemyTankObjects2[0].getCenterXInScene()) - 41);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setY((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getPointY("")) :gdjs.GameCode.GDEnemyFastObjects2[0].getPointY("")) :gdjs.GameCode.GDEnemyTankObjects2[0].getPointY("")) - 17);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setWidth(Math.max(0, 82 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDEnemyBasicObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyFastObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyTankObjects2[0].getVariables()).get("HP"))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDEnemyBasicObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyFastObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyTankObjects2[0].getVariables()).get("MaxHP")))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getZOrder()) :gdjs.GameCode.GDEnemyFastObjects2[0].getZOrder()) :gdjs.GameCode.GDEnemyTankObjects2[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].setZOrder((( gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? (( gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBasicObjects2[0].getZOrder()) :gdjs.GameCode.GDEnemyFastObjects2[0].getZOrder()) :gdjs.GameCode.GDEnemyTankObjects2[0].getZOrder()) + 2);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBasic"), gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyFast"), gdjs.GameCode.GDEnemyFastObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTank"), gdjs.GameCode.GDEnemyTankObjects1);

gdjs.GameCode.forEachTotalCount2 = 0;
gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachCount0_2 = gdjs.GameCode.GDEnemyBasicObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount0_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyBasicObjects1);
gdjs.GameCode.forEachCount1_2 = gdjs.GameCode.GDEnemyFastObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount1_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyFastObjects1);
gdjs.GameCode.forEachCount2_2 = gdjs.GameCode.GDEnemyTankObjects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount2_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDEnemyTankObjects1);
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHPBack"), gdjs.GameCode.GDEnemyHPBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHPFill"), gdjs.GameCode.GDEnemyHPFillObjects2);
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;

gdjs.GameCode.GDEnemyFastObjects2.length = 0;

gdjs.GameCode.GDEnemyTankObjects2.length = 0;


if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2) {
    gdjs.GameCode.GDEnemyBasicObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2) {
    gdjs.GameCode.GDEnemyFastObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2) {
    gdjs.GameCode.GDEnemyTankObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyBasicObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyBasicObjects2[i].getVariableNumber(gdjs.GameCode.GDEnemyBasicObjects2[i].getVariables().get("HP")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyBasicObjects2[k] = gdjs.GameCode.GDEnemyBasicObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyBasicObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyFastObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyFastObjects2[i].getVariableNumber(gdjs.GameCode.GDEnemyFastObjects2[i].getVariables().get("HP")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyFastObjects2[k] = gdjs.GameCode.GDEnemyFastObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyFastObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDEnemyTankObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyTankObjects2[i].getVariableNumber(gdjs.GameCode.GDEnemyTankObjects2[i].getVariables().get("HP")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDEnemyTankObjects2[k] = gdjs.GameCode.GDEnemyTankObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyTankObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPBackObjects2Objects, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : (gdjs.GameCode.GDEnemyTankObjects2.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects2[0] : null))), null);
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyHPFillObjects2Objects, (gdjs.GameCode.GDEnemyBasicObjects2.length !== 0 ? gdjs.GameCode.GDEnemyBasicObjects2[0] : (gdjs.GameCode.GDEnemyFastObjects2.length !== 0 ? gdjs.GameCode.GDEnemyFastObjects2[0] : (gdjs.GameCode.GDEnemyTankObjects2.length !== 0 ? gdjs.GameCode.GDEnemyTankObjects2[0] : null))), null);
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPBackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPBackObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyHPFillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyHPFillObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDEnemyTankObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyFastObjects2.length === 0 ) ? ((gdjs.GameCode.GDEnemyBasicObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDEnemyBasicObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyFastObjects2[0].getVariables()) : gdjs.GameCode.GDEnemyTankObjects2[0].getVariables()).get("ScoreValue"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyBasicObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBasicObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyFastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyFastObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyTankObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyTankObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects1[i].getX() > 1320 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects1[k] = gdjs.GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects1[i].getX() < -(60) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects1[k] = gdjs.GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects1[i].getY() > 760 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects1[k] = gdjs.GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects1[i].getY() < -(60) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects1[k] = gdjs.GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) / 30) + 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HouseHPFill"), gdjs.GameCode.GDHouseHPFillObjects1);
gdjs.copyArray(runtimeScene.getObjects("HouseHPText"), gdjs.GameCode.GDHouseHPTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimeText"), gdjs.GameCode.GDTimeTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaveText"), gdjs.GameCode.GDWaveTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString("SKOR  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDWaveTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaveTextObjects1[i].setString("GELOMBANG  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTimeTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimeTextObjects1[i].setString("BERTAHAN  " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))) + " dtk");
}
}
{for(var i = 0, len = gdjs.GameCode.GDHouseHPTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHouseHPTextObjects1[i].setString("RUMAH  " + gdjs.evtTools.common.toString(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))) + " / 100");
}
}
{for(var i = 0, len = gdjs.GameCode.GDHouseHPFillObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHouseHPFillObjects1[i].setWidth(Math.max(0, 300 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / 100));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "playing");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9835636);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.GameCode.GDFinalScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverOverlay"), gdjs.GameCode.GDGameOverOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartHintText"), gdjs.GameCode.GDRestartHintTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("over");
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGameOverOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverOverlayObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGameOverTitleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverTitleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartHintTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartHintTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreTextObjects1[i].setString("Skor akhir: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + "   •   Musuh: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9819436);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDDefenseZoneObjects1.length = 0;
gdjs.GameCode.GDDefenseZoneObjects2.length = 0;
gdjs.GameCode.GDDefenseZoneObjects3.length = 0;
gdjs.GameCode.GDDefenseZoneObjects4.length = 0;
gdjs.GameCode.GDHouseObjects1.length = 0;
gdjs.GameCode.GDHouseObjects2.length = 0;
gdjs.GameCode.GDHouseObjects3.length = 0;
gdjs.GameCode.GDHouseObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDBulletObjects1.length = 0;
gdjs.GameCode.GDBulletObjects2.length = 0;
gdjs.GameCode.GDBulletObjects3.length = 0;
gdjs.GameCode.GDBulletObjects4.length = 0;
gdjs.GameCode.GDEnemyBasicObjects1.length = 0;
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;
gdjs.GameCode.GDEnemyBasicObjects3.length = 0;
gdjs.GameCode.GDEnemyBasicObjects4.length = 0;
gdjs.GameCode.GDEnemyFastObjects1.length = 0;
gdjs.GameCode.GDEnemyFastObjects2.length = 0;
gdjs.GameCode.GDEnemyFastObjects3.length = 0;
gdjs.GameCode.GDEnemyFastObjects4.length = 0;
gdjs.GameCode.GDEnemyTankObjects1.length = 0;
gdjs.GameCode.GDEnemyTankObjects2.length = 0;
gdjs.GameCode.GDEnemyTankObjects3.length = 0;
gdjs.GameCode.GDEnemyTankObjects4.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects1.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects2.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects3.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects4.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects1.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects2.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects3.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects4.length = 0;
gdjs.GameCode.GDSpawnPointObjects1.length = 0;
gdjs.GameCode.GDSpawnPointObjects2.length = 0;
gdjs.GameCode.GDSpawnPointObjects3.length = 0;
gdjs.GameCode.GDSpawnPointObjects4.length = 0;
gdjs.GameCode.GDHudPanelObjects1.length = 0;
gdjs.GameCode.GDHudPanelObjects2.length = 0;
gdjs.GameCode.GDHudPanelObjects3.length = 0;
gdjs.GameCode.GDHudPanelObjects4.length = 0;
gdjs.GameCode.GDHouseHPBackObjects1.length = 0;
gdjs.GameCode.GDHouseHPBackObjects2.length = 0;
gdjs.GameCode.GDHouseHPBackObjects3.length = 0;
gdjs.GameCode.GDHouseHPBackObjects4.length = 0;
gdjs.GameCode.GDHouseHPFillObjects1.length = 0;
gdjs.GameCode.GDHouseHPFillObjects2.length = 0;
gdjs.GameCode.GDHouseHPFillObjects3.length = 0;
gdjs.GameCode.GDHouseHPFillObjects4.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects1.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects2.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects3.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDTitleTextObjects1.length = 0;
gdjs.GameCode.GDTitleTextObjects2.length = 0;
gdjs.GameCode.GDTitleTextObjects3.length = 0;
gdjs.GameCode.GDTitleTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDWaveTextObjects1.length = 0;
gdjs.GameCode.GDWaveTextObjects2.length = 0;
gdjs.GameCode.GDWaveTextObjects3.length = 0;
gdjs.GameCode.GDWaveTextObjects4.length = 0;
gdjs.GameCode.GDTimeTextObjects1.length = 0;
gdjs.GameCode.GDTimeTextObjects2.length = 0;
gdjs.GameCode.GDTimeTextObjects3.length = 0;
gdjs.GameCode.GDTimeTextObjects4.length = 0;
gdjs.GameCode.GDHouseHPTextObjects1.length = 0;
gdjs.GameCode.GDHouseHPTextObjects2.length = 0;
gdjs.GameCode.GDHouseHPTextObjects3.length = 0;
gdjs.GameCode.GDHouseHPTextObjects4.length = 0;
gdjs.GameCode.GDHelpTextObjects1.length = 0;
gdjs.GameCode.GDHelpTextObjects2.length = 0;
gdjs.GameCode.GDHelpTextObjects3.length = 0;
gdjs.GameCode.GDHelpTextObjects4.length = 0;
gdjs.GameCode.GDGameOverTitleObjects1.length = 0;
gdjs.GameCode.GDGameOverTitleObjects2.length = 0;
gdjs.GameCode.GDGameOverTitleObjects3.length = 0;
gdjs.GameCode.GDGameOverTitleObjects4.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects2.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects3.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects4.length = 0;
gdjs.GameCode.GDRestartTextObjects1.length = 0;
gdjs.GameCode.GDRestartTextObjects2.length = 0;
gdjs.GameCode.GDRestartTextObjects3.length = 0;
gdjs.GameCode.GDRestartTextObjects4.length = 0;
gdjs.GameCode.GDRestartHintTextObjects1.length = 0;
gdjs.GameCode.GDRestartHintTextObjects2.length = 0;
gdjs.GameCode.GDRestartHintTextObjects3.length = 0;
gdjs.GameCode.GDRestartHintTextObjects4.length = 0;

gdjs.GameCode.eventsList5(runtimeScene);
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDDefenseZoneObjects1.length = 0;
gdjs.GameCode.GDDefenseZoneObjects2.length = 0;
gdjs.GameCode.GDDefenseZoneObjects3.length = 0;
gdjs.GameCode.GDDefenseZoneObjects4.length = 0;
gdjs.GameCode.GDHouseObjects1.length = 0;
gdjs.GameCode.GDHouseObjects2.length = 0;
gdjs.GameCode.GDHouseObjects3.length = 0;
gdjs.GameCode.GDHouseObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDBulletObjects1.length = 0;
gdjs.GameCode.GDBulletObjects2.length = 0;
gdjs.GameCode.GDBulletObjects3.length = 0;
gdjs.GameCode.GDBulletObjects4.length = 0;
gdjs.GameCode.GDEnemyBasicObjects1.length = 0;
gdjs.GameCode.GDEnemyBasicObjects2.length = 0;
gdjs.GameCode.GDEnemyBasicObjects3.length = 0;
gdjs.GameCode.GDEnemyBasicObjects4.length = 0;
gdjs.GameCode.GDEnemyFastObjects1.length = 0;
gdjs.GameCode.GDEnemyFastObjects2.length = 0;
gdjs.GameCode.GDEnemyFastObjects3.length = 0;
gdjs.GameCode.GDEnemyFastObjects4.length = 0;
gdjs.GameCode.GDEnemyTankObjects1.length = 0;
gdjs.GameCode.GDEnemyTankObjects2.length = 0;
gdjs.GameCode.GDEnemyTankObjects3.length = 0;
gdjs.GameCode.GDEnemyTankObjects4.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects1.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects2.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects3.length = 0;
gdjs.GameCode.GDEnemyHPBackObjects4.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects1.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects2.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects3.length = 0;
gdjs.GameCode.GDEnemyHPFillObjects4.length = 0;
gdjs.GameCode.GDSpawnPointObjects1.length = 0;
gdjs.GameCode.GDSpawnPointObjects2.length = 0;
gdjs.GameCode.GDSpawnPointObjects3.length = 0;
gdjs.GameCode.GDSpawnPointObjects4.length = 0;
gdjs.GameCode.GDHudPanelObjects1.length = 0;
gdjs.GameCode.GDHudPanelObjects2.length = 0;
gdjs.GameCode.GDHudPanelObjects3.length = 0;
gdjs.GameCode.GDHudPanelObjects4.length = 0;
gdjs.GameCode.GDHouseHPBackObjects1.length = 0;
gdjs.GameCode.GDHouseHPBackObjects2.length = 0;
gdjs.GameCode.GDHouseHPBackObjects3.length = 0;
gdjs.GameCode.GDHouseHPBackObjects4.length = 0;
gdjs.GameCode.GDHouseHPFillObjects1.length = 0;
gdjs.GameCode.GDHouseHPFillObjects2.length = 0;
gdjs.GameCode.GDHouseHPFillObjects3.length = 0;
gdjs.GameCode.GDHouseHPFillObjects4.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects1.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects2.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects3.length = 0;
gdjs.GameCode.GDGameOverOverlayObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDTitleTextObjects1.length = 0;
gdjs.GameCode.GDTitleTextObjects2.length = 0;
gdjs.GameCode.GDTitleTextObjects3.length = 0;
gdjs.GameCode.GDTitleTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDWaveTextObjects1.length = 0;
gdjs.GameCode.GDWaveTextObjects2.length = 0;
gdjs.GameCode.GDWaveTextObjects3.length = 0;
gdjs.GameCode.GDWaveTextObjects4.length = 0;
gdjs.GameCode.GDTimeTextObjects1.length = 0;
gdjs.GameCode.GDTimeTextObjects2.length = 0;
gdjs.GameCode.GDTimeTextObjects3.length = 0;
gdjs.GameCode.GDTimeTextObjects4.length = 0;
gdjs.GameCode.GDHouseHPTextObjects1.length = 0;
gdjs.GameCode.GDHouseHPTextObjects2.length = 0;
gdjs.GameCode.GDHouseHPTextObjects3.length = 0;
gdjs.GameCode.GDHouseHPTextObjects4.length = 0;
gdjs.GameCode.GDHelpTextObjects1.length = 0;
gdjs.GameCode.GDHelpTextObjects2.length = 0;
gdjs.GameCode.GDHelpTextObjects3.length = 0;
gdjs.GameCode.GDHelpTextObjects4.length = 0;
gdjs.GameCode.GDGameOverTitleObjects1.length = 0;
gdjs.GameCode.GDGameOverTitleObjects2.length = 0;
gdjs.GameCode.GDGameOverTitleObjects3.length = 0;
gdjs.GameCode.GDGameOverTitleObjects4.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects2.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects3.length = 0;
gdjs.GameCode.GDFinalScoreTextObjects4.length = 0;
gdjs.GameCode.GDRestartTextObjects1.length = 0;
gdjs.GameCode.GDRestartTextObjects2.length = 0;
gdjs.GameCode.GDRestartTextObjects3.length = 0;
gdjs.GameCode.GDRestartTextObjects4.length = 0;
gdjs.GameCode.GDRestartHintTextObjects1.length = 0;
gdjs.GameCode.GDRestartHintTextObjects2.length = 0;
gdjs.GameCode.GDRestartHintTextObjects3.length = 0;
gdjs.GameCode.GDRestartHintTextObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
