const $userInput = document.getElementById("userInput")
const $userLabel = document.getElementById("userLabel")
const $passwordLabel = document.getElementById("passwordLabel")
const $passwordInput= document.getElementById("passwordInput")
const $eyeIcon = document.getElementById("eye-icon")

function checkInputs() {
    if($userInput.value.length > 0) {
        $userLabel.style.top = "3px";
    } else {
        $userLabel.style.top = "18px";
    }

    if($passwordInput.value.length > 0) {
        $passwordLabel.style.top = "3px";
    } else {
        $passwordLabel.style.top = "18px";
    }

    $eyeIcon.style.display = "none"
}

function iconShowPassword() {
    $eyeIcon.style.display = "block"
}