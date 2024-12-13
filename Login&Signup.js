// Selecting the DOM element with the class 'wrapper'
const wrapper = document.querySelector(".wrapper");

// Selecting the DOM element with the class 'register-link' (the link for registration)
const registerLink = document.querySelector(".register-link");

// Selecting the DOM element with the class 'login-link' (the link for login)
const loginLink = document.querySelector(".login-link");

// Event listener for when the 'registerLink' is clicked
// This will add the 'active' class to the 'wrapper' element, triggering the registration form view
registerLink.onclick = () => {
  wrapper.classList.add("active"); // Adds 'active' class to show the register form
};

// Event listener for when the 'loginLink' is clicked
// This will remove the 'active' class from the 'wrapper' element, triggering the login form view
loginLink.onclick = () => {
  wrapper.classList.remove("active"); // Removes 'active' class to show the login form
};
