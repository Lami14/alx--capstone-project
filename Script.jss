function requestOTP() {
  const idNumber = document.getElementById("idNumber").value;
  if (idNumber.length !== 13) {
    alert("Please enter a valid 13-digit South African ID number.");
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  localStorage.setItem("otp", otp);
  alert("Your OTP is: " + otp + "\n(For demo purposes)");
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const enteredOTP = document.getElementById("otp").value;
  const savedOTP = localStorage.getItem("otp");

  if (enteredOTP === savedOTP) {
    document.getElementById("loginMessage").textContent = "✅ Login successful!";
    document.getElementById("loginMessage").style.color = "lightgreen";
    // Redirect to search page
    // window.location.href = "search.html";
  } else {
    document.getElementById("loginMessage").textContent = "❌ Invalid OTP. Try again.";
    document.getElementById("loginMessage").style.color = "red";
  }
});

