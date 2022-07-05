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
}

function updateSectionElement(sectionID,elementID)
{
return false;	
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




