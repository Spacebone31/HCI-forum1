function finishWorkout() {
    // Hide the "Workout Tracker" title
    const workoutTitle = document.getElementById("workout-title");
    workoutTitle.style.display = "none";

    // Hide the workout form and its container
    const workoutContainer = document.querySelector(".workout-container");
    workoutContainer.style.display = "none";

    // Show the congratulatory message with the "Add Another Workout" button
    const congratsMessage = document.getElementById("congrats-message");
    congratsMessage.innerHTML = `<p>Congratulations! You have finished the workout.</p>
        <button type="button" id="new-workout-button" class="workout-button" onclick="startNewWorkout()">Add Another Workout</button>
        <button type="button" id="home-button-after-finish" class "home-button" onclick="goHome()">Home</button>`;

    congratsMessage.classList.remove("hidden");
}

function startNewWorkout() {
    // Show the "Workout Tracker" title
    const workoutTitle = document.getElementById("workout-title");
    workoutTitle.style.display = "block";

    // Show the workout form and its container
    const workoutContainer = document.querySelector(".workout-container");
    workoutContainer.style.display = "block";

    // Hide the congratulatory message
    const congratsMessage = document.getElementById("congrats-message");
    congratsMessage.classList.add("hidden");
}

function goHome() {
    window.location.href = "home.html";
}