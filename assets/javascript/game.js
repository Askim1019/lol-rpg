

// Enemy should appear in "Defender"
// Your Character shoudl appear in "Your Character"

// When I press "Attack" should decrease enemy hp by my character's base attack
// When an enemy is attacked, they should counter attack with a counter attack, my character's hp should decrease by that amount
// My character's attack should increase by a base amount each attack

var chosen = false;
var enemies = false;

// Character Selection
$("#katarina").click(function(){
    if (chosen === false) 
    {
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");
        $("#lucian, #rengar, #veigar").appendTo("#enemies");
        $("#lucian, #rengar, #veigar").css("border-color", "#c10000");
        chosen = true;
    }
    
});

$("#lucian").click(function(){
    if (chosen === false) {
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");
        $("#katarina, #rengar, #veigar").appendTo("#enemies");
        $("#katarina, #rengar, #veigar").css("border-color", "#c10000");
        chosen = true;
    }
});

$("#rengar").click(function(){
    if (chosen === false) {
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");
        $("#katarina, #lucian, #veigar").appendTo("#enemies");
        $("#katarina, #lucian, #veigar").css("border-color", "#c10000");
        chosen = true;
    }
});


$("#veigar").click(function(){
    if (chosen === false) {
        $(this).appendTo("#character");
        $(this).css("border-color", "#53f442");
        $("#katarina, #lucian, #rengar").appendTo("#enemies");
        $("#katarina, #lucian, #rengar").css("border-color", "#c10000");
        chosen = true;
    }
});
