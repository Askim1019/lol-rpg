// Enemy should appear in "Defender"
// Your Character shoudl appear in "Your Character"

// When I press "Attack" should decrease enemy hp by my character's base attack
// When an enemy is attacked, they should counter attack with a counter attack, my character's hp should decrease by that amount
// My character's attack should increase by a base amount each attack


// Reset the defaults
var chosenHero = null;
var chosenDefender = null;

// Objects are the characters of the game
var katarina = {
    name: "katarina",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
    hero: false,
    enemy: false,
    defender: false,
}

var lucian = {
    name: "lucian",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
    hero: false,
    enemy: false,
    defender: false,
}

var rengar = {
    name: "rengar",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
    hero: false,
    enemy: false,
    defender: false,
}

var veigar = {
    name: "veigar",
    hp: 100,
    ap: 10,
    bp: 5,
    counter: 20,
    hero: false,
    enemy: false,
    defender: false,
}


$("#katarina").click(function() {
    if (!katarina.hero && !katarina.defender){
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");

        $("#lucian, #rengar, #veigar").appendTo("#enemies");
        $("#lucian, #rengar, #veigar").css("border-color", "#c10000");

        katarina.hero = true;
        lucian.enemy = true;
        rengar.enemy = true;
        veigar.enemy = true;
        chosenHero = katarina;
    }
});

$("#lucian").click(function() {
    if (!lucian.hero && !lucian.enemy){
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");

        $("#katarina, #rengar, #veigar").appendTo("#enemies");
        $("#katarina, #rengar, #veigar").css("border-color", "#c10000");

        lucian.hero = true;
        katarina.enemy = true;
        rengar.enemy = true;
        veigar.enemy = true;
        chosenHero = lucian;
    }
});

$("#rengar").click(function() {
    if (!rengar.hero && !rengar.enemy){
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");

        $("#katarina, #lucian, #veigar").appendTo("#enemies");
        $("#katarina, #lucian, #veigar").css("border-color", "#c10000");

        rengar.hero = true;
        katarina.enemy = true;
        lucian.enemy = true;
        veigar.enemy = true;
        chosenHero = rengar;
    }
});

$("#veigar").click(function() {
    if (!veigar.hero && !veigar.enemy){
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");

        $("#katarina, #rengar, #lucian").appendTo("#enemies");
        $("#katarina, #rengar, #lucian").css("border-color", "#c10000");

        veigar.hero = true;
        katarina.enemy = true;
        rengar.enemy = true;
        lucian.enemy = true;
        chosenHero = veigar;
    }
});

$(document).ready(function(){

});
