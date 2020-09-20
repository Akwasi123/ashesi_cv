/**'
 * @author Akwasi Appiadjei Asante-Krobea
 */

//using the DOM to manipulate the form
const myvariable = document.getElementById('name');
const form = document.getElementById('_form');

/**
 * 
 * @param {*} email 
 */
function validateEmail(mail){
    let e_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.value.match(e_format) || mail.value.match(/\S+@\S+\.\S+/)){
        return true;
    }
    else{
        return false;
    }
}

/**
 * 
 * @param {*} names 
 */
function validateName(names){
    let name_format = /^[a-z-A-Z ]+$/;
    if(names.value.match(name_format)){
        return true;
    }
    else{
        return false;
    }
}

/**
 * @function onSubmit
 * connects to listener
 */
function onSubmit(event){
    event.preventDefault();

    //assign the specific elements of the form array to variables
    const fname = document.getElementById("first");
    const mname = document.getElementById("middle");
    const lname = document.getElementById("last");
    const gender = form.elements["gender"].selectedIndex;
    const phn = form.elements["phone"].value;
    const email = document.getElementById("email");
    const address = form.elements["address"].value;

    
    const phnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    err = document.getElementsByClassName("nerror-msg");
    for(i = 0; i < err.length; i++){
        let state = err[i];
        switch(state){
            //case to check if the name has a correct format
            case err[0]:
                if(!validateName(fname)){ 
                    document.getElementById("f-error-msg").innerHTML="*Please enter first name";
                    document.getElementById("first").style.borderColor = "red";
                }
                else{
                    document.getElementById("first").style.borderColor = "black";
                    document.getElementById("f-error-msg").innerHTML="";
                }

            //case to check if the name has a correct format
            case err[1]:
                if(!validateName(mname)){ 
                    document.getElementById("m-error-msg").innerHTML="";
                }
                else{
                    document.getElementById("m-error-msg").innerHTML="";
                }
                break;
            
            //case to check if the name has a correct format
            case err[2]:
                if(!validateName(lname)){ 
                    document.getElementById("l-error-msg").innerHTML="*Please enter last name";
                    document.getElementById("last").style.borderColor = "red";
                }
                else{
                    document.getElementById("last").style.borderColor = "black";
                    document.getElementById("l-error-msg").innerHTML="";
                }
                break;
            
            //case to check if the name has a correct format    
            case err[3]:
                if(!validateEmail(email)){
                    document.getElementById("e-error-msg").innerHTML="*Please enter valid email";
                    document.getElementById("email").style.borderColor = "red";
                }
                else{
                    document.getElementById("email").style.borderColor = "black";
                    document.getElementById("e-error-msg").innerHTML="";
                }
                break;
        }
    }

}

//adds event listener to the form
form.addEventListener('submit', onSubmit)

