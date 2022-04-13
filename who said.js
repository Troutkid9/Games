// Questions will be asked
const Questions = [
  {
    id: 0,
    q: '"Everything is Edible at Least Once."',
    a: [
      { text: "Maggie", isCorrect: true },
      { text: "Craig", isCorrect: false },
      { text: "Anthony", isCorrect: false },
      { text: "James", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: '"I Simp For Everyone...Except My brothers...But I Especially Simp For Daddy Hunter"',
    a: [
      { text: "Anthony", isCorrect: false },
      { text: "Raymond", isCorrect: false },
      { text: "Craig", isCorrect: true },
      { text: "James", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: '"Its Not Cheating if You Dont Get Caught" (It wont let me use apostrophes)',
    a: [
      { text: "Abigail", isCorrect: false },
      { text: "Craig", isCorrect: false },
      { text: "Maggie", isCorrect: false },
      { text: "All of the Above + James", isCorrect: true },
    ],
  },
  {
    id: 3,
    q: '"I Dare You to Moan"',
    a: [
      { text: "Craig", isCorrect: false },
      { text: "Cameron", isCorrect: false },
      { text: "James", isCorrect: false },
      { text: "Anthony", isCorrect: true },
    ],
  },
  {
    id: 4,
    q: 'The person: "are you high?" The response: "Maybe..." (Figure Out Who Said Maybe)',
    a: [
      { text: "Hunter", isCorrect: false },
      { text: "Craig", isCorrect: false },
      { text: "James", isCorrect: true },
      { text: "Cameron", isCorrect: false },
    ],
  },

  {
    id: 5,
    q: '"The Craig Awakens"',
    a: [
      { text: "Maggie", isCorrect: false },
      { text: "Raymond", isCorrect: false },
      { text: "Anthony", isCorrect: true },
      { text: "All of the Above", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: '"The Return of the Craig"',
    a: [
      { text: "Anthony", isCorrect: false },
      { text: "Maggie", isCorrect: true },
      { text: "Raymond", isCorrect: false },
      { text: "Cameron", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: '"I Love Women"',
    a: [
      { text: "Craig", isCorrect: true },
      { text: "Maggie", isCorrect: false },
      { text: "Hunter", isCorrect: false },
      { text: "Autumn", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: '"You Got Any Drugs?"',
    a: [
      { text: "Raymond", isCorrect: false },
      { text: "James", isCorrect: true },
      { text: "Anthony", isCorrect: false },
      { text: "Cameron", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: '"I Am an Apple"',
    a: [
      { text: "Dani", isCorrect: true },
      { text: "Abigail", isCorrect: false },
      { text: "Maggie", isCorrect: false },
      { text: "Taylor", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: '"Dont Gaslight Me Craigatron!"',
    a: [
      { text: "Raymond", isCorrect: true },
      { text: "Anthony", isCorrect: false },
      { text: "Maggie", isCorrect: false },
      { text: "Taylor", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: 'The First Person: "I Remember You Saying Your Gay" The Second Person: "Wait........I Never Said That!" The First Person: "Not Yet" (Who Said: "Not Yet")',
    a: [
      { text: "Maggie", isCorrect: false },
      { text: "Craig", isCorrect: false },
      { text: "James", isCorrect: true },
      { text: "Anthony", isCorrect: false },
    ],
  },
  {
    id: 12,
    q: 'The First Person: "I Remember You Saying Your Gay" The Second Person: "Wait........I Never Said That!" The First Person: "Not Yet" (Who Said: "Wait........I Never Said That!")',
    a: [
      { text: "Hunter", isCorrect: false },
      { text: "Craig", isCorrect: true },
      { text: "James", isCorrect: false },
      { text: "Anthony", isCorrect: false },
    ],
  },
  {
    id: 13,
    q: '"Let it Be on Record That I Havent Denied My Son Food"',
    a: [
      { text: "Both of Them", isCorrect: false },
      { text: "Neither of Them", isCorrect: false },
      { text: "Maggie", isCorrect: false },
      { text: "Autumn", isCorrect: true },
    ],
  },
  {
    id: 14,
    q: '"I Like Big Butts and I Cannot Lie..."',
    a: [
      { text: "Raymond", isCorrect: false },
      { text: "Craig", isCorrect: true },
      { text: "Maggie", isCorrect: false },
      { text: "Anthony", isCorrect: false },
    ],
  },
  {
    id: 15,
    q: '"Bruv Did You Get That Bo-oh of wo-oh?"',
    a: [
      { text: "Raymond", isCorrect: true },
      { text: "Craig", isCorrect: false },
      { text: "Maggie", isCorrect: false },
      { text: "Anthony", isCorrect: false },
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
  if (id < 15) {
    id++;
    iterate(id);
    console.log(id);
  }
});
