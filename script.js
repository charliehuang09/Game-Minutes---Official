var game_minutes = 0;
var nine_hundred = 5;
var a;
var b;
if (localStorage.getItem('save') == 'true') {
    a = localStorage.getItem('game_minutes');
    b = localStorage.getItem('nine_hundred');
    var game_minutes = parseInt(a);
    var nine_hundred = parseInt(b);
}
else{
    game_minutes = 0;
    nine_hundred = 5;
}
update();
function update(){
    document.getElementById('game_minutes').innerHTML = game_minutes;
    document.getElementById('900s').innerHTML = nine_hundred;
    localStorage.setItem('game_minutes', game_minutes);
    localStorage.setItem('nine_hundred', nine_hundred);
    localStorage.setItem('save', 'true');
}
function nine(){
    nine_hundred--;
    if (nine_hundred == 0){
        nine_hundred = 5;
        game_minutes += 15;
    }
    update();
}
function thousand(){
    game_minutes += 15;
    update();
}
function fifteen(){
    if (game_minutes >= 15){
        if (confirm("Are you sure?")){
            game_minutes -= 15;
            update();
        }
    }
    else{
        alert("You do not have enough minutes!");
    }
}
function one(){
    if (game_minutes >= 1){
        game_minutes--;
        update();
    }
    else{
        alert("You do not have enough minutes!");
    }
}
function thirty(){
    if (game_minutes >= 30){
        if (confirm("Are you sure?")){
            game_minutes -= 30;
            update();
        }
    }
    else{
        alert("You do not have enough minutes!");
    }
}
function reset(){
    if (confirm("Are you sure?")){
        game_minutes = 0;
        nine_hundred = 5;
        localStorage.setItem('game_minutes', game_minutes);
        localStorage.setItem('nine_hundred', nine_hundred);
        localStorage.setItem('save', 'false');
        update();
    }
}
