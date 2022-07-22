window.appSection=[];
for(let i=0;i<=17;i++)
{
let sectionObj;
sectionObj={};
sectionObj.orientation=0;
sectionObj.wall=false;
sectionObj.place=[];
sectionObj.place[0]=0;
sectionObj.place[1]=0;
sectionObj.place[2]=0;
window.appSection[i]=sectionObj;
}

window.appSection[0].place[0]=6;
window.appSection[0].place[1]=0;
window.appSection[0].place[2]=0;
//window.appSection[1].wall=true;









function spaceCreating()
{

  spaceUIupdateSections();
  spaceOpenUI(window.appState['uiSpaceID']);


var glass2Material  = new BABYLON.PBRMaterial("glass2Material", window.scene);
glass2Material.albedoColor = new BABYLON.Color3(1,1,1);
glass2Material.metallic = 0.1;
glass2Material.roughness = 0.1;
glass2Material.alpha = 0.2;


var glassBorderMaterial  = new BABYLON.PBRMaterial("glassBorderMaterial", window.scene);
glassBorderMaterial.albedoColor = new BABYLON.Color3(0,0,0);
glassBorderMaterial.metallic = 0.1;
glassBorderMaterial.roughness = 0.8;


//var planeUI = BABYLON.MeshBuilder.CreateBox("planeUI", {height: 0.03, width: 1, depth: 1});
var planeUI =  BABYLON.MeshBuilder.CreatePlane("planeUI", {height:2.4, width: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
planeUI.visibility=0.5;
planeUI.position.y=1.2;


var planeUIMaterial  = new BABYLON.PBRMaterial("planeUIMaterial", window.scene);

planeUIMaterial.albedoColor = new BABYLON.Color3(1,0,0);
planeUIMaterial.metallic = 0;
planeUIMaterial.roughness = 1;
planeUIMaterial.alpha = 0.3;






planeUI.material=planeUIMaterial;


//groundPlane.material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_2').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_2').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_2').scaling.x=0.01;
window.scene.getMeshByName('window_glass_2').scaling.y=0.01;
window.scene.getMeshByName('window_glass_2').scaling.z=0.01;

window.scene.getMeshByName('window_2').scaling.x=0.01;
window.scene.getMeshByName('window_2').scaling.y=0.01;
window.scene.getMeshByName('window_2').scaling.z=0.01;

//
window.scene.getMeshByName('window_1').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_1').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_1').scaling.x=0.01;
window.scene.getMeshByName('window_glass_1').scaling.y=0.01;
window.scene.getMeshByName('window_glass_1').scaling.z=0.01;

window.scene.getMeshByName('window_1').scaling.x=0.01;
window.scene.getMeshByName('window_1').scaling.y=0.01;
window.scene.getMeshByName('window_1').scaling.z=0.01;

/// 4 and 5
//window.scene.getMeshByName('door2m').scaling.x=0.01;
//window.scene.getMeshByName('door2m').scaling.y=0.01;
//window.scene.getMeshByName('door2m').scaling.z=0.01;

//window.scene.getMeshByName('door2m_glass').scaling.x=0.01;
//window.scene.getMeshByName('door2m_glass').scaling.y=0.01;
//window.scene.getMeshByName('door2m_glass').scaling.z=0.01;



//DOOR 2M
window.scene.getMeshByName('door2m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door2m_glass').material=window.scene.getMaterialByName('glass2Material');

//DOOR 3M
window.scene.getMeshByName('door3m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door3m_glass').material=window.scene.getMaterialByName('glass2Material');

//DOOR 4M
window.scene.getMeshByName('door4m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door4m_glass').material=window.scene.getMaterialByName('glass2Material');

//disabling
window.scene.getMeshByName('zhaluzi').setEnabled(false);
window.scene.getMeshByName('planeUI').setEnabled(false);

window.scene.getMeshByName('window_1').setEnabled(false);
window.scene.getMeshByName('window_glass_1').setEnabled(false);

window.scene.getMeshByName('window_2').setEnabled(false);
window.scene.getMeshByName('window_glass_2').setEnabled(false);

window.scene.getMeshByName('door2m').setEnabled(false);
window.scene.getMeshByName('door2m_glass').setEnabled(false);

window.scene.getMeshByName('door3m').setEnabled(false);
window.scene.getMeshByName('door3m_glass').setEnabled(false);

window.scene.getMeshByName('door4m').setEnabled(false);
window.scene.getMeshByName('door4m_glass').setEnabled(false);

// 7 max with 2 house - 5 max with 0
// 7 + 7 =14 + 4

//

var actionManager = [];





for(let i=0;i<=17;i++)
{



//wall, redplane, buttonplane. 4 x 1m bulk
window.scene.getMeshByName('wall_big').clone('sec_' + i + '_wall');
window.scene.getMeshByName('planeUI').clone('sec_' + i + '_plane');

window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_1');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_2');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_3');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_0');

window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_0');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_1');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_2');

window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_1');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_2');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_0');

window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_1');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_2');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_0');

window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_1');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_2');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_0');

window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_1');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_2');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_0');


//DOOR 2M
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_0');
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_1');
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_2');

window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_0');
window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_1');
window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_2');


//DOOR 3M
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_0');
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_1');
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_2');

window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_0');
window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_1');
window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_2');

//DOOR 4M
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_0');
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_1');
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_2');

window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_0');
window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_1');
window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_2');






//ROTATIONS
if (i < 7 || i == 16 || i == 17)
{
  window.scene.getMeshByName('sec_' + i + '_wall').makeGeometryUnique();
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.z=-1;
  window.scene.getMeshByName('sec_' + i + '_wall').bakeCurrentTransformIntoVertices();
}

if (i>6 && i<14 || i == 16 || i == 17)
{


//MIRORRIN
for (let ii=0; ii<3; ii++)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).scaling.z = -1;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).bakeCurrentTransformIntoVertices();

//WINDOW1
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).bakeCurrentTransformIntoVertices();

//WINDOW2
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).bakeCurrentTransformIntoVertices();

//DOOR2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).bakeCurrentTransformIntoVertices();
//DOOR3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).bakeCurrentTransformIntoVertices();
//DOOR4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).bakeCurrentTransformIntoVertices();



}







}




//ROTATIONS
if(i>13)
{

  window.scene.getMeshByName('sec_' + i + '_wall').rotation.y =  Math.PI/-2;
  window.scene.getMeshByName('sec_' + i + '_plane').rotation.y =  Math.PI/2;

window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').rotation.y =  Math.PI/2;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').rotation.y =  Math.PI/2;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').rotation.y =  Math.PI/2;

window.scene.getMeshByName('sec_' + i + '_window_2_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_2_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_2_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_1_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_1_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_1_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').rotation.y =  Math.PI/-2;


//DOOR 2M
window.scene.getMeshByName('sec_' + i + '_door2m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door2m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_2').rotation.y =  Math.PI/-2;

//DOOR 3M
window.scene.getMeshByName('sec_' + i + '_door3m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door3m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_2').rotation.y =  Math.PI/-2;

//DOOR 4M
window.scene.getMeshByName('sec_' + i + '_door4m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door4m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_2').rotation.y =  Math.PI/-2;



}


actionManager[i] = new BABYLON.ActionManager(window.scene);
actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){
 window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.8;


}));

actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(ev){
window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.0;
if(i==window.appState['uiSpaceID'] && window.appState['uiSpaceUIEnabled']==true) window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.5;




}));

actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function(ev){
window.appState['uiSpaceID']=i;
spaceOpenUI(i);
spaceOpenUIdiv(i);
window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.5;


}));






window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').actionManager = actionManager[i];

window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').actionManager = actionManager[i];

window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').actionManager = actionManager[i];

window.scene.getMeshByName('sec_' + i + '_plane').actionManager = actionManager[i];


}






}
