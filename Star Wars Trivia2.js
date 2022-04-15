// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Who Made the Rule of Two?",
    a: [
      { text: "Darth Malgus", isCorrect: false },
      { text: "Darth Bane", isCorrect: true },
      { text: "Darth Vitiate", isCorrect: false },
      { text: "Naga Sadow", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Who Was The Sith Who Did No Evil?",
    a: [
      { text: "Darth Bandon", isCorrect: false },
      { text: "Darth Plagueis", isCorrect: false },
      { text: "Darth Vectivus", isCorrect: true },
      { text: "Darth Talon", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Who Was General Grievous Before He Became A Cyborg?",
    a: [
      { text: "Qymaen Jai Sheelal", isCorrect: true },
      { text: "Qwaymen Naj Sheigal", isCorrect: false },
      { text: "Qyamaen Jai Sheegal", isCorrect: false },
      { text: "Neither of the Three", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Who Was The Next Sith Lord After Vader and Sidious? (In the Comics Luke Had a Son Known as Ben Skywalker)",
    a: [
      { text: "Darth Krayt", isCorrect: true },
      { text: "Darth Talon", isCorrect: false },
      { text: "Ben Skywalker", isCorrect: false },
      { text: "Darth Lumiya", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Who Was The Most Brutal Sith Lord?",
    a: [
      { text: "Tulak Hord", isCorrect: false },
      { text: "Darth Malak", isCorrect: false },
      { text: "Darth Revan", isCorrect: false },
      { text: "Darth Malgus", isCorrect: true },
    ],
  },
  {
    id: 5,
    q: "Who Was The Most Powerful Sith Lord In Legend?",
    a: [
      { text: "Darth Malgus", isCorrect: true },
      { text: "Darth Vader", isCorrect: false },
      { text: "Darth Nihlus", isCorrect: false },
      { text: "Darth Sidious", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Why Did Darth Bane Make The Rule Of Two?",
    a: [
      { text: "He Wanted to Rule", isCorrect: false },
      { text: "Selfish Reasons", isCorrect: false },
      { text: "The Dark Side is Stronger With 2 Sith", isCorrect: true },
      { text: "All of the Above", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Who Was The Most Evil Sith Lord In Legend?",
    a: [
      { text: "Darth Bane", isCorrect: true },
      { text: "Darth Malgus", isCorrect: false },
      { text: "Darth Andeddu", isCorrect: false },
      { text: "Darth Vader", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "How Many of Yoda's Species Are Known Of?",
    a: [
      { text: "4", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "Unknown", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "Who Was the Apprentice of Darth Bane?",
    a: [
      { text: "Darth Malak", isCorrect: false },
      { text: "Darth Talon", isCorrect: false },
      { text: "Darth Zannah", isCorrect: true },
      { text: "Darth Cognus", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "Who Was StarKiller?",
    a: [
      { text: "Darth Vader's Secret Apprentice", isCorrect: true },
      { text: "A Ship", isCorrect: false },
      { text: "A Nickname For A Generak", isCorrect: false },
      { text: "A Powerful Energy Wave", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "What Is The Name of the Ancient Sith's Homeworld?",
    a: [
      { text: "Koros Minor", isCorrect: false },
      { text: "Cinnagar", isCorrect: false },
      { text: "Korriban", isCorrect: true },
      { text: "Bosthirda", isCorrect: false },
    ],
  },
  {
    id: 12,
    q: "What Was the Name Of Darth Zannah's Apprentice?",
    a: [
      { text: "Darth Talon", isCorrect: false },
      { text: "Darth Cognus", isCorrect: true },
      { text: "Darth Lumiya.", isCorrect: false },
      { text: "Darth Kreia", isCorrect: false },
    ],
  },
  {
    id: 13,
    q: "Who is Believed to be The Forebearer of The Darth Title?",
    a: [
      { text: "Darth Caldoth", isCorrect: false },
      { text: "Darth Andeddu", isCorrect: true },
      { text: "Darth Atrius", isCorrect: false },
      { text: "Darth Noctyss", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "Who is Thought to Be The Most Dangerous Sith Lord Ever?",
    a: [
      { text: "Exar Kun", isCorrect: false },
      { text: "Count Dooku", isCorrect: false },
      { text: "Darth Bane, Malgus, & Malak", isCorrect: false },
      { text: "All of the Above", isCorrect: true },
    ],
  },
  {
    id: 15,
    q: "What Was the Time Frame Called When The Sith Came Into Power?",
    a: [
      { text: "The Hundred Year Darkness", isCorrect: true },
      { text: "The Thousand Year Darkness", isCorrect: false },
      { text: "The Thousand Year War", isCorrect: false },
      { text: "The Darkest Time", isCorrect: true },
    ],
  },
  {
    id: 16,
    q: "Who Was the Name Of the Sith Order?",
    a: [
      { text: "Brotherhood of Darkness", isCorrect: true },
      { text: "Dark Jedi", isCorrect: false },
      { text: "Lords of the Sith", isCorrect: false },
      { text: "Lords of the Twisted Night", isCorrect: false },
    ],
  },
  {
    id: 17,
    q: "Who Was The Sith Who Ruled As the Lord of the Sith For the Longest Time Period?",
    a: [
      { text: "Sith Emperor", isCorrect: true },
      { text: "Darth Andeddu", isCorrect: false },
      { text: "Naga Sadow", isCorrect: false },
      { text: "Darth Revan", isCorrect: false },
    ],
  },
  {
    id: 18,
    q: "Who Was The Sith Known as Planet Eater?",
    a: [
      { text: "StarKiller", isCorrect: false },
      { text: "Darth Plagueis", isCorrect: false },
      { text: "Darth Nihlus", isCorrect: true },
      { text: "Darth Atrius", isCorrect: false },
    ],
  },
  {
    id: 19,
    q: "Who Was the Most Prominent Sith Lord?",
    a: [
      { text: "Darth Malgus", isCorrect: false },
      { text: "Darth Vader", isCorrect: false },
      { text: "Darth Sidious", isCorrect: false },
      { text: "Darth Bane", isCorrect: true },
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
  if (id < 20) {
    id++;
    iterate(id);
    console.log(id);
  }
});
