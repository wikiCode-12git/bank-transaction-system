let currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
    window.location.href = "index.html";
}

let userData = JSON.parse(localStorage.getItem(currentUser));

document.getElementById("user").innerText = currentUser;

function updateUI() {
    document.getElementById("balance").innerText = userData.balance;

    let historyList = document.getElementById("history");
    historyList.innerHTML = "";

    userData.history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });

    localStorage.setItem(currentUser, JSON.stringify(userData));
}

function getAmount() {
    return parseFloat(document.getElementById("amount").value);
}

function deposit() {
    let amount = getAmount();
    if (amount > 0) {
        userData.balance += amount;
        userData.history.push("Deposited ₦" + amount);
        updateUI();
    }
}

function withdraw() {
    let amount = getAmount();
    if (amount > 0 && amount <= userData.balance) {
        userData.balance -= amount;
        userData.history.push("Withdrew ₦" + amount);
        updateUI();
    } else {
        alert("Insufficient funds");
    }
}

function transfer() {
    let amount = getAmount();
    if (amount > 0 && amount <= userData.balance) {
        userData.balance -= amount;
        userData.history.push("Transferred ₦" + amount);
        updateUI();
    } else {
        alert("Transfer failed");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Initialize UI
updateUI();