/**
 * @author Akwasi Appiadjei Asante-Krobea
 */

//accessing the form element from the DOM
const form = document.getElementById("_form");


/**
 * function to validate input on Submission
 * @param {*} e 
 */
function onSubmit(e){
    //prevents the page from erasing the data when form is submitted
    e.preventDefault();

    //creating variables for the form fields and setting up local storage for each value
    const fname = document.getElementById("first");
    localStorage.setItem("first", fname.value);

    const mname = document.getElementById("middle");
    localStorage.setItem("middle", mname.value);

    const lname = document.getElementById("last");
    localStorage.setItem("last", lname.value);

    const gender = document.getElementById("gender");
    localStorage.setItem("gender", gender.value);

    const phoneNumber = document.getElementById("phone");
    localStorage.setItem("phone", phoneNumber.value);

    const email = document.getElementById("email");
    localStorage.setItem("email", email.value);

    const address = document.getElementById("address");
    localStorage.setItem("address", address.value);
    
    const name_format = /^[a-zA-Z].*[\s\.]*$/;
    const number_format = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}/;
    const email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //checking if name format is correct
    if(!name_format.test(fname.value)){
        alert("Enter first name");
        return false;
    }

    //checking if name format is correct
    if(!name_format.test(lname.value)){
        alert("Enter last name");
        return false;
    }

    //checking for correct phone number format
    if(!number_format.test(phoneNumber.value)){
        alert("Enter a valid Phone Number");
        return false;
    }

    //checking for correct email format
    if(!email_format.test(email.value)){
        alert("Enter a valid email address.");
        return false;
    } 
    
    //go to cv page once inputs have been validated
    else{
        location.href = "cv.html";
    }
}

//adds an event listner to the form
form.addEventListener("submit", onSubmit);