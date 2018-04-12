// Objects are the characters of the game
var katarina = {
    name: "katarina",
    hp: 150,
    ap: 20,
    ba: 10,
    counter: 15,
}

var lucian = {
    name: "lucian",
    hp: 150,
    ap: 10,
    ba: 12,
    counter: 16,
}

var rengar = {
    name: "rengar",
    hp: 220,
    ap: 10,
    ba: 5,
    counter: 11,
}

var veigar = {
    name: "veigar",
    hp: 110,
    ap: 30,
    ba: 14,
    counter: 25,
}

var heroChosen = false;
var defenderChosen = false;
var gameOver = false;
var hero = {};
var defender = {};
var defeated = 0; 

function resetGame() {
    location.reload();
}



function heroStats(object) {
    hero.name = object.name;
    hero.hp = object.hp;
    hero.ap = object.ap;
    hero.ba = object.ba;
    hero.counter = object.counter;
}

function defenderStats(object) {
    defender.name = object.name;
    defender.hp = object.hp;
    defender.ap = object.ap;
    defender.ba = object.ba;
    defender.counter = object.counter;
}

$(document).ready(function(){

    $("#reset").hide();

    $("#reset").click(function(){
        resetGame();
    });

    $("#katarina").click(function() {
        if (!heroChosen) {
            $(this).appendTo("#hero");
            $(this).css({"border-color": "#53f442", "margin-left": "0"});
            $("#kathealth").addClass("health");
            $("#lucian, #rengar, #veigar").appendTo("#enemies");
            $("#lucian, #rengar, #veigar").css({"border-color": "#c10000", "margin-left": "0"});
            $("#lucian, #rengar, #veigar").addClass("enemies");
            $(".choose").hide();
            heroStats(katarina);
            heroChosen = true;
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(katarina);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                $("#kathealth").addClass("def-health");
                defenderChosen = true;
            }
        }

    });



    $("#lucian").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero");
            $(this).css({"border-color": "#53f442", "margin-left": "0"});
            $("#lucianhealth").addClass("health");
            $("#katarina, #rengar, #veigar").appendTo("#enemies");
            $("#katarina, #rengar, #veigar").css({"border-color": "#c10000", "margin-left": "0"});
            $("#katarina, #rengar, #veigar").addClass("enemies");
            $(".choose").hide();
            heroChosen = true;
            heroStats(lucian);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(lucian);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                $("#lucianhealth").addClass("def-health");
                defenderChosen = true;
            }
        }

    });



    $("#rengar").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero");
            $(this).css({"border-color": "#53f442", "margin-left": "0"});
            $("#rengarhealth").addClass("health");
            $("#katarina, #lucian, #veigar").appendTo("#enemies");
            $("#katarina, #lucian, #veigar").css({"border-color": "#c10000", "margin-left": "0"});
            $("#katarina, #lucian, #veigar").addClass("enemies");
            $(".choose").hide();
            heroChosen = true;
            heroStats(rengar);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(rengar);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                $("#rengarhealth").addClass("def-health");
                defenderChosen = true;
            }
        }

    });



    $("#veigar").click(function() {
        if (!heroChosen){
            $(this).appendTo("#hero")
            $(this).css({"border-color": "#53f442", "margin-left": "0"});
            $("#veigarhealth").addClass("health");
            $("#katarina, #rengar, #lucian").appendTo("#enemies");
            $("#katarina, #rengar, #lucian").css({"border-color": "#c10000", "margin-left": "0"});
            $("#katarina, #rengar, #lucian").addClass("enemies");
            $(".choose").hide();
            heroChosen = true;
            heroStats(veigar);
        } else if (heroChosen && !defenderChosen) {
            if ($(this).hasClass("enemies")) {
                defenderStats(veigar);
                $(this).removeClass("enemies");
                $(this).appendTo("#defender");
                $(this).addClass("defender");
                $("#veigarhealth").addClass("def-health");
                defenderChosen = true;
            }
        }

    });

   
    $("#attack-btn").click(function(){
        if (heroChosen && defenderChosen && !gameOver) {
            defender.hp -= hero.ap;
            hero.hp -= defender.counter;
            $(".health").html(hero.hp);
            $(".def-health").html(defender.hp);
            $("#message").html("<p>" + hero.name + " attacked " + defender.name + " for " + hero.ap + " health </p><p style='color: red;'>" + 
            defender.name + " counter-attacked " + hero.name + " for " + defender.counter + " health </p>")
                         .css({"color": "blue", "font-size": "20px"})
                         .addClass("text-center");
            hero.ap += hero.ba;


            if (hero.hp <= 0) {
                $("#message").html("<h2> Game Over </h2>")
                             .css("color", "red")
                             .addClass("text-center");
                $(".hero").hide();
                gameOver = true;
                $("#reset").show();
            } else if (defender.hp <= 0 && hero.hp > 0 && defeated < 3) {
                $(".defender").removeClass("defender")
                              .hide();
                defenderChosen = false;
                defeated++;
            }
        }

        if (defeated === 3) {
            $("#message").html("<h2> VICTORIOUS! </h2>")
                         .css("color", "green")
                         .addClass("text-center");
            $("#reset").show();
        }

    });




});
