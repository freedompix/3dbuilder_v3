var modelsLoadingStatuses=[];
var modelsLoaded=false;


var ArchetypeUI = class {};



function openUIblock(id)
{
}

function closeUIblock(id)
{
}





ArchetypeUI.load3DModelByPath=function(importModelFilePath,importModelFileName, importedNewName) {

console.log('Start loading ' + importedNewName + ' ' + importModelFilePath+importModelFileName);
var sceneTemp = window.scene;

var arr2=BABYLON.SceneLoader.ImportMesh("", importModelFilePath, importModelFileName, sceneTemp, function (importedMeshes) {
//if (importedNewName!="")
//{
importedMeshes[0].name = importedNewName;
importedMeshes[0].id   = importedNewName;
window.modelsLoadingStatuses[importedNewName]=true;
//}


// LOGING AND CYCLE ALL CHILD MESHES
//for(var i = 0; i < importedMeshes.length; i++){  console.log(importedMeshes[i].name+''); }




//var newTempModel = importedMeshes[0].clone(importedNewName);
//importedMeshes[0].dispose();











if(importedNewName=='canopy1')
{
//bump
window.scene.getMaterialByName('Wood_Material').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('Wood_Material').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('Wood_Material').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('Wood_Material').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

window.scene.getMaterialByName('Wood_Material').metallic  = 0.8;
window.scene.getMaterialByName('Wood_Material').roughness = 0.55;

//newX
window.scene.getMaterialByName('Wood_Material').clone('wood_dark_0');
window.scene.getMaterialByName('wood_dark_0').albedoTexture  = new  BABYLON.Texture("models/canopy1/wood_texture_dark_0.jpg", window.scene);
window.scene.getMaterialByName('wood_dark_0').albedoTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;

window.scene.getMaterialByName('wood_dark_0').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('wood_dark_0').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

window.scene.getMaterialByName('wood_dark_0').clone('wood_dark_1');
window.scene.getMaterialByName('wood_dark_1').albedoTexture.wAng = 0;
window.scene.getMaterialByName('wood_dark_1').bumpTexture.wAng = 0;

//rotated
window.scene.getMaterialByName('Wood_Material').clone('Wood_Material_1');
window.scene.getMaterialByName('Wood_Material_1').albedoTexture.wAng = 0;
window.scene.getMaterialByName('Wood_Material_1').bumpTexture.wAng = 0;




importedMeshes[0].position=new BABYLON.Vector3(2, 0, 0);
//newTempModel.scaling=new BABYLON.Vector3(1, 2, 1);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy1']=true;
window.scene.getMeshByName('canopy1').setEnabled(false);






window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_0');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_1');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_2');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_3');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_4');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_5');

window.scene.getMaterialByName('wood_shifted_0').albedoTexture.vOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').bumpTexture.vOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').albedoTexture.uOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').bumpTexture.uOffset = 0.2;




window.scene.getMaterialByName('wood_shifted_1').albedoTexture.vOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').bumpTexture.vOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').albedoTexture.uOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').bumpTexture.uOffset = 0.4;



window.scene.getMaterialByName('wood_shifted_2').albedoTexture.vOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').bumpTexture.vOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').albedoTexture.uOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').bumpTexture.uOffset = 0.6;


window.scene.getMaterialByName('wood_shifted_3').albedoTexture.vOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').bumpTexture.vOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').albedoTexture.uOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').bumpTexture.uOffset = 0.8;


window.scene.getMaterialByName('wood_shifted_4').albedoTexture.vOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').bumpTexture.vOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').albedoTexture.uOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').bumpTexture.uOffset = 0.5;


window.scene.getMaterialByName('wood_shifted_5').albedoTexture.vOffset = 0.1;
window.scene.getMaterialByName('wood_shifted_5').bumpTexture.vOffset = 0.1;


}


if(importedNewName=='zhaluzi')
{

}


if(importedNewName=='canopy2')
{
importedMeshes[0].position=new BABYLON.Vector3(-1, 1.7, 0);
importedMeshes[0].scaling=new BABYLON.Vector3(0.01, 0.01, 0.01);
window.scene.getMeshByName('canopy2').setEnabled(false);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy2']=true;
}


console.log(importedNewName + ' loaded.');




if (
window.modelsLoaded==false &&

window.modelsLoadingStatuses['zhaluzi']==true  &&

window.modelsLoadingStatuses['door_single']==true  &&
window.modelsLoadingStatuses['door_double']==true  &&
window.modelsLoadingStatuses['window']==true  &&


window.modelsLoadingStatuses['wall_big']==true  &&
window.modelsLoadingStatuses['wall_big_carcas']==true  &&

window.modelsLoadingStatuses['wall_trap_0']==true  &&
window.modelsLoadingStatuses['wall_trap_0_carcas']==true  &&
window.modelsLoadingStatuses['wall_small_0']==true  &&
window.modelsLoadingStatuses['wall_small_carcas_0']==true  &&

window.modelsLoadingStatuses['wall_roof_carcas_1']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_2']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_3']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_4']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_5']==true  &&

window.modelsLoadingStatuses['wall_roof_1']==true  &&
window.modelsLoadingStatuses['wall_roof_2']==true  &&
window.modelsLoadingStatuses['wall_roof_3']==true  &&
window.modelsLoadingStatuses['wall_roof_4']==true  &&
window.modelsLoadingStatuses['wall_roof_5']==true  &&


window.modelsLoadingStatuses['1roof_tile_0']==true  &&
window.modelsLoadingStatuses['2roof_tile_0']==true  &&
window.modelsLoadingStatuses['3roof_tile_0']==true  &&
window.modelsLoadingStatuses['4roof_tile_0']==true  &&
window.modelsLoadingStatuses['5roof_tile_0']==true  &&

window.modelsLoadingStatuses['1roof_side_left']==true  &&
window.modelsLoadingStatuses['2roof_side_left']==true  &&
window.modelsLoadingStatuses['3roof_side_left']==true  &&
window.modelsLoadingStatuses['4roof_side_left']==true  &&
window.modelsLoadingStatuses['5roof_side_left']==true  &&


window.modelsLoadingStatuses['1roof_bulk_0']==true &&
window.modelsLoadingStatuses['2roof_bulk_0']==true &&
window.modelsLoadingStatuses['3roof_bulk_0']==true &&
window.modelsLoadingStatuses['4roof_bulk_0']==true &&
window.modelsLoadingStatuses['5roof_bulk_0']==true &&

window.modelsLoadingStatuses['1roof_wood']==true &&
window.modelsLoadingStatuses['2roof_wood']==true &&
window.modelsLoadingStatuses['3roof_wood']==true &&
window.modelsLoadingStatuses['4roof_wood']==true &&
window.modelsLoadingStatuses['5roof_wood']==true &&


window.modelsLoadingStatuses['1meter_balk']==true  &&
window.modelsLoadingStatuses['canopy1']==true  &&
window.modelsLoadingStatuses['balk_0']==true &&
window.modelsLoadingStatuses['balk_small_0']==true)
{

//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('Object1259.004_primitive0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('canopy1').setEnabled(false);
window.scene.getMeshByName('wall_small_0').setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_0').setEnabled(false);
window.scene.getMeshByName('wall_big').setEnabled(false);
window.scene.getMeshByName('wall_big_carcas').setEnabled(false);

window.scene.getMeshByName('hdrSkyBox').setEnabled(false);


//materials
window.scene.getMeshByName('zhaluzi').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('balk_small_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('balk_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('1meter_balk').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_small_0').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_small_carcas_0').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_big').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_big_carcas').material=window.scene.getMaterialByName('Wood_Material');


//window.scene.getMeshByName('wall_small_0').makeGeometryUnique();
//window.scene.getMeshByName('wall_small_0').scaling.z=-1;
//window.scene.getMeshByName('wall_small_0').flipFaces();



window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_0_carcas').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_roof_carcas_1').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_2').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_3').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_4').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_5').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');



//dragable
window.scene.getMeshByName('zhaluzi').makeGeometryUnique();
window.scene.getMeshByName('zhaluzi').rotation.y=3.14;
window.scene.getMeshByName('zhaluzi').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('zhaluzi').clone('zhaluzi_a2_0');
window.scene.getMeshByName('zhaluzi').clone('zhaluziZ');

window.scene.getMeshByName('zhaluziZ').makeGeometryUnique();
window.scene.getMeshByName('zhaluziZ').rotation.y=3.14/2;
window.scene.getMeshByName('zhaluziZ').bakeCurrentTransformIntoVertices();


//


//
window.scene.getMeshByName('zhaluzi_a2_0').position.x =   1;
window.scene.getMeshByName('zhaluzi_a2_0').position.z = -1.45;
window.scene.getMeshByName('zhaluzi_a2_0').minXposition=-0;
window.scene.getMeshByName('zhaluzi_a2_0').maxXposition=4.0;
window.scene.getMeshByName('zhaluzi_a2_0').meshWidth=1;
window.scene.getMeshByName('zhaluzi_a2_0').draggable=true;

window.scene.getMeshByName('zhaluzi_a2_0').parentSectionID='a2';
window.scene.getMeshByName('zhaluzi_a2_0').elementID=0;

window.scene.getMeshByName('zhaluzi_a2_0').addBehavior(dragXbehaivor_a2_zhal_0);
window.scene.getMeshByName('zhaluzi_a2_0').getBehaviorByName('PointerDrag').meshId='zhaluzi_a2_0';
window.scene.getMeshByName('zhaluzi_a2_0').getBehaviorByName('PointerDrag').parentSectionID='a2';



// a2_2
window.scene.getMeshByName('zhaluzi').clone('zhaluzi_a2_1');

window.scene.getMeshByName('zhaluzi_a2_1').position.x =   2.7;
window.scene.getMeshByName('zhaluzi_a2_1').position.z = -1.45;
window.scene.getMeshByName('zhaluzi_a2_1').minXposition=0;
window.scene.getMeshByName('zhaluzi_a2_1').maxXposition=4.0;
window.scene.getMeshByName('zhaluzi_a2_1').meshWidth=1;
window.scene.getMeshByName('zhaluzi_a2_1').draggable=true;

window.scene.getMeshByName('zhaluzi_a2_1').parentSectionID='a2';
window.scene.getMeshByName('zhaluzi_a2_1').elementID=1;

window.scene.getMeshByName('zhaluzi_a2_1').addBehavior(dragXbehaivor_a2_zhal_1);
window.scene.getMeshByName('zhaluzi_a2_1').getBehaviorByName('PointerDrag').meshId='zhaluzi_a2_1';
window.scene.getMeshByName('zhaluzi_a2_1').getBehaviorByName('PointerDrag').parentSectionID='a2';


// a2_3
window.scene.getMeshByName('zhaluzi').clone('zhaluzi_a2_2');

window.scene.getMeshByName('zhaluzi_a2_2').position.x =   3.4;
window.scene.getMeshByName('zhaluzi_a2_2').position.z = -1.45;
window.scene.getMeshByName('zhaluzi_a2_2').minXposition=0;
window.scene.getMeshByName('zhaluzi_a2_2').maxXposition=4.0;
window.scene.getMeshByName('zhaluzi_a2_2').meshWidth=1;
window.scene.getMeshByName('zhaluzi_a2_2').draggable=true;

window.scene.getMeshByName('zhaluzi_a2_2').parentSectionID='a2';
window.scene.getMeshByName('zhaluzi_a2_2').elementID=2;

window.scene.getMeshByName('zhaluzi_a2_2').addBehavior(dragXbehaivor_a2_zhal_2);
window.scene.getMeshByName('zhaluzi_a2_2').getBehaviorByName('PointerDrag').meshId='zhaluzi_a2_2';
window.scene.getMeshByName('zhaluzi_a2_2').getBehaviorByName('PointerDrag').parentSectionID='a2';

//

window.scene.getMeshByName('zhaluziZ').position.x=2.6;
window.scene.getMeshByName('zhaluziZ').position.z=-0.85;
window.scene.getMeshByName('zhaluziZ').minZposition=-0.851;
window.scene.getMeshByName('zhaluziZ').maxZposition=-0.15;
window.scene.getMeshByName('zhaluziZ').meshWidth=1;
window.scene.getMeshByName('zhaluziZ').draggable=true;
window.scene.getMeshByName('zhaluziZ').addBehavior(dragZbehaivor);

window.scene.getMeshByName('zhaluziZ').setEnabled(false);
window.scene.getMeshByName('zhaluzi').setEnabled(false);

window.scene.getMeshByName('zhaluzi_a2_0').setEnabled(false);
window.scene.getMeshByName('zhaluzi_a2_1').setEnabled(false);
window.scene.getMeshByName('zhaluzi_a2_2').setEnabled(false);



//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('wall_roof_clone_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i).makeGeometryUnique();
window.scene.getMeshByName('wall_roof_clone_' + i).scaling.x=-1;
window.scene.getMeshByName('wall_roof_clone_' + i).flipFaces();
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('wall_roof_carcas_clone_' + i );

window.scene.getMeshByName('wall_roof_clone_' + i).clone('wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_' + i).clone('wall_roof_clone_inside_' + i);

}
//WALLS


window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1');
window.scene.getMeshByName('wall_trap_1').makeGeometryUnique();
window.scene.getMeshByName('wall_trap_1').scaling.x=-1;
window.scene.getMeshByName('wall_trap_1').position.x=-1;
window.scene.getMeshByName('wall_trap_1').flipFaces();
window.scene.getMeshByName('wall_trap_1').clone('wall_trap_0_inside');
window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1_inside');
window.scene.getMeshByName('wall_trap_0_carcas').clone('wall_trap_1_carcas');


window.scene.getMeshByName('wall_trap_1').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = 0.5;


///


//roof wood roof side
for (let i=1; i<=5; i++)
{
//roof wood material
window.scene.getMeshByName(i + 'roof_wood').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName(i + 'roof_side_left').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName(i + 'roof_side_left').clone(i + 'roof_side_right');
window.scene.getMeshByName(i + 'roof_side_right').makeGeometryUnique();
window.scene.getMeshByName(i + 'roof_side_left').scaling.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').position.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').flipFaces();
}

//middle roof
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_bulk_0').material=window.scene.getMaterialByName('Wood_Material');

for(let ii=1; ii<=41; ii++)
{
  window.scene.getMeshByName(i + 'roof_bulk_0').clone(i + 'roof_bulk_' + ii);

if(ii%2==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_0');
if(ii%3==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_1');
if(ii%4==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_2');





}

}




//small wall
//need to disable 0

for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_carcas_0').clone('wall_small_carcas_'+i);
window.scene.getMeshByName('wall_small_0').clone('wall_small_'+i);


window.scene.getMeshByName('wall_small_0').clone('wall_small_inside_'+i);
window.scene.getMeshByName('wall_small_inside_'+i).makeGeometryUnique();
window.scene.getMeshByName('wall_small_inside_'+i).scaling.z=-1;
window.scene.getMeshByName('wall_small_inside_'+i).bakeCurrentTransformIntoVertices();
}

createHouses();





//parts 1m
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_left');
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_right');
window.scene.getMeshByName('1meter_balk_vertical_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('1meter_balk_vertical_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//flatroof1
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_right');
window.scene.getMeshByName('flatRoof1_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof1_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_back').scaling.z = 0.1 ;


//flatroof2
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_right');
window.scene.getMeshByName('flatRoof2_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof2_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_back').scaling.z = 0.1 ;

window.scene.getMeshByName('flatRoof2_front').material=window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_back').material =window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_left').material =window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_right').material =window.scene.getMaterialByName('wood_shifted_0');

window.scene.getMeshByName('flatRoof1_front').material=window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_back').material =window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_left').material =window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_right').material =window.scene.getMaterialByName('wood_shifted_1');





//flat roof 15mm array
for(let i=0; i<=26;i++){
window.scene.getMeshByName('1meter_balk').clone('flat_roof_15mm' + i);
window.scene.getMeshByName('flat_roof_15mm' + i).rotation=new BABYLON.Vector3(0, 0, 0);
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.y=0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;

window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_3');
if(i%2==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_0');
if(i%3==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_1');
if(i%4==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_2');

}

//flat roof mid bulk
for(let i=0; i<=41; i++)
{
window.scene.getMeshByName('1meter_balk').clone('flat_roof_bulk_'+i);

if(i%2==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_0');
if(i%3==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_1');
if(i%4==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_2');


window.scene.getMeshByName('flat_roof_bulk_' + i ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x=4.1;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.z=0.33;
window.scene.getMeshByName('flat_roof_bulk_' + i).position.y=2.42;
}

window.scene.getMeshByName('1meter_balk').clone('flat_roof_x1_bulk');
window.scene.getMeshByName('1meter_balk').clone('flat_roof_x2_bulk');
window.scene.getMeshByName('1meter_balk').clone('angle_roof_x_bulk');
window.scene.getMeshByName('flat_roof_x1_bulk').scaling.z=0.33;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.z=0.33;
window.scene.getMeshByName('angle_roof_x_bulk').scaling.z=0.33;

window.scene.getMeshByName('flat_roof_x1_bulk').position.y=2.42;
window.scene.getMeshByName('flat_roof_x2_bulk').position.y=2.42;

window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.42;
window.scene.getMeshByName('angle_roof_x_bulk').position.z=-0.46;
///


//disable source 1m balk
window.scene.getMeshByName('1meter_balk').setEnabled(false);



//console.log(window.scene.getMaterialByName('Wood_Material').albedoTexture.uScale);
//console.log(window.scene.getMaterialByName('Wood_Material'));


//balk 7 section back
for(let i=1; i<=9;i++){
window.scene.getMeshByName('balk_0').clone('balk_front_' + i);
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);

//
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_right_' + i);
window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_front_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_back_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_roof_' + i);



}

//balk 7 section front
for(let i=1; i<=9;i++){
window.scene.getMeshByName('balk_0').clone('balk_back_' + i);
window.scene.getMeshByName('balk_back_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);

window.scene.getMeshByName('balk_0').clone('balk_roof_' + i);
window.scene.getMeshByName('balk_roof_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_roof_' + i).scaling=new BABYLON.Vector3(1, 0.755, 1);


///
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_right_' + i);
window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

}

//balk center
window.scene.getMeshByName('balk_0').clone('balk_center_0');
window.scene.getMeshByName('balk_0').clone('balk_center_1');

for(let i=0; i<=1;i++){
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_right_' + i);
window.scene.getMeshByName('balk_small_center_left_' + i).position.y=0.05;
window.scene.getMeshByName('balk_small_center_right_' + i).position.y=0.05;

window.scene.getMeshByName('balk_small_center_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_center_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/1, 0);
}






window.scene.getMeshByName('balk_small_0').setEnabled(false);
window.scene.getMeshByName('balk_0').setEnabled(false);

for(let roofNum=1;roofNum<=5;roofNum++)
{
window.scene.getMeshByName(roofNum +'roof_tile_0').material=window.scene.getMaterialByName('RoofTileMaterial');
window.scene.getMeshByName(roofNum +'roof_tile_0').scaling.x=1.01;
for (let i=1; i<=81; i++)
{
window.scene.getMeshByName(roofNum +'roof_tile_0').clone(roofNum+'roof_tile_' + i);




//window.scene.getMeshByName('1roof_tile_' + i).position=new BABYLON.Vector3(-3 + i * 0.25, 0, 0);
}

}

//var plane = BABYLON.MeshBuilder.CreatePlane("roofPlane", {height:2, width: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE});


var roofBorder1 = BABYLON.MeshBuilder.CreateBox("roofBorder1", {height: 0.10, width: 1, depth: 1});
var roofBorder2 = BABYLON.MeshBuilder.CreateBox("roofBorder2", {height: 0.10, width: 1, depth: 1});
var roofBorder3 = BABYLON.MeshBuilder.CreateBox("roofBorder3", {height: 0.10, width: 1, depth: 1});
var roofBorder4 = BABYLON.MeshBuilder.CreateBox("roofBorder4", {height: 0.10, width: 1, depth: 1});

roofBorder1.scaling.z=0.05;
roofBorder2.scaling.z=0.05;
roofBorder3.scaling.x=0.05;
roofBorder4.scaling.x=0.05;



roofBorder1.material=window.scene.getMaterialByName('RoofTileMaterial');
roofBorder2.material=window.scene.getMaterialByName('RoofTileMaterial');
roofBorder3.material=window.scene.getMaterialByName('RoofTileMaterial');
roofBorder4.material=window.scene.getMaterialByName('RoofTileMaterial');

var roofPlane = BABYLON.MeshBuilder.CreateBox("roofPlane", {height: 0.01, width: 1, depth: 1});
window.scene.getMaterialByName('RoofTileMaterial').clone('RoofTileMaterialFlat');
roofPlane.material=window.scene.getMaterialByName('RoofTileMaterialFlat');

window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture =  new  BABYLON.Texture("models/roof_texture.jpg", window.scene);
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture = new  BABYLON.Texture("models/roof_texture_normal_map.jpg", scene);
window.scene.getMaterialByName('RoofTileMaterialFlat').metallic=0.8;
window.scene.getMaterialByName('RoofTileMaterialFlat').roughness=0.8;
window.scene.getMaterialByName('RoofTileMaterialFlat').albedoColor = new BABYLON.Color3(0.0,0.0,0.0);


var groundPlane = BABYLON.MeshBuilder.CreateBox("groundPlane", {height: 0.03, width: 1, depth: 1});
groundPlane.position.y=-0.03;
var groundMaterial = new BABYLON.PBRMaterial("groundMaterial", window.scene);

groundPlane.visibility=0.3;
groundPlane.visibility=1;
 //var myTexture  = new BABYLON.Texture("textures/texture.jpg", scene);

//myMaterial.albedoColor = new BABYLON.Color3(0,0,0);
//myMaterial.reflectivityColor=new BABYLON.Color3(1,1,1);

groundMaterial.albedoTexture  = new  BABYLON.Texture("models/tiles.jpg", window.scene);

groundMaterial.albedoColor = new BABYLON.Color3(0.5,0.5,0.35);//Bordeaux Color RGB (95,2,31)
//groundMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);
//myMaterial.albedoTexture  = new BABYLON.Texture("textures/wall_pattern.jpg", scene);
//myMaterial.emissiveTexture = new BABYLON.Texture("textures/wall_pattern_light.jpg", scene);
//myMaterial.emissiveColor = new BABYLON.Color3(	0.64, 0.29, 0.18);

// myMaterial.bumpTexture = new BABYLON.Texture("textures/6.jpg", scene);
//myMaterial.diffuseTexture  = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveTexture = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveColor = new BABYLON.Color3.White();

groundMaterial.metallic = 0.3;
groundMaterial.roughness = 0.65;
groundMaterial.roughness = 0.65;


groundPlane.material=window.scene.getMaterialByName('groundMaterial');

groundPlane.material.bumpTexture = new  BABYLON.Texture("models/tiles_normal_map.jpg", scene);


elementsCreating();
buildRound();



//var box =  BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25});

closeLoader();
window.modelsLoaded=true;
}



//applyFog = false;

//



//window.modelsLoadingStatuses[importedNewName]=true;

});

};

ArchetypeUI.prototype.setXYZMeshPosition=function(meshName, newX, newY, newZ) {
parent.scene.getMeshByID(meshName).position.x = newX;
};

window.addEventListener('DOMContentLoaded', function(){

document.getElementById("rangeWidth").onchange=(function(){document.getElementById('widthInput').value=this.value;window.appState['width']=this.value;  setSizes();  });
document.getElementById("rangeDeepth").onchange=(function(){document.getElementById('deepthInput').value=this.value;window.appState['deepth']=this.value;  setSizes();  });
document.getElementById('widthInput').value=5000;
document.getElementById('deepthInput').value=3000;
document.getElementById("rangeWidth").value=5000;
document.getElementById("rangeDeepth").value=3000;

document.getElementById("wallInside").checked =false;
//document.getElementById("wallInside").prop("checked",false);
document.getElementById("house1on").checked =false;
//document.getElementById("house1on").prop("checked",false);
document.getElementById("house2on").checked =false;
//document.getElementById("house2on").prop("checked",false);


var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);
var createScene = function(){
var scene = new BABYLON.Scene(engine);

if (window.appState['debug']!=true){
var el = document.querySelector('.tabs1');
var instance = M.Tabs.init(el, {});

var el2 = document.querySelector('.tabs2');
var instance2 = M.Tabs.init(el2, {});

instance.updateTabIndicator();
instance2.updateTabIndicator();


}

//debugLayer
if (window.appState['debug']==true)
{
scene.debugLayer.show();
document.getElementById('builderUI').style.display='none';
document.getElementById('topDiv').style.display='none';
document.getElementById('builderUI').style.top='600px';
}


//var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, -5,-25), scene);
var camera = new BABYLON.ArcRotateCamera("camera1", -1.57, 1.07, 11, BABYLON.Vector3.Zero(), scene);
camera.setTarget(new BABYLON.Vector3(0, 1.5, 0));
camera.fov=0.8;

camera.attachControl(canvas, false);

camera.lowerRadiusLimit=7;

scene.clearColor = new BABYLON.Color3(0.95, 0.95, 0.95);

//var light1 = new BABYLON.HemisphericLight('light_sky', new BABYLON.Vector3(-0.1,1,0.3), scene);
//var light1 = new BABYLON.HemisphericLight('light_sky', new BABYLON.Vector3(0,4,4), scene);
//light1.intensity=0.4;




var light2 = new BABYLON.PointLight("light_point_2", new BABYLON.Vector3(10, 2, 0), scene);
light2.intensity=20;
light2.diffuse=new BABYLON.Color3(1,1,1);

var light4 = new BABYLON.PointLight("light_point_4", new BABYLON.Vector3(-10, 2, 0), scene);
light4.intensity=20;
light4.diffuse=new BABYLON.Color3(1,1,1);





var light3 = new BABYLON.PointLight("light_point_3", new BABYLON.Vector3(0, 2, -5), scene);
light3.intensity=70;
light3.diffuse=new BABYLON.Color3(1,1,1);



var light5 = new BABYLON.PointLight("light_point_5", new BABYLON.Vector3(0, 2, 5), scene);
light5.intensity=70;
light5.diffuse=new BABYLON.Color3(1,1,1);


// var light4 = new BABYLON.PointLight("light_point_neon", new BABYLON.Vector3(-10, -20, 0), scene);
// light4.intensity=400;
// light4.diffuse=new BABYLON.Color3(0,0.5,1);

// var light5 = new BABYLON.PointLight("light_point_green", new BABYLON.Vector3(-10, -10, 50), scene);
// light5.intensity=400;
// light5.diffuse=new BABYLON.Color3(0,1,0);



//scene.createDefaultEnvironment();
//var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("models/environmentSpecular.env", scene);
//scene.environmentTexture = hdrTexture;

///
var myMaterial = new BABYLON.PBRMaterial("material_wood_0", scene);
myMaterial.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);//Bordeaux Color RGB (95,2,31)
//myMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);

myMaterial.metallic = 1;
myMaterial.roughness = 0.85;
//texture
myMaterial.albedoTexture  = new  BABYLON.Texture("models/texture_wood.jpg", scene);
myMaterial.albedoTexture.uScale = 1;
myMaterial.albedoTexture.vScale = 1;
myMaterial.albedoTexture.wAng = 1.5707963705062866;
//bump
myMaterial.bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
myMaterial.bumpTexture.uScale = 1;
myMaterial.bumpTexture.vScale = 1;
myMaterial.bumpTexture.wAng = 1.5707963705062866;

myMaterial.backFaceCulling = false;
myMaterial.twoSidedLighting.backFaceCulling = true;


myMaterial.environmentIntensity = 1;

//env

var envTexture = new BABYLON.CubeTexture("models/environmentSpecular.env", scene);
//var envTexture = new BABYLON.CubeTexture("models/country.env", scene);


var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);



var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = envTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
hdrSkyboxMaterial.microSurface = 0.7;
hdrSkyboxMaterial.alpha = 0.3;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
scene.environmentTexture = envTexture;
//scene.environmentIntensity = 0.55;


ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy1");
//ArchetypeUI.load3DModelByPath("./models/canopy2/", "scene.gltf", "canopy2");

ArchetypeUI.load3DModelByPath("./models/converted/", "balk_244mm.obj", "balk_0");
ArchetypeUI.load3DModelByPath("./models/converted/", "balk_100mm.obj", "1meter_balk");
ArchetypeUI.load3DModelByPath("./models/converted/", "balk_corner.obj", "balk_small_0");




//ArchetypeUI.load3DModelByPath("./models/converted/", "roof_080420223.obj", "1roof_left");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "1.obj", "1roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "2.obj", "2roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "3.obj", "3roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "4.obj", "4roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "5.obj", "5roof_tile_0");

//ROOF side
ArchetypeUI.load3DModelByPath("./models/roof_side/", "1.obj", "1roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "2.obj", "2roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "3.obj", "3roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "4.obj", "4roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "5.obj", "5roof_side_left");

//roof bulk
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m1.obj", "1roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m2.obj", "2roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m3.obj", "3roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m4.obj", "4roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m5.obj", "5roof_bulk_0");


///roof wood
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "1.obj", "1roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "2.obj", "2roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "3.obj", "3roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "4.obj", "4roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "5.obj", "5roof_wood");

//walls 2.775
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small.obj", "wall_small_0");
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small_carcas.obj", "wall_small_carcas_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap.obj", "wall_trap_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap_carcas.obj", "wall_trap_0_carcas");


ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1.obj", "wall_roof_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1_carcas.obj", "wall_roof_carcas_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2.obj", "wall_roof_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2_carcas.obj", "wall_roof_carcas_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3.obj", "wall_roof_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3_carcas.obj", "wall_roof_carcas_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4.obj", "wall_roof_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4_carcas.obj", "wall_roof_carcas_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5.obj", "wall_roof_5");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5_carcas.obj", "wall_roof_carcas_5");


//scene.glb
ArchetypeUI.load3DModelByPath("./models/elements_house/", "zhaluzi.obj", "zhaluzi");

//wall big
ArchetypeUI.load3DModelByPath("./models/elements_house/", "wall_big.obj", "wall_big");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "wall_big_carcas.obj", "wall_big_carcas");



ArchetypeUI.load3DModelByPath("./models/elements_house/", "door_single.glb", "door_single");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "door_double.glb", "door_double");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "window.obj", "window");

//importedMeshes[0].clone(importedNewName);
//scene.getMeshByName('barkk').clone('bark_0');



canvas.addEventListener("pointerdown", onPointerDown, false);
canvas.addEventListener("pointerup", onPointerUp, false);



return scene;
};

window.scene = createScene();


//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy3");
//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy2");

engine.runRenderLoop(function(){
window.scene.render();
});

window.addEventListener('resize', function(){

engine.resize();
});

});
function setColor()
{
if (window.appState['color1']==0)
{

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('wood_dark_0');


for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
}


}






if (window.appState['color1']==1)
{

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('Wood_Material');







for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');

}



}


///2




if (window.appState['color2']==0)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('house2_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('wood_dark_0');



for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');


}


}

if (window.appState['color2']==1)
{
window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('Wood_Material');


for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


}



}



}











function setWallsInside()
{
  if (document.getElementById("wallInside").checked == false)
{
window.appState['wallInside']=false;
document.getElementById('color2optionsDiv').style.display='none';
}

  if (document.getElementById("wallInside").checked == true)
{
window.appState['wallInside']=true;
document.getElementById('color2optionsDiv').style.display='block';
}

buildRound();


}


function color1_1Select()
{
  document.getElementById('optionColor1_1').classList.add('optionColorActive');
  document.getElementById('optionColor1_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_2').classList.add('optionColorInactive');
  document.getElementById('optionColor1_2').classList.remove('optionColorActive');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=0;
setColor();

}


function color1_2Select()
{
  document.getElementById('optionColor1_2').classList.add('optionColorActive');
  document.getElementById('optionColor1_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_1').classList.add('optionColorInactive');
  document.getElementById('optionColor1_1').classList.remove('optionColorActive');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=1;
setColor();
}


function color2_1Select()
{
  document.getElementById('optionColor2_1').classList.add('optionColorActive');
  document.getElementById('optionColor2_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_2').classList.add('optionColorInactive');
  document.getElementById('optionColor2_2').classList.remove('optionColorActive');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=0;
setColor();
}


function color2_2Select()
{
  document.getElementById('optionColor2_2').classList.add('optionColorActive');
  document.getElementById('optionColor2_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_1').classList.add('optionColorInactive');
  document.getElementById('optionColor2_1').classList.remove('optionColorActive');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=1;
setColor();
}
window.appState=[];
window.appState['width']=5000;
window.appState['deepth']=3000;


window.appState['rooftype']=0;

window.appState['uiMenu1']=1;
window.appState['uiMenu2']=1;
window.appState['uiMenu3']=1;


window.appState['overhangLeft']=200;
window.appState['overhangRight']=200;
window.appState['overhangFront']=200;
window.appState['overhangBack']=200;


window.appState['currentDragMesh']='';

window.appState['house1on']=false;
window.appState['house2on']=false;

window.appState['house1width']=3000;
window.appState['house2width']=3000;


window.appState['color1']=0;
window.appState['color2']=0;
window.appState['wallInside']=false;



function buildRound()
{
  setColor();
var x = window.appState['width'];
var z = window.appState['deepth'];

var zBack=z/2;


/////

var quantity=Math.floor(x/4000)+2;
if (x % 4000 ==0) quantity = x/4000+1;
//console.log(x % 3500);
if (x<4000)     quantity = 2;
var sectionWidth=x/(quantity-1);



if (window.appState['house1on']==true && window.appState['house2on']==false)
{
let middleX = x - window.appState['house1width'];
quantity=Math.floor(middleX/4000) + 2;
if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
if (middleX<4000)  quantity = 2;
sectionWidth= middleX/(quantity - 1);
// add store roof_bulk
quantity = quantity + 1;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
  let middleX = x - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 1;

}

if (window.appState['house1on']==true && window.appState['house2on']==true)
{

  let middleX = x - window.appState['house1width'] - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 2;

}


////



//alert(sectionWidth + ' x '+ quantity);
var xStart=(x/2)*-0.001;

//if(quantity>7) quantity=7;

//no more six
var shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;


//roof BALK

//window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(-0.075 + xStart, 1.7+0.075, (zBack)*0.001);
//window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ quantity * (sectionWidth*0.001), 1.7+0.075, (zBack)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(xStart *-1,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('1meter_balk_vertical_right').scaling.x = z * 0.001 - shiftZ;


let roofBalkShift=0.08;
let roofFlatShiftLeft=window.appState['overhangLeft']*0.001 + roofBalkShift;
let roofFlatShiftRight=window.appState['overhangRight']*0.001  + roofBalkShift;
let roofFlatShiftFront=window.appState['overhangFront']*0.001  + roofBalkShift;
let roofFlatShiftBack=window.appState['overhangBack']*0.001  + roofBalkShift;










if (window.appState['house1on']==false && window.appState['house2on']==false)
{

for(let i = 1; i<=quantity; i++)
{
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//


// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 1.66+0.075, (zBack)*0.001 - 0.075);

window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;

//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

}
}


///////////














if (window.appState['house1on']==true || window.appState['house2on']==true)
{
let currentSectionWidth = sectionWidth;
let currentXposition;
let firstSectionWidth;
let lastSectionWidth;

if (window.appState['house1on'] == true)
firstSectionWidth = window.appState['house1width'];
else firstSectionWidth = currentSectionWidth;



//if ()

for(let i = 1; i<=quantity; i++)
{


if (i == 1)
{
currentXposition = xStart;
}

if (i > 1 && i < quantity)
{
if (window.appState['house1on'] == true)  currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));
if (window.appState['house1on'] == false) currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));

}

if (i == quantity)
{
currentXposition = xStart * -1;
}



window.scene.getMeshByName('balk_front_' + i).position=
new BABYLON.Vector3(currentXposition, 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//


// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 1.66+0.075, (zBack)*0.001 - 0.075);

let  tempCurrentSectionWidth = currentSectionWidth;
if (window.appState['house1on'] == true && i == 1)         tempCurrentSectionWidth = window.appState['house1width'];
if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];


window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;


if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];
//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;


}



}











































for(let i = 1; i<=9; i++)
{

  let currentSectionWidth = sectionWidth;


  if (window.appState['house1on'] == true && i == 1)  currentSectionWidth = window.appState['house1width'];
  if (window.appState['house2on'] == true && i == quantity-1)  currentSectionWidth = window.appState['house2width'];




  //roof
  if(i>0 && i<quantity){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(true);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(true);

  }

  //roof
  if(i>0 && i>quantity-1){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);


  }


if (i>quantity){
window.scene.getMeshByName('balk_back_' + i).setEnabled(false);
window.scene.getMeshByName('balk_front_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(false);




}
else
{
window.scene.getMeshByName('balk_back_' + i).setEnabled(true);
window.scene.getMeshByName('balk_front_' + i).setEnabled(true);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(true);





if (i==1)
{
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI , 0);

if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;
if (window.appState['house1on'] == true) currentSectionWidthTEMP = window.appState['house1width'];


  window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;

  window.scene.getMeshByName('1meter_balk_front_' + i).position.x = -0.075 + xStart  -0.2;
  window.scene.getMeshByName('1meter_balk_roof_' + i).position.x  = -0.075 + xStart  -0.2;
}

}

if (i==quantity)
{
  console.log(quantity + ' quantity' );
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, 0  , 0);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI, 0);
//if roof type ==1





if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;


if (i>2)
{
if (window.appState['house2on'] == true) currentSectionWidthTEMP = window.appState['house2width'];
window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.2;
}

// if BALK Is SINGLE

if (i==2)
{
currentSectionWidthTEMP = x;

window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
}

}





}

}




}





if (window.appState['rooftype']==1)
{
  //enaabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_0').setEnabled(true);
window.scene.getMeshByName('wall_trap_1').setEnabled(true);
//if wall 2 sided
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(true);


//wall side flangs
window.scene.getMeshByName('wall_trap_0').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_carcas').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1_carcas').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_inside').position.x = (x/1000)/-2 - 0.01;
window.scene.getMeshByName('wall_trap_1_inside').position.x = (x/1000)/ 2 + 0.01;



window.scene.getMeshByName('wall_trap_0').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_inside').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_inside').position.z = (z/1000)/ 2 - 1;


//if wall 2 sided




//roof central bulk
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(true);
window.scene.getMeshByName('angle_roof_x_bulk').scaling.x=x*0.001 + 0.5;
window.scene.getMeshByName('angle_roof_x_bulk').position.x= (x/1000)/-2 - 0.25;
if (z==3000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.9;
if (z==3500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.04;
if (z==4000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.18;
if (z==4500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.33;
if (z==5000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.47;

//disabling flatRoof

window.scene.getMeshByName("balk_center_0").setEnabled(false);
window.scene.getMeshByName("balk_center_1").setEnabled(false);
window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);



 window.scene.getMeshByName("roofPlane").setEnabled(false);
 for(let i=1; i<=2;i++)
 {
 window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(false);
 }

 window.scene.getMeshByName('roofBorder1').setEnabled(false);
 window.scene.getMeshByName('roofBorder2').setEnabled(false);
 window.scene.getMeshByName('roofBorder3').setEnabled(false);
 window.scene.getMeshByName('roofBorder4').setEnabled(false);


//for (let i=0; i<=41; i++)
// {
// window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
// }

for(let i=0; i<=26;i++){
  window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
}

  window.scene.getMeshByName('flat_roof_x1_bulk').setEnabled(false);
  window.scene.getMeshByName('flat_roof_x2_bulk').setEnabled(false);
// disabling end


for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= z/1000 - 1.1;
if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}



//roof  sideflangs
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_side_left').position.x  = (x/-2) * 0.001 - 0.15;
window.scene.getMeshByName(i + 'roof_side_right').position.x = (x/2)  * 0.001 + 0.15;

window.scene.getMeshByName(i + 'roof_side_right').position.y =1.7;
window.scene.getMeshByName(i + 'roof_side_left').position.y =1.7;
}

//roof_wood
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_wood').scaling.x=x*0.001+0.5;
window.scene.getMeshByName(i + 'roof_wood').position.x  = (x/2) * 0.001 + 0.25;
window.scene.getMeshByName(i + 'roof_wood').position.y=2.35 + (i*0.075);
}

//roof wall
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_inside_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_inside_' + i).position.z = (z/2000)-1.05;

//
window.scene.getMeshByName('wall_roof_clone_' + i).position.x = (x/2000);
window.scene.getMeshByName('wall_roof_clone_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.x = (x/2000) ;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.z = (z/2000)-1.05;
//
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.x = (x/2000)+0.035;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.z = (z/2000)-1.05;




}




for(let roofNum=1;roofNum<=5;roofNum++)
 {

let roofStatus = false;

if ((z==3000 && roofNum==1)||(z==3500 && roofNum==2)||(z==4000 && roofNum==3)||(z==4500 && roofNum==4)||(z==5000 && roofNum==5)) roofStatus = true;

//roof walls enabling
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);




window.scene.getMeshByName('house1_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

if (window.appState['rooftype'] == 0)
{
  window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(false);
  window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(false);
}

window.scene.getMeshByName('house2_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);













window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);

window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);











//middle ROOF
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.x=xStart + i * 0.50;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.y=1.7;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.z=0;
//window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position=new BABYLON.Vector3(xStart + i * 0.50, 0.5, -0.5);
//


if (x<(i*500)) window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(true);

if (z==3000 ){if(roofNum!=1){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}



}





// roof TILE
 for (let i=0; i<=81; i++)
 {
 window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.55, -0.47);


 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){   window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false); }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}

 }

} //end roof5

}

if (window.appState['rooftype']==0)
{
//central balk
if (z==5000)
{
  window.scene.getMeshByName("balk_center_0").setEnabled(true);
  window.scene.getMeshByName("balk_center_1").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(true);




  window.scene.getMeshByName("balk_center_0").position.x=(x/1000)/2;
  window.scene.getMeshByName("balk_center_1").position.x=(x/1000)/-2;

 window.scene.getMeshByName('balk_small_center_left_0').position.x = (x/1000)/2;
window.scene.getMeshByName('balk_small_center_right_0').position.x = (x/1000)/2;

window.scene.getMeshByName('balk_small_center_left_1').position.x = (x/1000)/-2;
window.scene.getMeshByName('balk_small_center_right_1').position.x = (x/1000)/-2;


}
else
{
  window.scene.getMeshByName("balk_center_0").setEnabled(false);
  window.scene.getMeshByName("balk_center_1").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);


}

window.scene.getMeshByName('flat_roof_x1_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000;
window.scene.getMeshByName('flat_roof_x1_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_x2_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_x1_bulk').position.z =(z/1000)/-2 + 0.00075;
window.scene.getMeshByName('flat_roof_x2_bulk').position.z =(z/1000)/2  - 0.00075;




//ROFF FLAT 2
for(let i=1; i<=2;i++)
{
let multiply=1;
if (i==1) multiply=1.0;
if (i==2) multiply=0.95;

let offset=1;
if (i==1) offset=0;
if (i==2) offset=0;

window.scene.getMeshByName('flatRoof' + i + '_left').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_right').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRight * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);


window.scene.getMeshByName('flatRoof' + i + '_front').position=new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_back').position =new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack)*0.001 + roofFlatShiftBack * multiply - 0.075 - offset);


window.scene.getMeshByName('flatRoof' + i + '_front').scaling.x  = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;
window.scene.getMeshByName('flatRoof' + i + '_back').scaling.x = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;

window.scene.getMeshByName('flatRoof' + i + '_left').scaling.x  = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
window.scene.getMeshByName('flatRoof' + i + '_right').scaling.x = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
}

//BORDERS




let roofFlatShiftLeftBorder = roofFlatShiftLeft + 0.04 - 0.035;
let roofFlatShiftRightBorder = roofFlatShiftRight + 0.04 - 0.035;
let roofFlatShiftFrontBorder = roofFlatShiftFront + 0.04 - 0.035;
let roofFlatShiftBackBorder = roofFlatShiftBack + 0.04 - 0.035;

let offset=0;
let borderDeltaX = (roofFlatShiftLeftBorder - roofFlatShiftRightBorder)/2;
let borderDeltaZ = (roofFlatShiftFrontBorder - roofFlatShiftBackBorder)/2;
let borderY=2.55;


window.scene.getMeshByName('roofBorder1').position=
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack*-1)*0.001 - roofFlatShiftFrontBorder + 0.075 + 0.025);
window.scene.getMeshByName('roofBorder2').position =
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack)*0.001 + roofFlatShiftBackBorder  - 0.075 - 0.025);
//left right
window.scene.getMeshByName('roofBorder3').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeftBorder + 0.025,  borderY, 0-borderDeltaZ);
window.scene.getMeshByName('roofBorder4').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRightBorder  - 0.025,  borderY, 0-borderDeltaZ);

window.scene.getMeshByName('roofBorder1').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder2').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder3').scaling.z = z * 0.001  + roofFlatShiftFrontBorder + roofFlatShiftBackBorder  - 0.15;
window.scene.getMeshByName('roofBorder4').scaling.z = z * 0.001  + roofFlatShiftFrontBorder  + roofFlatShiftBackBorder  - 0.15;



//disabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_0').setEnabled(false);
window.scene.getMeshByName('wall_trap_1').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);


//disable canopy 2
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(false);

for(let i = 1; i<=9; i++)
{
window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);

window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
}


//disabling 5 roofs
 for(let roofNum=1;roofNum<=5;roofNum++)
 {

//roof wall_roof

window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);






  for (let i=0; i<=81; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
  }

  for (let i=0; i<=41; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
  }

}


//flat roof 15mm array
for(let i=0; i<=26;i++){

window.scene.getMeshByName('flat_roof_15mm' + i).scaling.x= x/1000 + roofFlatShiftLeft + roofFlatShiftRight;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;

window.scene.getMeshByName('flat_roof_15mm' + i).position.x= (x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z= (z/1000)/2 - (i) * 0.2 + 0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;



if(z<((i-1)*200))
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
else
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(true);

if(z==((i-1)*200) || i==0)
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.48;

if(i==0)
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i) * 0.2 + roofFlatShiftBack - 0.225 - 0.09;
}

if(z==((i-1)*200))
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i-1) * 0.2 - roofFlatShiftFront + 0.225 + 0.09;
}



}


//flat roof mid
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 - roofFlatShiftFront + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= roofFlatShiftFront + roofFlatShiftBack + z/1000 -0.2;




if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}


window.scene.getMeshByName("roofPlane").setEnabled(true);
window.scene.getMeshByName("roofPlane").scaling=new BABYLON.Vector3(  x/1000 + roofFlatShiftLeft + roofFlatShiftRight,  1,   z/1000 +  + roofFlatShiftBack + roofFlatShiftFront -0.15);

window.scene.getMeshByName("roofPlane").position.x=(roofFlatShiftLeft - roofFlatShiftRight)/-2;
window.scene.getMeshByName("roofPlane").position.z=(roofFlatShiftFront - roofFlatShiftBack)/-2;
window.scene.getMeshByName("roofPlane").position.y=2.50;

//enabling flaat roof balks
for(let i=1; i<=2;i++)
{
window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(true);
}

window.scene.getMeshByName('roofBorder1').setEnabled(true);
window.scene.getMeshByName('roofBorder2').setEnabled(true);
window.scene.getMeshByName('roofBorder3').setEnabled(true);
window.scene.getMeshByName('roofBorder4').setEnabled(true);





}

x=x+30;
window.scene.getMeshByName("groundPlane").scaling=new BABYLON.Vector3(x/1000 + 2, 1, z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').albedoTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').albedoTexture.uScale = 1 * (z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').bumpTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').bumpTexture.uScale = 1* (z/1000 + 2);


window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.uScale = 0.65 * (z/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.uScale = 0.65 * (z/1000 );



updateSections();
rebuildHouses();
elementsUpdate();

window.scene.getCameraByID('camera1').spinTo("radius", 9+x/2000, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=4+x/2000;
window.scene.getCameraByID('camera1').upperRadiusLimit=20+x/2000;


window.scene.getLightByName('light_point_2').position.x = 4 + x/2000;
window.scene.getLightByName('light_point_4').position.x = -4 - x/2000;

window.scene.getLightByName('light_point_3').position.z = 8 + z/2000;
window.scene.getLightByName('light_point_5').position.z = -8 - z/2000;

}
function elementsCreating2()
{
}
function elementsCreating()
{

window.appState['house1wall1']=0;
window.appState['house1wall2']=0;
window.appState['house1wall3']=0;
window.appState['house1wall4']=0;

window.appState['house2wall1']=0;
window.appState['house2wall2']=0;
window.appState['house2wall3']=0;
window.appState['house2wall4']=0;

window.appState['house1wall1']=2;
window.appState['house1wall3']=1;
window.appState['house2wall1']=3;
window.appState['house2wall4']=1;

window.scene.getMaterialByName('Wood_Material').clone('Wood_Material_Doors');
window.scene.getMaterialByName('Wood_Material_Doors').metallic = 0;


//glass
var window_glass_material = new BABYLON.PBRMaterial("window_glass_material", window.scene);
window_glass_material.albedoColor = new BABYLON.Color3(0.2, 0.3, 0.3);
window_glass_material.albedoColor = new BABYLON.Color3(0.051, 0.051, 0.051);
//window_glass_material.reflectivityColor = new BABYLON.Color3(1.0, 0.766, 0.336);

window_glass_material.refractionTexture = new  BABYLON.Texture("models/env.jpg", window.scene);
window_glass_material.refractionTexture.depth = 4;
window_glass_material.refractionTexture.coordinatesMode = BABYLON.Texture.SPHERE_MODE;
window_glass_material.refractionTexture.level = 0.05;

//window_glass_material.reflectionTexture =  new  BABYLON.Texture("models/env.jpg", window.scene);



//window_glass_material.refractionTexture.wAng = 1.34;

window_glass_material.indexOfRefraction = 1;



window_glass_material.metallic = 1;
window_glass_material.roughness = 0.1;

window_glass_material.metallic = 0.9;
window_glass_material.roughness = 0.2;


var window_glass = BABYLON.MeshBuilder.CreateBox("window_glass", {height: 0.01, width: 0.7, depth: 1});
window.scene.getMeshByName('window_glass').rotation = new BABYLON.Vector3(Math.PI/-2, 0 , 0);
window_glass.material=window.scene.getMaterialByName('window_glass_material');


//singleoor
window.scene.getMeshByName('door_single').scaling.x=10;
window.scene.getMeshByName('door_single').scaling.z=10;
window.scene.getMeshByName('door_single').scaling.y=10;

window.scene.getMeshByName('door_single').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('door_single').bakeCurrentTransformIntoVertices;

window.scene.getMeshByName('door_wood').material=window.scene.getMaterialByName('Wood_Material');
//window.scene.getMeshByName('door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');


//window
window.scene.getMeshByName('window').material=window.scene.getMaterialByName('Wood_Material');

//door_double

//window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_middle').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');

window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('double_door_hingles').material=window.scene.getMaterialByName('door_hingles');
//window.scene.getMeshByName('double_door_hangle').material=window.scene.getMaterialByName('door_handle');



window.scene.getMeshByName('door_double').scaling.x=10;
window.scene.getMeshByName('door_double').scaling.z=10;
window.scene.getMeshByName('door_double').scaling.y=10;



for(let i=1; i<=4; i++)
{
window.scene.getMeshByName('door_single').clone('house_1_door_single_left_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_left_' + i);

window.scene.getMeshByName('door_single').clone('house_1_door_single_right_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_right_' + i);

window.scene.getMeshByName('door_double').clone('house_1_door_double_' + i);
window.scene.getMeshByName('door_double').clone('house_2_door_double_' + i);



window.scene.getMeshByName('house_1_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_1_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_1_door_single_left_' + i).position.x=-1;

window.scene.getMeshByName('house_2_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_2_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_2_door_single_left_' + i).position.x=-1;



window.scene.getMeshByName('window').clone('house_1_window_' + i);
window.scene.getMeshByName('window').clone('house_2_window_' + i);


window.scene.getMeshByName('window_glass').clone('house_1_window_glass_' + i);
window.scene.getMeshByName('window_glass').clone('house_2_window_glass_' + i);
}


//hide garbage
window.scene.getMeshByName('window').setEnabled(false);
window.scene.getMeshByName('window_glass').setEnabled(false);
window.scene.getMeshByName('door_double').setEnabled(false);
window.scene.getMeshByName('door_single').setEnabled(false);


//window1
window.scene.getMeshByName('house_1_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);


window.scene.getMeshByName('house_1_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);


//single door left
window.scene.getMeshByName('house_1_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//single door right
window.scene.getMeshByName('house_1_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

//double door

window.scene.getMeshByName('house_1_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//Window Y
window.scene.getMeshByName('house_1_window_1').position.y = 1;
window.scene.getMeshByName('house_1_window_2').position.y = 1;
window.scene.getMeshByName('house_1_window_3').position.y = 1;
window.scene.getMeshByName('house_1_window_4').position.y = 1;

window.scene.getMeshByName('house_2_window_1').position.y = 1;
window.scene.getMeshByName('house_2_window_2').position.y = 1;
window.scene.getMeshByName('house_2_window_3').position.y = 1;
window.scene.getMeshByName('house_2_window_4').position.y = 1;


window.scene.getMeshByName('house_1_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_4').position.y = 1.5;

window.scene.getMeshByName('house_2_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_4').position.y = 1.5;





}

function houseSetUI()
{
for(let houseID=1; houseID<=2; houseID++)
{
for(let wallID=1; wallID<=4; wallID++)
{
  for(let i=0; i<=6; i++)
  {
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesActive');
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesInactive');

  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxActive');
  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxInative');



if (window.appState['house' +  houseID + 'wall' + wallID] == i)
{
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesActive');
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesInactive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxActive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxInative');
}

}
}
}

}

function housesSet(houseID, wallID, elementID)
{
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
window.appState['house' +  houseID + 'wall' + wallID] = elementID;
buildRound();
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
}

function elementsUpdate(){
//set off

let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2000;
let xStart=(x/2)*-0.001;

let house1width = window.appState['house1width']/1000;
let house2width = window.appState['house2width']/1000;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;

let windowAndDoorShift=0;



if (window.appState['house1width'] < 2500 )
{
if (window.appState['house1wall1']>3)window.appState['house1wall1']=2;
if (window.appState['house1wall2']>3)window.appState['house1wall2']=2;
}

if (window.appState['house2width'] < 2500 )
{
if (window.appState['house2wall1']>3)window.appState['house2wall1']=2;
if (window.appState['house2wall2']>3)window.appState['house2wall2']=2;
}

if (window.appState['deepth']==3000 && window.appState['rooftype']==1)
{

  if (window.appState['house1wall3']>3)window.appState['house1wall3']=2;
  if (window.appState['house1wall4']>3)window.appState['house1wall4']=2;
  if (window.appState['house2wall3']>3)window.appState['house2wall3']=2;
  if (window.appState['house2wall4']>3)window.appState['house2wall4']=2;

}

if(window.appState['rooftype']==1)
{
window.appState['house1wall2']=0;
window.appState['house2wall2']=0;

}

for(let i=1; i<=4; i++)
{
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(false);


if (window.appState['house1on']==true)
{
if (window.appState['house1wall' + i] == 1)
{
window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}
if (window.appState['house1wall' + i] == 2) window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 3) window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 4) window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(true);

if (window.appState['house1wall' + i] == 5) {
  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

if (window.appState['house1wall' + i] == 6) {
  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

}


if (window.appState['house2on']==true)
{

if (window.appState['house2wall' + i] == 1)
{
window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 2) window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 3) window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 4) window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(true);

if (window.appState['house2wall' + i] == 5) {
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 6) {
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}


}

}


//windows
window.scene.getMeshByName('house_1_window_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_1').position.z = zBack * -1 ;
window.scene.getMeshByName('house_1_window_2').position.z = zBack +0.01;

window.scene.getMeshByName('house_2_window_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_2').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_1').position.z = zBack * -1 ;
window.scene.getMeshByName('house_2_window_2').position.z = zBack +0.01;


///3 4
window.scene.getMeshByName('house_1_window_3').position.x = xStart - 0.09;
window.scene.getMeshByName('house_1_window_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_window_3').position.x = xStart * -1 - house2width - 0.09;
window.scene.getMeshByName('house_2_window_4').position.x = xStart * -1  + 0.08;

window.scene.getMeshByName('house_1_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_4').position.z = 0-shiftZ/2 ;




//_glass
window.scene.getMeshByName('house_1_window_glass_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_glass_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_window_glass_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_glass_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_window_glass_1').position.z = zBack * -1;
window.scene.getMeshByName('house_1_window_glass_2').position.z = zBack;
window.scene.getMeshByName('house_2_window_glass_1').position.z = zBack * -1;
window.scene.getMeshByName('house_2_window_glass_2').position.z = zBack;

// 3 4
window.scene.getMeshByName('house_1_window_glass_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_window_glass_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_window_glass_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_window_glass_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_glass_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_4').position.z = 0-shiftZ/2 ;


//DOOR LEFT
window.scene.getMeshByName('house_1_door_single_left_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_left_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_left_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_left_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_left_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_1_door_single_left_2').position.z = zBack      + 0.01;
window.scene.getMeshByName('house_2_door_single_left_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_2_door_single_left_2').position.z = zBack      + 0.01;

// 3 4
window.scene.getMeshByName('house_1_door_single_left_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_door_single_left_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_door_single_left_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_door_single_left_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_left_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_4').position.z = 0-shiftZ/2 ;

//DOOR right
window.scene.getMeshByName('house_1_door_single_right_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_right_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_right_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_right_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_right_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_1_door_single_right_2').position.z = zBack      + 0.01;
window.scene.getMeshByName('house_2_door_single_right_1').position.z = zBack * -1 - 0.01;
window.scene.getMeshByName('house_2_door_single_right_2').position.z = zBack      + 0.01;

// 3 4
window.scene.getMeshByName('house_1_door_single_right_3').position.x = xStart - 0.08;
window.scene.getMeshByName('house_1_door_single_right_4').position.x = xStart + house1width + 0.08;
window.scene.getMeshByName('house_2_door_single_right_3').position.x = xStart * -1 - house2width - 0.08;
window.scene.getMeshByName('house_2_door_single_right_4').position.x = xStart * -1  + 0.08;


window.scene.getMeshByName('house_1_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_right_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_4').position.z = 0-shiftZ/2 ;



//double DOOR
window.scene.getMeshByName('house_1_door_double_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_double_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_double_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_double_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_double_1').position.z = zBack * -1 - 0.04;
window.scene.getMeshByName('house_1_door_double_2').position.z = zBack      + 0.04;
window.scene.getMeshByName('house_2_door_double_1').position.z = zBack * -1 - 0.04;
window.scene.getMeshByName('house_2_door_double_2').position.z = zBack      + 0.04;

// 3 4
window.scene.getMeshByName('house_1_door_double_3').position.x = xStart - 0.1;
window.scene.getMeshByName('house_1_door_double_4').position.x = xStart + house1width + 0.1;
window.scene.getMeshByName('house_2_door_double_3').position.x = xStart * -1 - house2width - 0.1;
window.scene.getMeshByName('house_2_door_double_4').position.x = xStart * -1  + 0.1;


window.scene.getMeshByName('house_1_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_double_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_4').position.z = 0-shiftZ/2 ;


//DOUBLE OPTION
windowAndDoorShift=0.5;

if (window.appState['house1wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house1wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house1wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house1wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x -= windowAndDoorShift;
}

//

if (window.appState['house2wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house2wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house2wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house2wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x -= windowAndDoorShift;
}


/////3
if (window.appState['house1wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house1wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house1wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house1wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z -= windowAndDoorShift;
}

// house 2 , 3 4
if (window.appState['house2wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house2wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house2wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house2wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z -= windowAndDoorShift;
}








if (window.appState['rooftype']==0 && z==5000 )
{
  windowAndDoorShift=-1.21;
//
  window.scene.getMeshByName('house_2_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_2_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_3').position.z += windowAndDoorShift;
//
  window.scene.getMeshByName('house_1_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_1_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_3').position.z += windowAndDoorShift;

}

if (window.appState['house1width'] == window.appState['width'] && window.appState['house1on'] == true)
{
  window.scene.getMeshByName('balk_small_front_left_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_left_2').setEnabled(false);
}

if (window.appState['house2width'] == window.appState['width'] && window.appState['house2on'] == true)
{
  window.scene.getMeshByName('balk_small_front_right_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_right_2').setEnabled(false);
}





houseSetUI();

}
function createHouses()
{
  //walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house1_balk');
window.scene.getMeshByName('house1_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('house1_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house1_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house1_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_right_carcas');

window.scene.getMeshByName('wall_house1_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house1_trap_carcas');
window.scene.getMeshByName('wall_trap_1').clone('house1_trap');
window.scene.getMeshByName('wall_trap_0').clone('house1_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house1_front');
window.scene.getMeshByName('wall_house1_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front').bakeCurrentTransformIntoVertices();
  //window.scene.getMeshByName('wall_house1_front').flipFaces();


  window.scene.getMeshByName('wall_big').clone('wall_house1_back');
  window.scene.getMeshByName('wall_big').clone('wall_house1_left');
  window.scene.getMeshByName('wall_big').clone('wall_house1_right');


  window.scene.getMeshByName('wall_house1_left').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_left').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_left').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_right').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_right').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house1_right').flipFaces();
  window.scene.getMeshByName('wall_house1_right').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_left').clone('wall_house1_right_inside');
  window.scene.getMeshByName('wall_house1_right').clone('wall_house1_left_inside');
  window.scene.getMeshByName('wall_house1_front').clone('wall_house1_back_inside');
  window.scene.getMeshByName('wall_house1_back').clone('wall_house1_front_inside');






///2

//walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house2_balk');
window.scene.getMeshByName('house2_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
//house2_wall_roof_inside_  house2_wall_roof_
window.scene.getMeshByName('wall_roof_' + i).clone('house2_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house2_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house2_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_right_carcas');

window.scene.getMeshByName('wall_house2_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house2_trap_carcas');

window.scene.getMeshByName('wall_trap_0').clone('house2_trap');
window.scene.getMeshByName('wall_trap_1').clone('house2_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house2_front');
window.scene.getMeshByName('wall_house2_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front').bakeCurrentTransformIntoVertices();
//window.scene.getMeshByName('wall_house2_front').flipFaces();


window.scene.getMeshByName('wall_big').clone('wall_house2_back');
window.scene.getMeshByName('wall_big').clone('wall_house2_left');
window.scene.getMeshByName('wall_big').clone('wall_house2_right');


window.scene.getMeshByName('wall_house2_left').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_right').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house2_right').flipFaces();
window.scene.getMeshByName('wall_house2_right').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_left').clone('wall_house2_right_inside');
window.scene.getMeshByName('wall_house2_right').clone('wall_house2_left_inside');
window.scene.getMeshByName('wall_house2_front').clone('wall_house2_back_inside');
window.scene.getMeshByName('wall_house2_back').clone('wall_house2_front_inside');

}





function rebuildHouses()
{
let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2;
let xStart=(x/2)*-0.001;
let insideShiftX = 0.00;
let insideShiftZ = 0.00;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;




if (window.appState['house1on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house1_front').setEnabled(true);
window.scene.getMeshByName('wall_house1_back').setEnabled(true);
window.scene.getMeshByName('wall_house1_left').setEnabled(true);
window.scene.getMeshByName('wall_house1_right').setEnabled(true);

window.scene.getMeshByName('house1_balk').setEnabled(true);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house1_trap').setEnabled(true);
window.scene.getMeshByName('house1_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house1_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house1_front').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back').scaling.x =((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_inside').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_inside').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house1_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house1_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house1_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house1_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house1_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house1_trap').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_carcas').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_carcas').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_carcas').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house1_wall_roof_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house1_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house1_balk').position=new BABYLON.Vector3(xStart + window.appState['house1width']/1000,  2.2+0.075, (zBack*-1)*0.001);


}

if (window.appState['house1on']==false)
{
window.scene.getMeshByName('wall_house1_front').setEnabled(false);
window.scene.getMeshByName('wall_house1_back').setEnabled(false);
window.scene.getMeshByName('wall_house1_left').setEnabled(false);
window.scene.getMeshByName('wall_house1_right').setEnabled(false);

window.scene.getMeshByName('house1_balk').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(false);


window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}


}

//////////
xStart=(x/2)*0.001 - window.appState['house2width']/1000;

if (window.appState['house2on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house2_front').setEnabled(true);
window.scene.getMeshByName('wall_house2_back').setEnabled(true);
window.scene.getMeshByName('wall_house2_left').setEnabled(true);
window.scene.getMeshByName('wall_house2_right').setEnabled(true);

window.scene.getMeshByName('house2_balk').setEnabled(true);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house2_trap').setEnabled(true);
window.scene.getMeshByName('house2_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house2_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house2_front').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back').scaling.x =((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_inside').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_inside').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house2_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house2_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house2_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house2_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house2_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house2width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house2_trap').position=       new BABYLON.Vector3(xStart  - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_inside').position=new BABYLON.Vector3(xStart  - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_carcas').position=new BABYLON.Vector3(xStart  + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_carcas').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_carcas').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house2_wall_roof_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house2_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house2_balk').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);


}





if (window.appState['house2on']==false)
{
window.scene.getMeshByName('wall_house2_front').setEnabled(false);
window.scene.getMeshByName('wall_house2_back').setEnabled(false);
window.scene.getMeshByName('wall_house2_left').setEnabled(false);
window.scene.getMeshByName('wall_house2_right').setEnabled(false);

window.scene.getMeshByName('house2_balk').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(false);







window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}


}































if (window.appState['wallInside']==false || window.appState['rooftype']==0)
{
for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);
}
//disable roof inside
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
}



if (window.appState['wallInside']==false)
{
//disable roof
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
//disable inner trap
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);
}







}
var section=[];

section['a2']={};

section['a2'].x=0;
section['a2'].width=4;

section['a2'].mesh=[];
section['a2'].mesh[0]={};
section['a2'].mesh[0].enabled=true;
section['a2'].mesh[0].id='zhaluzi_a2_0';
section['a2'].mesh[0].width=1;
section['a2'].mesh[0].type=1;
section['a2'].mesh[0].x=1;


section['a2'].mesh[1]={};
section['a2'].mesh[1].enabled=true;
section['a2'].mesh[1].id='zhaluzi_a2_1';
section['a2'].mesh[1].width=1;
section['a2'].mesh[1].type=1;
section['a2'].mesh[1].x=2.7;

section['a2'].mesh[2]={};
section['a2'].mesh[2].enabled=true;
section['a2'].mesh[2].id='zhaluzi_a2_2';
section['a2'].mesh[2].width=1;
section['a2'].mesh[2].type=1;
section['a2'].mesh[2].x=3.4;

//alert(section['a2'].x);



function updateSections()
{
return false;
for (let i=0; i < section['a2'].mesh.length; i++)
{
let id = section['a2'].mesh[i].id;
let mesh = window.scene.getMeshByName(id);
mesh.position.x = window.scene.getMeshByName('balk_front_2').position.x + section['a2'].mesh[i].x;
mesh.position.z = window.scene.getMeshByName('balk_front_2').position.z - 0.1;
mesh.minXposition =  window.scene.getMeshByName('balk_front_2').position.x + 0.4;
mesh.maxXposition =  window.scene.getMeshByName('balk_front_3').position.x - 0.4;
}


updateSectionElement('a2','zhaluzi_a2_2');

}

function updateSectionElement(sectionID,elementID)
{
//update object
let xStart = window.scene.getMeshByName('balk_front_2').position.x;
let sectionWidth =  window.scene.getMeshByName('balk_front_3').position.x -  window.scene.getMeshByName('balk_front_2').position.x;


for (let i=0; i<section[sectionID].mesh.length; i++)
{
if (section[sectionID].mesh[i].id == elementID)
{
section[sectionID].mesh[i].x=window.scene.getMeshByName(elementID).position.x - xStart;
}
}

let currentMeshId=section[sectionID].mesh.filter(obj => {return obj.id == 'zhaluzi_a2_2'});
console.log(currentMeshId);

//



//elements sorting
let elementArrayTemp1=[];

for (let i=0; i<section[sectionID].mesh.length; i++)
{
if (section[sectionID].mesh[i].enabled==true) elementArrayTemp1.push(section[sectionID].mesh[i]);
}

elementArrayTemp1.sort(function (a, b) {
  if (a.x - a.width/2 > b.x) {
    return 1;
  }
  if (a.x - a.width/2  < b.x) {
    return -1;
  }
  return 0;
});
console.log(elementArrayTemp1);
section[sectionID].mesh=elementArrayTemp1;


//SPAN

//first
for (let i=0; i<section[sectionID].mesh.length; i++)
{
  let mesh =  window.scene.getMeshByName(section[sectionID].mesh[i].id);



if (i==0){

if(section[sectionID].mesh[i].x < 0.875)
{

 mesh.position.x = xStart + 0.5 + 0.075;
 section[sectionID].mesh[i].x= 0.5 + 0.075;
}
}

if (i != 0 && i != section[sectionID].mesh.length - 1)
{

}



//last element
if (i == section[sectionID].mesh.length - 1)
{
if(section[sectionID].mesh[i].x > sectionWidth - 0.875)
{
 mesh.position.x = xStart + sectionWidth - 0.5 - 0.075;
 section[sectionID].mesh[i].x= sectionWidth - 0.5 - 0.075;
}

}


if (i< section[sectionID].mesh.length - 1  && section[sectionID].mesh[i].id == elementID)
{

if(section[sectionID].mesh[i+1].x - section[sectionID].mesh[i].x < 1.3){
section[sectionID].mesh[i].x = section[sectionID].mesh[i+1].x -1;
mesh.position.x = xStart + section[sectionID].mesh[i+1].x -1;
}

if(section[sectionID].mesh[i].x - section[sectionID].mesh[i-1].x < 1.3 && i!= 0 ){
section[sectionID].mesh[i].x = section[sectionID].mesh[i-1].x + 1;
mesh.position.x = xStart + section[sectionID].mesh[i-1].x + 1;
}

}


if (i==section[sectionID].mesh.length - 1  && section[sectionID].mesh[i].id == elementID)
{

}



}



let elementArrayTemp2=[];











let elementID_other1;
let elementID_other2;







if (5===4)
{
if (elementID == 0 ){elementID_other1=1; elementID_other2=2;}
if (elementID == 1 ){elementID_other1=0; elementID_other2=2;}
if (elementID == 2 ){elementID_other1=0; elementID_other2=1;}

let mesh =  window.scene.getMeshByName(section[sectionID].mesh[elementID].id);
let mesh1 =  window.scene.getMeshByName(section[sectionID].mesh[elementID_other1].id);
//let mesh2 =  window.scene.getMeshByName(section[sectionID].mesh[elementID].id);
section[sectionID].mesh[elementID].x = mesh.position.x;
let distanceTo1;


//check left
if(section[sectionID].mesh[elementID].x < 0.875)
{
 mesh.position.x = 0.5 + 0.075;
 section[sectionID].mesh[elementID].x= 0.5 + 0.075;



 distanceTo1=section[sectionID].mesh[elementID].x - section[sectionID].mesh[elementID_other1].x;

 if( distanceTo1 > -1.31 && distanceTo1 < 0)
 {
 mesh1.position.x = mesh.position.x + 1;
 section[sectionID].mesh[elementID_other1].x=section[sectionID].mesh[elementID].x + 1;
 }

}
else
{
distanceTo1=section[sectionID].mesh[elementID].x - section[sectionID].mesh[elementID_other1].x;

if( distanceTo1 < 1.31 && distanceTo1 >= 0)
{
mesh.position.x = mesh1.position.x + 1;
section[sectionID].mesh[elementID].x=section[sectionID].mesh[elementID_other1].x + 1;
}

if( distanceTo1 > -1.31 && distanceTo1 < 0)
{
mesh.position.x = mesh1.position.x - 1;
section[sectionID].mesh[elementID].x=section[sectionID].mesh[elementID_other1].x - 1;
}

}

}
/////



if (elementID==1)
{

}




}



//var onPointerDown=null;
var onPointerDown = function (evt) {
var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) {
return mesh;
});
if (pickInfo.hit) {
let currentMesh = pickInfo.pickedMesh;
if (currentMesh.draggable==true)
{
window.appState['currentDragMesh']=currentMesh.name;
console.log('StartDraggin ' + currentMesh.name + ' curent mesh sect and id ' + currentMesh.parentSectionID + ' / ' + currentMesh.elementID );
}
else window.appState['currentDragMesh']=false;


}
};

var onPointerUp = function (evt) {
if (window.appState['currentDragMesh']!=false)
{
let currentMesh = window.scene.getMeshByName(window.appState['currentDragMesh']);
console.log('StopDraggin ' + currentMesh.name + ' curent mesh sect and id ' + currentMesh.parentSectionID + ' / ' + currentMesh.elementID );
 updateSectionElement(currentMesh.parentSectionID , currentMesh.name);
}
};







var dragXbehaivor_a2_zhal_0=new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_0.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}


var dragXbehaivor_a2_zhal_1 = new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_1.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}


var dragXbehaivor_a2_zhal_2 = new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,0,0)});

dragXbehaivor_a2_zhal_2.validateDrag = function(targetPosition)
{
//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName(this.meshId);
window.appState['currentDragMesh']=this.meshId;

console.log(this.meshId);

if (targetPosition.x <
currentDragMesh.minXposition){
targetPosition.x = currentDragMesh.minXposition;
return false;
}

if (targetPosition.x >
currentDragMesh.maxXposition){
targetPosition.x = currentDragMesh.maxXposition;
return false;
}

//console.log(this);
return true;
}

















var dragZbehaivor=new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(0,0,1)});
dragZbehaivor.validateDrag = function(targetPosition)
{

//console.log(targetPosition.x);
//let currentDragMesh=window.scene.getMeshByName(window.appState['currentDragMesh']);
let currentDragMesh = window.scene.getMeshByName('zhaluziZ');
window.appState['currentDragMesh']=this.meshId;

if (targetPosition.z <
currentDragMesh.minZposition){
targetPosition.z = currentDragMesh.minZposition;
//return false;
}

if (targetPosition.z >
currentDragMesh.maxZposition){
targetPosition.z = currentDragMesh.maxZposition;
//return false;
}

//console.log(this);
return true;
}


function switchUI(id){
let newstate=window.appState['uiMenu'+id];
if(window.appState['uiMenu'+id]==1)
{
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleInactive');
newstate=0;

  //document.getElementById('builderBlock' + id).classList.remove('optionHouseCheckboxActive');

  //document.getElementById('builderBlock' + id).classList.add('optionHouseCheckboxInctive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='none';

  document.getElementById('builderArrow' + id).classList.remove('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.add('builderArrowInactive');


}
else
{
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleInactive');

  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='block';


  document.getElementById('builderArrow' + id).classList.add('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.remove('builderArrowInactive');

newstate=1;

}
window.appState['uiMenu'+id]=newstate;
}


function closeLoader()
{
document.getElementById('loader1').style.display='none';
document.getElementById('loader2').style.display='none';
document.getElementById('loaderBG').style.display='none';

}

function switchUIsummary()
{
if (document.getElementById('optionsBox').style.display=='none')
document.getElementById('optionsBox').style.display='block'; else document.getElementById('optionsBox').style.display='none';

}


function buildingType1Select()
{
window.appState['rooftype']=0;
setSizes();
//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('canopy1').setEnabled(true);

//window.scene.getMeshByName('canopy2').visibility=false;

//document.getElementById('loader1').style.display='none';
//document.getElementById('loader2').style.display='none';


document.getElementById('optionHouse1').classList.remove('optionHouseInactive');
document.getElementById('optionHouse1').classList.add('optionHouseActive');
document.getElementById('optionHouse2').classList.remove('optionHouseActive');
document.getElementById('optionHouse2').classList.add('optionHouseInactive');


document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxInctive');

document.getElementById('builderOptions2_1').style.display='block';



}

function buildingType2Select()
{
window.appState['rooftype']=1;
setSizes();
//window.scene.getMeshByName('canopy1').setEnabled(false);
//window.scene.getMeshByName('canopy2').setEnabled(true);

document.getElementById('optionHouse2').classList.remove('optionHouseInactive');
document.getElementById('optionHouse2').classList.add('optionHouseActive');
document.getElementById('optionHouse1').classList.remove('optionHouseActive');
document.getElementById('optionHouse1').classList.add('optionHouseInactive');


document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxInctive');


document.getElementById('builderOptions2_1').style.display='none';

}

function setPlusWidth(){

let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('widthInput').value = x;
window.appState['width'] = x;

setSizes();
}

function setMinusWidth()
{

let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('widthInput').value = x ;
window.appState['width'] = x;

setSizes();
}


function setPlusDeepth(){

let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('deepthInput').value = x;
window.appState['deepth'] = x;

setSizes();
}

function setMinusDeepth()
{
console.log (window.appState['deepth']);
let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('deepthInput').value = x ;
window.appState['deepth'] = x;

setSizes();
}





function setWidthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('widthInput').value;
value=Math.round(value/500)*500;
document.getElementById('widthInput').value=value;
window.appState['width']=value;
document.getElementById("rangeWidth").value=value;
setSizes();
}
}

function setDeepthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('deepthInput').value;
value=Math.round(value/500)*500;
document.getElementById('deepthInput').value=value;
window.appState['deepth']=value;
document.getElementById("rangeDeepth").value=value;
setSizes();
}
}


function setValueByEnter(id, stateId, value, defaultValue)
{
if(event.key === 'Enter') {
let x =  document.getElementById(id).value;
if (isInt(x)==false) x = defaultValue;
document.getElementById(id).value = x ;
window.appState[stateId] = x;

setSizes();
}
}



function zoom(direction)
{
if (direction==1) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius - 2, 200);
if (direction==0) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius + 2, 200);
}


//overhangs

function uiPlus(id,stateId, value, defaultValue)
{
  let x = window.appState[stateId];

  if (isInt(x)==false) x = defaultValue; else x = x * 1 + value;
  document.getElementById(id).value = x ;
  window.appState[stateId] = x;

  setSizes();

}



function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function setSizes(){

//ocument.getElementById("myCheck").checked = true;
if (document.getElementById("house1on").checked == false) window.appState['house1on']=false;
if (document.getElementById("house1on").checked == true)  window.appState['house1on']=true;
if (document.getElementById("house2on").checked == false) window.appState['house2on']=false;
if (document.getElementById("house2on").checked == true)  window.appState['house2on']=true;

if (window.appState['house1on']==false) document.getElementById("house1optionsBlock").style.display='none';
if (window.appState['house1on']==true)  document.getElementById("house1optionsBlock").style.display='block';
if (window.appState['house2on']==false) document.getElementById("house2optionsBlock").style.display='none';
if (window.appState['house2on']==true)  document.getElementById("house2optionsBlock").style.display='block';


console.log(document.getElementById("house2on").checked);


	let x = window.appState['width'];
	let z = window.appState['deepth'];
  let overhangLeft = window.appState['overhangLeft'];
	let overhangRight = window.appState['overhangRight'];
	let overhangFront = window.appState['overhangFront'];
	let overhangBack = window.appState['overhangBack'];
  let house1width = window.appState['house1width'];
  let house2width = window.appState['house2width'];


	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;
	if (isInt(overhangLeft)==false) overhangLeft=200;
  if (isInt(overhangRight)==false) overhangRight=200;
  if (isInt(overhangFront)==false) overhangFront=200;
  if (isInt(overhangBack)==false) overhangBack=200;
  if (isInt(house1width)==false)house1width=2000;
	if (isInt(house2width)==false)house2width=2000;

x=Math.round(x/500)*500;
z=Math.round(z/500)*500;
overhangLeft=Math.round(overhangLeft/50)*50;
overhangRight=Math.round(overhangRight/50)*50;
overhangFront=Math.round(overhangFront/50)*50;
overhangBack=Math.round(overhangBack/50)*50;
house1width=Math.round(house1width/500)*500;
house2width=Math.round(house2width/500)*500;


if(x<3000){x=3000;}
if(x>20000){x=20000;}

if(overhangLeft<0){overhangLeft=0;}
if(overhangRight<0){overhangRight=0;}
if(overhangFront<0){overhangFront=0;}
if(overhangBack<0){overhangBack=0;}

if(z<3000){z=3000;}
if(z>5000){z=5000;}

if(house1width<1500){house1width=1500;}
if(house1width>4000){house1width=4000;}
if(house2width<1500){house2width=1500;}
if(house2width>4000){house2width=4000;}




if(overhangLeft>350){overhangLeft=350;}
if(overhangRight>350){overhangRight=350;}
if(overhangFront>350){overhangFront=350;}
if(overhangBack>350){overhangBack=350;}


if (window.appState['house1on']==true && window.appState['house2on']==true)
{
if (x< house1width + house2width) x =  house1width + house2width;
}

if (window.appState['house1on']==true && window.appState['house2on']==false)
{
if (x< house1width) x =  house1width;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
if (x < house2width) x =  house2width;
}




window.appState['width']=x;
window.appState['deepth']=z;
window.appState['overhangLeft'] =  overhangLeft;
window.appState['overhangRight'] = overhangRight;
window.appState['overhangFront'] = overhangFront;
window.appState['overhangBack'] = overhangBack;

window.appState['house1width'] = house1width;
window.appState['house2width'] = house2width;




document.getElementById('widthInput').value = x;
document.getElementById('deepthInput').value = z;

document.getElementById('house1width').value = house1width;
document.getElementById('house2width').value = house2width;


document.getElementById("rangeWidth").value=x;
document.getElementById("rangeDeepth").value=z;

document.getElementById("overhangLeft").value=overhangLeft;
document.getElementById("overhangRight").value=overhangRight;
document.getElementById("overhangFront").value=overhangFront;
document.getElementById("overhangBack").value=overhangBack;






buildRound();

}
