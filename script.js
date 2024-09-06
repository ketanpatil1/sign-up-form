const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const submit_btn = document.querySelector("button");

submit_btn.addEventListener("submit", () => {
    if (password.value !== confirm_password.value) {
        password.classList.add("password_error");
        confirm_password.classList.add("password_error");
    }
})
