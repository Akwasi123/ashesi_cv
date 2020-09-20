/**
 * @author Akwasi Appiadjei Asante-Krobea
 */

firstName = localStorage.getItem("first");
middleName = localStorage.getItem("middle");
lastName = localStorage.getItem("last");
gender = localStorage.getItem("gender");
phoneNumber = localStorage.getItem("phone");
email = localStorage.getItem("email");
address = localStorage.getItem("address");

document.getElementById("name").innerHTML = firstName +" "+middleName+" "+lastName;
document.getElementById("address").innerHTML = address;
document.getElementById("phoneNumber").innerHTML = phoneNumber;
document.getElementById("email").innerHTML = email;
document.getElementById("gender").innerHTML = gender;