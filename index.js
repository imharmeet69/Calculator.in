const resultDisplay = document.getElementById('result');

function calculation(value) {
  resultDisplay.textContent += value;
}

function clearResult() {
  resultDisplay.textContent = '';
}

function backspace() {
  resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(resultDisplay.textContent);
    resultDisplay.textContent = result;
  } catch (error) {
    resultDisplay.textContent = "Error";
  }
}

// Function to handle keypresses
function handleKeyPress(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    calculation(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    calculation(` ${key} `); // Add spaces for operators
  } else if (key === '.') {
    calculation(key);
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearResult();
  } else if (key === 'Enter') {
    calculateResult();
  }
}

// Add event listener for keypresses
document.addEventListener('keydown', handleKeyPress);
