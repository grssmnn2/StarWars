$(document).ready(function(){

// declare variables
var userChoice;
var vaderTheme = new Audio("vader.mp3");
var heroTheme = new Audio("saber.mp3");

// create click actions for each character button/image

$("#luke").on("click", function(){
    // $("#luke").fadeToggle(1000);
    heroTheme.play();
    $("#luke").css({
        background: 'green', 
        float: 'right'
    });

});

$("#leia").on("click", function(){
    // $("#leia").fadeToggle(1000);
    heroTheme.play();
    $("#leia").css({
        background: 'green',
        float: 'right'
    });

});

$("#jarjar").on("click", function(){
    // $("#jarjar").fadeToggle(1000);
    $("#jarjar").css({
        background: 'red',
        float: 'right'
    });

});


$("#vader").on("click", function(){
    // $("#vader").fadeToggle(1000);
    vaderTheme.play();
    $("#vader").css({
        background: 'red',
        float: 'right'
    });
});

// first click is user hero, second click is enemy to battle

// when clicked, user hero moves above other characters to new row, background color becomes green

// when clicked, enemy moves below other characters to new row, background color becomes red

// relate points per game/click

// write win/lose function to run depending on outcome



});