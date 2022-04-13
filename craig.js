// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "What is My Favorite Activity?",
    a: [
      { text: "Playing Football", isCorrect: true },
      { text: "Writing", isCorrect: false },
      { text: "Fishing", isCorrect: false },
      { text: "Debate", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Where Was I Born?",
    a: [
      { text: "San Diego, CA", isCorrect: true },
      { text: "Summerville, SC", isCorrect: false },
      { text: "Fredericksburg, VA", isCorrect: false },
      { text: "Sacramento, CA", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "What is My Favorite Color?",
    a: [
      { text: "Red", isCorrect: false },
      { text: "Blue", isCorrect: true },
      { text: "Black", isCorrect: false },
      { text: "White", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "What is My Second Favorite Activity?",
    a: [
      { text: "Writing", isCorrect: false },
      { text: "Fishing", isCorrect: false },
      { text: "Debate", isCorrect: false },
      { text: "Coding", isCorrect: true },
    ],
  },
  {
    id: 4,
    q: "What is My Eye Color?",
    a: [
      { text: "Brown", isCorrect: false },
      { text: "Hazel", isCorrect: false },
      { text: "Blue", isCorrect: true },
      { text: "Green", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "What is My Favorite Food?",
    a: [
      { text: "CFA Number 1", isCorrect: false },
      { text: "Pizza", isCorrect: false },
      { text: "Cheeseburgers", isCorrect: true },
      { text: "Steak and Cheese Sub", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "What is The Job I Want When I'm Older?",
    a: [
      { text: "Lawyer", isCorrect: false },
      { text: "Architecture", isCorrect: true },
      { text: "Chef", isCorrect: false },
      { text: "Coder", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "How Tall Am I?",
    a: [
      { text: "Between 5'6 & 5'7", isCorrect: true },
      { text: "5'5", isCorrect: false },
      { text: "5'6", isCorrect: false },
      { text: "Between 5'5 & 5'6", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "What is My Favorite Football Team?",
    a: [
      { text: "Giants", isCorrect: true },
      { text: "Packers", isCorrect: false },
      { text: "Cheifs", isCorrect: false },
      { text: "Patriots", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "What is My Favorite School Subject?",
    a: [
      { text: "Debate", isCorrect: true },
      { text: "Math", isCorrect: false },
      { text: "Science", isCorrect: false },
      { text: "Languages", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "Who is My Favorite Superhero?",
    a: [
      { text: "Batman", isCorrect: false },
      { text: "Spiderman", isCorrect: true },
      { text: "Captain America", isCorrect: false },
      { text: "War Machine", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "What is My Second Favorite Football Team?",
    a: [
      { text: "Eagles", isCorrect: false },
      { text: "Broncos", isCorrect: false },
      { text: "Raiders", isCorrect: false },
      { text: "Buccaneers", isCorrect: true },
    ],
  },
  {
    id: 12,
    q: "Which is My Favorite Book/Movie From The Lord of the Rings Trilogy?",
    a: [
      { text: "The Fellowship of the Ring", isCorrect: false },
      { text: "The Two Towers", isCorrect: false },
      { text: "Return of the King", isCorrect: false },
      { text: "All of the Above", isCorrect: true },
    ],
  },
  {
    id: 13,
    q: "What am I Most Likely To Be Doing Aside From School Work?",
    a: [
      { text: "Sleeping", isCorrect: false },
      { text: "Chores", isCorrect: false },
      { text: "Talking to Friends", isCorrect: true },
      { text: "Reading Books (Leisurely)", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "Which is My Favorite Movie From The Hobbit?",
    a: [
      { text: "An Unexpected Journey", isCorrect: false },
      { text: "The Desolation of Smaug", isCorrect: false },
      { text: "The Battle of Five Armies", isCorrect: false },
      { text: "All of the Above", isCorrect: true },
    ],
  },
  {
    id: 15,
    q: "If I Could Play as Any Position at Football in the NFL What Position Would I pick?",
    a: [
      { text: "Tite End, TE", isCorrect: false },
      { text: "Quarterback, QB", isCorrect: true },
      { text: "Wide Receiver, WR", isCorrect: false },
      { text: "Running Back, RB", isCorrect: false },
    ],
  },
  {
    id: 16,
    q: "What is My Favorite Not Domestic Animal?",
    a: [
      { text: "Panther", isCorrect: false },
      { text: "Lion", isCorrect: false },
      { text: "Panda", isCorrect: false },
      { text: "Wolf", isCorrect: true },
    ],
  },
  {
    id: 17,
    q: "What is My Middle Name?",
    a: [
      { text: "William", isCorrect: false },
      { text: "Matthew", isCorrect: false },
      { text: "Michael", isCorrect: true },
      { text: "Alexander", isCorrect: false },
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
