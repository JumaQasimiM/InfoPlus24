// handle submit newslatter

const newslatter = document.getElementById("submit_newslatter");
const err = document.getElementById("err");

newslatter.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const email = formData.get("email");
  if (!email) {
    err.className = "block text-red-700";
    err.textContent = "biite füllen Sie die form aus.";
  }
  //    else if (email.length <= 6) {
  //     err.className = "block text-red-700";
  //     err.textContent = "bitte Sreiben die die Rightier email.";
  //   }
  else {
    const userDitail = {
      username: "Qasimi",
      email: email,
    };
    localStorage.setItem("email", email);

    //stringify convert object into string , because localstorage acsept just string value
    localStorage.setItem("user", JSON.stringify(userDitail));
    err.className = "hidden";

    // console.log("from localStorage", localStorage.getItem("email"));

    // get value form localstorage
    const getUser = localStorage.getItem("user");
    if (getUser) {
      // convert to an object
      const userData = JSON.parse(getUser);

      console.log(getUser);
      alert("Vielen Dank für Ihre Abunieren❤️", getUser.email);
    } else {
      console.log("User data not founded!");
    }
  }
});
