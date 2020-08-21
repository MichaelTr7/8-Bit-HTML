window.onload = function(){
  var Window_Height = window.innerHeight;
  var Window_Width = window.innerWidth;

var Smallest_Window_Dimension = 0;
if(Window_Height >= Window_Width){
Smallest_Window_Dimension = Window_Width-100;
}

else{
Smallest_Window_Dimension = Window_Height-100;
}

console.log(Smallest_Window_Dimension);

var Grid_Container = document.getElementById('Container');
Grid_Container.style.height = String(Smallest_Window_Dimension) + "px";
Grid_Container.style.width = String(Smallest_Window_Dimension) + "px";

var Grid_Blocks = document.getElementsByClassName('Pixel_Blocks');
let Number_Of_Blocks_Horizontally = 16;
let Gap = 4.8;
let Spacing = Number_Of_Blocks_Horizontally*Gap;


for(Block_Index = 0; Block_Index < Grid_Blocks.length; Block_Index++){
Grid_Blocks[Block_Index].style.height =  String((Smallest_Window_Dimension-Spacing)/Number_Of_Blocks_Horizontally) + "px";
Grid_Blocks[Block_Index].style.width =  String((Smallest_Window_Dimension-Spacing)/Number_Of_Blocks_Horizontally) + "px";
}


}





function Rescale(){
  var Window_Height = window.innerHeight;
  var Window_Width = window.innerWidth;

var Smallest_Window_Dimension = 0;
if(Window_Height >= Window_Width){
Smallest_Window_Dimension = Window_Width-100;
}

else{
Smallest_Window_Dimension = Window_Height-100;
}

console.log(Smallest_Window_Dimension);

var Grid_Container = document.getElementById('Container');
Grid_Container.style.height = String(Smallest_Window_Dimension) + "px";
Grid_Container.style.width = String(Smallest_Window_Dimension) + "px";


var Grid_Blocks = document.getElementsByClassName('Pixel_Blocks');

let Number_Of_Blocks_Horizontally = 16;
let Gap = 4.8;
// let Gap = Smallest_Window_Dimension/1000;
let Spacing = Number_Of_Blocks_Horizontally*Gap;

for(Block_Index = 0; Block_Index < Grid_Blocks.length; Block_Index++){
Grid_Blocks[Block_Index].style.height =  String((Smallest_Window_Dimension-Spacing)/Number_Of_Blocks_Horizontally) + "px";
Grid_Blocks[Block_Index].style.width =  String((Smallest_Window_Dimension-Spacing)/Number_Of_Blocks_Horizontally) + "px";
Grid_Blocks[Block_Index].style.borderRadius =  parseInt(Grid_Blocks[Block_Index].style.width/4) + "px";

}
}
