const hardQuestions = {
  mathematics: {
    "Quadratic Equations": [
      { question: "Solve: x² − 5x + 6 = 0", choices: ["x = 2, 3", "x = −2, −3", "x = 1, 6", "x = −1, −6"], answer: 0 },
      { question: "What is the discriminant of x² + 4x + 4 = 0?", choices: ["0", "4", "8", "16"], answer: 0 },
      { question: "How many real solutions does x² + 1 = 0 have?", choices: ["0", "1", "2", "Infinite"], answer: 0 },
      { question: "Solve: 2x² − 8x = 0", choices: ["x = 0, 4", "x = −4, 2", "x = 1, 8", "x = −2, −4"], answer: 0 },
      { question: "Which form is best for finding the vertex?", choices: ["Standard form", "Factored form", "Vertex form", "Expanded form"], answer: 2 },
      { question: "If the discriminant is negative, what does it mean?", choices: ["Two real roots", "One real root", "No real roots", "Infinite roots"], answer: 2 },
      { question: "Solve: x² − 9 = 0", choices: ["x = 3", "x = −3", "x = ±3", "x = 0"], answer: 2 },
      { question: "What is the axis of symmetry for y = x² − 6x + 5?", choices: ["x = 3", "x = −3", "y = 3", "y = −3"], answer: 0 },
      { question: "Which quadratic has exactly one real solution?", choices: ["x² + 2x + 1", "x² − 4", "x² + x − 6", "x² − 9"], answer: 0 },
      { question: "What is the vertex of y = (x − 2)² + 1?", choices: ["(2,1)", "(−2,1)", "(1,2)", "(0,1)"], answer: 0 }
    ],

    "Trigonometry": [
      { question: "What is sin(90°)?", choices: ["0", "1", "√3/2", "1/2"], answer: 1 },
      { question: "What is cos(0°)?", choices: ["0", "1", "−1", "1/2"], answer: 1 },
      { question: "If sin θ = 1/2, θ could be:", choices: ["30°", "45°", "60°", "90°"], answer: 0 },
      { question: "What is tan(45°)?", choices: ["0", "1", "√3", "Undefined"], answer: 1 },
      { question: "Which ratio represents cosine?", choices: ["Opposite/Hypotenuse", "Adjacent/Hypotenuse", "Opposite/Adjacent", "Hypotenuse/Adjacent"], answer: 1 },
      { question: "What is sin²θ + cos²θ equal to?", choices: ["0", "1", "2", "θ"], answer: 1 },
      { question: "What is cos(60°)?", choices: ["1/2", "√3/2", "1", "0"], answer: 0 },
      { question: "Which angle makes tan undefined?", choices: ["0°", "45°", "90°", "180°"], answer: 2 },
      { question: "If opposite = 3 and hypotenuse = 5, what is sin θ?", choices: ["3/5", "4/5", "5/3", "5/4"], answer: 0 },
      { question: "What is the period of sin(x)?", choices: ["π", "2π", "π/2", "4π"], answer: 1 }
    ],

    "Statistics & Probability": [
      { question: "What is the mean of 2, 4, 6, 8?", choices: ["4", "5", "6", "7"], answer: 1 },
      { question: "What is the median of 1, 3, 5, 7, 9?", choices: ["3", "5", "7", "9"], answer: 1 },
      { question: "Which measure is most affected by outliers?", choices: ["Mean", "Median", "Mode", "Range"], answer: 0 },
      { question: "What is the probability of flipping heads on a fair coin?", choices: ["0", "1/4", "1/2", "1"], answer: 2 },
      { question: "If a die is rolled, what is P(odd)?", choices: ["1/2", "1/3", "1/6", "2/3"], answer: 0 },
      { question: "What is the range of 4, 10, 15, 20?", choices: ["10", "15", "16", "20"], answer: 2 },
      { question: "If two coins are flipped, what is P(both heads)?", choices: ["1/4", "1/2", "1/3", "1"], answer: 0 },
      { question: "Which graph best shows frequency?", choices: ["Line graph", "Histogram", "Pie chart", "Map"], answer: 1 },
      { question: "What is the mode of 2, 3, 3, 5, 7?", choices: ["2", "3", "5", "7"], answer: 1 },
      { question: "What is the probability of drawing a red card from a standard deck?", choices: ["1/4", "1/2", "1/13", "3/4"], answer: 1 }
    ]
  },

  science: {
    "Chemical Reactions": [
      { question: "What indicates a chemical reaction has occurred?", choices: ["Color change", "Melting", "Freezing", "Boiling"], answer: 0 },
      { question: "Which law states mass is conserved?", choices: ["Newton’s Law", "Law of Conservation of Mass", "Ohm’s Law", "Boyle’s Law"], answer: 1 },
      { question: "What is a reactant?", choices: ["Ending product", "Starting substance", "Gas formed", "Energy released"], answer: 1 },
      { question: "Which type releases heat?", choices: ["Endothermic", "Exothermic", "Neutral", "Physical"], answer: 1 },
      { question: "What is a catalyst?", choices: ["Speeds reaction without being used up", "Stops reaction", "Adds mass", "Produces heat"], answer: 0 },
      { question: "Which is a balanced equation?", choices: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H + O → HO", "H₂O → H₂ + O"], answer: 1 },
      { question: "What is corrosion an example of?", choices: ["Combustion", "Oxidation", "Neutralization", "Sublimation"], answer: 1 },
      { question: "What forms when an acid reacts with a base?", choices: ["Salt and water", "Gas", "Metal", "Only water"], answer: 0 },
      { question: "Which factor increases reaction rate?", choices: ["Lower temperature", "Smaller surface area", "Higher concentration", "Less pressure"], answer: 2 },
      { question: "What is the pH of a neutral solution?", choices: ["0", "7", "14", "1"], answer: 1 }
    ],

    "Electricity & Magnetism": [
      { question: "What unit measures electric current?", choices: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1 },
      { question: "Which material is a good conductor?", choices: ["Plastic", "Rubber", "Copper", "Wood"], answer: 2 },
      { question: "What does a magnet attract?", choices: ["Plastic", "Iron", "Glass", "Paper"], answer: 1 },
      { question: "What happens when like poles meet?", choices: ["Attract", "Repel", "Disappear", "Heat up"], answer: 1 },
      { question: "Which law relates voltage, current, resistance?", choices: ["Newton’s Law", "Ohm’s Law", "Faraday’s Law", "Hooke’s Law"], answer: 1 },
      { question: "What is the flow of electrons called?", choices: ["Voltage", "Current", "Resistance", "Power"], answer: 1 },
      { question: "What device opens and closes a circuit?", choices: ["Battery", "Switch", "Wire", "Bulb"], answer: 1 },
      { question: "Which increases resistance?", choices: ["Thicker wire", "Shorter wire", "Higher temperature", "Lower temperature"], answer: 2 },
      { question: "What produces a magnetic field?", choices: ["Moving electric charges", "Light", "Sound", "Heat"], answer: 0 },
      { question: "What is measured in ohms?", choices: ["Voltage", "Current", "Resistance", "Power"], answer: 2 }
    ],

    "Genetics & DNA": [
      { question: "What carries genetic information?", choices: ["RNA", "Protein", "DNA", "Cell wall"], answer: 2 },
      { question: "What is a gene?", choices: ["A chromosome", "A DNA segment", "A cell", "A protein"], answer: 1 },
      { question: "Which determines physical traits?", choices: ["Genes", "Oxygen", "Water", "Energy"], answer: 0 },
      { question: "What shape is DNA?", choices: ["Single helix", "Double helix", "Circle", "Square"], answer: 1 },
      { question: "Which parent contributes half the genes?", choices: ["Mother only", "Father only", "Both parents", "Neither"], answer: 2 },
      { question: "What is a dominant trait?", choices: ["Hidden trait", "Expressed trait", "Weak trait", "Lost trait"], answer: 1 },
      { question: "What are chromosomes made of?", choices: ["Protein only", "DNA and protein", "Water", "Sugar"], answer: 1 },
      { question: "What controls cell activities?", choices: ["Nucleus", "Mitochondria", "Ribosome", "Membrane"], answer: 0 },
      { question: "What is heredity?", choices: ["Learning", "Passing traits", "Mutation", "Growth"], answer: 1 },
      { question: "Which is an example of inherited trait?", choices: ["Hair color", "Language", "Skills", "Hobby"], answer: 0 }
    ]
  },

  english: {
    "Literary Analysis": [
      { question: "What is a theme?", choices: ["Main message", "Character", "Setting", "Plot twist"], answer: 0 },
      { question: "Who tells the story?", choices: ["Author", "Narrator", "Reader", "Editor"], answer: 1 },
      { question: "What is conflict?", choices: ["Ending", "Problem in story", "Character trait", "Setting"], answer: 1 },
      { question: "Which is an example of symbolism?", choices: ["A dove representing peace", "A loud noise", "A fast car", "A red shirt"], answer: 0 },
      { question: "What is irony?", choices: ["Expected outcome", "Opposite of expectation", "Comparison", "Description"], answer: 1 },
      { question: "What is foreshadowing?", choices: ["Past event", "Hint of future event", "Main idea", "Conclusion"], answer: 1 },
      { question: "What is characterization?", choices: ["Plot structure", "Developing characters", "Story ending", "Setting description"], answer: 1 },
      { question: "Which describes mood?", choices: ["Author’s lesson", "Reader’s feeling", "Story events", "Dialogue"], answer: 1 },
      { question: "What is tone?", choices: ["Author’s attitude", "Plot", "Conflict", "Character"], answer: 0 },
      { question: "What is a climax?", choices: ["Beginning", "Highest tension", "Resolution", "Setting"], answer: 1 }
    ],

    "Research & Writing": [
      { question: "What is a thesis statement?", choices: ["Topic sentence", "Main argument", "Detail", "Quote"], answer: 1 },
      { question: "Which source is most reliable?", choices: ["Personal blog", "Random website", "Peer-reviewed journal", "Social media"], answer: 2 },
      { question: "What avoids plagiarism?", choices: ["Copying", "Citing sources", "Guessing", "Skipping quotes"], answer: 1 },
      { question: "What is paraphrasing?", choices: ["Copy exact words", "Rewrite in your own words", "Delete text", "Summarize only"], answer: 1 },
      { question: "Which strengthens an argument?", choices: ["Opinion only", "Evidence and sources", "Long sentences", "Images"], answer: 1 },
      { question: "What is a bibliography?", choices: ["Story ending", "List of sources", "Outline", "Draft"], answer: 1 },
      { question: "Which is a primary source?", choices: ["Diary", "Textbook", "Article summary", "Encyclopedia"], answer: 0 },
      { question: "What is an outline used for?", choices: ["Decoration", "Organizing ideas", "Editing grammar", "Publishing"], answer: 1 },
      { question: "Which improves clarity?", choices: ["Run-on sentences", "Transitions", "No punctuation", "Slang"], answer: 1 },
      { question: "What is peer review?", choices: ["Teacher grading", "Feedback from classmates", "Self-check", "Online comments"], answer: 1 }
    ],

    "Persuasive Techniques": [
      { question: "Which appeals to emotion?", choices: ["Logos", "Ethos", "Pathos", "Fact"], answer: 2 },
      { question: "Which appeals to logic?", choices: ["Pathos", "Ethos", "Logos", "Opinion"], answer: 2 },
      { question: "Which builds credibility?", choices: ["Pathos", "Ethos", "Logos", "Exaggeration"], answer: 1 },
      { question: "What is a call to action?", choices: ["Story ending", "Encouraging reader to act", "Definition", "Evidence"], answer: 1 },
      { question: "Which uses expert opinion?", choices: ["Bandwagon", "Testimonial", "Repetition", "Bias"], answer: 1 },
      { question: "Which technique uses emotional stories?", choices: ["Logos", "Pathos", "Ethos", "Statistics"], answer: 1 },
      { question: "What is bias?", choices: ["Balanced view", "One-sided opinion", "Fact", "Proof"], answer: 1 },
      { question: "Which persuades using popularity?", choices: ["Bandwagon", "Testimonial", "Fear", "Logic"], answer: 0 },
      { question: "Which uses numbers and data?", choices: ["Pathos", "Ethos", "Logos", "Emotion"], answer: 2 },
      { question: "Which avoids misleading claims?", choices: ["Fallacy", "Evidence", "Bias", "Emotion"], answer: 1 }
    ]
  },

  socialstudies: {
    "Economics & Trade": [
      { question: "What is supply and demand?", choices: ["Money system", "Price relationship", "Trade law", "Tax rule"], answer: 1 },
      { question: "What happens when demand increases and supply stays same?", choices: ["Price falls", "Price rises", "No change", "Market crashes"], answer: 1 },
      { question: "What is a tariff?", choices: ["Tax on imports", "Free trade", "Loan", "Subsidy"], answer: 0 },
      { question: "What is inflation?", choices: ["Falling prices", "Rising prices", "Stable prices", "No money"], answer: 1 },
      { question: "What does GDP measure?", choices: ["Population", "Economic output", "Exports", "Savings"], answer: 1 },
      { question: "What is trade?", choices: ["Selling only", "Buying only", "Exchange of goods", "Saving money"], answer: 2 },
      { question: "Which encourages international trade?", choices: ["Tariffs", "Trade barriers", "Free trade agreements", "Embargo"], answer: 2 },
      { question: "What is scarcity?", choices: ["Unlimited resources", "Limited resources", "Extra supply", "High income"], answer: 1 },
      { question: "What is opportunity cost?", choices: ["Free choice", "Best alternative given up", "Extra profit", "Risk"], answer: 1 },
      { question: "Which is an export?", choices: ["Goods brought in", "Goods sent out", "Local sales", "Taxes"], answer: 1 }
    ],

    "Political System": [
      { question: "What is democracy?", choices: ["Rule by king", "Rule by people", "Rule by army", "Rule by church"], answer: 1 },
      { question: "What is a constitution?", choices: ["Law book", "Basic government rules", "Court decision", "Election list"], answer: 1 },
      { question: "Which branch makes laws?", choices: ["Executive", "Judicial", "Legislative", "Military"], answer: 2 },
      { question: "What does the judicial branch do?", choices: ["Make laws", "Enforce laws", "Interpret laws", "Vote"], answer: 2 },
      { question: "What is separation of powers?", choices: ["One leader controls all", "Power divided among branches", "No government", "Military rule"], answer: 1 },
      { question: "What is citizenship?", choices: ["Tourism", "Legal membership in a country", "Job title", "School role"], answer: 1 },
      { question: "What protects citizens’ rights?", choices: ["Police only", "Constitution", "Mayor", "Taxes"], answer: 1 },
      { question: "What is an election?", choices: ["Law making", "Choosing leaders", "Court case", "Trade"], answer: 1 },
      { question: "What is dictatorship?", choices: ["Rule by people", "Single ruler with total power", "Shared power", "Court system"], answer: 1 },
      { question: "Why are checks and balances important?", choices: ["Increase power", "Prevent abuse of power", "Slow government", "Remove laws"], answer: 1 }
    ],

    "Modern World History": [
      { question: "What caused World War I?", choices: ["Assassination of Archduke Franz Ferdinand", "Cold War", "Industrial Revolution", "Internet"], answer: 0 },
      { question: "What was the Cold War mainly about?", choices: ["Territory", "Ideological conflict", "Religion", "Trade"], answer: 1 },
      { question: "Which organization was formed after WWII to promote peace?", choices: ["NATO", "UN", "EU", "ASEAN"], answer: 1 },
      { question: "What ended World War II in Europe?", choices: ["Treaty of Versailles", "Germany’s surrender", "Atomic bomb", "League of Nations"], answer: 1 },
      { question: "What was the Berlin Wall symbol of?", choices: ["Peace", "Division", "Trade", "Freedom"], answer: 1 },
      { question: "What is globalization?", choices: ["Isolation", "Worldwide connection", "Colonization", "War"], answer: 1 },
      { question: "Which event started the digital age?", choices: ["Internet invention", "Steam engine", "Printing press", "Telephone"], answer: 0 },
      { question: "What was apartheid?", choices: ["Economic system", "Racial segregation policy", "Trade agreement", "Military alliance"], answer: 1 },
      { question: "Which country led the Soviet Union?", choices: ["USA", "Russia", "China", "Germany"], answer: 1 },
      { question: "What is terrorism?", choices: ["Peace movement", "Violence for political goals", "Trade policy", "Cultural exchange"], answer: 1 }
    ]
  },

  computerscience: {
    "Algorithms & Logic": [
      { question: "What is an algorithm?", choices: ["Random steps", "Step-by-step solution", "Hardware", "Error"], answer: 1 },
      { question: "Which structure makes decisions?", choices: ["Loop", "Variable", "If statement", "Function"], answer: 2 },
      { question: "What does Big-O describe?", choices: ["Memory size", "Execution speed", "Algorithm efficiency", "Programming language"], answer: 2 },
      { question: "Which algorithm searches fastest in sorted data?", choices: ["Linear search", "Binary search", "Bubble sort", "Random search"], answer: 1 },
      { question: "What does recursion mean?", choices: ["Repeating forever", "Function calling itself", "Stopping code", "Deleting data"], answer: 1 },
      { question: "Which sort compares adjacent values?", choices: ["Merge sort", "Bubble sort", "Quick sort", "Heap sort"], answer: 1 },
      { question: "What is a logic error?", choices: ["Program crash", "Wrong output", "Syntax mistake", "Missing file"], answer: 1 },
      { question: "Which loop runs at least once?", choices: ["for", "while", "do-while", "if"], answer: 2 },
      { question: "What is pseudocode?", choices: ["Real code", "Human-readable logic", "Binary", "Error log"], answer: 1 },
      { question: "Which improves algorithm speed?", choices: ["More steps", "Efficient logic", "Larger files", "More memory only"], answer: 1 }
    ],

    "Database & SQL": [
      { question: "What is a database?", choices: ["Website", "Organized data storage", "Program", "Browser"], answer: 1 },
      { question: "Which SQL command retrieves data?", choices: ["INSERT", "SELECT", "DELETE", "UPDATE"], answer: 1 },
      { question: "What is a primary key?", choices: ["Duplicate field", "Unique identifier", "Password", "Index only"], answer: 1 },
      { question: "Which command removes records?", choices: ["DROP", "DELETE", "INSERT", "SELECT"], answer: 1 },
      { question: "What does WHERE clause do?", choices: ["Sort data", "Filter records", "Delete table", "Join tables"], answer: 1 },
      { question: "Which joins tables?", choices: ["JOIN", "MERGE", "LINK", "CONNECT"], answer: 0 },
      { question: "What is normalization?", choices: ["Delete data", "Reduce redundancy", "Add duplicates", "Encrypt"], answer: 1 },
      { question: "Which data type stores text?", choices: ["INT", "VARCHAR", "FLOAT", "BOOLEAN"], answer: 1 },
      { question: "Which ensures no empty value?", choices: ["NULL", "NOT NULL", "INDEX", "DEFAULT"], answer: 1 },
      { question: "Which updates existing data?", choices: ["UPDATE", "INSERT", "DROP", "SELECT"], answer: 0 }
    ],

    "Web Development Concepts": [
      { question: "What does HTML define?", choices: ["Style", "Structure", "Logic", "Database"], answer: 1 },
      { question: "Which handles page styling?", choices: ["HTML", "JS", "CSS", "SQL"], answer: 2 },
      { question: "What does JavaScript mainly control?", choices: ["Layout", "Interactivity", "Fonts", "Images"], answer: 1 },
      { question: "What is responsive design?", choices: ["Fast loading", "Fits all screens", "More colors", "Offline mode"], answer: 1 },
      { question: "What is an API?", choices: ["Design tool", "Communication interface", "Database", "Browser"], answer: 1 },
      { question: "Which improves website speed?", choices: ["Large images", "Minified code", "More scripts", "Inline styles"], answer: 1 },
      { question: "What is HTTPS?", choices: ["Unsecure web", "Encrypted connection", "Programming language", "File system"], answer: 1 },
      { question: "Which stores data in browser?", choices: ["LocalStorage", "HTML", "CSS", "Server only"], answer: 0 },
      { question: "What is a framework?", choices: ["Browser", "Development toolset", "Database", "Server"], answer: 1 },
      { question: "What prevents cross-site attacks?", choices: ["Firewall", "Input validation", "Images", "Cookies"], answer: 1 }
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

  if (!hardQuestions[subject] || !hardQuestions[subject][topic]) {
    document.getElementById("quizBox").innerHTML =
      "<p>❌ Invalid subject or topic.</p>";
    return;
  }

  questions = hardQuestions[subject][topic];
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

  // Show correct/wrong
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