document.getElementById("calculate-button").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Calculate BMI
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);

    // Determine the BMI category
    let bmiCategory = '';
    if (bmiValue < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiCategory = 'Normal Weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    // Display the result with category
    const bmiResult = document.getElementById("bmi-result");
    const bmiValueSpan = document.getElementById("bmi-value");
    const bmiCategorySpan = document.getElementById("bmi-category");
    bmiValueSpan.textContent = bmiValue;
    bmiCategorySpan.textContent = bmiCategory;

    bmiResult.classList.remove("hidden");
});

function goHome() {
    window.location.href = "home.html";
}