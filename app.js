function loginOne () {
    window.location.href = "login.html";
}

function prevIcon() {
    // Redirect to another page by setting the href property of the location object
    window.location.href = "index.html";

}

function passwordToggle () {
    var x = document.getElementById("passwordInput");
    var eyeClosedEl = document.getElementById("eyeClosed");
    var eyeOpenEl = document.getElementById("eyeOpen");

    if(x.type === "password") {
        x.type = "text";
        eyeClosedEl.classList.add("d-none");
        eyeOpenEl.classList.remove("d-none");
    }
    else {
        x.type = "password";
        eyeClosedEl.classList.remove("d-none");
        eyeOpenEl.classList.add("d-none");
    }
}