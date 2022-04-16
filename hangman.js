// Namespace
const hangman = {};

// Array to hold category and question for two player game
hangman.twoPlayerQuestion = [];

// REGEX to ensure user can only guess letters
hangman.validGuess = /[a-zA-Z]/;

// Array to hold user guess
hangman.userGuess = [];

// Modal to display alerts
hangman.alertModal = document.getElementById("alertModal");
// Modal background
hangman.alertModalBackground = document.getElementById("alertModalBackground");
// Alert tex displayed here
hangman.alertModalText = document.getElementById("alertModalText");
// Button to close modal
hangman.ok = document.getElementById("ok");
// Function to show modal
hangman.showModal = function () {
  alertModal.classList.add("visibleModal");
  alertModal.setAttribute("role", "alertdialog");
  alertModalBackground.classList.add("visibleModal");
  // Remove background elements from tab index when modal is open
  document
    .querySelectorAll("form, input, a, button")
    .forEach((element) => element.setAttribute("tabindex", "-1"));
  // Trap screen reader focus in modal when open
  document
    .querySelectorAll("header, main, footer")
    .forEach((element) => element.setAttribute("aria-hidden", "true"));
  // Allow users to click ok button
  ok.setAttribute("tabindex", "0");
  // Focus on ok button when modal opens
  ok.focus();
  // Close modal if user presses escape key
  hangman.escapeModal();
};
// Function to close modal
hangman.closeModal = function () {
  alertModal.classList.remove("visibleModal");
  alertModal.removeAttribute("role");
  alertModalBackground.classList.remove("visibleModal");
  document
    .querySelectorAll("form, input, a, button")
    .forEach((element) => element.setAttribute("tabindex", "0"));
  document
    .querySelectorAll("header, main, footer")
    .forEach((element) => element.setAttribute("aria-hidden", "false"));
};
// Close modal when button is clicked
hangman.ok.addEventListener("click", function () {
  hangman.closeModal();
});
// Close modal when background is clicked
hangman.alertModalBackground.addEventListener("click", function () {
  hangman.closeModal();
});
// Close modal when escape key is pressed
hangman.escapeModal = function () {
  document.addEventListener("keydown", function (event) {
    if ((event.code = "Escape")) {
      hangman.closeModal();
    }
  });
};

// Start game
hangman.start = function () {
  const onePlayer = document.querySelector(".onePlayer");
  const twoPlayers = document.querySelector(".twoPlayers");
  const onePlayerGuessForm = document.getElementById("onePlayerGuessForm");
  const questionForm = document.getElementById("questionForm");
  onePlayer.addEventListener("click", function () {
    this.classList.add("hidden");
    twoPlayers.classList.add("hidden");
    onePlayerGuessForm.classList.add("active");
    hangman.displayOnePlayerQuestion();
  });
  twoPlayers.addEventListener("click", function () {
    this.classList.add("hidden");
    onePlayer.classList.add("hidden");
    questionForm.classList.add("questionFormVisible");
  });
};

// Display random category and number of letters for the word (one player game)
hangman.displayOnePlayerQuestion = function () {
  // Individual letter slots
  const category = document.querySelector(".category");
  // Section for correct letters to appear
  const blank = document.querySelector(".blank");

  // Function to pick a random number between two integers
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Get a random word from the API, between 3 and 7 letters long
  fetch(
    `https://www.wordgamedb.com/api/v1/words/?numLetters=${randomIntFromInterval(
      3,
      7
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      let randomWord = data[Math.floor(Math.random() * data.length)];

      let letters = randomWord.word.toUpperCase().split([,]);

      const gallows = document.getElementById("gallows");
      gallows.style.top = "200px";

      category.innerHTML = `
        <h2 aria-label="Category: ${randomWord.category}, ${randomWord.word.length} letters">${randomWord.category}</h2>
      `;

      const displayedLetter = letters
        .map(
          (letter, index) =>
            `<span class="letterSpace">letter ${
              index + 1
            }<span aria-hidden="true" class="correct">${letter}</span></span>`
        )
        .join(" ");
      blank.innerHTML = displayedLetter;

      // Check one player guesses
      onePlayerGuessForm.addEventListener("submit", function (e) {
        let guessValue = document
          .getElementById("onePlayerGuessInput")
          .value.toUpperCase();
        let correct = document.querySelectorAll(".correct");
        const wrong = document.querySelector(".wrong");
        let numberWrong = wrong.getElementsByTagName("P");
        const body = document.querySelector(".body");
        const head = document.querySelector(".head");
        const torso = document.querySelector(".torso");
        const leftArm = document.querySelector(".leftArm");
        const rightArm = document.querySelector(".rightArm");
        const leftLeg = document.querySelector(".leftLeg");
        const rightLeg = document.querySelector(".rightLeg");
        // Prevent page from reloading
        e.preventDefault();
        // Make sure user guesses a letter
        if (
          guessValue.match(hangman.validGuess) &&
          !hangman.userGuess.includes(guessValue)
        ) {
          // Push guessed letter to array. If not a valid guess, alert.
          hangman.userGuess.push(guessValue);
          // Add a body part for each incorrect guess
          displayBodyParts();

          // Alert if guess is not valid
        } else if (!guessValue.match(hangman.validGuess)) {
          alertModalText.innerHTML = "<h3>Please enter a valid guess!</h3>";
          hangman.showModal();

          // Alert if letter has already been guessed
        } else if (
          guessValue.match(hangman.validGuess) &&
          hangman.userGuess.includes(guessValue)
        ) {
          alertModalText.innerHTML =
            "<h3>You already guessed that letter!</h3>";
          hangman.showModal();
        }

        // If user guess is correct, make the letter appear in the word
        for (let i = 0; i < letters.length; i++) {
          if (letters.includes(guessValue)) {
            if (correct[i].innerHTML === guessValue) {
              correct[i].classList.add("visible");
              correct[i].setAttribute("aria-hidden", "false");
            }
          }
        }

        // Function to add body parts for incorrect guesses
        function displayBodyParts() {
          if (!letters.includes(guessValue)) {
            wrong.innerHTML += `<p>${guessValue}</p>`;
            if (numberWrong.length === 1) {
              head.classList.remove("hidden");
              body.setAttribute("aria-label", "one of six body parts visible");
            }
            if (numberWrong.length === 2) {
              torso.classList.remove("hidden");
              body.setAttribute("aria-label", "two of six body parts visible");
            }
            if (numberWrong.length === 3) {
              leftArm.classList.remove("hidden");
              body.setAttribute(
                "aria-label",
                "three of six body parts visible"
              );
            }
            if (numberWrong.length === 4) {
              rightArm.classList.remove("hidden");
              body.setAttribute("aria-label", "four of six body parts visible");
            }
            if (numberWrong.length === 5) {
              leftLeg.classList.remove("hidden");
              body.setAttribute("aria-label", "five of six body parts visible");
            }
            if (numberWrong.length === 6) {
              rightLeg.classList.remove("hidden");
              body.setAttribute(
                "aria-label",
                "all body parts visible, you have been hanged!"
              );
            }
          }
        }

        // If all letters have been guessed correctly, player wins
        if (
          document.querySelectorAll(".correct.visible").length ===
          letters.length
        ) {
          alertModalText.innerHTML = "<h3>You win!</h3>";
          hangman.showModal();
          hangman.playAgain.classList.remove("hidden");
          onePlayerGuessForm.classList.remove("active");
        }

        // If player guesses 6 wrong letters (number of body parts), player loses
        if (numberWrong.length === 6) {
          alertModalText.innerHTML = "<h3>You lose!</h3>";
          hangman.showModal();
          hangman.playAgain.classList.remove("hidden");
          onePlayerGuessForm.classList.remove("active");
          // Show the correct word
          for (let i = 0; i < letters.length; i++) {
            correct[i].classList.add("visible");
          }
        }

        // Clear the form input after submit
        onePlayerGuessForm.reset();
      });
    });
};

// Display category and number of letters for the word (two player game)
hangman.displayTwoPlayerQuestion = function () {
  // Individual letter slots
  const category = document.querySelector(".category");
  // Section for correct letters to appear
  const blank = document.querySelector(".blank");
  category.innerHTML = `
    <h2 aria-label="Category: ${hangman.twoPlayerQuestion[0]}, ${hangman.twoPlayerQuestion[1].length} letters">${hangman.twoPlayerQuestion[0]}</h2>
  `;
  let twoPlayerLetters = hangman.twoPlayerQuestion[1].toUpperCase().split([,]);
  const displayedLetter = twoPlayerLetters
    .map(
      (letter, index) =>
        `<span class="letterSpace">letter ${
          index + 1
        }<span aria-hidden="true" class="correct">${letter}</span></span>`
    )
    .join(" ");
  blank.innerHTML = displayedLetter;
};

// On form submit (question creation for 2 player game)
hangman.createQuestion = function () {
  questionForm.addEventListener("submit", function (e) {
    const categoryInput = document.getElementById("categoryInput");
    const questionForm = document.getElementById("questionForm");
    const questionInput = document.getElementById("questionInput");
    const twoPlayerGuessForm = document.getElementById("twoPlayerGuessForm");
    // Prevent page reload
    e.preventDefault();
    // Push category and word to twoPlayerQuestion array
    hangman.twoPlayerQuestion.push(categoryInput.value);
    hangman.twoPlayerQuestion.push(questionInput.value);
    this.classList.remove("questionFormVisible");
    hangman.displayTwoPlayerQuestion();
    twoPlayerGuessForm.classList.add("active");
    gallows.style.top = "200px";

    // Reset the question form
    questionForm.reset();
  });
};

// On form submit (user guess) (two player game)
hangman.checkTwoPlayerGuess = function () {
  twoPlayerGuessForm.addEventListener("submit", function (e) {
    let twoPlayerLetters = hangman.twoPlayerQuestion[1]
      .toUpperCase()
      .split([,]);
    let guessValue = document
      .getElementById("twoPlayerGuessInput")
      .value.toUpperCase();
    let correct = document.querySelectorAll(".correct");
    const wrong = document.querySelector(".wrong");
    let numberWrong = wrong.getElementsByTagName("P");
    const body = document.querySelector(".body");
    const head = document.querySelector(".head");
    const torso = document.querySelector(".torso");
    const leftArm = document.querySelector(".leftArm");
    const rightArm = document.querySelector(".rightArm");
    const leftLeg = document.querySelector(".leftLeg");
    const rightLeg = document.querySelector(".rightLeg");
    const playAgain = document.querySelector(".playAgain");
    // Prevent page from reloading
    e.preventDefault();
    // Make sure user guesses a letter
    if (
      guessValue.match(hangman.validGuess) &&
      !hangman.userGuess.includes(guessValue)
    ) {
      // Push guessed letter to array. If not a valid guess, alert.
      hangman.userGuess.push(guessValue);
      // Add a body part for each incorrect guess
      displayBodyParts();
      // Alert if guess is not valid
    } else if (!guessValue.match(hangman.validGuess)) {
      alertModalText.innerHTML = "<h3>Please enter a valid guess!</h3>";
      hangman.showModal();
      // Alert if letter has already been guessed
    } else if (
      guessValue.match(hangman.validGuess) &&
      hangman.userGuess.includes(guessValue)
    ) {
      alertModalText.innerHTML = "<h3>You already guessed that letter!</h3>";
      hangman.showModal();
    }

    // If user guess is correct, make the letter appear in the word (one player game)
    for (let i = 0; i < twoPlayerLetters.length; i++) {
      if (twoPlayerLetters.includes(guessValue)) {
        if (correct[i].innerHTML === guessValue) {
          correct[i].classList.add("visible");
          correct[i].setAttribute("aria-hidden", "false");
        }
      }
    }

    // Function to add body parts for incorrect guesses
    function displayBodyParts() {
      let twoPlayerLetters = hangman.twoPlayerQuestion[1]
        .toUpperCase()
        .split([,]);
      if (!twoPlayerLetters.includes(guessValue)) {
        wrong.innerHTML += `<p>${guessValue}</p>`;
        if (numberWrong.length === 1) {
          head.classList.remove("hidden");
          body.setAttribute("aria-label", "one of six body parts visible");
        }
        if (numberWrong.length === 2) {
          torso.classList.remove("hidden");
          body.setAttribute("aria-label", "two of six body parts visible");
        }
        if (numberWrong.length === 3) {
          leftArm.classList.remove("hidden");
          body.setAttribute("aria-label", "three of six body parts visible");
        }
        if (numberWrong.length === 4) {
          rightArm.classList.remove("hidden");
          body.setAttribute("aria-label", "four of six body parts visible");
        }
        if (numberWrong.length === 5) {
          leftLeg.classList.remove("hidden");
          body.setAttribute("aria-label", "five of six body parts visible");
        }
        if (numberWrong.length === 6) {
          rightLeg.classList.remove("hidden");
          body.setAttribute(
            "aria-label",
            "all body parts visible, you have been hanged!"
          );
        }
      }
    }

    // If all letters have been guessed correctly, player wins
    if (
      document.querySelectorAll(".correct.visible").length ===
      twoPlayerLetters.length
    ) {
      alertModalText.innerHTML = "<h3>You win!</h3>";
      hangman.showModal();
      playAgain.classList.remove("hidden");
      twoPlayerGuessForm.classList.remove("active");
    }

    // If hangman image has been completed, player loses
    if (!rightLeg.classList.contains("hidden")) {
      alertModalText.innerHTML = "<h3>You lose!</h3>";
      hangman.showModal();
      playAgain.classList.remove("hidden");
      twoPlayerGuessForm.classList.remove("active");
      // Show the correct word
      for (let i = 0; i < twoPlayerLetters.length; i++) {
        correct[i].classList.add("visible");
      }
    }

    // Clear the form input after submit
    twoPlayerGuessForm.reset();
  });
};

// Function to refresh page when Play Again button is clicked
hangman.playAgain = document.querySelector(".playAgain");
hangman.playAgain.addEventListener("click", function () {
  location.reload();
});

// Initialize app
hangman.init = function () {
  hangman.start();
  hangman.createQuestion();
  hangman.checkTwoPlayerGuess();
};

// Document ready
document.addEventListener("DOMContentLoaded", hangman.init);
