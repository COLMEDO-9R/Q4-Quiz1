// Show an alert when instructions are toggled
document.getElementById('instructions').ontoggle = function () {
  if (this.open) {
    console.log("Instructions toggled open!");
  } else {
    console.log("Instructions toggled closed.");
  }
};

// Function to calculate BMI
function calculateBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    window.alert("Please enter valid numbers! 💫");
    return;
  }

  let bmi = weight / Math.pow(height, 2);
  let category = "";

  if (bmi < 18.5) {
    category = "🌸 Underweight";
  } else if (bmi <= 24.9) {
    category = "🌼 Normal weight";
  } else if (bmi <= 29.9) {
    category = "🍰 Overweight";
  } else {
    category = "🍩 Obese";
  }

  document.getElementById('result').innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> - ${category}`;
}


