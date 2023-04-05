function valfirstName() {
    let firstName = document.querySelector("#firstname");
    console.log("first_name is blurred");
    let regex = /^([a-zA-Z][a-z\sA-z]+[a-zA-Z]+)$/;
    let fname = firstName.value;
    console.log(regex);
    console.log(fname);
    if(regex.test(fname)) {
        console.log("it is matched");
    }
    else {
        alert("first name is not in correct format. expected string");
    }
}

function vallastName() {
    let lastName = document.querySelector("#lastname");
    console.log("last_name is blurred");
    let regex = /^([a-zA-Z][a-z\sA-z]+[a-zA-Z]+)$/;
    let lname = lastName.value;
    console.log(regex);
    console.log(lname);
    if(regex.test(lname)) {
        console.log("it is matched");
    }
    else {
        alert("last name is not in correct format. expected string");
    }
}

function valEmail() {
    let email = document.querySelector("#email");
    console.log("email is blurred");
    let regex = /^(([a-zA-Z0-9]+[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~])+@([A-Za-z]+[.][A-Za-z]+([\.-]?\w+)*[A-Za-z]+))$/;
    let mail = email.value;
    console.log(regex);
    console.log(mail);
    if (regex.test(mail)) {
        console.log("it is matched");
    }
    else {
        alert("email is not in correct format please correct it.");
    }
}

var mobileBool = false;
function mobileNumberValidation() {
    let mobile = document.querySelector("#phone");
    console.log("mobile is blurred");
    let regex = /^(\d{3}\-\d{3}\-\d{4})$/;
    let regex2 = /^(\d{6}\-\d{4})$/;
    let regex3 = /^(\(\d{3}\)\-\d{3}\-\d{4})$/;
    let phone = mobile.value;
    console.log(regex);
    console.log(phone);
    if (regex.test(phone) || regex2.test(phone) || regex3.test(phone)) {
        console.log("it is matched");
        mobileBool = true;
    }
    else {
        alert("phone is not in correct format please correct it.");
        mobileBool = false;
    }
}

function checkLengthAddress() {
    let textArea = document.querySelector("#query");
    console.log(textArea.value.length);
    let para = document.querySelector(".add_para");
    let max_length = 40;
    para.innerHTML = "<p>Character Length: " + textArea.value.length + " / " + max_length + "</p>";
    if (textArea.value.length > max_length) {
        alert("Max number of characters exceeded.");
    }
}