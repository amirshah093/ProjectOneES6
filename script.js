
const loginBox = document.getElementById("login-box");
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", loginBoxDisplay);

const signUpButton = document.getElementById("sign-up");
const signUpBox = document.getElementById("sign-up-box");
signUpButton.addEventListener("click", signUpBoxDisplay);


function signUpBoxDisplay (e){
    if(signUpButton.innerHTML === "Sign Up"){
        console.log("Sign up  button is working")
        signUpBox.style.display = "block"
        loginButton.style.display = "none"
        signUpButton.style.display = "none"
    }
    else if(loginButton.innerHTML === Logout){
        alert("hi you have loged out success full")
    }
}

function loginBoxDisplay (e){
    if(loginButton.innerHTML === "Login"){
        console.log("login button is working")
        loginBox.style.display = "block"
        loginButton.style.display = "none"
        signUpButton.style.display = "none"
    }
    else if(loginButton.innerHTML === Logout){
        alert("hi you have loged out success full")
    }
}

