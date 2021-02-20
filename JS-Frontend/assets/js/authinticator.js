(function() {
    const loggedIn = document.querySelector("#logged-in");
    const hrefEl = document.querySelector("#login-edit");
    if(localStorage.getItem("token") === null) {
        loggedIn.innerText = "Login/Register";
        hrefEl.href = "login-signup";
    } else {
        loggedIn.innerText = localStorage.getItem("token");
        hrefEl.href = "/editroute";
    }
})();