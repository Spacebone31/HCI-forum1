function submitForm() {
    // Hide the form and submit button
    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("submit-button").style.display = "none";

    // Show the "Submit Form Again" button
    document.getElementById("submit-again-button").style.display = "block";
}

function submitAgain() {
    // Clear the feedback textarea
    document.getElementById("feedback-input").value = "";

    // Show the form and submit button
    document.getElementById("feedback-form").style.display = "block";
    document.getElementById("submit-button").style.display = "block";

    // Hide the "Submit Form Again" button
    document.getElementById("submit-again-button").style.display = "none";
}

function goHome() {
    window.location.href = "home.html";
}
