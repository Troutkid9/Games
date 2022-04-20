(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1: How Many Grammies Has Taylor Swift Won?",
      answers: {
        a: "6",
        b: "11",
        c: "13",
      },
      correctAnswer: "b",
    },
    {
      question: "2: What is Taylor Swift Brother's Name?",
      answers: {
        a: "James Swift",
        b: "Harold Swift",
        c: "Austin Swift",
      },
      correctAnswer: "c",
    },
    {
      question:
        "3: What Has Maggie Called Taylor Swift Before as a Nickname (In the GC or In Person)?",
      answers: {
        a: "T Swizzle",
        b: "T.S.",
        c: "Tay Tay Swift",
        d: "Tay Swift",
      },
      correctAnswer: "a",
    },
    {
      question: "4: Where Was Taylor Swift Born?",
      answers: {
        a: "Dothan, Alabama",
        b: "Los Angeles, California",
        c: "Columbia, South Carolina",
        d: "West Reading, Pennsylvania",
      },
      correctAnswer: "d",
    },
    {
      question: "5: What Year was Taylor Swift Born?",
      answers: {
        a: "1988",
        b: "1989",
        c: "1990",
        d: "1991",
      },
      correctAnswer: "b",
    },
    {
      question: "6: What Age Did Taylor Swift Turn in 2022?",
      answers: {
        a: "34",
        b: "33",
        c: "32",
        d: "31",
      },
      correctAnswer: "b",
    },
    {
      question:
        "7: In what song does Taylor sing: “Cause the players gonna play, play, play, play, play”?",
      answers: {
        a: "Picture to Burn",
        b: "I Knew You Were Trouble",
        c: "Shake it Off",
        d: "Bad Blood",
      },
      correctAnswer: "c",
    },
    {
      question: "8: What Was the Title of Taylor Swift's First Album?",
      answers: {
        a: "Fearless",
        b: "Speak Now",
        c: "Red",
        d: "Taylor Swift",
      },
      correctAnswer: "d",
    },
    {
      question: "9: What Was Taylor Swift's First Hit",
      answers: {
        a: "13",
        b: "You Belong With Me",
        c: "Love Story",
        d: "Shake it Off",
      },
      correctAnswer: "a",
    },
    {
      question: "10: What is Taylor Swift's Most Recent Album Name?",
      answers: {
        a: "Lover",
        b: "Red",
        c: "Evermore",
        d: "Folklore",
      },
      correctAnswer: "c",
    },
    {
      question: "11: What is Taylor Swift’s Middle Name?",
      answers: {
        a: "Addison",
        b: "Alison",
        c: "Avery",
        d: "Ava",
      },
      correctAnswer: "b",
    },
    {
      question: "12: What is the Name of Taylor’s Childhood Best Friend?",
      answers: {
        a: "Abigail Anderson",
        b: "Claire Walters",
        c: "Maggie Clark",
        d: "Amy Holt",
      },
      correctAnswer: "a",
    },
    {
      question:
        "13: What is Taylor Swift's Favorite Number, Which is Known as Her Lucky Number?",
      answers: {
        a: "11",
        b: "12",
        c: "13",
        d: "14",
      },
      correctAnswer: "c",
    },
    {
      question: "14: When is Taylor’s Birthday?",
      answers: {
        a: "Jan. 13",
        b: "June 13",
        c: "Nov. 13",
        d: "Dec. 13",
      },
      correctAnswer: "d",
    },
    {
      question: "15: Where Did Taylor Move at the Age of 14?",
      answers: {
        a: "Nashville, Tennessee",
        b: "Gatlinburg, Tennessee",
        c: "Memphis, Tennessee",
        d: "Knoxville, Tennessee",
      },
      correctAnswer: "a",
    },
    {
      question: "16: Where was Taylor Born?",
      answers: {
        a: "Tenesee",
        b: "South Carolina",
        c: "Pennsylvania",
        d: "West Virgina",
      },
      correctAnswer: "c",
    },
    {
      question: "17: How Many Singles Were Released From Taylor’s First Album?",
      answers: {
        a: "6",
        b: "5",
        c: "4",
        d: "3",
      },
      correctAnswer: "b",
    },
    {
      question:
        "18: How Many Songs Did Taylor Write On Her Own on Her Album “Fearless?”",
      answers: {
        a: "5",
        b: "6",
        c: "7",
        d: "8",
      },
      correctAnswer: "c",
    },
    {
      question: "19: Taylor is a Cat Person?",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a",
    },
    {
      question:
        "20: In What Song Does Taylor Sing the Lyrics: “I guess you didn’t care, and I guess I liked that”?",
      answers: {
        a: "Look What You Made Me Do",
        b: "I Knew You Were Trouble",
        c: "Shake it Off",
        d: "Bad Blood",
      },
      correctAnswer: "b",
    },
    {
      question: "21: What is Taylor Swift’s Favorite Color?",
      answers: {
        a: "Yellow",
        b: "Blue",
        c: "Deep Red",
        d: "Purple",
      },
      correctAnswer: "d",
    },
    {
      question:
        "22: Which Singer Collaborated With Taylor Swift on the “One Last Time”?",
      answers: {
        a: "Gary Lightbody",
        b: "Ed Sheeran",
        c: "Justin Bieber",
        d: "Drake",
      },
      correctAnswer: "a",
    },
    {
      question: "23: How Many Cats Does Taylor Swift Have?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "5",
      },
      correctAnswer: "b",
    },
    {
      question: "24: What Is Taylor Swift's Most Popular Song?",
      answers: {
        a: "State of Grace",
        b: "Shake it Off",
        c: "Bad Blood",
        d: "Love Story",
      },
      correctAnswer: "a",
    },
    {
      question: "25: What Breed of Cat Did Taylor Swift Make Popular?",
      answers: {
        a: "British Shorthair",
        b: "Birman",
        c: "American Curl",
        d: "Scottish Folds",
      },
      correctAnswer: "d",
    },
    {
      question: "26: Taylor Swift is Naturally Brunette?",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b",
    },
    {
      question:
        "27: In The Music Video for “Teardrops on My Guitar”, What Color is the Gown Taylor Swift Wears?",
      answers: {
        a: "Bluish-Green",
        b: "Red",
        c: "Blue",
        d: "Silver",
      },
      correctAnswer: "a",
    },
    {
      question:
        "28: What Famous Country Singer is Name-Checked on Taylor's First Album's Tracklist?",
      answers: {
        a: "Dolly Parton",
        b: "Faith Hill",
        c: "Tim McGraw",
      },
      correctAnswer: "c",
    },
    {
      question: "29: Taylor Lived on What Kind of Farm When She Was Young?",
      answers: {
        a: "Christmas Tree Farm",
        b: "Apple Orchard",
        c: "Dairy Farm",
        d: "A Corn Plantation",
      },
      correctAnswer: "a",
    },
    {
      question: "30: How Many Grammys Did Taylor Win in 2010?",
      answers: {
        a: "None",
        b: "2",
        c: "3",
        d: "4",
      },
      correctAnswer: "d",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener("click", showResults);
})();
