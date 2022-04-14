// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Jedi Council Consists of How Many Members?",
    a: [
      { text: "14 +", isCorrect: false },
      { text: "13", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "11", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What Were Luke’s Aunt and Uncle’s Jobs on Tatooine?",
    a: [
      { text: "Moisture Farmers", isCorrect: true },
      { text: "Crop Farmers", isCorrect: false },
      { text: "Mushroom Harvesters", isCorrect: false },
      { text: "Live Stock Breeders", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "An X-wing Fighter Has How Many Engines?",
    a: [
      { text: "2", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "How Many Languages is C-3P0 Fluent In?",
    a: [
      { text: "6 Hundred Million", isCorrect: false },
      { text: "6 Million", isCorrect: false },
      { text: "66 Million", isCorrect: false },
      { text: "Over 6 million", isCorrect: true },
    ],
  },
  {
    id: 4,
    q: "How Many Dewbacks Were in the Original 1977 Theatrical Cut of The First Star Wars Movies?",
    a: [
      { text: "Two", isCorrect: true },
      { text: "Three", isCorrect: false },
      { text: "Four", isCorrect: false },
      { text: "Five", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "What Kind of Trooper is Introduced at the Beginning of Rogue One?",
    a: [
      { text: "Storm Troopers", isCorrect: false },
      { text: "Extraction Troopers", isCorrect: false },
      { text: "Death Troopers", isCorrect: true },
      { text: "Assault Troopers", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "What Does AT-AT Stand For?",
    a: [
      { text: "All Terain Attack Transport", isCorrect: false },
      { text: "All Terrain Armored Transport", isCorrect: true },
      { text: "Attack Transport - All Terain", isCorrect: false },
      { text: "Any Terrain Attack Transport", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "What Odds Does C-3P0 Give Han for Successfully Navigating the Asteroid Field?",
    a: [
      { text: "3,720 to 1", isCorrect: true },
      { text: "3,782 to 1", isCorrect: false },
      { text: "4,921 to 1", isCorrect: false },
      { text: "5,730 to 1", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "Who Was the Original Commander of the Death Star?",
    a: [
      { text: "Grand Moff Tarkin", isCorrect: true },
      { text: "Darth Vader", isCorrect: false },
      { text: "Grand Admiral Thrawn", isCorrect: false },
      { text: "Orson Krennic", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "Which Sector, or Sectors, Does The Empire Strikes Back Take Place In?",
    a: [
      { text: "The Sluis Sector and The Anoat Sector", isCorrect: true },
      { text: "The Anoat Sector", isCorrect: false },
      { text: "The Sluis Sector", isCorrect: false },
      { text: "Neither of them", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "Who Was the Last Person to Jump Down the Death Star’s Garbage Chute?",
    a: [
      { text: "Leia Organa", isCorrect: false },
      { text: "Han Solo", isCorrect: true },
      { text: "Luke Skywalker", isCorrect: false },
      { text: "Chewbacca", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "When Luke Asked What Was in the Cave on Dagobah, What Was Yoda’s Response?",
    a: [
      { text: "“Only what you bring with you.”", isCorrect: false },
      { text: "“Only what you fear.”", isCorrect: false },
      { text: "“Only your feelings and fear.”", isCorrect: false },
      { text: "“Only what you take with you.”", isCorrect: true },
    ],
  },
  {
    id: 12,
    q: "In What Detention Block/Cell Was Princess Leia Being Held In (In the First Death Star)?",
    a: [
      { text: "Cell Block DB-53", isCorrect: false },
      { text: "Cell Block AA-23", isCorrect: false },
      { text: "Cell Block DB-22", isCorrect: false },
      { text: "Cell Block AA-23", isCorrect: true },
    ],
  },
  {
    id: 13,
    q: "How Old Was Padmè When She Became Queen?",
    a: [
      { text: "13", isCorrect: false },
      { text: "14", isCorrect: true },
      { text: "15", isCorrect: false },
      { text: "16", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "Leia Said Never Underestimate a What?",
    a: [
      { text: "A Rebel", isCorrect: false },
      { text: "A Wookiee", isCorrect: false },
      { text: "A Jedi", isCorrect: false },
      { text: "A Droid", isCorrect: true },
    ],
  },
  {
    id: 15,
    q: "How Old is Yoda When He Dies?",
    a: [
      { text: "920", isCorrect: false },
      { text: "900", isCorrect: true },
      { text: "950", isCorrect: false },
      { text: "990", isCorrect: false },
    ],
  },
  {
    id: 16,
    q: "What Planet Does Rey Live On in The Force Awakens?",
    a: [
      { text: "Jakku", isCorrect: true },
      { text: "Jahkuu", isCorrect: false },
      { text: "Jakuh", isCorrect: false },
      { text: "Gakuh", isCorrect: false },
    ],
  },
  {
    id: 17,
    q: "According to Yoda, What is the Path to the Dark Side?",
    a: [
      { text: "Anger", isCorrect: false },
      { text: "Hate ", isCorrect: false },
      { text: "Fear", isCorrect: true },
      { text: "All of the Above", isCorrect: false },
    ],
  },
  {
    id: 18,
    q: "What is the red substance found on the planet Crait?",
    a: [
      { text: "Clay", isCorrect: false },
      { text: "Salt ", isCorrect: true },
      { text: "Minerals", isCorrect: false },
      { text: "Dirt", isCorrect: false },
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
  if (id < 19) {
    id++;
    iterate(id);
    console.log(id);
  }
});
