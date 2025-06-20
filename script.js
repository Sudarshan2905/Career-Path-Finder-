// script.js

// Store user responses
let userResponses = [];

// Move to the next question based on user's choice
function nextQuestion(option) {
  userResponses.push(option); // Add the user's choice to the response array

  // Logic for determining the next question or the result
  if (userResponses.length === 1) {
    document.getElementById('question-text').innerText = 'Question 2: What subjects do you like?';
    document.querySelectorAll('.options')[0].innerHTML = `
      <button class="option" onclick="nextQuestion(1)">Physics, Chemistry</button>
      <button class="option" onclick="nextQuestion(2)">Accountancy, Economics</button>
      <button class="option" onclick="nextQuestion(3)">Literature, History</button>
      <button class="option" onclick="nextQuestion(4)">Technology, Mechanics</button>
    `;
  } else if (userResponses.length === 2) {
    document.getElementById('question-text').innerText = 'Question 3: Do you prefer practical work?';
    document.querySelectorAll('.options')[0].innerHTML = `
      <button class="option" onclick="nextQuestion(1)">Yes, I love experiments!</button>
      <button class="option" onclick="nextQuestion(2)">No, I like theory-based work</button>
    `;
  } else if (userResponses.length === 3) {
    showResult(); // Show the result after the last question
  }
}

// Function to display the result
function showResult() {
  let resultText = '';

  // Analyze user responses and provide career suggestions
  if (userResponses[0] === 1 && userResponses[1] === 1) {
    resultText = 'We suggest a career in Engineering or Medical Science!';
  } else if (userResponses[0] === 2 && userResponses[1] === 2) {
    resultText = 'We suggest a career in Finance or Business Administration!';
  } else if (userResponses[0] === 3 && userResponses[1] === 3) {
    resultText = 'We suggest a career in Arts, Literature, or Design!';
  } else if (userResponses[0] === 4 && userResponses[1] === 4) {
    resultText = 'We suggest a career in Vocational Training or Skilled Professions!';
  }

  // Display the result and hide the quiz
  document.getElementById('career-path').innerText = resultText;
  document.getElementById('result').style.display = 'block'; // Show the result
  document.getElementById('quiz-container').style.display = 'none'; // Hide the quiz
}


// script.js

// Simulate form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate a success message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear form fields after submission
    document.getElementById('contact-form').reset();
  });
  
  // Fade-in effect when scrolling
const elements = document.querySelectorAll('.fade-in');

const onScroll = () => {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', onScroll);

// Initially trigger scroll effect for elements already in view
onScroll();
