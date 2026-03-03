let generatedOTP = null;
let timeLeft = 30;
let score = 0;
let attempts = 0;
let isLocked = localStorage.getItem('vaultLocked') === 'true';

function generateNewOTP() {
    if (isLocked) return;
    let raw = Math.floor(Math.random() * 900000) + 100000;
    generatedOTP = raw.toString();
    document.getElementById('current-otp').innerText = generatedOTP;
    resetTimer();
}

let timerId;
function resetTimer() {
    timeLeft = 30;
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            generatedOTP = null;
            document.getElementById('current-otp').innerText = "EXPIRED";
            score -= 3;
            updateScore();
        }
    }, 1000);
}

function verifyOTP() {
    if (isLocked) return alert("System Locked!");

    let input = document.getElementById('otp-input').value;
    let msg = document.getElementById('msg');

    if (input === generatedOTP && generatedOTP !== null) {
        score += 10;
        msg.style.color = "#10b981";
        msg.innerText = "Access Granted!";
        showVault();
    } else {
        attempts++;
        score -= 5;
        msg.style.color = "#f87171";

        if (attempts >= 3) {
            triggerLock();
        } else {
            msg.innerText = `Invalid OTP! Attempts: ${attempts}/3`;
        }
    }
    updateScore();
}

function triggerLock() {
    isLocked = true;
    localStorage.setItem('vaultLocked', 'true');
    score -= 15;
    document.getElementById('msg').innerText = "SYSTEM LOCKED - Security Breach!";
    document.getElementById('gen-btn').disabled = true;
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

function showVault() {
    document.getElementById('otp-panel').style.display = 'none';
    document.getElementById('vault-content').style.display = 'block';
}

function logout() {
    score += 5;
    localStorage.removeItem('vaultLocked');
    location.reload();

}
