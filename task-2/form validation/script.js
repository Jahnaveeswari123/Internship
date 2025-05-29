document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMsg = document.getElementById('errorMsg');

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        errorMsg.textContent = "All fields are required.";
        errorMsg.style.color = "red";
    } else if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email.";
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "Form submitted successfully!";
        errorMsg.style.color = "green";
        this.reset();
    }
});