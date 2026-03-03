let generatedOTP = null;
let timeLeft = 30;
let score = 0;
let attempts = 0;
let isLocked = localStorage.getItem('vaultLocked') === 'true';

// 1. Manual OTP Generation (Unique Algorithm)
function generateNewOTP() {
    if (isLocked) return;
    // Simple custom logic: Multiply random with date and take last 6 digits
    let raw = Math.floor(Math.random() * 900000) + 100000;
    generatedOTP = raw.toString();
    document.getElementById('current-otp').innerText = generatedOTP;
    resetTimer();
}

// 2. Countdown Timer Logic
let timerId;
function resetTimer() {
    timeLeft = 30;
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            generatedOTP = null; // OTP Expired
            document.getElementById('current-otp').innerText = "EXPIRED";
            score -= 3; // OTP Expired penalty
            updateScore();
        }
    }, 1000);
}

// 3. Verification & Throttling
function verifyOTP() {
    if (isLocked) return alert("System Locked!");

    let input = document.getElementById('otp-input').value;
    let msg = document.getElementById('msg');

    if (input === generatedOTP && generatedOTP !== null) {
        score += 10; // Success
        msg.style.color = "#10b981";
        msg.innerText = "Access Granted!";
        showVault();
    } else {
        attempts++;
        score -= 5; // Failed attempt
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
    localStorage.setItem('vaultLocked', 'true'); // Persistence after refresh
    score -= 15; // Lock penalty
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