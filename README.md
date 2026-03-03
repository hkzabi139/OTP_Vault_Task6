# Task #6: Secure OTP-Based Vault System
**Developer Super League 2026 | Aptech Metro Star Gate**

## 🚀 Live Demo
**Netlify Link:** [Yahan apna Netlify URL paste karein]

---

## 🛠️ Project Overview
Yeh project ek browser-based secure OTP authentication system hai. Ismein static password ki jagah dynamically generated codes use kiye gaye hain taake security behtar ho sake.

### Key Features:
- **Dynamic OTP Generation:** Har 30 seconds baad naya code banta hai.
- **30-Second Countdown:** Real-time timer user ko expiry ki ittela deta hai.
- **Account Lockout:** 3-5 failed attempts ke baad system automatically lock ho jata hai.
- **Session Persistence:** Agar system lock ho jaye toh page refresh karne par bhi lock rehta hai.
- **Security Scoring:** Har action (sahi/galat OTP) par score change hota hai.

---

## 🧠 Mandatory Manual Logic (Student Implementation)

### 1. OTP Generation Algorithm
Maine `Math.random()` aur `timestamp` ko use karke ek custom logic banaya hai jo 6-digits ka unique numeric code generate karta hai. Maine koi ready-made library use nahi ki.

### 2. Anti-Replay & Expiry Logic
Har OTP ke saath ek 'timestamp' save hota hai. Agar 30 seconds guzar jayein ya ek baar code use ho jaye, toh system use invalidate kar deta hai taake replay attacks na hon.

### 3. Brute-Force Protection
Maine ek custom counter implement kiya hai jo failed attempts ko track karta hai. 3 failed attempts par `localStorage` mein 'lock' state set ho jati hai jo refresh karne par bhi khatam nahi hoti.

### 4. Event Logging Structure
Maine ek simple array structure design kiya hai jo har event (Login, Fail, Lockout, Timeout) ko score ke saath log karta hai.

---

## 📝 Student Thinking Section

**Q1: Why is client-side encryption weaker than server-side?**
*Answer:* Client-side par code aur keys user ke browser mein hoti hain jahan koi bhi 'Inspect Element' karke logic dekh sakta hai. Server-side par logic hidden hota hai.

**Q2: How can localStorage be tampered with?**
*Answer:* Koi bhi user F12 (Developer Tools) khol kar 'Application' tab mein ja kar manually localStorage ki values change kar sakta hai.

**Q3: What would you change in production?**
*Answer:* Production mein main OTP ko SMS/Email ke zariye bhejunga aur validation server-side (Node.js/Python) par hogi na ke browser mein.

**Q4: How would you make this multi-user?**
*Answer:* Database (Firebase ya SQL) use karke har user ka alag profile aur unique secret key generate karunga.

---

## 📂 Tech Stack
- HTML5
- CSS3 (Responsive Design)
- JavaScript (Vanilla JS)
