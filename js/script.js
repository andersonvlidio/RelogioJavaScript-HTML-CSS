
var hours, min, sec;

var relogio = function(){
    let date = new Date();

    hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    let time = hours + ":" + min + ":" + sec;
    
    document.getElementById("time").innerHTML = time;
}
setInterval( function(){
    relogio();
}, 1000);
