var start=true;
var flag=0;
var level=0;
var userClickedPattern=[];
var gamePattern=[];
buttonColors=["red","blue","green","yellow"];
var randomChosenColor;
function nextSequence()
{
    userClickedPattern=[];
    start=false;
    $("#level-title").html("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
var userChosenColor;
$(".btn").click(function()
{
    userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    check(userClickedPattern.length - 1);
});
function check(currentIndex) {
    if (gamePattern[currentIndex] !== userClickedPattern[currentIndex]) {
        gameOver();
        return;
    }

    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(() => {
            level++;
            nextSequence();
        }, 1000);
    }
}

function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    startOver();
}
function startOver() {
    level = 0;
    gamePattern = [];
    start = true;
}
function playSound(name)
{
   switch(name)
    {
        case "red":
            var red=new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var red=new Audio("sounds/blue.mp3");
            red.play();
            break;
        case "green":
            var red=new Audio("sounds/green.mp3");
            red.play();
            break;
        case "yellow":
            var red=new Audio("sounds/yellow.mp3");
            red.play();
            break;
        case "wrong":
            var wrong=new Audio("sounds/wrong.mp3");
            wrong.play();
            break;    
        default:                
    }     
}
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
$(document).keydown(function(){
    if(start==true)
    {    
        nextSequence();
    }   
});