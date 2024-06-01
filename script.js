
function myColor(){
  var red=document.getElementById('red').value;
  var green=document.getElementById('green').value;
  var blue=document.getElementById('blue').value;
   var c='rgb('+ red +','+ green +','+ blue +')';
   document.body.style.backgroundColor=c;
   document.getElementById('box').value=c;
}

document.getElementById('red').addEventListener('input',myColor);
document.getElementById('green').addEventListener('input',myColor);
document.getElementById('blue').addEventListener('input',myColor);