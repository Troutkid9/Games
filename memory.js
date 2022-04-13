let controller = {
  userGuess: [],
  numGuesses: 0,
  numMatches: 0,
  passUserGuess: function () {
    if (this.userGuess.length === 2) {
      model.checkUserGuess();
    }
  },
  init: function () {
    model.generateCardLocs();
    let cards = document.getElementsByTagName("img");
    for (let i = 0; i < model.numCardPairs * 2; i++) {
      cards[i].onclick = view.showCard;
    }
    view.showNumGuesses();
    view.showScore();
  },
};

let view = {
  showCard: function (eventObj) {
    if (controller.userGuess.length < 2) {
      let card = eventObj.target;
      let cardNum = Number(card.id.slice(4));
      for (let i = 0; i < model.numCardPairs; i++) {
        if (model.cards[i].matchPair.includes(cardNum)) {
          let cardPic = model.cards[i].image;
          card.src = cardPic;
        }
      }
      controller.userGuess.push(cardNum);
      controller.passUserGuess();
    } else {
      view.hideCard();
    }
  },
  hideCard: function () {
    for (let i = 0; i < controller.userGuess.length; i++) {
      let cardNum = "card" + String(controller.userGuess[i]).padStart(2, "0");
      let pic = document.getElementById(cardNum);
      pic.src = model.cardBackImage;
    }
    controller.userGuess = [];
  },
  showNumGuesses: function () {
    let guessDisplay = document.getElementById("guesses");
    guessDisplay.innerHTML = controller.numGuesses;
  },
  showScore: function (score) {
    let scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = model.score;
  },
  showWinModal: function () {
    let modal = document.getElementById("win");
    let closeButton = document.getElementsByClassName("closeButton")[0];
    let numCardPairs = document.getElementById("numCardPairs");
    numCardPairs.innerHTML = model.numCardPairs;
    let numGuesses = document.getElementById("numGuesses");
    numGuesses.innerHTML = controller.numGuesses;
    console.log(numGuesses);
    console.log(numCardPairs);
    modal.style.display = "block";
    closeButton.addEventListener("click", function () {
      document.getElementById("win").style.display = "none";
    });
  },
};

let model = {
  numCardPairs: 6,
  score: 0,
  cardBackImage: "MemoryCardBack.png",
  cards: [
    {
      type: "elephant",
      image: "elephant.png",
    },
    {
      type: "giraffe",
      image: "giraffe.png",
    },
    {
      type: "lion",
      image: "lion.png",
    },
    {
      type: "Lepard",
      image: "lepard.png",
    },
    {
      type: "Cheetah",
      image: "cheetah.png",
    },
    {
      type: "zebra",
      image: "zebra.png",
    },
  ],
  checkUserGuess: function (userGuess) {
    let isUserGuessMatch = false;
    for (let i = 0; i < this.numCardPairs; i++) {
      if (
        this.cards[i].matchPair.includes(controller.userGuess[0]) &&
        this.cards[i].matchPair.includes(controller.userGuess[1])
      ) {
        isUserGuessMatch = true;
      }
    }
    this.nextCardActions(isUserGuessMatch);
  },

  checkWhetherGameIsWon: function () {
    if (this.score === this.numCardPairs) {
      view.showWinModal();
    }
  },
  nextCardActions: function (isUserGuessMatch) {
    if (isUserGuessMatch) {
      this.score = this.score + 1;
      controller.numGuesses = controller.numGuesses + 1;
      controller.userGuess = [];
      view.showScore();
      view.showNumGuesses();
      this.checkWhetherGameIsWon();
    } else {
      setTimeout(view.hideCard, 500);
      controller.numGuesses = controller.numGuesses + 1;
      view.showNumGuesses();
    }
  },
  generateCardLocs: function () {
    let locArray = [];
    while (locArray.length < model.numCardPairs * 2) {
      let loc = Math.floor(Math.random() * model.numCardPairs * 2);
      if (!locArray.includes(loc)) {
        locArray.push(loc);
      }
    }
    let locArrayPairs = [];
    for (let i = 0; i < 12; i += 2) {
      let pair = [];
      pair.push(locArray[i]);
      pair.push(locArray[i + 1]);
      locArrayPairs.push(pair);
    }
    for (let i = 0; i < this.numCardPairs; i++) {
      this.cards[i].matchPair = locArrayPairs[i];
    }
  },
};

window.onload = controller.init;
