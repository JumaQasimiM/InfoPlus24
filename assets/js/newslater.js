const newsletterForm = document.getElementById("submit_newslatter");
const err = document.getElementById("err");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get("email").trim();

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    err.className = "block text-red-700";
    err.textContent = "Bitte füllen Sie das Formular aus.";
    return;
  }

  if (!emailRegex.test(email)) {
    err.className = "block text-red-700";
    err.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    return;
  }

  // Hide error if everything is fine
  err.className = "hidden";

  // Save user info in localStorage
  const userDetail = {
    username: "Qasimi",
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(userDetail));
  localStorage.setItem("email", email);

  // Success message
  alert(`Vielen Dank für Ihre Anmeldung ❤️\nE-Mail: ${email}`);

  // Reset form
  e.target.reset();
});
