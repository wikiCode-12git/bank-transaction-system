// Demo users
let users = {
    "admin": { password: "1234", balance: 5000, history: [] },
    "user": { password: "1111", balance: 2000, history: [] }
};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        localStorage.setItem("currentUser", username);

        // Save initial data if not exists
        if (!localStorage.getItem(username)) {
            localStorage.setItem(username, JSON.stringify(users[username]));
        }

        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid login";
    }
}