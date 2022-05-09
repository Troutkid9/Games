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
      question: "1: Who Moans the Most?",
      answers: {
        a: "Anthony",
        b: "Craig",
        c: "James",
        d: "All of the Above",
      },
      correctAnswer: "a",
    },
    {
      question: "2: Who's Favorite Color is Yellow?",
      answers: {
        a: "Abigail",
        b: "Craig",
        c: "Maggie",
      },
      correctAnswer: "c",
    },
    {
      question: "3: Who is Known as Crulk?",
      answers: {
        a: "Cameron",
        b: "Autumn",
        c: "Maggie",
        d: "Craig",
      },
      correctAnswer: "d",
    },
    {
      question: "4: Who's Other Name is Tyrone?",
      answers: {
        a: "James",
        b: "Anthony",
        c: "Raymond",
        d: "Cameron",
      },
      correctAnswer: "b",
    },
    {
      question: "5: Who is the Quietest?",
      answers: {
        a: "Dani",
        b: "Taylor",
        c: "Abigail",
        d: "Raymond",
      },
      correctAnswer: "a",
    },
    {
      question: "6: Who is the Furry?",
      answers: {
        a: "Craig",
        b: "James",
        c: "Dani",
      },
      correctAnswer: "d",
    },
    {
      question: "7: Who is the Most Sus?",
      answers: {
        a: "Craig",
        b: "Anthony",
        c: "James",
        d: "Raymond",
      },
      correctAnswer: "b",
    },
    {
      question: "8: Who Created Pika-Chad?",
      answers: {
        a: "Dani",
        b: "Maggie",
        c: "Craig",
        d: "Abigail",
      },
      correctAnswer: "a",
    },
    {
      question: "9: Who is the Mom of the Group?",
      answers: {
        a: "Taylor",
        b: "Maggie",
        c: "Abigail",
        d: "Autumn",
      },
      correctAnswer: "b",
    },
    {
      question: "10: Who is the Loudest?",
      answers: {
        a: "Maggie",
        b: "Craig",
        c: "Anthony",
        d: "Autumn",
      },
      correctAnswer: "b",
    },
    {
      question: "11: Who is the Biggest Criminal of the Friend Group?",
      answers: {
        a: "James",
        b: "Anthony",
        c: "Maggie",
        d: "Craig",
        e: "Raymond",
      },
      correctAnswer: "c",
    },
    {
      question: "12: Who is the Most Romantic?",
      answers: {
        a: "Craig",
        b: "Maggie",
        c: "Taylor",
        d: "None of Them",
      },
      correctAnswer: "a",
    },
    {
      question: "13: Who is the Strongest in the Group?",
      answers: {
        a: "Anthony",
        b: "Hunter",
        c: "Cameron",
      },
      correctAnswer: "b",
    },
    {
      question: "14: Who is the Most Emotional in the Group?",
      answers: {
        a: "Maggie",
        b: "Craig",
        c: "Raymond",
        d: "All of the Above",
      },
      correctAnswer: "a",
    },
    {
      question: "15: Who is the Most Sappy?",
      answers: {
        a: "All of the Above",
        b: "Maggie",
        c: "Craig",
        d: "Raymond",
      },
      correctAnswer: "d",
    },
    {
      question: "16: Who is the Oldest in the Group?",
      answers: {
        a: "Maggie",
        b: "Taylor",
        c: "Craig",
        d: "Raymond",
      },
      correctAnswer: "d",
    },
    {
      question: "17: Who is the Oldest Girl in the Group?",
      answers: {
        a: "Maggie",
        b: "Taylor",
        c: "Autumn",
        d: "Abigail",
        e: "Dani",
      },
      correctAnswer: "c",
    },
    {
      question: "18: Who May Be Most Likely to Become Famous?",
      answers: {
        a: "Anthony",
        b: "Cameron",
        c: "Raymond",
        d: "All of the Above",
      },
      correctAnswer: "d",
    },
    {
      question: "19: What is Something ALMOST EVERYONE Has in Common?",
      answers: {
        a: "Our Birthdays",
        b: "Almost All of Us Are Single",
        c: "Our Likes and Dislikes",
        d: "Our Personalities",
        e: "We Have the Same Favorite School Subjects",
      },
      correctAnswer: "e",
    },
    {
      question: "20: What is Something EVERYONE Has in Common?",
      answers: {
        a: "We All Like Marvel",
        b: "We All Live in South Carolina",
        c: "We All Like a Sport",
        d: "All of the Above",
      },
      correctAnswer: "d",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener("click", showResults);
})();
