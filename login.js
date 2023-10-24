function signup() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    alert("User registered: " + newUsername);
    window.location.href = "home.html";

    return false;
}
