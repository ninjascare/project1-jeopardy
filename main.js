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
let aThirteen = document.getElementById("thrithteen");
let aFourteen = document.getElementById("fourteen");
let aFifthteen = document.getElementById("fifthteen");
let aSixteen = document.getElementById("sixteen");
let aSeventeen = document.getElementById("seventeen");
let aEighteen = document.getElementById("eightteen");
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
let aFifthyFour = document.getElementById("fiftyFour");
let aFifthyFive = document.getElementById("fifthyFive");
let aFifthySix = document.getElementById("fifthySix");
let aFifthySeven = document.getElementById("fithySeven");
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
let aSeventyOne = document.getElementById("sevntyOne");
let aSeventyTwo = document.getElementById("seventyTwo");
let aSeventyThree = document.getElementById("seventyThree");
let aSeventyFour = document.getElementById("seventyFour");
let aSeventyFive = document.getElementById("seventyFive");
let scoreBoard = document.querySelector(".scoreBoard");
let points = 0;

aOne.addEventListener("click", function() {
  points += 100;
  scoreBoard.innerHTML = points;
  document.getElementById('box6').style.visibility = "hidden"
});

aTwo.addEventListener("click", function() {
    points -= 100;
    scoreBoard.innerHTML = points;
    document.getElementById('box6').style.visibility = "hidden"
  });

  aThree.addEventListener("click", function() {
    points -= 100;
    scoreBoard.innerHTML = points;
    document.getElementById('box6').style.visibility = "hidden"
  });
  