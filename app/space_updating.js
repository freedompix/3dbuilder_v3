function spaceUpdating()
{




let x = window.appState['width']/1000;
let z = window.appState['deepth']/1000;

// window.appState['sectionsNumber']







for(let i=0;i<=17;i++)
{

//wall, redplane, buttonplane. 4 x 1m bulk

window.scene.getMeshByName('sec_' + i + '_balk_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_door2m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_2').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_door3m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_2').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_door4m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_2').setEnabled(false);




document.getElementById('sectionButton' + i).style.display='none';
document.getElementById('sectionButton' + i).style.backgroundColor='#FFFFFF';

let sectionFrontMax = window.appState['sectionsNumber'];
if (window.appState['house2on']==true) sectionFrontMax--;



if (

(
(i<7) &&
(i<sectionFrontMax) &&
!(window.appState['house1on']==true && i==0)
)

||

(
(i>=7 && i<14) &&
(i<sectionFrontMax+7) &&
!(window.appState['house1on']==true && i==7) &&
window.appState['rooftype']==0
)


||

(
(i==14)  &&
(window.appState['house1on']==false)
)

||

(i==15  && window.appState['house1on']==false && window.appState['deepth'] >= 4500  && window.appState['rooftype']==0)

||

(
(i==16)  &&
(window.appState['house2on']==false)
)

||

(i==17  && window.appState['house2on']==false && window.appState['deepth'] >= 4500 && window.appState['rooftype']==0)



)
{
//START RENDERING SECTION i

document.getElementById('sectionButton' + i).style.display='inline-block';

if (i == window.appState['uiSpaceID'])
{
document.getElementById('sectionButton' + i).style.backgroundColor='#FF0000';
document.getElementById("spaceWall").checked = window.appSection[i].wall;
console.log('checked wall: ' + document.getElementById("spaceWall").checked + ' ' + window.appSection[i].wall);
}

//console.log(i);
window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(true);





let xID = i;
if (i>=7 && i<=13) xID = i - 7;
//console.log(xID);
let balk1x = xID + 1;
let balk2x = xID + 2;


let balkXposition=[0,0,0,0];
let elementXposition = [0,0,0];

let cursorX=0;
let elementsMax = 3 - 1;
if (window.appSection[i].place[0]==3 || window.appSection[i].place[1]==3 || window.appSection[i].place[2]==3) elementsMax =elementsMax - 1;


let startX;
let sectionWidth;
let tempZ=window.appState['deepth']/1000;

if(i<14)
{
startX = window.scene.getMeshByName('1meter_balk_front_' + balk1x).position.x;
sectionWidth = window.scene.getMeshByName('1meter_balk_front_' + balk2x).position.x - window.scene.getMeshByName('1meter_balk_front_' + balk1x).position.x;
}

if(i == 14 || i == 16)
{
startX=z/-2;
if (window.appState['rooftype']==0 && window.appState['deepth']<4500) sectionWidth=z;


if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
sectionWidth=z/2;
}
if (window.appState['rooftype']==1) sectionWidth = z-1;

}

if(i == 15 || i == 17)
{
startX = 0 - 0.075;
sectionWidth=z/2;
}







//console.log(sectionWidth);

if (window.appSection[i].orientation==0)
{
startX=startX+ 0.15;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 3).setEnabled(true);
}

if (window.appSection[i].orientation==1)
{
//window.scene.getMeshByName('sec_' + i + '_balk_' + 0).setEnabled(true);
}



for(let ii=0; ii<=elementsMax; ii++)
{
let distanceBetweenElements=0;


//set delimiter balk
if (ii!==0)
{
if(
(window.appSection[i].place[ii]==1   && (window.appSection[i].place[ii-1]==2 || window.appSection[i].place[ii-1]==3))
||
(window.appSection[i].place[ii-1]==1 && (window.appSection[i].place[ii]==2   || window.appSection[i].place[ii]==3))
)
{
cursorX = cursorX + 0.15;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = cursorX - 0.075;
balkXposition[ii]=cursorX;
}
}

elementXposition[ii]=cursorX;
//console.log(window.appState['sectionWidth']/1000 );
//console.log(cursorX + 1 );
//console.log(window.appState['sectionWidth']/1000 > cursorX + 1);

// disable limiter for 4m glass door



if
(
(sectionWidth > cursorX + 1 && ( window.appSection[i].place[ii]==1 || window.appSection[i].place[ii]==2))
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==3)
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==4)
||
(sectionWidth > cursorX + 3 && window.appSection[i].place[ii]==5)
||
(sectionWidth > cursorX + 3.84 && window.appSection[i].place[ii]==6)
)

{
if (window.appSection[i].place[ii]==1)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==2)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==3)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).setEnabled(true);
cursorX = cursorX + 2;
}


if (window.appSection[i].place[ii]==4)
{
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).setEnabled(true);
cursorX = cursorX + 2;
}

if (window.appSection[i].place[ii]==5)
{
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).setEnabled(true);
cursorX = cursorX + 3;
}

if (window.appSection[i].place[ii]==6)
{
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).setEnabled(true);
cursorX = cursorX + 3.70;
}


/// add here 4 and 5








}
else window.appSection[i].place[ii]=0;



}


//REDRAW FOR X AND Z
for(let ii=0; ii<=elementsMax; ii++)
{




//FRONT AND BACK
if(i<=13)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = startX + elementXposition[ii] + 0.5;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = startX +  balkXposition[ii] - 0.075;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = startX +  balkXposition[ii];
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = startX +  balkXposition[ii];
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = startX +  balkXposition[ii];

window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.9625;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.9625;



let zMultiplicator=1;
if(i > 6 && i < 14) zMultiplicator = -1;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = z/-2 * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;


//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = z/-2 * zMultiplicator;


window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;


window.scene.getMeshByName('sec_' + i + '_plane').position.z = (z/-2 + 0.01) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = startX + window.appState['sectionWidth']/2000 - 0.075;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = window.appState['sectionWidth']/1000;




//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
console.log('cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x=startX + cursorX + 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = (z/-2 + 0.075) * zMultiplicator;
}

//WALL
if(window.appSection[i].wall==true)
{
  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
  window.scene.getMeshByName('sec_' + i + '_wall').position.x= startX + cursorX + 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = (z/-2 + 0.075 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = ((window.appState['sectionWidth']-150)/1000 - cursorX) /2.775 ;
}





}

//LEFT AND RIGHT
if(i>13)
{


//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = startX +elementXposition[ii];
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = startX +elementXposition[ii];
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = startX +elementXposition[ii];

window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.925;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.925;


window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = startX +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = startX + elementXposition[ii] + 0.5;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = startX +  balkXposition[ii] - 0.075;

let zMultiplicator=1;
if(i == 16 || i == 17) zMultiplicator = -1;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = (x/-2 - 0.07) * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_plane').position.z = 0;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z;


//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
console.log('cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = startX + cursorX + 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x = (x/-2 ) * zMultiplicator;
}



let sectionWidthZ;


if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
{
if(window.appSection[i].wall==true)
{
  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + cursorX + 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01 ) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = ((window.appState['deepth']-150)/1000 - cursorX) /2.775 - 0.01;
}
}


if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{




if (i == 14 || i == 16 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;
}


if (i == 15 || i == 17 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;
//cursorX = cursorX - 0.15;
}


if(window.appSection[i].wall==true)
{
  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + cursorX + 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = ((window.appState['deepth']/2-150)/1000 - cursorX) /2.775  - 0.01;
}



}



if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z - 1;
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - 0.5;
}




}



///DISABLING BULK
if (window.appSection[i].place[0]!=0 || window.appSection[i].place[1]!=0 || window.appSection[i].place[2]!=0 || window.appSection[i].wall==true)
{
if(i<=6)
{
window.scene.getMeshByName('balk_small_front_right_' + (i + 2)).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_'  + (i + 1)).setEnabled(false);
}
if(i > 6 && i < 14)
{
window.scene.getMeshByName('balk_small_back_right_' + (i - 5)).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_'  + (i - 6)).setEnabled(false);
}





if (i == 14)
{
window.scene.getMeshByName('balk_small_front_right_' + 1).setEnabled(false);
if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
else
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
}



if (i == 15)
{
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_' + 1).setEnabled(false);
}

if (i == 16)
{
  let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
  window.scene.getMeshByName('balk_small_front_left_' + sectionsNumberTemp).setEnabled(false);
  if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  else
  window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
}


if (i == 17)
{
let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_0').setEnabled(false);
}



}







}




if (window.appSection[i].place[0]==6)
{
//window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
}

}






}









}
