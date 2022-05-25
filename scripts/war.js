(function () {
  "use strict";

  const $playButton = document.querySelector(".play-game");
  const $refreshMessage = document.querySelector(".refresh");
  const $playerAmount = document.querySelector(".player-card-amount");
  const $robotAmount = document.querySelector(".robot-card-amount");
  const $arena = document.querySelector("#contest");
  const $playerHand = document.querySelector(".player-hand-amount");
  const $robotHand = document.querySelector(".robot-hand-amount");
  const $playerDisplay = document.querySelector(".player-card");
  const $robotDisplay = document.querySelector(".robot-card");
  const $playerHandNumber = document.querySelector(".player-hand-number");
  const $robotHandNumber = document.querySelector(".robot-hand-number");

  const cardNames = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const cardSuits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const contestArr = [];

  function Card({ value, name, suit }) {
    this.value = value;
    this.name = name;
    this.suit = suit;
  }

  function Deck({ names, suits }) {
    this.names = names;
    this.suits = suits;
    this.cards = [];

    for (let s = 0; s < this.suits.length; s++) {
      for (let n = 0; n < this.names.length; n++) {
        this.cards.push(
          new Card({ value: n + 1, name: this.names[n], suit: this.suits[s] })
        );
      }
    }
    return this.cards;
  }

  function Player(name) {
    this.name = name;
    this.hand = [];
  }

  function Game() {
    this.players = [];
    this.deck = [];
  }
  //--------------------------------------------------------------------------------------------------------------------//

  // BElOW ARE PROTOTYPE CHAINS //

  //-------------------------------------------------------------------------------------------------------------------//
  Game.prototype.start = function () {
    this.players.push(new Player({ name: "you" }));
    this.players.push(new Player({ name: "BeepBoop" }));

    const deck = new Deck({ names: cardNames, suits: cardSuits });
    this.shuffle(deck);
    this.deal(deck);
  };
  Game.prototype.shuffle = function (deck) {
    // take deck of cards and randomize their order.
    let m = deck.length,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
  };

  Game.prototype.deal = function (deck) {
    for (let i = deck.length / 2; i--; ) {
      this.players[0].hand.push(deck.pop());
      this.players[1].hand.push(deck.pop());
    }
  };

  /////////////////////////////////////////////////START GAME BELOW/////////////////////////////////////////////////////////////////////////////////

  const newGame = new Game();
  newGame.start();
  const playerOne = newGame.players[0];
  const robot = newGame.players[1];

  function compare(player, computer) {
    if (!checkIfOut()) {
      let pValue = player.value;
      let rValue = computer.value;
      if (pValue > rValue) {
        playerOne.hand.push(computer);
        playerOne.hand.push(player);
        playerOne.hand.shift();
        robot.hand.shift();
        updateWinStatus(playerOne);
      } else if (pValue < rValue) {
        robot.hand.push(player);
        robot.hand.push(computer);
        robot.hand.shift();
        playerOne.hand.shift();
        updateWinStatus(robot);
      } else {
        $playButton.disabled = true;
        $playButton.style.visibility = "hidden";
        updateWarStatus();
        setTimeout(() => {
          war();
        }, 2000);
      }
    } else {
      return false;
    }
    setTimeout(() => {
      revertWinStatus();
    }, 1000);
  }

  function war() {
    let length = 0;
    console.log("WAR", playerOne.hand.length);
    console.log("WAR", robot.hand.length);
    // add three cards from each players hands to contestArr and compare the values of the current cards.
    if (playerOne.hand.length < 5 || robot.hand.length < 5) {
      if (playerOne.hand.length > robot.hand.length) {
        length = robot.hand.length - 1;
      } else if (playerOne.hand.length < robot.hand.length) {
        length = playerOne.hand.length - 1;
      }
    } else {
      length = 3;
    }
    for (let i = 0; i < length; i++) {
      contestArr.push(playerOne.hand[0]);
      playerOne.hand.shift();
      contestArr.push(robot.hand[0]);
      robot.hand.shift();
    }
    updateWarHand();
    renderCards(robot.hand[0], $robotDisplay);
    renderCards(playerOne.hand[0], $playerDisplay);
    setTimeout(() => {
      compareWar(playerOne.hand[0], robot.hand[0]);
    }, 2000);
  }

  function compareWar(player, computer) {
    if (!checkIfOut()) {
      let pValue = player.value;
      let rValue = computer.value;
      // when war is called check values of top cards to determine winner
      if (pValue > rValue) {
        playerOne.hand.push.apply(playerOne.hand, contestArr);
        playerOne.hand.push(robot.hand[0]);
        playerOne.hand.push(playerOne.hand[0]);
        playerOne.hand.shift();
        robot.hand.shift();
        $arena.textContent = `You took all the cards!!! 🤩`;
      } else if (pValue < rValue) {
        robot.hand.push.apply(robot.hand, contestArr);
        robot.hand.push(robot.hand[0]);
        robot.hand.push(playerOne.hand[0]);
        playerOne.hand.shift();
        robot.hand.shift();
        $arena.textContent = "🤖 took your cards!!! 😵‍💫";
      } else {
        debugger;
        contestArr.push(playerOne.hand[0]);
        contestArr.push(robot.hand[0]);
        war();
      }
      contestArr.length = 0;
      setTimeout(() => {
        $playButton.disabled = false;
        revertWarStatus();
        updateHand();
        $playButton.style.visibility = "visible";
      }, 2000);
    } else {
      return;
    }
  }

  $playButton.onclick = function () {
    //setProperty for pointer events is to prevent button spamming
    $playButton.style.setProperty("pointer-events", "none");
    setTimeout(() => {
      $playButton.style.setProperty("pointer-events", "auto");
    }, 2000);
    renderCards(playerOne.hand[0], $playerDisplay);
    renderCards(robot.hand[0], $robotDisplay);
    setTimeout(() => {
      compare(playerOne.hand[0], robot.hand[0]);
      updateHand();
    }, 2000);
  };

  // ======================== FUNCTION DECLARATIONS ===================================//

  function updateWarStatus() {
    $arena.textContent = "Cards have been added!";
  }

  function revertWarStatus() {
    $arena.textContent = "";
  }

  function updateWinStatus(player) {
    if (player === playerOne) {
      $arena.textContent = "You got the cards! 🎉";
    } else {
      $arena.textContent = "You lost your cards! 💀";
    }
  }

  function revertWinStatus() {
    $arena.textContent = " ";
  }

  function updateHand() {
    $playerHand.style.height = `${playerOne.hand.length}vh`;
    $robotHand.style.height = `${robot.hand.length}vh`;
    $robotHandNumber.innerHTML = ` ${robot.hand.length}`;
    $playerHandNumber.innerHTML = ` ${playerOne.hand.length}`;
  }

  function updateWarHand() {
    $robotHandNumber.innerHTML = ` ${robot.hand.length}`;
    $playerHandNumber.innerHTML = ` ${playerOne.hand.length}`;
    $playerHand.style.height = `${
      playerOne.hand.length + contestArr.length / 2
    }vh`;
    $robotHand.style.height = `${robot.hand.length + contestArr.length / 2}vh`;
  }

  function renderCards(card, display) {
    let suit;
    let div = document.createElement("div");
    div.className = "current-card";

    switch (card.suit) {
      case "Diamonds":
        suit = "♦️";
        break;
      case "Clubs":
        suit = "♣️";
        break;
      case "Hearts":
        suit = "♥️";
        break;
      case "Spades":
        suit = "♠️";
        break;
    }
    div.innerHTML = `<span class='number'>${card.name}</span><span class='suit'>${suit}</span>`;
    display.appendChild(div);
    setTimeout(() => {
      display.removeChild(div);
    }, 2000);
  }

  function checkIfOut() {
    //checks if either player is out of cards & determine winner
    if (playerOne.hand.length <= 1) {
      updateHand(playerOne);
      updateHand(robot);
      $robotAmount.innerHTML = "HAHA TAKE THAT 🤖";
      $playerAmount.innerHTML = "😢 you lost...";
      $playButton.style.visibility = "hidden";
      $refreshMessage.style.visibility = "visible";
      return true;
    } else if (robot.hand.length <= 1) {
      updateHand(playerOne);
      updateHand(robot);
      $playerAmount.innerHTML = "YOU WIN 🥳";
      $robotAmount.innerHTML = "sad beep boop 🤖";
      $playButton.style.visibility = "hidden";
      $refreshMessage.style.visibility = "visible";
      return true;
    } else {
      return false;
    }
  }

  function playEntireGame() {
    while (playerOne.hand.length > 5 || robot.hand.length > 5) {
      compare(playerOne.hand[0], robot.hand[0]);
      if (checkIfOut()) break;
    }
    return;
  }

  // playEntireGame();

  // DARK MODE/LIGHT MODE FUNCTIONALITY
  const toggleColorMode = (e) => {
    if (e.currentTarget.classList.contains("light--hidden")) {
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("color-mode", "light");
      return;
    }
    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark");
  };

  const toggleColorButtons = document.querySelectorAll(".color-mode-btn");
  toggleColorButtons.forEach((btn) => {
    btn.addEventListener("click", toggleColorMode);
  });
})();
