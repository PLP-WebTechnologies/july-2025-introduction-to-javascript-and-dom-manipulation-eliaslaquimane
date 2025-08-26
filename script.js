
// Applying - Variables and Conditionals
const checkAgeBtn = document.getElementById("checkAgeBtn");
checkAgeBtn.addEventListener("click", () => {
  let age = parseInt(document.getElementById("userAge").value);
  const result = document.getElementById("ageResult");

  // Using Conditional
  if (isNaN(age)) {
    result.textContent = "Try a valid number.";
  } else if (age >= 18) {
    result.textContent = "You are an adult!";
  } else {
    result.textContent = "You are under 18.";
  }
});


// Usging function to Generate a list of numbers
function generateNumbers() {
  const numberList = document.getElementById("numberList");
  numberList.innerHTML = ""; 

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
}

// Using a function to Countdown
function startCountdown() {
  let countdownText = "";
  let i = 5;

  while (i >= 1) {
    countdownText += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = countdownText;
}

// get the Id from the html
document.getElementById("generateNumbersBtn").addEventListener("click", generateNumbers);
document.getElementById("countdownBtn").addEventListener("click", startCountdown);


const changingBgBtn = document.getElementById("changingBg");
changingBgBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.getElementById("changingText").textContent =
    document.body.classList.contains("dark-mode")
      ? " Dark mode"
      : "Light mode";
});

// dark mode
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #000000ff;
    color: black;
  }
`;
document.head.appendChild(style);
