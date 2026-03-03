# Task #6: Secure OTP-Based Vault System
**Developer Super League 2026 | Aptech Metro Star Gate**

## 🚀 Live Deployment
**github Working URL:** [https://hkzabi139.github.io/OTP_Vault_Task6/]

## 🛠️ Project Features
- **Dynamic OTP Generation:** A custom 6-digit numeric code generated client-side.
- **30-Second Countdown:** Real-time visual timer for OTP expiry.
- **Security Scoring System:** Real-time score tracking based on user actions.
- **Account Lockout:** System locks after 3-5 failed attempts (Persists on refresh).
- **Idle Session Logout:** Automatically logs out the user after 2 minutes of inactivity.

## 🧠 Mandatory Manual Logic
- **OTP Algorithm:** I designed a custom algorithm using `Math.random()` and `Date.now()` to ensure unique, unpredictable codes.
- **Brute-Force Protection:** Implemented an attempt-tracking counter that triggers a 'Lock State' stored in `localStorage` to prevent bypass via page refresh.
- **Event Logging:** Designed a custom structure to log every security event (Success, Failure, Timeout) with its corresponding score change.

## 📝 Student Thinking Section
1. **Why is client-side encryption weaker?**
     Logic and keys are exposed in the browser's source code, making them accessible via Developer Tools.
3. **How can localStorage be tampered with?** 
     Users can manually edit, delete, or inject values into the 'Application' tab of the Browser Console.
4. **What would you change in production?** 
     I would move OTP generation and validation to a secure backend (e.g., Node.js) and send codes via SMS/Email.
5. **How would you make this multi-user?** 
     By integrating a database (like Firebase or SQL) to manage separate user profiles and unique encryption salts.
