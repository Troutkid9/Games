const passages = [
  `This is the story of Darth Plagueis The Wise, as The Sith Lord Sideous had told it to Anakin Skywalker before he became Darth Vader.`,
  `Let the story begin!`,
  `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life…`,
  `He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.`,
  `Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.`,
  `Here concludes the story of Darth Plagueis The Wise.`,
];

const wordList =
  passages[Math.floor(Math.random() * passages.length)].split(/\s+/g);

const $$ = document.querySelectorAll.bind(document);

// Add words to word-section
function addWords() {
  // Clear existing word-section
  const wordSection = $$("#word-section")[0];
  wordSection.innerHTML = "";
  $$("#typebox")[0].value = "";

  for (let index = 0; index < wordList.length; index++) {
    const wordSpan = `<span>${wordList[index]}</span>`;
    wordSection.innerHTML += wordSpan;
  }

  // Mark first word as current-word
  wordSection.firstChild.classList.add("current-word");
}

// Word Colors
const colorCurrentWord = "#dddddd";
const colorCorrectWord = "#93C572";
const colorIncorrectWord = "#e50000";

// Word Count and other data.
const wordData = {
  seconds: 60,
  correct: 0,
  incorrect: 0,
  total: 0,
  typed: 0,
};

function checkWord(word) {
  const wlen = word.value.length;
  const wval = word.value.trim();

  // How much we have of the current word.
  const current = $$(".current-word")[0];
  const currentSubstring = current.innerHTML.substring(0, wlen);

  // Check if we have any typing errors and make sure there is a real
  // word to check https://github.com/anschwa/typing-test/issues/2
  const noMatch = wval !== currentSubstring;
  const emptyWords = wval === "" || currentSubstring === "";

  if (noMatch || emptyWords) {
    current.classList.add("incorrect-word-bg");
    return false;
  } else {
    current.classList.remove("incorrect-word-bg");
    return true;
  }
}

function submitWord(word) {
  // Update current-word and keep track of correct & incorrect words
  const current = $$(".current-word")[0];

  if (checkWord(word)) {
    current.classList.remove("current-word");
    current.classList.add("correct-word-c");
    wordData.correct += 1;
  } else {
    current.classList.remove("current-word", "incorrect-word-bg");
    current.classList.add("incorrect-word-c");
    wordData.incorrect += 1;
  }

  // Update wordData
  wordData.total = wordData.correct + wordData.incorrect;

  // Make the next word the new current-word.
  current.nextSibling.classList.add("current-word");
}

function clearLine() {
  // Remove past words once you get to the next line
  const wordSection = $$("#word-section")[0];
  const current = $$(".current-word")[0];
  const previous = current.previousSibling;
  const children = $$(".correct-word-c, .incorrect-word-c").length;

  // <span>'s on the next line have a greater offsetTop value than
  // those on the top line. Remove words until the first word on the
  // second line is the fistChild of word-section.
  if (current.offsetTop > previous.offsetTop) {
    for (let i = 0; i < children; i++) {
      wordSection.removeChild(wordSection.firstChild);
    }
  }
}

let typingTimer = null;
function isTimer(seconds) {
  // BUG: page refresh with keyboard triggers onkeyup and starts timer
  const time = $$("#timer > span")[0].innerHTML;
  if (time === "0:00") {
    return false;
  }

  // Only set timer once
  if (time === "1:00" && typingTimer === null) {
    typingTimer = window.setInterval(() => {
      if (seconds <= 0) {
        window.clearInterval(typingTimer);
      } else {
        seconds -= 1;
        const timePad = seconds < 10 ? "0" + seconds : seconds; // Zero padded

        $$("#timer > span")[0].innerHTML = `0:${timePad}`;
      }
    }, 1000);
  }

  return true;
}

function calculateWPM(data) {
  const { seconds, correct, incorrect, total, typed } = data;
  const minutes = seconds / 60;
  const wpm = Math.max(0, Math.ceil((typed / 5 - incorrect) / minutes));
  const accuracy = Math.ceil((correct / total) * 100);

  const results = `
<ul id="results">
  <li>WPM: <span class="wpm-value">${wpm}</span></li>
  <li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
  <li id="results-stats">
    Total Words: <span>${total}</span> |
    Correct Words: <span>${correct}</span> |
    Incorrect Words: <span>${incorrect}</span> |
    Characters Typed: <span>${typed}</span>
  </li>
</ul>
`;

  $$("#word-section")[0].innerHTML = results;

  // Color-code accuracy
  const wpmClass = $$("li:nth-child(2) .wpm-value")[0].classList;
  if (accuracy > 80) {
    wpmClass.add("correct-word-c");
  } else {
    wpmClass.add("incorrect-word-c");
  }

  //   console.log(wordData);
}

function typingTest(e) {
  const SPACE = 32;

  // Get key code of current key pressed.
  e = e || window.event;
  const kcode = e.keyCode;
  const word = $$("#typebox")[0];

  // Check if empty (starts with space)
  if (word.value.match(/^\s/g)) {
    word.value = "";
    return;
  }

  // Display typing test results when timer runs out.
  const isGameover = !isTimer(wordData.seconds);
  if (isGameover) {
    calculateWPM(wordData);
    return;
  }

  // Otherwise, keep score when timer is on.
  checkWord(word);
  if (kcode === SPACE) {
    submitWord(word);
    clearLine();

    $$("#typebox")[0].value = "";
  }

  wordData.typed += 1;
}

function restartTest() {
  $$("#typebox")[0].value = "";
  window.location.reload();
}

/**
 * Builds the typing test HTML and all
 * @param id Name of the element to place the typing test inside of
 */
function buildTypingTest(id) {
  // inject the CSS
  let styles = `#typing-test {margin: 0 auto;}#typing-test > section {padding: 0.5em;margin: 0 auto;}#timer,#restart {margin: 0.2em;line-height: 2.2em;height: 2.2em;}#word-section {width: 86%;font-size: 1.5em;height: 4em;line-height: 2em;border-radius: 0.25em;position: relative;overflow: hidden;}#word-section > span {display: inline-block;margin-left: 0.2em;}#type-section {text-align: center;}#type-section > * {font-size: 1.5em;display: inline-block;border-radius: 0.25em;color: #fff;vertical-align: middle;}#typebox {width: 64%;color: #000;padding: 0.5em;}#timer {width: 4em;background-color: #21557f;margin-right: 0;}#restart {width: 2em;background-color: #437ea1;}#restart > span {display: inline-block;transform: rotate(1.5rad);font-weight: bold;}#restart:hover {background-color: #21557f;}#results {text-align: center;margin: 0 1%;display: block;}#results li {list-style: none;}#results li:first-child {font-size: 1.5em;}#results li:nth-child(2) {font-size: 0.8em;line-height: 1em;}#results #results-stats {font-size: 0.6em;}footer {margin-top: 1em;text-align: center;font-size: 0.8em;color: #000;}footer a {color: #000;text-decoration: none;}footer a:hover {text-decoration: underline;}.magic-box {position: fixed;width: inherit;height: 0.5em;top: 54px;background-color: #fff;}.waiting {text-align: center;line-height: 1.5em;font-size: 3em;}.current-word {background-color: #dddddd;}.correct-word-c {color: #93c572;}.incorrect-word-c {color: #e50000;}.incorrect-word-bg {background-color: #e50000;}`;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // add the HTML
  let tag = document.getElementById(id);
  tag.innerHTML = `
    <div id="typing-test">
      <section id="word-section">
        <div class="waiting">&#9203;</div>
      </section>

      <section id="type-section">
        <input id="typebox" name="typebox" type="text" tabindex="1" autofocus onkeyup="typingTest(event)" />
        <div id="timer" class="type-btn"><span>1:00</span></div>
        <button id="restart" class="type-btn" tabindex="2" onclick="restartTest()">
          <span id="restart-symbol">&#8635;</span>
        </button>
      </section>
    </div>
  `;
  addWords();
}

/**
 * Adapted from https://github.com/anschwa/typing-test/
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Adam Schwartz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
