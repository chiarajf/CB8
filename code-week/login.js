const formSignIn = () => {
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login");
  loginContainer.id = "loginContainer";

  const form = document.createElement("form");
  form.name = "form-login";

  const image = document.createElement("img");

  image.className = "ìmg";
  image.src = "../../media/logo.png";
  image.alt = "moviesThriller-logo";

  const heading = document.createElement("h1");
  heading.textContent = "Login";

  const labelUsername = document.createElement("label");
  labelUsername.setAttribute("for", "userName");
  labelUsername.textContent = "Username";

  const inputUsername = document.createElement("input");
  inputUsername.type = "text";
  inputUsername.id = "userName";
  inputUsername.placeholder = "Username";
  inputUsername.required = true;

  const labelPassword = document.createElement("label");
  labelPassword.setAttribute("for", "userPw");
  labelPassword.textContent = "Password";

  const inputPassword = document.createElement("input");
  inputPassword.type = "password";
  inputPassword.id = "userPw";
  inputPassword.placeholder = "Password";
  inputPassword.required = true;

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "login_btn";
  submitButton.value = "Login";
  submitButton.addEventListener("click", (event) => checkLogin(event));

  form.append(
    image,
    heading,
    labelUsername,
    inputUsername,
    labelPassword,
    inputPassword,
    submitButton
  );

  loginContainer.appendChild(form);
  document.body.appendChild(loginContainer);

  const checkLogin = (event) => {
    event.preventDefault();

    const username = document.getElementById("userName").value;
    const userPw = document.getElementById("userPw").value;

    if (username !== "" && userPw !== "") {
      window.location.href = "./HTML/main.html";
    } else {
      alert(
        "Inserisci un username e una password qualsiasi per poter accedere!."
      );
    }
  };
};

formSignIn();
