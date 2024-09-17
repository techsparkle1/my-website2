document.addEventListener("DOMContentLoaded", () => {
  const loginScreen = document.getElementById("login-screen");
  const welcomeScreen = document.getElementById("welcome-screen");
  const teamSelectionScreen = document.getElementById("team-selection-screen");

  const loginBtn = document.getElementById("login-btn");
  const proceedBtn = document.getElementById("proceed-btn");
  const usernameInput = document.getElementById("username");
  const welcomeMessage = document.getElementById("welcome-message");

  // Handle login button click
  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();

    if (username) {
      // Set the welcome message with the user's name
      welcomeMessage.textContent = `Welcome, ${username}, to IDTzard!`;

      // Transition from login screen to welcome screen
      loginScreen.classList.add("hidden");
      welcomeScreen.classList.remove("hidden");
    } else {
      alert("Please enter your name.");
    }
  });

  // Handle proceed button click
  proceedBtn.addEventListener("click", () => {
    // Transition from welcome screen to team selection screen
    welcomeScreen.classList.add("hidden");
    teamSelectionScreen.classList.remove("hidden");
  });

  // Handle team selection (optional: you can add further functionality here)
  const teamItems = document.querySelectorAll(".team-item");
  teamItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedTeam = item.getAttribute("data-team");
      alert(`You have selected ${selectedTeam}. The quiz will start now.`);
      // Further logic for starting the quiz can be implemented here
    });
  });
});
