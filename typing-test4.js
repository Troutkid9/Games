const passages = [
  `From Jedi to Sith:
Born in the Deep Core on the planet Prakith, Ortan Cela was taken into the Jedi Order and trained in the ways of the Force by Jedi Guardian Tulak Hord. During the Hundred-Year Darkness, Cela and his master joined the Dark Jedi dissidents and fought against those who were once their brothers. At the end of the war, the surviving Dark Jedi — including Cela — were banished into the unknown and left to fend for their own. Guiding their way through the Stygian Caldera, the Exiles came across Korriban, home to the Sith species and strong in the dark side of the Force. Settling down on the planet, the Dark Jedi overthrew the Sith king and declared themselves Dark Lords of the Sith.
After Ajunta Pall's death, Tulak Hord swiftly claimed the throne and Ortan Cela subsequently became his Shadow Hand. During this time, Cela became invested in finding the means to cheat death, endlessly studying the rituals of Karness Muur. As his thirst for knowledge grew, so too did his ambition. When the time eventually came, Cela turned against his master and stabbed Tulak Hord in the back, ending the Dark Lord's reign. With Hord's death, the other Dark Lords tore themselves apart while Cela watched from the sidelines, waiting for the right moment to claim the mantle for himself. However, the patience of his followers proved to be weaker and Cela was betrayed and struck down in turn.
Rather than perish however, Cela was able to preserve his life with the use of dark transfer, a technique developed by Karness Muur. Retreating from the public eye, Cela was able to keep himself alive for the next several hundred years as he poured all of his focus into learning how to further extend his life.
The Long Game:
By 6500 BBY, the Sith Empire had long since entered its Golden Age and were now ruled by a dynasty of Pureblood Sith, with the humans that had once lorded over them now serving as slaves. Realizing he needed a pawn in order to reclaim his status in a world ruled by Sith, Ortan Cela found a potential asset in the form of Rakar Val, an abused outcast even among his own people. Working behind the scenes, Cela manipulated the Sith Lord Norak Vor to retrieve Rakar and elevate him to a rank of high status. After Norak became Dark Lord, he sent Rakar to find the means for immortality. Unbeknownst to him, Cela had since sought out Rakar himself, posing as a wily old man, and convinced Rakar to bring him along to Lehon.
Arriving on Lehon, Cela and Rakar impressed themselves upon the native Rakata and were bestowed in return the title of darth, loosely translating to victors over death. Upon returning to Korriban, the two overthrew Norak Vor and executed him before the Sith Council. While Rakar assumed the mantle of Dark Lord, Cela was content with serving as Shadow Hand once more, taking on the name Darth Andeddu as he waited once more for the right moment to strike.
Ascension and Fall: 
Over the next century, Darth Andeddu kept himself alive with dark transfer and artifacts left behind by Sorzus Syn. Behind Darth Trayus' back, he studied the armor the Rakata had given Rakar and eventually devised the means to not only preserve his essence but to transfer it to another vessel. Once he had learned all he needed, Andeddu betrayed Trayus — just as he had Tulak Hord centuries before — and trapped the Dark Lord's essence within a crystal prison. At last, after five hundred years, Darth Andeddu had become the Dark Lord of the Sith.
His reign was not to last however. As Andeddu's power grew, so too did his paranoia. Fearing that his subordinates coveted the secret power he had concoted, the Dark Lord refused to pass on his knowledge. In response, the Sith Lord banded together and overthrew Andeddu, banishing him from Korriban. Retreating to his homeworld of Prakith, Andeddu laid claim to the world and raised a cult loyal to him, declaring himself the Immortal God-King of Prakith. Still wrought with paranoia however, Andeddu eventually entombed himself with recordings of all his knowledge and sealed himself away for the next several thousand years.`,
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
  seconds: 600,
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
  const minutes = seconds / 600;
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
        <div id="timer" class="type-btn"><span>10:00</span></div>
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
