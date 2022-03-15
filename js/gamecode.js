//Audios section
var pressAudio = new Audio("sounds/press.mp3");
var mistakeAudio = new Audio("sounds/mistake.mp3");
var machineAudio = new Audio("sounds/machine.mp3");

//Variables section
var machineChain = [];
var userChain = [];
var started = false;
var level = 0;

// Start button EventListener
$(".startbtn").click(function(){
  if (!started) {
    $("#level").text("You are in level " + level);
    started = true;
    $(".btn").removeClass("disabled");
    setTimeout(machineTurn, 500);
  }
});


// EventListener for keyboard to start game and play
$(document).keypress(function(e) {
  if (!started) {
    $("#level").text("You are in level " + level);
    started = true;
    $(".btn").removeClass("disabled");
    setTimeout(machineTurn, 500);
  } else {
    var keyPressed = e.key;
    switch (keyPressed) {
      case "1":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "2":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "3":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "4":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "5":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "6":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "7":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "8":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "9":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      case "0":
        var idReplacement = "button" + keyPressed;
        animatePress(idReplacement);
        pressAudio.play();
        userChain.push(keyPressed);
        compare(userChain.length - 1);
        break;

      default:
        break;
    }
  }
});


// Add EventListener to all buttons
$(".btn").click(function() {
  var btnPressed = $(this).attr("id");
  animatePress(btnPressed);
  pressAudio.play();
})

$(".startbtn").click(function() {
  var btnPressed = $(this).attr("id");
  animatePress(btnPressed);
  pressAudio.play();
})

$(".gamebtn").click(function() {
  var pressedByUser = $(this).text();
  userChain.push(pressedByUser);
  compare(userChain.length - 1);
})

// Reset button
$("#reset").click(resetGame);

// Functions to animate buttons: When user plays
function animatePress(button) {
  $("#" + button).addClass("btnPressed");
  setTimeout(function() {
    $("#" + button).removeClass("btnPressed");
  }, 100);
}

//  When machine plays
function animateMachine(button) {
  $("#" + button).addClass("machinePlay");
  machineAudio.play();
  setTimeout(function() {
    $("#" + button).removeClass("machinePlay");
  }, 200);
}

// Function that activate machine turn
function machineTurn() {
  userChain = [];
  level++;
  var randomNumber = (Math.floor(Math.random() * 9)) + 1;
  var randomNumberClass = "button" + randomNumber;
  animateMachine(randomNumberClass);
  machineChain.push(randomNumber);
}

// Function to reset the game
function resetGame() {
  machineChain = [];
  userChain = [];
  started = false;
  level = 0;
  $(".btn").addClass("disabled");
  $("#level").text("Press ✅ or any key to start");
}

//Function to compare arrays
function compare(lastUserClic) {
  if (machineChain[lastUserClic] == userChain[lastUserClic]) {
    if (machineChain.length === userChain.length) {
      setTimeout(function() {
        machineTurn();
        $("#level").text("You are in level " + level);
      }, 1000);
    }
  } else {
    $("#level").text("You made a mistake, try again.");
    mistakeAudio.play();
    setTimeout(function() {
      resetGame();
    }, 2000);
  }
}
