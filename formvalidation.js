const form = document.getElementById("_form");


function onSubmit(e){
    e.preventDefault();

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
    
    const name_format = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const number_format = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!name_format.test(fname.value)){
        alert("Wrong format");
    }

    if(!name_format.test(lname.value)){
        alert("Wrong format for last name");
    }

    if(!email_format.test(email.value)){
        alert("Enter a valid email address.");
    } 

    if(!number_format.test(phoneNumber.value)){
        alert("Enter a valid Phone Number");
    }
    else{
        
        location.href = "cv.html";
    }
}

form.addEventListener("submit", onSubmit);