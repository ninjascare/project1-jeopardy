let aOne = document.getElementById("one");
let aTwo = document.getElementById("two");
let aThree = document.getElementById("three");
let aFour = document.getElementById("four");
let aFive = document.getElementById("five");
let aSix = document.getElementById("six");
let aSeven = document.getElementById("seven");
let aEight = document.getElementById("eight");
let aNine = document.getElementById("nine");
let aTen = document.getElementById("ten");
let aEleven = document.getElementById("eleven");
let aTwelve = document.getElementById("twelve");
let aThirteen = document.getElementById("thirthteen");
let aFourteen = document.getElementById("fourteen");
let aFifthteen = document.getElementById("fifthteen");
let aSixteen = document.getElementById("sixteen");
let aSeventeen = document.getElementById("seventeen");
let aEighteen = document.getElementById("eighteen");
let aNineteen = document.getElementById("nineteen");
let aTwenty = document.getElementById("twenty");
let aTwentyOne = document.getElementById("twentyOne");
let aTwentyTwo = document.getElementById("twentyTwo");
let aTwentyThree = document.getElementById("twentyThree");
let aTwentyFour = document.getElementById("twentyFour");
let aTwentyFive = document.getElementById("twentyFive");
let aTwentySix = document.getElementById("twentySix");
let aTwentySeven = document.getElementById("twentySeven");
let aTwentyEight = document.getElementById("twentyEight");
let aTwentyNine = document.getElementById("twentyNine");
let aThirty = document.getElementById("thirty");
let aThirtyOne = document.getElementById("thirtyOne");
let aThirtyTwo = document.getElementById("thirtyTwo");
let aThirtyThree = document.getElementById("thirtyThree");
let aThirtyFour = document.getElementById("thirtyFour");
let aThirtyFive = document.getElementById("thirtyFive");
let aThirtySix = document.getElementById("thirtySix");
let aThirtySeven = document.getElementById("thirtySeven");
let aThirtyEight = document.getElementById("thirtyEight");
let aThirtyNine = document.getElementById("thirtyNine");
let aFourty = document.getElementById("fourty");
let aFourtyOne = document.getElementById("fourtyOne");
let aFourtyTwo = document.getElementById("fourtyTwo");
let aFourtyThree = document.getElementById("fourtyThree");
let aFourtyFour = document.getElementById("fourtyFour");
let aFourtyFive = document.getElementById("fourtyFive");
let aFourtySix = document.getElementById("fourtySix");
let aFourtySeven = document.getElementById("fourtySeven");
let aFourtyEight = document.getElementById("fourtyEight");
let aFourtyNine = document.getElementById("fourtyNine");
let aFifthy = document.getElementById("fifthy");
let aFifthyOne = document.getElementById("fifthyOne");
let aFifthyTwo = document.getElementById("fifthyTwo");
let aFifthyThree = document.getElementById("fifthyThree");
let aFifthyFour = document.getElementById("fifthyFour");
let aFifthyFive = document.getElementById("fifthyFive");
let aFifthySix = document.getElementById("fifthySix");
let aFifthySeven = document.getElementById("fifthySeven");
let aFifthyEight = document.getElementById("fifthyEight");
let aFifthyNine = document.getElementById("fifthyNine");
let aSixty = document.getElementById("sixty");
let aSixtyOne = document.getElementById("sixtyOne");
let aSixtyTwo = document.getElementById("sixtyTwo");
let aSixtyThree = document.getElementById("sixtyThree");
let aSixtyFour = document.getElementById("sixtyFour");
let aSixtyFive = document.getElementById("sixtyFive");
let aSixtySix = document.getElementById("sixtySix");
let aSixtySeven = document.getElementById("sixtySeven");
let aSixtyEight = document.getElementById("sixtyEight");
let aSixtyNine = document.getElementById("sixtyNine");
let aSeventy = document.getElementById("seventy");
let aSeventyOne = document.getElementById("seventyOne");
let aSeventyTwo = document.getElementById("seventyTwo");
let aSeventyThree = document.getElementById("seventyThree");
let aSeventyFour = document.getElementById("seventyFour");
let aSeventyFive = document.getElementById("seventyFive");
let scoreBoard = document.querySelector(".scoreBoard");
let points = 0;

aOne.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }

  scoreBoard.innerHTML = points;
  document.getElementById("box6").style.visibility = "hidden";
});

aTwo.addEventListener("click", function() {
  points += 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box6").style.visibility = "hidden";
});

aThree.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box6").style.visibility = "hidden";
});

aFour.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box7").style.visibility = "hidden";
});

aFive.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box7").style.visibility = "hidden";
});

aSix.addEventListener("click", function() {
  points += 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box7").style.visibility = "hidden";
});

aSeven.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box8").style.visibility = "hidden";
});

aEight.addEventListener("click", function() {
  points += 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box8").style.visibility = "hidden";
});

aNine.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box8").style.visibility = "hidden";
});

aTen.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box9").style.visibility = "hidden";
});

aEleven.addEventListener("click", function() {
  points += 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box9").style.visibility = "hidden";
});

aTwelve.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box9").style.visibility = "hidden";
});

aThirteen.addEventListener("click", function() {
  points += 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box10").style.visibility = "hidden";
});

aFourteen.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box10").style.visibility = "hidden";
});

aFifthteen.addEventListener("click", function() {
  points -= 100;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box10").style.visibility = "hidden";
});

aSixteen.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box11").style.visibility = "hidden";
});

aSeventeen.addEventListener("click", function() {
  points += 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box11").style.visibility = "hidden";
});

aEighteen.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box11").style.visibility = "hidden";
});

aNineteen.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box12").style.visibility = "hidden";
});

aTwenty.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box12").style.visibility = "hidden";
});

aTwentyOne.addEventListener("click", function() {
  points += 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box12").style.visibility = "hidden";
});

aTwentyTwo.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box13").style.visibility = "hidden";
});

aTwentyThree.addEventListener("click", function() {
  points += 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box13").style.visibility = "hidden";
});

aTwentyFour.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box13").style.visibility = "hidden";
});

aTwentyFive.addEventListener("click", function() {
  points += 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box14").style.visibility = "hidden";
});

aTwentySix.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box14").style.visibility = "hidden";
});
aTwentySeven.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box14").style.visibility = "hidden";
});

aTwentyEight.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box15").style.visibility = "hidden";
});

aTwentyNine.addEventListener("click", function() {
  points -= 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box15").style.visibility = "hidden";
});

aThirty.addEventListener("click", function() {
  points += 200;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box15").style.visibility = "hidden";
});

aThirtyOne.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box16").style.visibility = "hidden";
});

aThirtyTwo.addEventListener("click", function() {
  points += 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box16").style.visibility = "hidden";
});

aThirtyThree.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box16").style.visibility = "hidden";
});

aThirtyFour.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box17").style.visibility = "hidden";
});

aThirtyFive.addEventListener("click", function() {
  points += 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box17").style.visibility = "hidden";
});

aThirtySix.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box17").style.visibility = "hidden";
});

aThirtySeven.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box18").style.visibility = "hidden";
});

aThirtyEight.addEventListener("click", function() {
  points += 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box18").style.visibility = "hidden";
});

aThirtyNine.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box18").style.visibility = "hidden";
});

aFourty.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box19").style.visibility = "hidden";
});

aFourtyOne.addEventListener("click", function() {
  points += 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box19").style.visibility = "hidden";
});

aFourtyTwo.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box19").style.visibility = "hidden";
});

aFourtyThree.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box20").style.visibility = "hidden";
});

aFourtyFour.addEventListener("click", function() {
  points += 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box20").style.visibility = "hidden";
});

aFourtyFive.addEventListener("click", function() {
  points -= 300;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box20").style.visibility = "hidden";
});

aFourtySix.addEventListener("click", function() {
  points += 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box21").style.visibility = "hidden";
});

aFourtySeven.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box21").style.visibility = "hidden";
});

aFourtyEight.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box21").style.visibility = "hidden";
});

aFourtyNine.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box22").style.visibility = "hidden";
});

aFifthy.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box22").style.visibility = "hidden";
});

aFifthyOne.addEventListener("click", function() {
  points += 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box22").style.visibility = "hidden";
});

aFifthyTwo.addEventListener("click", function() {
  points += 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box23").style.visibility = "hidden";
});

aFifthyThree.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box23").style.visibility = "hidden";
});

aFifthyFour.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box23").style.visibility = "hidden";
});

aFifthyFive.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box24").style.visibility = "hidden";
});

aFifthySix.addEventListener("click", function() {
  points += 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box24").style.visibility = "hidden";
});

aFifthySeven.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box24").style.visibility = "hidden";
});

aFifthyEight.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box25").style.visibility = "hidden";
});

aFifthyNine.addEventListener("click", function() {
  points -= 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box25").style.visibility = "hidden";
});

aSixty.addEventListener("click", function() {
  points += 400;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box25").style.visibility = "hidden";
});

aSixtyOne.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box26").style.visibility = "hidden";
});

aSixtyTwo.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box26").style.visibility = "hidden";
});

aSixtyThree.addEventListener("click", function() {
  points += 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box26").style.visibility = "hidden";
});

aSixtyFour.addEventListener("click", function() {
  points += 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box27").style.visibility = "hidden";
});

aSixtyFive.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box27").style.visibility = "hidden";
});

aSixtySix.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box27").style.visibility = "hidden";
});

aSixtySeven.addEventListener("click", function() {
  points += 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box28").style.visibility = "hidden";
});

aSixtyEight.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box28").style.visibility = "hidden";
});

aSixtyNine.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box28").style.visibility = "hidden";
});

aSeventy.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box29").style.visibility = "hidden";
});

aSeventyOne.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box29").style.visibility = "hidden";
});

aSeventyTwo.addEventListener("click", function() {
  points += 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box29").style.visibility = "hidden";
});

aSeventyThree.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box30").style.visibility = "hidden";
});

aSeventyFour.addEventListener("click", function() {
  points -= 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box30").style.visibility = "hidden";
});

aSeventyFive.addEventListener("click", function() {
  points += 500;
  if (points >= 2500) {
    swal("Good Job!!!", "You Won!", "success");
  } else if (points <= -500) {
    swal("Too Bad!", "You lost", "error");
  }
  scoreBoard.innerHTML = points;
  document.getElementById("box30").style.visibility = "hidden";
});

function clearBoard(){
  if ()
}