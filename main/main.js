// Hide splash screen and show homescreen after animation completes
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const homescreen = document.querySelector('.homescreen');

    // Hide homescreen initially
    homescreen.style.display = 'none';

    // After 2 seconds (animation duration), hide splash screen and show homescreen
    setTimeout(function() {
        splashScreen.style.display = 'none';
        homescreen.style.display = 'flex';
    }, 4000);
});


// Dynamic topic cards for easy and medium levels
(function() {
  const isEasy = window.location.pathname.endsWith('easytopic.html');
  const isMedium = window.location.pathname.endsWith('mediumtopic.html');
  const isHard = window.location.pathname.endsWith('hardtopic.html');
  if (!isEasy && !isMedium && !isHard) return;

  // Topics data for each subject and level
  const topics = {
    easy: {
      mathematics: [
        { img: '../images/easy/ad&sub.jpg', title: 'Addition & Subtraction', desc: 'Practice simple adding and subtracting of numbers.' },
        { img: '../images/easy/multiplication.webp', title: 'Multiplication Basics', desc: 'Learn basic multiplication using small numbers.' },
        { img: '../images/easy/sh&num.jpg', title: 'Shapes & Numbers', desc: 'Identify basic shapes and understand number order.' }
      ],
      science: [
        { img: '../images/easy/plants.webp', title: 'Plants', desc: 'Learn the basic parts and functions of plants.' },
        { img: '../images/easy/animals.webp', title: 'Animals', desc: 'Discover common animals and their habitats.' },
        { img: '../images/easy/weathers.webp', title: 'Weather Basics', desc: 'Understand simple weather types and changes.' }
      ],
      english: [
        { img: '../images/easy/spelling.png', title: 'Spelling Basics', desc: 'Practice spelling common and simple words.' },
        { img: '../images/easy/reading.jpg', title: 'Reading Practice', desc: 'Read short sentences and simple passages.' },
        { img: '../images/easy/grammar.jpg', title: 'Basic Grammar', desc: 'Learn simple grammar rules and sentence structure.' }
      ],
      socialstudies: [
        { img: '../images/easy/famous.jpg', title: 'Famous People', desc: 'Learn about important people in history.' },
        { img: '../images/easy/history.webp', title: 'Historical Events', desc: 'Explore simple and important past events.' },
        { img: '../images/easy/timeline.webp', title: 'Timelines', desc: 'Understand how events are ordered in time.' }
      ],
      computerscience: [
        { img: '../images/easy/computer.jpg', title: 'Computer Parts', desc: 'Identify basic parts of a computer and their uses.' },
        { img: '../images/easy/internet.png', title: 'Internet Basics', desc: 'Learn how the internet works and how to use it safely.' },
        { img: '../images/easy/online.jpg', title: 'Online Safety', desc: 'Understand safe behavior when using the internet.' }
      ]
    },
    medium: {
      mathematics: [
        { img: '../images/medium/fractions.webp', title: 'Fractions & Decimals', desc: 'Compare, add, and convert fractions and decimals.' },
        { img: '../images/medium/algebra.jpg', title: 'Introduction to Algrebra', desc: 'Solve simple equations and understand variables.' },
        { img: '../images/medium/measurement.jpg', title: 'Measurement & Data', desc: 'Work with units, graphs, and averages.' }
      ],
      science: [
        { img: '../images/medium/states.jpg', title: 'States of Matter', desc: 'Understand solids, liquids, gases, and changes of state.' },
        { img: '../images/medium/energy.jpg', title: 'Energy & Motion', desc: 'Learn how forces affect movement and energy.' },
        { img: '../images/medium/ecosystems.jpg', title: 'Ecosystems', desc: 'Explore food webs, habitats, and environments.' }
      ],
      english: [
        { img: '../images/medium/partsofspeech.webp', title: 'Parts of Speech', desc: 'Identify nouns, verbs, adjectives, and adverbs.' },
        { img: '../images/medium/paragraph.png', title: 'Paragraph Writing', desc: 'Organize ideas into clear and structured paragraphs.' },
        { img: '../images/medium/figurative.png', title: 'Figurative Language', desc: 'Understand metaphors, similes, and idioms.' }
      ],
      socialstudies: [
        { img: '../images/medium/world.webp', title: 'World Geography', desc: 'Learn continents, countries, and physical features.' },
        { img: '../images/medium/government.jpg', title: 'Government Basics', desc: 'Understand laws, leaders, and civic responsibility.' },
        { img: '../images/medium/culture.jpeg', title: 'Culture & Traditions', desc: 'Explore traditions, languages, and lifestyles.' }
      ],
      computerscience: [
        { img: '../images/medium/basics.png', title: 'Programming Basics', desc: 'Learn logic, variables, and simple coding concepts.' },
        { img: '../images/medium/data.png', title: 'Data & Files', desc: 'Understand file types, storage, and data organization.' },
        { img: '../images/medium/basicscs.jpg', title: 'Cybersecurity Basics', desc: 'Learn about passwords, malware, and privacy.' }
      ]
    },
    hard: {
      mathematics: [
        { img: '../images/hard/quadratic.webp', title: 'Quadratic Equations', desc: 'Compare, add, and convert fractions and decimals.' },
        { img: '../images/hard/trigonometry.jpg', title: 'Trigonometry', desc: 'Solve simple equations and understand variables.' },
        { img: '../images/hard/statistics.webp', title: 'Statistics & Probability', desc: 'Work with units, graphs, and averages.' }
      ],
      science: [
        { img: '../images/hard/chemical.png', title: 'Chemical Reactions', desc: 'Understand solids, liquids, gases, and changes of state.' },
        { img: '../images/hard/electricity.webp', title: 'Electricity & Magnetism', desc: 'Learn how forces affect movement and energy.' },
        { img: '../images/hard/genetics.jpg', title: 'Genetics & DNA', desc: 'Explore food webs, habitats, and environments.' }
      ],
      english: [
        { img: '../images/hard/literary.png', title: 'Literary Analysis', desc: 'Identify nouns, verbs, adjectives, and adverbs.' },
        { img: '../images/hard/research.png', title: 'Research & Writing', desc: 'Organize ideas into clear and structured paragraphs.' },
        { img: '../images/hard/persuasive.png', title: 'Persuasive Techniques', desc: 'Understand metaphors, similes, and idioms.' }
      ],
      socialstudies: [
        { img: '../images/hard/economics.jpg', title: 'Economics & Trade', desc: 'Learn continents, countries, and physical features.' },
        { img: '../images/hard/political.jpg', title: 'Political Systems', desc: 'Understand laws, leaders, and civic responsibility.' },
        { img: '../images/hard/modern.jpg', title: 'Modern World History', desc: 'Explore traditions, languages, and lifestyles.' }
      ],
      computerscience: [
        { img: '../images/hard/algorithm.webp', title: 'Algorithms & Logic', desc: 'Learn logic, variables, and simple coding concepts.' },
        { img: '../images/hard/database.png', title: 'Databases & SQL', desc: 'Understand file types, storage, and data organization.' },
        { img: '../images/hard/web.jpg', title: 'Web Development Concepts', desc: 'Learn about passwords, malware, and privacy.' }
      ]
    }

  };

  // Get subject from URL
  function getSubject() {
    const params = new URLSearchParams(window.location.search);
    return params.get('subject') || 'mathematics';
  }

  // Render topic cards
  function renderCards(subject, level) {
    const container = document.getElementById('topicCards');
    if (!container) return;
    container.innerHTML = '';
    const subjectTopics = topics[level][subject] || topics[level]['mathematics'];
    subjectTopics.forEach(topicObj => {
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML = `
        <img src="${topicObj.img}" class="topic-card-image" alt="${topicObj.title}">
        <div class="topic-card-title">${topicObj.title}</div>
        <div class="topic-card-description">${topicObj.desc}</div>
        <button class="topic-card-button">START QUIZ</button>
      `;
      card.querySelector('.topic-card-button').addEventListener('click', function() {
        // Get current subject from URL
        const params = new URLSearchParams(window.location.search);
        const subject = params.get('subject') || 'mathematics';
        // Determine quiz file based on level
        let quizFile = '';
        if (level === 'easy') quizFile = '../quiz/easyquiz.html';
        else if (level === 'medium') quizFile = '../quiz/mediumquiz.html';
        else if (level === 'hard') quizFile = '../quiz/hardquiz.html';
        window.location.href = `${quizFile}?subject=${encodeURIComponent(subject)}&topic=${encodeURIComponent(topicObj.title)}`;
      });
      container.appendChild(card);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (isEasy) {
      renderCards(getSubject(), 'easy');
      const difficultyCard = document.querySelector('.difficulty-card');
      if (difficultyCard) difficultyCard.style.display = 'none';
      const difficultyDesc = document.querySelector('.difficulty-card-description');
      if (difficultyDesc) difficultyDesc.style.display = 'none';
    } else if (isMedium) {
      renderCards(getSubject(), 'medium');
      const difficultyCard = document.querySelector('.difficulty-card');
      if (difficultyCard) difficultyCard.style.display = 'none';
      const difficultyDesc = document.querySelector('.difficulty-card-description');
      if (difficultyDesc) difficultyDesc.style.display = 'none';
    } else if (isHard) {
      renderCards(getSubject(), 'hard');
      const difficultyCard = document.querySelector('.difficulty-card');
      if (difficultyCard) difficultyCard.style.display = 'none';
      const difficultyDesc = document.querySelector('.difficulty-card-description');
      if (difficultyDesc) difficultyDesc.style.display = 'none';
    }
  });
})();

