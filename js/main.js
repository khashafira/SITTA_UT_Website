const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const now = new Date();
  const hour = now.getHours();
  let greet;
  if (hour < 12) greet = "Good morning";
  else if (hour < 18) greet = "Good afternoon";
  else greet = "Good evening";

   const user = JSON.parse(localStorage.getItem("userLogin") || "null");
  const name = user && user.name ? `, ${user.name}` : "";
  greetingEl.textContent = `${greet}${name}! Welcome to SITTA.`;
}