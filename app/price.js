function parseItem(elementID)
{
let value = document.getElementById(elementID).innerHTML;
value = parseFloat(value); 
if (isNaN(value)) value = 0; // checking for "--"

return value;

}

function price()
{
let price = 0;	

//Betonpoer 
price = price + parseItem('item_vertical_beam_fundament') * 45;

//Staanders
price = price + parseItem('item_vertical_beam') * 90;

//Ringbalk
price = price + parseItem('item_ringbalk') * 110;

//Liggers 5 x 15 cm
price = price + parseItem('liggersmm') * 50;

//Boeideel 2.2 x 20 cm
price = price + parseItem('boimm') * 60;

//Aluminium trim
price = price + parseItem('item_alum_mm') * 10;

//Frame voor wanden 5 x 5 cm
price = price + parseItem('itemframe_mm') * 2;

//Rabat (zwart) 250 x 1.2 x 18 cm
price = price + parseItem('rabat_mm') * 9;

//Rabat (naturel) 250 x 1.2 x 18 cm
price = price + parseItem('rabat_mm2') * 8;

//Raam schuurdeel
price = price + parseItem('item_window') * 300;

//Enkele deur linksdraaiend
price = price + parseItem('item_door_left') * 150;

//Enkele deur rechsdraaiend
price = price + parseItem('item_door_right') * 150;

//Dubbele deur
price = price + parseItem('item_door_double') * 250;

//Dakbeschot (1.8 x 19 cm)
price = price + parseItem('squarem') * 15;

//Dakpannen
price = price + parseItem('squarem_ii') * 45;

//Daktrim (6.5 x 6.5 cm)
price = price + parseItem('perimm') * 5;

//Shutter
price = price + parseItem('item_shutter') * 190;

//Vaste raam 1m
price = price + parseItem('item_window1m') * 230;

//Vaste raam 2m
price = price + parseItem('item_window2m') * 330;

//Schuifdeur frame boven 2m
price = price + parseItem('item_door2m') * 40;

//Schuifdeur frame boven 3m
price = price + parseItem('item_door3m') * 50;

//Schuifdeur frame boven 4m
price = price + parseItem('item_door4m') * 60;

//Glaselement
price = price + parseItem('item_glass_element') * 150;

//Frame links/rechts
price = price + parseItem('item_rails_1') * 40;

//Geleider
price = price + parseItem('item_rails_2') * 50;

document.getElementById('price').innerHTML = '€ ' + Math.round(price);
	
}
