function spaceOpenUIdiv(id)
{
window.appState['uiSpaceUIEnabled']=true;
document.getElementById('uiSpace').style.display='block';
console.log('open');




//spaceOpenUI(id);
}

function spaceCloseUIdiv()
{
window.appState['uiSpaceUIEnabled']=false;
document.getElementById('uiSpace').style.display='none';
console.log('close');

for(let ip=0; ip<=17; ip++)
{
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.0;
}

}


function spaceOpenUI(id)
{
window.appState['uiSpaceID']=id;

for(let ip=0; ip<=17; ip++)
{
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.0;


if(ip==id && window.appState['uiSpaceUIEnabled']==true){
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.8;
}

}


for(let i=0; i<3; i++)
{

for(let ii=0; ii<4;ii++)
{
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#CCCCCC';
if (window.appSection[id].place[i]==ii)
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#FF0000';
}





}


//set all to null
if(window.appSection[id].place[0]==0 && window.appSection[id].place[1]==0 && window.appSection[id].place[2]==0)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='none';
document.getElementById('spaceBlock3').style.display='none';
}

if(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]==0 && window.appSection[id].place[2]==0)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='none';
}

if(

(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]!=0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='block';
}













if(

(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]!=0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='block';
}




if(

((window.appSection[id].place[0]!=3 && window.appSection[id].place[1]==3) && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]==3 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='none';
}
















}

function spaceUIupdateSections()
{
for(let i=0;i<=17;i++)
{
let ID=i;
let sectionWidth = window.appState['sectionWidth'];

//if ( (sectionWidth < = 3300 && ) ){};


	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[1]==3) window.appSection[ID].place[2]=0;
	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[0]==3) window.appSection[ID].place[2]=0;



	if (window.appSection[ID].place[0]==3 && window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[1]==0 && window.appSection[ID].place[2]!=0)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[0]==0 && window.appSection[ID].place[1]!=0)
	{
		window.appSection[ID].place[0]=window.appSection[ID].place[1];
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]==3 || window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]!=3 && window.appSection[ID].place[1]!=3 && window.appSection[ID].place[2]==3)
	{
		window.appSection[ID].place[2]=0;
	}




}
}






function spaceSetUI(elementID, value)
{
console.log(elementID + ' ' + value);

let ID = window.appState['uiSpaceID'];
window.appSection[ID].place[elementID]=value;
console.log(window.appSection[ID]);
spaceUIupdateSections();
spaceOpenUI(ID);
buildRound();
}
