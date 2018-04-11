// Objects are the characters of the game
var katarina = {
    name: "katarina",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
}

var lucian = {
    name: "lucian",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
}

var rengar = {
    name: "rengar",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
}

var veigar = {
    name: "veigar",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
}

var heroChosen = false;
var defenderChosen = false;
var gameOver = false;
var hero = {};
var defender = {};
var defeatedEnemies = {}; 

function resetGame() {
    location.reload();
}

function heroStats(object) {
    hero.name = object.name;
    hero.hp = object.hp;
    hero.ap = object.ap;
    hero.bp = object.bp;
    hero.counter = object.counter;
}

function defenderStats(object) {
    defender.name = object.name;
    defender.hp = object.name;
    defender.ap = object.name;
    defender.bp = object.name;
    defender.counter = object.name;
}

$(document).ready(function(){

    $("#katarina").click(function() {
        if (!heroChosen) {
            $(this).appendTo("#hero");
            $(this).css("border-color", "#53f442");
            $(this).addClass("hero");
            $("#lucian, #rengar, #veigar").appendTo("#enemies");
            $("#lucian, #rengar, #veigar").css("border-color", "#c10000");
            $("#lucian, #rengar, #veigar").addClass("enemies");
            heroStats(katarina);
            heroChosen = true;
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(katarina);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                defenderChosen = true;
            }
        }

    });



    $("#lucian").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero");
            $(this).css("border-color", "#53f442");
            $(this).addClass("hero");
            $("#katarina, #rengar, #veigar").appendTo("#enemies");
            $("#katarina, #rengar, #veigar").css("border-color", "#c10000");
            $("#katarina, #rengar, #veigar").addClass("enemies");
            heroChosen = true;
            heroStats(lucian);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(lucian);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                defenderChosen = true;
            }
        }

    });



    $("#rengar").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero");
            $(this).css("border-color", "#53f442");
            $(this).addClass("hero");
            $("#katarina, #lucian, #veigar").appendTo("#enemies");
            $("#katarina, #lucian, #veigar").css("border-color", "#c10000");
            $("#katarina, #lucian, #veigar").addClass("enemies");
            heroChosen = true;
            heroStats(rengar);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(rengar);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                defenderChosen = true;
            }
        }

    });



    $("#veigar").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero")
            $(this).css("border-color", "#53f442");
            $(this).addClass("hero");
            $("#katarina, #rengar, #lucian").appendTo("#enemies");
            $("#katarina, #rengar, #lucian").css("border-color", "#c10000");
            $("#katarina, #rengar, #lucian").addClass("enemies");
            heroChosen = true;
            heroStats(veigar);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(veigar);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                defenderChosen = true;
            }
        }

    });

   



});
