const easyQuestions = {
  mathematics: {
    "Addition & Subtraction": [
      { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], answer: 1 },
      { question: "What is 5 + 3?", choices: ["6", "7", "8", "9"], answer: 2 },
      { question: "What is 10 − 4?", choices: ["5", "6", "7", "8"], answer: 1 },
      { question: "What is 7 − 3?", choices: ["3", "4", "5", "6"], answer: 1 },
      { question: "What is 6 + 1?", choices: ["6", "7", "8", "9"], answer: 1 },
      { question: "What is 9 − 5?", choices: ["3", "4", "5", "6"], answer: 1 },
      { question: "What is 4 + 4?", choices: ["6", "7", "8", "9"], answer: 2 },
      { question: "What is 8 − 2?", choices: ["5", "6", "7", "8"], answer: 1 },
      { question: "What is 3 + 5?", choices: ["7", "8", "9", "10"], answer: 1 },
      { question: "What is 10 − 1?", choices: ["7", "8", "9", "10"], answer: 2 }
    ],

    "Multiplication Basics": [
      { question: "What is 3 × 2?", choices: ["5", "6", "7", "8"], answer: 1 },
      { question: "What is 2 × 4?", choices: ["6", "7", "8", "9"], answer: 2 },
      { question: "What is 5 × 1?", choices: ["5", "6", "10", "1"], answer: 0 },
      { question: "What is 4 × 2?", choices: ["6", "8", "10", "12"], answer: 1 },
      { question: "What is 1 × 9?", choices: ["9", "1", "0", "10"], answer: 0 },
      { question: "What is 3 × 3?", choices: ["6", "7", "8", "9"], answer: 3 },
      { question: "What is 2 × 5?", choices: ["8", "9", "10", "12"], answer: 2 },
      { question: "What is 0 × 7?", choices: ["0", "7", "1", "10"], answer: 0 },
      { question: "What is 10 × 1?", choices: ["1", "5", "10", "0"], answer: 2 },
      { question: "What is 6 × 1?", choices: ["5", "6", "7", "8"], answer: 1 }
    ],

    "Shapes & Numbers": [
      { question: "How many sides does a triangle have?", choices: ["3", "4", "5", "6"], answer: 0 },
      { question: "How many sides does a square have?", choices: ["2", "3", "4", "5"], answer: 2 },
      { question: "Which shape is round?", choices: ["Square", "Triangle", "Circle", "Rectangle"], answer: 2 },
      { question: "Which number comes after 9?", choices: ["8", "9", "10", "11"], answer: 2 },
      { question: "Which number comes before 5?", choices: ["3", "4", "5", "6"], answer: 1 },
      { question: "How many sides does a rectangle have?", choices: ["2", "3", "4", "5"], answer: 2 },
      { question: "Which number is bigger: 6 or 9?", choices: ["6", "9", "Same", "None"], answer: 1 },
      { question: "How many corners does a square have?", choices: ["2", "3", "4", "5"], answer: 2 },
      { question: "Which shape has 3 sides?", choices: ["Circle", "Square", "Triangle", "Oval"], answer: 2 },
      { question: "Which number is smaller: 2 or 5?", choices: ["2", "5", "Same", "None"], answer: 0 }
    ],
  
  },
  science: {
	"Plants": [
      { question: "What do plants need to make food?", choices: ["Sunlight", "Rocks", "Plastic", "Sand"], answer: 0 },
      { question: "Which part of the plant makes food?", choices: ["Roots", "Stem", "Leaves", "Flower"], answer: 2 },
      { question: "What do roots absorb?", choices: ["Air", "Water", "Light", "Fire"], answer: 1 },
      { question: "Which part holds the plant upright?", choices: ["Leaf", "Stem", "Root", "Seed"], answer: 1 },
      { question: "What do plants grow from?", choices: ["Seeds", "Sand", "Rocks", "Plastic"], answer: 0 },
      { question: "Which color are most leaves?", choices: ["Blue", "Green", "Red", "Yellow"], answer: 1 },
      { question: "What do flowers help plants make?", choices: ["Roots", "Seeds", "Stems", "Leaves"], answer: 1 },
      { question: "What do plants give us to breathe?", choices: ["Oxygen", "Smoke", "Dust", "Gas"], answer: 0 },
      { question: "Which part of the plant is under the ground?", choices: ["Leaf", "Stem", "Root", "Flower"], answer: 2 },
      { question: "What do plants need besides sunlight?", choices: ["Water", "Plastic", "Metal", "Paper"], answer: 0 }
    ],
    "Animals": [
      { question: "Which is a mammal?", choices: ["Dog", "Frog", "Shark", "Eagle"], answer: 0 },
      { question: "Which animal lives in water?", choices: ["Cat", "Fish", "Bird", "Dog"], answer: 1 },
      { question: "Which animal can fly?", choices: ["Cow", "Snake", "Bird", "Horse"], answer: 2 },
      { question: "Which animal has fur?", choices: ["Fish", "Snake", "Dog", "Frog"], answer: 2 },
      { question: "Which animal says 'meow'?", choices: ["Dog", "Cat", "Cow", "Bird"], answer: 1 },
      { question: "Which animal gives us milk?", choices: ["Cow", "Fish", "Duck", "Snake"], answer: 0 },
      { question: "Which animal hops?", choices: ["Frog", "Cat", "Fish", "Bird"], answer: 0 },
      { question: "Which animal has feathers?", choices: ["Dog", "Bird", "Fish", "Cow"], answer: 1 },
      { question: "Which animal lives on a farm?", choices: ["Lion", "Cow", "Whale", "Shark"], answer: 1 },
      { question: "Which animal has a long neck?", choices: ["Dog", "Cat", "Giraffe", "Pig"], answer: 2 }
    ],

    "Weather Basics": [
      { question: "What do we use to stay dry in the rain?", choices: ["Umbrella", "Sunglasses", "Hat", "Boots"], answer: 0 },
      { question: "Which weather is hot?", choices: ["Rainy", "Snowy", "Sunny", "Windy"], answer: 2 },
      { question: "Which weather has snow?", choices: ["Sunny", "Rainy", "Snowy", "Cloudy"], answer: 2 },
      { question: "What covers the sky on a cloudy day?", choices: ["Stars", "Clouds", "Birds", "Planes"], answer: 1 },
      { question: "Which weather is good for flying a kite?", choices: ["Windy", "Snowy", "Rainy", "Foggy"], answer: 0 },
      { question: "What falls from the sky when it rains?", choices: ["Leaves", "Snow", "Rain", "Sand"], answer: 2 },
      { question: "Which season is cold?", choices: ["Summer", "Spring", "Winter", "Autumn"], answer: 2 },
      { question: "What do we wear to stay warm?", choices: ["Jacket", "Shorts", "Slippers", "Cap"], answer: 0 },
      { question: "Which weather is bright and clear?", choices: ["Sunny", "Stormy", "Rainy", "Foggy"], answer: 0 },
        { question: "Which tool tells us the weather?", choices: ["Thermometer", "TV forecast", "Clock", "Map"], answer: 1 }
      ]
    },
  
      english: {
      "Spelling Basics": [
      { question: "Which word is spelled correctly?", choices: ["Aple", "Apple", "Applle", "Apll"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Bannana", "Banana", "Bananna", "Banena"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Oranje", "Orange", "Orang", "Ornge"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Pencel", "Pensil", "Pencil", "Pansil"], answer: 2 },
      { question: "Which word is spelled correctly?", choices: ["Skool", "School", "Scool", "Sckool"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Bred", "Bread", "Braid", "Braed"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Frend", "Freind", "Friend", "Frennd"], answer: 2 },
      { question: "Which word is spelled correctly?", choices: ["Chare", "Chair", "Cher", "Chaer"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Tabl", "Table", "Tabel", "Teble"], answer: 1 },
      { question: "Which word is spelled correctly?", choices: ["Watr", "Water", "Woter", "Waiter"], answer: 1 }
    ],

    "Reading Practice": [
      { question: "Which sentence tells about a cat?", choices: ["The cat drinks milk.", "The sun is hot.", "Cars go fast.", "Fish swim deep."], answer: 0 },
      { question: "What do birds use to fly?", choices: ["Legs", "Wings", "Tail", "Beak"], answer: 1 },
      { question: "Which animal lives in water?", choices: ["Dog", "Fish", "Cat", "Bird"], answer: 1 },
      { question: "What do we wear when it is raining?", choices: ["Sunglasses", "Raincoat", "Shorts", "Slippers"], answer: 1 },
      { question: "Which sentence is a question?", choices: ["I like apples.", "Do you like apples?", "Apples are sweet.", "I eat apples."], answer: 1 },
      { question: "What color is the sky on a sunny day?", choices: ["Green", "Blue", "Red", "Black"], answer: 1 },
      { question: "Which word means fast?", choices: ["Slow", "Quick", "Small", "Heavy"], answer: 1 },
      { question: "What do we drink when we are thirsty?", choices: ["Water", "Sand", "Paper", "Rock"], answer: 0 },
      { question: "Which animal barks?", choices: ["Cat", "Cow", "Dog", "Bird"], answer: 2 },
      { question: "What shines in the sky during the day?", choices: ["Moon", "Star", "Sun", "Cloud"], answer: 2 }
    ],

    "Basic Grammar": [
      { question: "Which word is a noun?", choices: ["Run", "Blue", "Dog", "Fast"], answer: 2 },
      { question: "Which word is a verb?", choices: ["Jump", "Happy", "Chair", "Soft"], answer: 0 },
      { question: "Which sentence starts with a capital letter?", choices: ["the dog runs.", "The dog runs.", "the Dog runs.", "THE dog runs."], answer: 1 },
      { question: "Which sentence ends correctly?", choices: ["I like cats", "I like cats.", "I like cats!", "I like cats?"], answer: 1 },
      { question: "Which word means more than one cat?", choices: ["Cat", "Cats", "Cated", "Catting"], answer: 1 },
      { question: "Which word is an adjective?", choices: ["Big", "Run", "Dog", "Eat"], answer: 0 },
      { question: "Which sentence is correct?", choices: ["She happy.", "She is happy.", "She happy is.", "Happy she is."], answer: 1 },
      { question: "Which word shows action?", choices: ["Sleep", "Soft", "Blue", "Chair"], answer: 0 },
      { question: "Which word is a pronoun?", choices: ["Dog", "He", "Run", "Blue"], answer: 1 },
      { question: "Which sentence is a question?", choices: ["I like pizza.", "Pizza is good.", "Do you like pizza?", "Pizza!"], answer: 2 }
    ]
  },

  socialstudies: {
    "Famous People": [
      { question: "Who was the first president of the United States?", choices: ["George Washington", "Abraham Lincoln", "Thomas Edison", "Alexander Graham Bell"], answer: 0 },
      { question: "Who invented the light bulb?", choices: ["Isaac Newton", "Thomas Edison", "Albert Einstein", "Galileo"], answer: 1 },
      { question: "Who is known for painting the Mona Lisa?", choices: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: 2 },
      { question: "Who discovered gravity when an apple fell?", choices: ["Newton", "Einstein", "Darwin", "Tesla"], answer: 0 },
      { question: "Who was a famous civil rights leader in the USA?", choices: ["Martin Luther King Jr.", "Elvis Presley", "Neil Armstrong", "Bill Gates"], answer: 0 },
      { question: "Who was the first man on the moon?", choices: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], answer: 1 },
      { question: "Who invented the telephone?", choices: ["Bell", "Edison", "Newton", "Tesla"], answer: 0 },
      { question: "Who wrote many plays like Romeo and Juliet?", choices: ["Shakespeare", "Dickens", "Twain", "Austen"], answer: 0 },
      { question: "Who was known as a great scientist of relativity?", choices: ["Einstein", "Newton", "Galileo", "Tesla"], answer: 0 },
      { question: "Who helped free slaves in the USA?", choices: ["Abraham Lincoln", "Columbus", "Washington", "Franklin"], answer: 0 }
    ],

    "Historical Events": [
      { question: "What event happens on New Year's Day?", choices: ["Start of a new year", "Christmas", "Halloween", "Independence Day"], answer: 0 },
      { question: "What do we celebrate on Independence Day?", choices: ["Freedom", "Halloween", "Easter", "Thanksgiving"], answer: 0 },
      { question: "Which event happens every year?", choices: ["Birthday", "Earthquake", "Volcano", "Flood"], answer: 0 },
      { question: "Which holiday celebrates love and friendship?", choices: ["Christmas", "Valentine's Day", "Halloween", "Easter"], answer: 1 },
      { question: "What do people celebrate on Christmas?", choices: ["New Year", "Birth of Jesus", "Halloween", "Thanksgiving"], answer: 1 },
      { question: "Which event includes fireworks?", choices: ["Independence Day", "Rainy Day", "School Day", "Cleaning Day"], answer: 0 },
      { question: "Which holiday involves costumes?", choices: ["Easter", "Halloween", "Christmas", "New Year"], answer: 1 },
      { question: "What do we celebrate on a birthday?", choices: ["Age", "Weather", "Food", "School"], answer: 0 },
      { question: "Which holiday celebrates giving thanks?", choices: ["Thanksgiving", "Valentine's", "Halloween", "Easter"], answer: 0 },
      { question: "Which event happens at the start of school year?", choices: ["First day of school", "Graduation", "Vacation", "Holiday"], answer: 0 }
    ],

    "Timelines": [
      { question: "What comes first in a day?", choices: ["Morning", "Night", "Evening", "Afternoon"], answer: 0 },
      { question: "What comes after Monday?", choices: ["Sunday", "Tuesday", "Friday", "Saturday"], answer: 1 },
      { question: "Which comes first in life?", choices: ["Adult", "Teen", "Baby", "Old"], answer: 2 },
      { question: "What comes after January?", choices: ["February", "March", "December", "April"], answer: 0 },
      { question: "Which comes first: breakfast or dinner?", choices: ["Dinner", "Breakfast", "Same", "None"], answer: 1 },
      { question: "Which comes last in a school day?", choices: ["Lunch", "Class", "Dismissal", "Recess"], answer: 2 },
      { question: "What comes before Friday?", choices: ["Thursday", "Saturday", "Sunday", "Monday"], answer: 0 },
      { question: "Which season comes after summer?", choices: ["Spring", "Autumn", "Winter", "None"], answer: 1 },
      { question: "What comes first in the year?", choices: ["January", "December", "June", "March"], answer: 0 },
      { question: "Which comes last: seed, plant, flower?", choices: ["Seed", "Plant", "Flower", "Root"], answer: 2 }
    ]
  },

  computerscience: {
    "Computer Parts": [
      { question: "Which part is used to type?", choices: ["Mouse", "Keyboard", "Monitor", "Speaker"], answer: 1 },
      { question: "Which part shows pictures?", choices: ["CPU", "Monitor", "Keyboard", "Printer"], answer: 1 },
      { question: "Which part moves the pointer?", choices: ["Keyboard", "Mouse", "Speaker", "Camera"], answer: 1 },
      { question: "Which part prints paper?", choices: ["Scanner", "Printer", "Monitor", "Mouse"], answer: 1 },
      { question: "Which part plays sound?", choices: ["Speaker", "Keyboard", "Monitor", "Mouse"], answer: 0 },
      { question: "Which part stores files?", choices: ["Hard drive", "Mouse", "Screen", "Keyboard"], answer: 0 },
      { question: "Which part takes pictures?", choices: ["Camera", "Speaker", "Mouse", "Printer"], answer: 0 },
      { question: "Which part connects to the internet?", choices: ["Router", "Printer", "Speaker", "Fan"], answer: 0 },
      { question: "Which part shows text and videos?", choices: ["Monitor", "Mouse", "CPU", "Scanner"], answer: 0 },
      { question: "Which part listens to your voice?", choices: ["Microphone", "Speaker", "Camera", "Printer"], answer: 0 }
    ],

    "Internet Basics": [
      { question: "Which is a website?", choices: ["Google", "Keyboard", "Mouse", "Printer"], answer: 0 },
      { question: "What do we use to search online?", choices: ["Browser", "Speaker", "Camera", "Cable"], answer: 0 },
      { question: "Which device connects to WiFi?", choices: ["Phone", "Book", "Chair", "Bottle"], answer: 0 },
      { question: "What do we use to watch videos online?", choices: ["YouTube", "Keyboard", "Mouse", "Printer"], answer: 0 },
      { question: "Which is used to send emails?", choices: ["Gmail", "Shoes", "Radio", "Paper"], answer: 0 },
      { question: "What helps open websites?", choices: ["Browser", "Speaker", "Lamp", "Cable"], answer: 0 },
      { question: "Which is used for online learning?", choices: ["Zoom", "Chair", "Pen", "Bag"], answer: 0 },
      { question: "What connects your home to the internet?", choices: ["Router", "Fan", "TV", "Clock"], answer: 0 },
      { question: "Which lets you talk to people online?", choices: ["Video call", "Printer", "Scanner", "Mouse"], answer: 0 },
      { question: "Which is an app?", choices: ["Facebook", "Table", "Cup", "Door"], answer: 0 }
    ],

    "Online Safety": [
      { question: "What should you do if a stranger messages you?", choices: ["Reply", "Ignore and tell an adult", "Send photo", "Meet them"], answer: 1 },
      { question: "Which password is strongest?", choices: ["1234", "password", "MyName", "H7$kP9"], answer: 3 },
      { question: "Should you share your address online?", choices: ["Yes", "No", "Sometimes", "Always"], answer: 1 },
      { question: "What should you do before clicking a strange link?", choices: ["Click fast", "Ask an adult", "Ignore safety", "Share it"], answer: 1 },
      { question: "What should you do if a website looks unsafe?", choices: ["Stay on it", "Leave the site", "Share info", "Download files"], answer: 1 },
      { question: "Who should you tell if something online scares you?", choices: ["Stranger", "Teacher or parent", "Friend only", "Nobody"], answer: 1 },
      { question: "Should you give your password to friends?", choices: ["Yes", "No", "Sometimes", "Always"], answer: 1 },
      { question: "What should you do if you see mean messages?", choices: ["Join them", "Report or block", "Ignore rules", "Reply back"], answer: 1 },
      { question: "What keeps your computer safe?", choices: ["Antivirus", "Games", "Music", "Pictures"], answer: 0 },
      { question: "Should you meet online strangers?", choices: ["Yes", "No", "Maybe", "Always"], answer: 1 }
    ]
  }
};

function getSubjectAndTopic() {
  const params = new URLSearchParams(window.location.search);
  return {
    subject: params.get("subject"),
    topic: params.get("topic")
  };
}

let currentQuestion = 0;
let userAnswers = [];
let questions = [];

document.addEventListener("DOMContentLoaded", () => {
  const { subject, topic } = getSubjectAndTopic();

  if (!easyQuestions[subject] || !easyQuestions[subject][topic]) {
    document.getElementById("quizBox").innerHTML =
      "<p>❌ Invalid subject or topic.</p>";
    return;
  }

  questions = easyQuestions[subject][topic];
  renderQuestion(0);
});

function renderQuestion(idx) {
  const q = questions[idx];
  if (!q) return;

  const quizBox = document.getElementById("quizBox");

  quizBox.innerHTML = `
    <div class="quiz-progress" style="margin-bottom: 18px; font-size: 1.3rem; font-weight: 600; color: #ff8c66; letter-spacing: 0.04em;">Question ${idx + 1} of ${questions.length}</div>
    <div class="quiz-question-card quiz-card quiz-slide-in">${q.question}</div>
    <div class="quiz-choices">
      ${q.choices
        .map((c, i) => `<div class="quiz-choice-card quiz-card choice-${i} quiz-slide-in" data-idx="${i}">${c}</div>`)
        .join("")}
    </div>
  `;

  document.querySelectorAll(".quiz-choice-card").forEach(card => {
    card.addEventListener("click", handleChoice);
  });
}

function handleChoice(e) {
  const idx = Number(e.currentTarget.dataset.idx);
  const q = questions[currentQuestion];

  userAnswers[currentQuestion] = idx;

  // Disable choices 
  document.querySelectorAll(".quiz-choice-card").forEach((card) => {
    card.classList.add("quiz-card-disabled", "quiz-slide-out");
    card.style.pointerEvents = "none";
  });
  document.querySelector(".quiz-question-card").classList.add("quiz-slide-out");

  // show correct/wrong
  setTimeout(() => {
    document.querySelectorAll(".quiz-choice-card").forEach((card, i) => {
      card.classList.remove("quiz-slide-out");
      if (i === q.answer) card.classList.add("quiz-card-correct");
      if (i === idx && idx !== q.answer) card.classList.add("quiz-card-wrong");
    });
    document.querySelector(".quiz-question-card").classList.remove("quiz-slide-out");
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        quizBox.innerHTML = '';
        setTimeout(() => {
          renderQuestion(currentQuestion);
        }, 100); // delay
      } else {
        showResults();
      }
    }, 900);
  }, 500);
}

function showResults() {
  const score = userAnswers.filter((a, i) => a === questions[i].answer).length;
  const max = questions.length;
  const { subject, topic } = getSubjectAndTopic();

  // Prepare summary
  const summary = questions.map((q, i) => ({
    question: q.question,
    choices: q.choices,
    correct: q.answer,
    user: userAnswers[i]
  }));
  localStorage.setItem('quizSummary', JSON.stringify({ summary, score, max, subject, topic }));

  window.location.href = `../score/scoretally.html?score=${score}&max=${max}&subject=${encodeURIComponent(
    subject
  )}&topic=${encodeURIComponent(topic)}`;
}