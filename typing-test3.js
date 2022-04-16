const passages = [
  `"Always two there are. No more. No less. A master and an apprentice." - Darth Bane`,
  `Darth Bane, who was originally named was Dessel, was the Sith'ari and the Dark Lord of the Sith responsible for creating the Rule of Two. He was born in 1026 BBY, and was raised as a poor miner on the Outer Rim planet Apatros. Darth Bane had a troubled childhood, early on feeling a pull to the darkside. His first use of the darkside happened when he was a child, and was sick of being abused by his father. After being abused, he decided he had taken enough, and wished that his father was dead, and in the night dreamed that he was strangling his father. The next morning, when he awoke, he found his father dead, the cause of death being a heart attack and choking to death. Unfortunately for for Bane, years later, he got into a fight, and took the life of a Galactic Republic ensign.
   After killing the Galactic Republic ensign in the fight, which took place in 1003 BBY, Bane was in danger of being arrested and imprisoned by the Republic. With the help of his friend Groshik, he escaped off-world to join the Sith Brotherhood of Darkness. Initially serving as a foot soldier in the Gloom Walkers unit, he was recognized as a Force-sensitive, and taken to the Sith Academy on Korriban. Bane, as he had been christened, quickly became one of the best students at the Academy before he lost his faith in the dark side of the Force. Though Bane was able to regain his confidence in the dark side, he lost his trust in the Brotherhood of Darkness, believing it to be a flawed organization whose leader, Skere Kaan, was a coward and a fool. Deserting the order, he went to the planet Lehon and studied the holocron of Darth Revan, and, armed with new knowledge, helped destroy the Brotherhood, allowing him to create his own Sith Order. He then instituted a Rule of Two, which stated that there could be only two Sith to avoid the infighting that had plagued the Sith for millennia. He also took both the title of Darth and an apprentice named Darth Zannah. In 990 BBY, ten years after the destruction of the Brotherhood, Bane sought to learn how to create a holocron, through which he would pass down his knowledge to future Sith Lords. The Sith journeyed to the Deep Core world of Tython to locate the Sith holocron of the ancient Dark Lord Belia Darzu. However, while Bane was on Tython, the Jedi Order learned of his existence, and sent a group of Jedi to kill him and his apprentice. Once the Jedi arrived, they confronted the two Sith in Darzu's fortress. Though outnumbered, the Sith were able to defeat the Jedi; however, Bane was grievously injured. Zannah took him to Ambria, where she convinced the healer Caleb to help them. Caleb notified the Jedi Council, only to have Zannah use her powers to drive her cousin Darovit insane. Zannah killed Caleb, then hid herself and Bane. When the Jedi arrived, they killed Darovit, believing him to be the Sith Lord. Thus, the Sith were believed destroyed.
   A decade later, Bane began to worry that his apprentice was too weak to overthrow him and assume the mantle of Dark Lord of the Sith, as was necessary under the Rule of Two. He began to research the secrets to prolonging his life by transferring his essence to another body, and traveled to Prakith, where he claimed the holocron of the ancient Darth Andeddu. After returning from Prakith, Bane was ambushed by a team of assassins hired by Caleb's daughter, Serra, and was captured. Taken to Doan, Bane was imprisoned and tortured, only to covertly gain his freedom soon afterward. Encountering Zannah on Doan, Bane dueled his apprentice, who sought to become the new Dark Lord. The fight ended in a draw, with Bane escaping and heading to Ambria with Darth Cognus, an Iktotchi assassin skilled in use of the dark side whom Bane planned to take as his apprentice if Zannah proved herself weak and unworthy. There, Bane and Zannah engaged in a fateful duel that resulted in the death of the Sith'ari and Zannah claiming the title of Dark Lord. Bane tried to initiate the ritual of essence transfer but failed to control his apprentice's body. Part of Darth Bane's soul lived in Zannah's body after the failed ritual. But the majority of his spirit was thrown into the void, causing him an eternity of suffering. Nearly a millennium later, Bane's Sith Order defeated the Jedi Order and overthrew the Republic. His holocron still imparted wisdom through the years.`,
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
  seconds: 480,
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
  if (time === "8:00" && typingTimer === null) {
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
  const minutes = seconds / 480;
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
        <div id="timer" class="type-btn"><span>8:00</span></div>
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
