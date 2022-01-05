var sec = 25;
var t;
function secondPouse(){
    var min = Math.round((sec - 0)/60);
    var remaingsec = sec % 60;
    if( remaingsec<10){
        remaingsec = "0" + remaingsec;

    } 
    document.getElementById("countdown").innerHTML = min + ":" + remaingsec;
}
function countdown(){
    secondPouse();
    if (sec == 0) { 

    }else
    { 
        sec--;
        t = setTimeout("countdown()", 1000);
        changeColor();
    
        
        }
}




function changeColor() {
    if (sec == 20) {
        document.body.style.background = "black";
    } else if (sec == 10) {
        document.body.style.background  = "yellow";
    } else if(sec == 5) {
        document.body.style.background  = "white";
    }
}