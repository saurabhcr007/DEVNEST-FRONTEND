export default function UseAuth() {
  return {
    Login: (email, password) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user.email === email && user.password === password) {
        alert("Successfully Logged in");
      } else {
        alert("Email or Password does not match");
      }
    },
    Signup: (email, password) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
    },
  };
}
