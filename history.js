// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Who Invented the Light Bulb?",
    a: [
      { text: "Thomas Edison", isCorrect: true },
      { text: "Alexander Bell", isCorrect: false },
      { text: "Benjamin Franklin", isCorrect: false },
      { text: "Albert Einstein", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Who Gave America The Statue of Liberty?",
    a: [
      { text: "Canada", isCorrect: false },
      { text: "Brittan", isCorrect: false },
      { text: "France", isCorrect: true },
      { text: "Spain", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Who Made the Assembly Line?",
    a: [
      { text: "John Fitch", isCorrect: false },
      { text: "Henry Ford", isCorrect: true },
      { text: "Karl Benz", isCorrect: false },
      { text: "Elon Musk", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Who was the 23rd President of the United States?",
    a: [
      { text: "Grover Cleveland", isCorrect: false },
      { text: "Rutherford Hayes", isCorrect: false },
      { text: "William Taft", isCorrect: false },
      { text: "Benjamin Harrison", isCorrect: true },
    ],
  },
  {
    id: 4,
    q: "Who Was Englands First Serial Killer?",
    a: [
      { text: "Son of Sam", isCorrect: false },
      { text: "Harold Shipman", isCorrect: false },
      { text: "Jack the Ripper", isCorrect: true },
      { text: "James Boyd", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Who Discovered America?",
    a: [
      { text: "Leif Eriksson", isCorrect: true },
      { text: "Christopher Columbus", isCorrect: false },
      { text: "Henry Hudson", isCorrect: false },
      { text: "Juan Ponce de Leon", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "What Year did the Civil War End?",
    a: [
      { text: "1864", isCorrect: false },
      { text: "1865", isCorrect: true },
      { text: "1866", isCorrect: false },
      { text: "1868", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Who was King of Prussia Who Overthrew Babylon?",
    a: [
      { text: "King Cyrus", isCorrect: true },
      { text: "Xerxes the Great", isCorrect: false },
      { text: "Darius the Great", isCorrect: false },
      { text: "Artaxerxes I", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "What Year Did The Chernobyl Disaster Occur?",
    a: [
      { text: "1986", isCorrect: true },
      { text: "1985", isCorrect: false },
      { text: "1987", isCorrect: false },
      { text: "1982", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "Who Was The First U.S. President To Be Impeached?",
    a: [
      { text: "Donald Trump", isCorrect: false },
      { text: "Bill Clinton", isCorrect: false },
      { text: "Andrew Johnson", isCorrect: true },
      { text: "Thomas Jefferson", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "What Was TET?",
    a: [
      { text: "A Place in Vietnam", isCorrect: false },
      { text: "Spring Festival, Lunar New Year", isCorrect: true },
      { text: "Vietnam War Attack", isCorrect: false },
      { text: "A Machine of War", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "What Was The State That Had A Massive Gold Rush in 1830",
    a: [
      { text: "Alabama", isCorrect: true },
      { text: "Georgia", isCorrect: false },
      { text: "California", isCorrect: false },
      { text: "New Mexico", isCorrect: false },
    ],
  },
  {
    id: 12,
    q: "What Ship Sank In 1912?",
    a: [
      { text: "The Titanic", isCorrect: true },
      { text: "The Future", isCorrect: false },
      { text: "The USS Nina", isCorrect: false },
      { text: "All of the Above", isCorrect: false },
    ],
  },
  {
    id: 13,
    q: "What Was The TET Offensive?",
    a: [
      { text: "A Place in Vietnam", isCorrect: false },
      { text: "Spring Festival, Lunar New Year", isCorrect: false },
      { text: "Vietnam War Attack", isCorrect: true },
      { text: "A Machine of War", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "Who Did Not Sign the Constitution, But Authorized George Read to Sign For Him?",
    a: [
      { text: "George Mason", isCorrect: false },
      { text: "Nicholas Gilman", isCorrect: false },
      { text: "Alexander Hamilton", isCorrect: false },
      { text: "John Dickinson", isCorrect: true },
    ],
  },
  {
    id: 15,
    q: "When Did World War II Start?",
    a: [
      { text: "1938", isCorrect: false },
      { text: "1939", isCorrect: true },
      { text: "1942", isCorrect: false },
      { text: "1940", isCorrect: false },
    ],
  },
  {
    id: 16,
    q: "How Long Did The Hundred Years' War Last?",
    a: [
      { text: "83 Years", isCorrect: false },
      { text: "100 Years", isCorrect: false },
      { text: "115 Yearsanda", isCorrect: false },
      { text: "116 Years", isCorrect: true },
    ],
  },
  {
    id: 17,
    q: "Who Was One of 3 People to Sign the Constitution for New York? (Hint: One of These 4 Did NOT Sign The Constitution)",
    a: [
      { text: "David Brearly", isCorrect: false },
      { text: "Charles Pinckney", isCorrect: false },
      { text: "Alexander Hamilton", isCorrect: true },
      { text: "Aaron Burr", isCorrect: false },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 18) {
    id++;
    iterate(id);
    console.log(id);
  }
});
