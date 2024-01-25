function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Simple validation example (you can customize this according to your requirements)
    if (name === "" || email === "") {
        alert("Please fill out all fields");
        return;
    }

    // Additional validation logic (e.g., email format, etc.) can be added here

    // If all validations pass, you can submit the form or perform additional actions
    alert("Form submitted successfully!");
}
