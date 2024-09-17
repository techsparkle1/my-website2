// script.js

// Function to start the quiz and display a personalized welcome message
function startQuiz() {
  // Get the value from the username input field
  const username = document.getElementById("username").value;

  // Check if the username is not empty
  if (username.trim() !== "") {
    // Display a personalized alert message
    alert(`Welcome, ${username}, to IDTzard! Let's start the quiz!`);

    // Optionally, you could redirect the user to a quiz page or perform other actions here
    // For example, scroll to the quiz section or load a new page
    window.location.href = "#quiz";
  } else {
    // If the username is empty, alert the user to enter their name
    alert("Please enter your name to start the quiz!");
  }
}
