const mediumQuestions = {
  mathematics: {
    "Fractions & Decimals": [
      { question: "What is 1/2 as a decimal?", choices: ["0.2", "0.5", "1.2", "2.0"], answer: 1 },
      { question: "Which fraction is equal to 0.25?", choices: ["1/2", "1/3", "1/4", "2/5"], answer: 2 },
      { question: "What is 3/4 + 1/4?", choices: ["1", "1/2", "2", "3/4"], answer: 0 },
      { question: "Which is bigger: 0.6 or 1/2?", choices: ["0.6", "1/2", "Same", "Cannot tell"], answer: 0 },
      { question: "What is 0.8 − 0.3?", choices: ["0.3", "0.4", "0.5", "0.6"], answer: 2 },
      { question: "What fraction is shaded if 2 out of 5 parts are colored?", choices: ["1/5", "2/5", "3/5", "4/5"], answer: 1 },
      { question: "What is 1/10 as a decimal?", choices: ["0.01", "0.1", "1.0", "10"], answer: 1 },
      { question: "Which decimal is equal to 3/5?", choices: ["0.3", "0.5", "0.6", "0.8"], answer: 2 },
      { question: "What is 0.4 + 0.2?", choices: ["0.5", "0.6", "0.7", "0.8"], answer: 1 },
      { question: "Which fraction is the smallest?", choices: ["1/2", "1/3", "1/4", "1/5"], answer: 3 }
    ],

    "Introduction to Algebra": [
      { question: "If x = 5, what is x + 3?", choices: ["5", "6", "7", "8"], answer: 3 },
      { question: "Solve: y − 2 = 6", choices: ["2", "4", "6", "8"], answer: 3 },
      { question: "If a = 4, what is 2a?", choices: ["4", "6", "8", "10"], answer: 2 },
      { question: "What is the value of x in x + 7 = 10?", choices: ["1", "2", "3", "4"], answer: 2 },
      { question: "If b = 9, what is b − 5?", choices: ["2", "3", "4", "5"], answer: 2 },
      { question: "Solve: 3 + n = 12", choices: ["7", "8", "9", "10"], answer: 2 },
      { question: "If x = 2, what is x × 6?", choices: ["6", "8", "10", "12"], answer: 3 },
      { question: "What does the variable represent?", choices: ["A fixed number", "An unknown value", "A symbol only", "A shape"], answer: 1 },
      { question: "Solve: m / 2 = 5", choices: ["8", "9", "10", "12"], answer: 2 },
      { question: "If k = 3, what is k²?", choices: ["6", "9", "12", "3"], answer: 1 }
    ],

    "Measurement & Data": [
      { question: "How many centimeters are in 1 meter?", choices: ["10", "50", "100", "1000"], answer: 2 },
      { question: "Which unit is best for measuring the weight of a book?", choices: ["Kilogram", "Liter", "Meter", "Second"], answer: 0 },
      { question: "How many minutes are in 2 hours?", choices: ["60", "90", "120", "180"], answer: 2 },
      { question: "Which tool measures temperature?", choices: ["Ruler", "Scale", "Thermometer", "Clock"], answer: 2 },
      { question: "What is the perimeter of a square with side 5 cm?", choices: ["10 cm", "15 cm", "20 cm", "25 cm"], answer: 2 },
      { question: "Which graph shows data using bars?", choices: ["Line graph", "Bar graph", "Pie chart", "Map"], answer: 1 },
      { question: "How many grams are in 1 kilogram?", choices: ["100", "500", "1000", "10,000"], answer: 2 },
      { question: "Which unit is used to measure liquid?", choices: ["Liter", "Gram", "Meter", "Second"], answer: 0 },
      { question: "What does a pie chart show best?", choices: ["Speed", "Parts of a whole", "Distance", "Time"], answer: 1 },
      { question: "Which is longer: 1 meter or 80 centimeters?", choices: ["1 meter", "80 centimeters", "Same", "Cannot tell"], answer: 0 }
    ]
  },

  science: {
    "States of Matter": [
      { question: "Which state of matter has a fixed shape and volume?", choices: ["Solid", "Liquid", "Gas", "Plasma"], answer: 0 },
      { question: "What state of matter is air?", choices: ["Solid", "Liquid", "Gas", "Ice"], answer: 2 },
      { question: "What happens when ice melts?", choices: ["Solid to gas", "Liquid to solid", "Solid to liquid", "Gas to liquid"], answer: 2 },
      { question: "Which state takes the shape of its container?", choices: ["Solid", "Liquid", "Rock", "Metal"], answer: 1 },
      { question: "What process turns water into vapor?", choices: ["Freezing", "Condensing", "Evaporation", "Melting"], answer: 2 },
      { question: "Which state has particles moving freely?", choices: ["Solid", "Liquid", "Gas", "Ice"], answer: 2 },
      { question: "What happens when water freezes?", choices: ["Liquid to solid", "Gas to liquid", "Solid to gas", "Liquid to gas"], answer: 0 },
      { question: "Which state has no fixed shape?", choices: ["Solid", "Liquid", "Both liquid and gas", "None"], answer: 2 },
      { question: "Steam is an example of what state?", choices: ["Solid", "Liquid", "Gas", "Ice"], answer: 2 },
      { question: "Which state keeps its own shape?", choices: ["Solid", "Liquid", "Gas", "Water"], answer: 0 }
    ],

    "Energy & Motion": [
      { question: "What energy comes from the sun?", choices: ["Sound", "Light", "Heat", "Both light and heat"], answer: 3 },
      { question: "Which object has kinetic energy?", choices: ["Parked car", "Moving bike", "Sleeping cat", "Book"], answer: 1 },
      { question: "What makes objects move?", choices: ["Force", "Color", "Shape", "Sound"], answer: 0 },
      { question: "Which energy powers a flashlight?", choices: ["Wind", "Electrical", "Heat", "Sound"], answer: 1 },
      { question: "What happens when you push a ball?", choices: ["It stops", "It melts", "It moves", "It disappears"], answer: 2 },
      { question: "Which is an example of potential energy?", choices: ["Rolling ball", "Flying bird", "Water in a dam", "Running dog"], answer: 2 },
      { question: "What energy is used to hear music?", choices: ["Sound", "Light", "Heat", "Electrical"], answer: 0 },
      { question: "Which surface causes more friction?", choices: ["Ice", "Sandpaper", "Glass", "Water"], answer: 1 },
      { question: "What happens when friction increases?", choices: ["Speed increases", "Motion stops faster", "Light increases", "Sound disappears"], answer: 1 },
      { question: "Which force pulls objects toward Earth?", choices: ["Magnetism", "Electricity", "Gravity", "Wind"], answer: 2 }
    ],

    "Ecosystems": [
      { question: "Which living thing makes its own food?", choices: ["Animal", "Plant", "Fungus", "Insect"], answer: 1 },
      { question: "What do we call animals that eat plants?", choices: ["Carnivores", "Herbivores", "Omnivores", "Predators"], answer: 1 },
      { question: "Which is a producer?", choices: ["Lion", "Mushroom", "Grass", "Human"], answer: 2 },
      { question: "What is a food chain?", choices: ["A list of animals", "Energy flow between organisms", "Animal homes", "Weather pattern"], answer: 1 },
      { question: "Which animal is a predator?", choices: ["Deer", "Rabbit", "Lion", "Cow"], answer: 2 },
      { question: "What happens if plants disappear?", choices: ["Animals grow faster", "Food chain breaks", "More oxygen forms", "Nothing happens"], answer: 1 },
      { question: "Which organism breaks down dead plants and animals?", choices: ["Producer", "Consumer", "Decomposer", "Predator"], answer: 2 },
      { question: "Which environment is an ecosystem?", choices: ["Desert", "Forest", "Ocean", "All of these"], answer: 3 },
      { question: "What do all living things need to survive?", choices: ["Food, water, shelter", "Music", "Toys", "Electricity"], answer: 0 },
      { question: "Which animal eats both plants and meat?", choices: ["Herbivore", "Carnivore", "Omnivore", "Producer"], answer: 2 }
    ]
  },

  english: {
    "Parts of Speech": [
      { question: "Which word is a noun?", choices: ["Run", "Happy", "Dog", "Quickly"], answer: 2 },
      { question: "Which word is a verb?", choices: ["Blue", "Jump", "Chair", "Soft"], answer: 1 },
      { question: "Which word is an adjective?", choices: ["Beautiful", "Run", "Eat", "Dog"], answer: 0 },
      { question: "Which word is an adverb?", choices: ["Fast", "Quickly", "Dog", "Blue"], answer: 1 },
      { question: "Which word is a pronoun?", choices: ["She", "Table", "Run", "Red"], answer: 0 },
      { question: "Which word shows action?", choices: ["Sleep", "Soft", "Tall", "Blue"], answer: 0 },
      { question: "Which word names a person?", choices: ["Teacher", "Run", "Happy", "Quick"], answer: 0 },
      { question: "Which word describes a noun?", choices: ["Slowly", "Jump", "Big", "Eat"], answer: 2 },
      { question: "Which word replaces a noun?", choices: ["He", "Chair", "Blue", "Run"], answer: 0 },
      { question: "Which word tells how an action happens?", choices: ["Fast", "Quickly", "Dog", "Red"], answer: 1 }
    ],

    "Paragraph Writing": [
      { question: "What is the main idea of a paragraph?", choices: ["The last sentence", "The topic being explained", "Extra detail", "A question"], answer: 1 },
      { question: "Which sentence supports the main idea?", choices: ["Topic sentence", "Closing sentence", "Detail sentence", "Title"], answer: 2 },
      { question: "Where is the topic sentence usually found?", choices: ["Beginning", "Middle", "End", "Nowhere"], answer: 0 },
      { question: "What should a good paragraph have?", choices: ["One idea", "Many random ideas", "No details", "Only questions"], answer: 0 },
      { question: "Which helps connect ideas smoothly?", choices: ["Transition words", "Commas", "Pictures", "Numbers"], answer: 0 },
      { question: "What does a concluding sentence do?", choices: ["Starts a story", "Ends the paragraph", "Adds new topic", "Asks a question"], answer: 1 },
      { question: "Which sentence gives an example?", choices: ["Detail sentence", "Topic sentence", "Title", "Ending"], answer: 0 },
      { question: "Which paragraph is organized?", choices: ["Random ideas", "Clear main idea and details", "No punctuation", "One long sentence"], answer: 1 },
      { question: "What should every sentence relate to?", choices: ["Title", "Main idea", "Picture", "Question"], answer: 1 },
      { question: "Which improves paragraph clarity?", choices: ["Adding details", "Removing spaces", "No punctuation", "Mixing topics"], answer: 0 }
    ],

    "Figurative Language": [
      { question: "What is a simile?", choices: ["Comparing using like or as", "Giving human traits", "Exaggeration", "Opposite meaning"], answer: 0 },
      { question: "Which is a metaphor?", choices: ["He runs like the wind", "Time is a thief", "She sings loudly", "The dog barked"], answer: 1 },
      { question: "What is personification?", choices: ["Animal story", "Human traits to objects", "Rhyming words", "Opposites"], answer: 1 },
      { question: "Which is an example of hyperbole?", choices: ["I waited forever", "The sky is blue", "He walks slowly", "The cat slept"], answer: 0 },
      { question: "Which sentence uses simile?", choices: ["Brave as a lion", "Time flies", "The sun smiled", "The dog ran"], answer: 0 },
      { question: "Why do writers use figurative language?", choices: ["To confuse readers", "To make writing vivid", "To shorten text", "To change grammar"], answer: 1 },
      { question: "Which shows personification?", choices: ["The wind whispered", "He is fast", "She ate lunch", "The bag is heavy"], answer: 0 },
      { question: "Which phrase exaggerates?", choices: ["A ton of homework", "Two books", "Cold water", "Red apple"], answer: 0 },
      { question: "Which compares without using like or as?", choices: ["Simile", "Metaphor", "Hyperbole", "Personification"], answer: 1 },
      { question: "Figurative language mainly appeals to what?", choices: ["Imagination", "Rules", "Math", "Memory"], answer: 0 }
    ]
  },

  socialstudies: {
    "World Geography": [
      { question: "Which is the largest continent?", choices: ["Africa", "Asia", "Europe", "Australia"], answer: 1 },
      { question: "What covers most of the Earth’s surface?", choices: ["Land", "Water", "Mountains", "Deserts"], answer: 1 },
      { question: "Which line divides the Earth into north and south?", choices: ["Prime Meridian", "Equator", "Latitude", "Longitude"], answer: 1 },
      { question: "Which is a country?", choices: ["Asia", "Pacific Ocean", "Japan", "Mount Everest"], answer: 2 },
      { question: "What tool shows countries and cities?", choices: ["Map", "Clock", "Thermometer", "Scale"], answer: 0 },
      { question: "Which ocean is the largest?", choices: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
      { question: "What do we call a group of countries?", choices: ["State", "City", "Continent", "Village"], answer: 2 },
      { question: "Which landform is very high?", choices: ["Valley", "Hill", "Mountain", "Plain"], answer: 2 },
      { question: "What shows directions on a map?", choices: ["Legend", "Compass rose", "Scale", "Title"], answer: 1 },
      { question: "Which climate is very cold?", choices: ["Tropical", "Polar", "Dry", "Mild"], answer: 1 }
    ],

    "Government Basics": [
      { question: "What is the main job of government?", choices: ["Make toys", "Protect people", "Sell food", "Build houses"], answer: 1 },
      { question: "Who makes laws?", choices: ["Police", "Citizens", "Legislators", "Teachers"], answer: 2 },
      { question: "What is a citizen?", choices: ["Visitor", "Member of a country", "Tourist", "Leader"], answer: 1 },
      { question: "Who leads a country?", choices: ["Principal", "President/Prime Minister", "Doctor", "Police"], answer: 1 },
      { question: "Why do we have rules?", choices: ["For fun", "To keep order and safety", "To confuse people", "To waste time"], answer: 1 },
      { question: "What do citizens do in elections?", choices: ["Sleep", "Vote", "Travel", "Study"], answer: 1 },
      { question: "Which branch enforces laws?", choices: ["Judicial", "Legislative", "Executive", "School"], answer: 2 },
      { question: "What is a law?", choices: ["Game rule", "Government rule", "Family rule", "Class rule"], answer: 1 },
      { question: "Why is voting important?", choices: ["Choose leaders", "Play games", "Get prizes", "Travel"], answer: 0 },
      { question: "Who protects the community?", choices: ["Police", "Artists", "Drivers", "Students"], answer: 0 }
    ],

    "Culture & Tradition": [
      { question: "What is culture?", choices: ["Food only", "Beliefs and practices", "Weather", "Money"], answer: 1 },
      { question: "Which is an example of tradition?", choices: ["Daily homework", "Holiday celebration", "Reading books", "Cleaning room"], answer: 1 },
      { question: "Why do people celebrate traditions?", choices: ["For fun only", "To honor history", "To waste time", "To forget"], answer: 1 },
      { question: "What includes language, food, and clothing?", choices: ["Weather", "Culture", "Sports", "Rules"], answer: 1 },
      { question: "Which shows respect for culture?", choices: ["Laughing at it", "Learning about it", "Ignoring it", "Breaking rules"], answer: 1 },
      { question: "What is a festival?", choices: ["A test", "A celebration", "A job", "A rule"], answer: 1 },
      { question: "Why are traditions passed down?", choices: ["To forget", "To continue heritage", "To change rules", "To confuse"], answer: 1 },
      { question: "Which is cultural clothing?", choices: ["Uniform", "Costume", "Traditional dress", "Pajamas"], answer: 2 },
      { question: "What do cultures share?", choices: ["Same ideas", "Different values", "Beliefs and customs", "Only food"], answer: 2 },
      { question: "Which shows cultural respect?", choices: ["Mocking", "Understanding", "Ignoring", "Judging"], answer: 1 }
    ]
  },

  computerscience: {
    "Programming Basics": [
      { question: "What is a program?", choices: ["A game", "A set of instructions", "A computer part", "A website"], answer: 1 },
      { question: "Which language is used to make websites interactive?", choices: ["HTML", "CSS", "JavaScript", "Paint"], answer: 2 },
      { question: "What is a variable?", choices: ["Fixed number", "Storage for data", "Error", "Button"], answer: 1 },
      { question: "Which symbol is used to assign a value?", choices: ["+", "=", "*", "/"], answer: 1 },
      { question: "What does a loop do?", choices: ["Stops code", "Repeats code", "Deletes files", "Prints text"], answer: 1 },
      { question: "Which stores text data?", choices: ["Number", "String", "Boolean", "Loop"], answer: 1 },
      { question: "What does debug mean?", choices: ["Create bugs", "Fix errors", "Delete files", "Save work"], answer: 1 },
      { question: "Which is an example of output?", choices: ["Keyboard input", "Screen display", "Mouse click", "Typing"], answer: 1 },
      { question: "What tells a computer what to do?", choices: ["Program", "Mouse", "Monitor", "Speaker"], answer: 0 },
      { question: "Which runs instructions step by step?", choices: ["CPU", "Keyboard", "Printer", "Router"], answer: 0 }
    ],

    "Data & Files": [
      { question: "What is a file?", choices: ["A folder", "Stored data", "A cable", "A screen"], answer: 1 },
      { question: "Which stores many files?", choices: ["Folder", "Mouse", "Keyboard", "Monitor"], answer: 0 },
      { question: "Which file type is for pictures?", choices: [".jpg", ".txt", ".mp3", ".exe"], answer: 0 },
      { question: "Which file saves text?", choices: [".txt", ".mp4", ".png", ".exe"], answer: 0 },
      { question: "What does delete mean?", choices: ["Copy", "Remove", "Move", "Rename"], answer: 1 },
      { question: "Which device stores files permanently?", choices: ["RAM", "Hard drive", "CPU", "Monitor"], answer: 1 },
      { question: "What is backup?", choices: ["Delete files", "Copy for safety", "Rename", "Print"], answer: 1 },
      { question: "Which opens a file?", choices: ["Double-click", "Shake mouse", "Turn off PC", "Unplug"], answer: 0 },
      { question: "Which file stores music?", choices: [".mp3", ".doc", ".jpg", ".txt"], answer: 0 },
      { question: "What does save do?", choices: ["Erase data", "Keep data", "Break computer", "Close screen"], answer: 1 }
    ],

    "Cybersecurity Basics": [
      { question: "What is a strong password?", choices: ["12345", "Name", "Mix of letters and symbols", "Birthday"], answer: 2 },
      { question: "What is phishing?", choices: ["Fishing online", "Fake messages to steal info", "Gaming", "Coding"], answer: 1 },
      { question: "Why update software?", choices: ["Add bugs", "Improve security", "Slow device", "Delete apps"], answer: 1 },
      { question: "What should you do with unknown links?", choices: ["Click", "Ignore", "Share", "Save"], answer: 1 },
      { question: "What protects against viruses?", choices: ["Antivirus", "Browser", "Game", "Printer"], answer: 0 },
      { question: "Why keep personal info private?", choices: ["For fun", "To stay safe", "To share more", "To delete files"], answer: 1 },
      { question: "What is hacking?", choices: ["Fixing computers", "Breaking into systems", "Playing games", "Coding"], answer: 1 },
      { question: "Which is safe behavior online?", choices: ["Sharing passwords", "Using strong passwords", "Clicking popups", "Talking to strangers"], answer: 1 },
      { question: "What should you do if hacked?", choices: ["Ignore", "Tell trusted adult/IT", "Share online", "Do nothing"], answer: 1 },
      { question: "What keeps accounts secure?", choices: ["Weak password", "Two-factor login", "Public sharing", "Auto-login everywhere"], answer: 1 }
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

  if (!mediumQuestions[subject] || !mediumQuestions[subject][topic]) {
    document.getElementById("quizBox").innerHTML =
      "<p>❌ Invalid subject or topic.</p>";
    return;
  }

  questions = mediumQuestions[subject][topic];
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

  // summary data
  const summary = questions.map((q, i) => ({
    question: q.question,
    choices: q.choices,
    correct: q.answer,
    user: userAnswers[i]
  }));
  localStorage.setItem('quizSummary', JSON.stringify({ summary, score, max, subject, topic }));

  goToScore(score, max, subject, topic);
}

function goToScore(score, max, subject, topic) {
  window.location.href = `../score/scoretally.html?score=${score}&max=${max}&subject=${encodeURIComponent(subject)}&topic=${encodeURIComponent(topic)}`;
}