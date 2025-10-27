console.log("Login.js connected");

// ===== Login Logic =====
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();


  const emailOrUsername = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = dataUsers.find((u) => {
    const username = u.username ? u.username.toLowerCase() : "";
    const email = u.email ? u.email.toLowerCase() : "";
  return (
    (username === emailOrUsername.toLowerCase() ||
      email === emailOrUsername.toLowerCase()) &&
    u.password === password
  );
});

  if (user) {
    alert(`Welcome back, ${user.name || user.nama || "User"}!`);
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } 
  else if (emailOrUsername === "admin@ut.ac.id" && password === "admin123") {
    alert("Welcome, Admin UT!");
    localStorage.setItem(
      "userLogin",
      JSON.stringify({ name: "Admin UT", role: "Administrator" })
    );
    window.location.href = "dashboard.html";
  } 
  else {
    alert("Invalid email or password!");
  }
});


// ===== Modal Logic =====
const forgotModal = document.getElementById("forgotModal");
const registerModal = document.getElementById("registerModal");
const forgotLink = document.getElementById("forgotLink");
const registerLink = document.getElementById("registerLink");

if (forgotLink && forgotModal) {
  forgotLink.onclick = () => (forgotModal.style.display = "flex");
}

if (registerLink && registerModal) {
  registerLink.onclick = () => (registerModal.style.display = "flex");
}

if (document.getElementById("closeForgot")) {
  document.getElementById("closeForgot").onclick = () =>
    (forgotModal.style.display = "none");
}

if (document.getElementById("closeRegister")) {
  document.getElementById("closeRegister").onclick = () =>
    (registerModal.style.display = "none");
}

// Close modal 
window.onclick = (event) => {
  if (event.target === forgotModal) forgotModal.style.display = "none";
  if (event.target === registerModal) registerModal.style.display = "none";
};
