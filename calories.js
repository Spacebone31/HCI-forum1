document.getElementById("add-button").addEventListener("click", function() {
    const foodItem = document.getElementById("food-input").value;
    const calories = parseInt(document.getElementById("calories-input").value);

    if (!foodItem || isNaN(calories)) {
        alert("Please enter a food item and valid calories.");
        return;
    }

    // Create a new food entry
    const foodList = document.getElementById("food-list");
    const newFoodEntry = document.createElement("p");
    newFoodEntry.textContent = `${foodItem}: ${calories} kcal`;
    foodList.appendChild(newFoodEntry);

    // Update total calories
    const caloriesTotal = document.getElementById("calories-total");
    const currentTotal = parseInt(caloriesTotal.textContent);
    caloriesTotal.textContent = currentTotal + calories;

    // Clear input fields
    document.getElementById("food-input").value = "";
    document.getElementById("calories-input").value = "";
});

function goHome() {
    window.location.href = "home.html";
}
