const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value !== confirm_password.value) {
        password.classList.add("password_error");
        confirm_password.classList.add("password_error");
    } else {
        form.submit()
    }
})
