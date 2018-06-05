$(document).ready(function(){

// declare variables
var userChoice;
var vaderTheme = new Audio("vader.mp3");
var heroTheme = new Audio("saber.mp3");
var saber = new Audio("shortsaber.mp3");

// create score object per character

var vader = {
    health: 50,
    weaponPower: 10
}

var luke = {
    health: 70,
    weaponPower: 5
}

var leia = {
    health: 70,
    weaponPower: 6
}

var jar = {
    health: 30,
    weaponPower: 12
}

// create click actions for each character button/image

$("#luke").on("click", function(){
    // $("#luke").fadeToggle(1000);
    $('#luke').animate({
        'marginTop' : "+=300px" //moves down
        });
   
    heroTheme.play();
    $("#luke").css({
        background: 'green', 
        
    });

});

$("#leia").on("click", function(){
    // $("#leia").fadeToggle(1000);
    $('#leia').animate({
        'marginTop' : "+=300px" //moves down
        });
    heroTheme.play();
    $("#leia").css({
        background: 'green',
    
    });

});

$("#jarjar").on("click", function(){
    // $("#jarjar").fadeToggle(1000);
    $('#jarjar').animate({
        'marginTop' : "+=300px" //moves down
        });
    $("#jarjar").css({
        background: 'red',
       
    });

});


$("#vader").on("click", function(){
    // $("#vader").fadeToggle(1000);
    $('#vader').animate({
        'marginTop' : "+=300px" //moves down
        });
    $(".enemy").append("#vader");
    vaderTheme.play();
    
    $("#vader").css({
        background: 'red',
        
    });
});
// battle button
$("#attack").click(function(){
    saber.play();
});

// restart game button
$("#restart").click(function(){
    window.location.reload();
});

// first click is user hero, second click is enemy to battle

// when clicked, user hero moves above other characters to new row, background color becomes green

// when clicked, enemy moves below other characters to new row, background color becomes red

// relate points per game/click

// write win/lose function to run depending on outcome



});