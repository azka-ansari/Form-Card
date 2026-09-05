// Form Validation

document.getElementById("myForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let cnic = document.getElementById("cnic").value;
    let email = document.getElementById("email").value;

    let nameError = document.getElementById("nameError");
    let cnicError = document.getElementById("cnicError");
    let emailError = document.getElementById("emailError");

    nameError.innerHTML = "";
    cnicError.innerHTML = "";
    emailError.innerHTML = "";

    let valid = true;


    // Name Validation

    if (name === "") {

        nameError.innerHTML = "Full Name is required";
        valid = false;

    }


    // CNIC Validation

    if (cnic === "") {

        cnicError.innerHTML = "CNIC is required";
        valid = false;

    }
    else if (cnic.length !== 15) {

        cnicError.innerHTML = "CNIC must be 15 characters";
        valid = false;

    }
    else if (!cnic.includes("-")) {

        cnicError.innerHTML = "Use - in CNIC";
        valid = false;

    }


    // Email Validation

    if (email === "") {

        emailError.innerHTML = "Email is required";
        valid = false;

    }
    else if (!email.includes("@")) {

        emailError.innerHTML = "Email must contain @";
        valid = false;

    }
    else if (!email.includes(".")) {

        emailError.innerHTML = "Email must contain .";
        valid = false;

    }


    // Success

    if (valid) {

        alert("Form submitted successfully!");

        // Name ko modal ke andar add karna

        document.getElementById("userName").innerHTML =
            "<p><span>Student Name:</span> " + name + "</p>";

        document.getElementById("userCnic").innerHTML =
            "<p><span>Student CNIC</span> " + cnic + "</p>";

        document.getElementById("userEmail").innerHTML =
            "<p><span>Student Email:</span> " + email + "</p>";

    }

});


// Open Modal

let modal = document.getElementById("myModal");

let openModal = document.getElementById("openModal");

let closeModal = document.getElementById("closeModal");


openModal.onclick = function () {

    modal.style.display = "flex";

};


// Close Modal

closeModal.onclick = function () {

    modal.style.display = "none";

};