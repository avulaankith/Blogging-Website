const togglePass = document.querySelector("#togglePass");
const password = document.querySelector("#password");

togglePass.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    valSubmition();
});

const firstName = document.querySelector("#first_name");
firstName.addEventListener('blur', () => {
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
})

function valfirstName() {
    let firstName = document.querySelector("#first_name");
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

const lastName = document.querySelector("#last_name");
lastName.addEventListener('blur', () => {
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
})

function vallastName() {
    let lastName = document.querySelector("#last_name");
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

const email = document.querySelector("#email");
email.addEventListener('blur', () => {
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
})

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

const pass = document.querySelector("#password");
pass.addEventListener('blur', () => {
    console.log("password is blurred");
    let regex = /^(([A-Z][a-zA-Z0-9]+[0-9!#$%@&'*+-/=?^_`{|}~]+[a-zA-Z0-9!#$%@&'*+-/=?^_`{|}~]+))$/;
    let pswd = pass.value;
    let len = pswd.length;
    console.log(regex);
    console.log(pswd);
    if (len < 8) {
        alert("password length is less than 8 characters");
    }
    if (regex.test(pswd)) {
        console.log("it is matched");
    }
    else {
        alert("password is not in correct format please correct it.");
    }
})

function valPassword() {
    let pass = document.querySelector("#password");
    console.log("password is blurred");
    let regex = /^(([A-Z][a-zA-Z0-9]+[0-9!#$%@&'*+-/=?^_`{|}~]+[a-zA-Z0-9!#$%@&'*+-/=?^_`{|}~]+))$/;
    let pswd = pass.value;
    let len = pswd.length;
    console.log(regex);
    console.log(pswd);
    if (len <= 8) {
        alert("password length is less than 8 characters");
    }
    if (regex.test(pswd)) {
        console.log("it is matched");
    }
    else {
        alert("password is not in correct format please correct it.");
    }
}

// let mobile = document.querySelector("#phone");
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

function addressValidation() {
    let address = document.querySelector("#address");
    console.log("address is blurred");
    let regex = /^((\d{1,10}\s[ a-zA-Z\-\’]+)|([ a-zA-Z\-\’]+)|(\d{1,10}[ a-zA-Z\-\’]+)),\s\d{2,8},\s[ a-zA-Z\-\’]+,\s[ a-zA-Z\-\’]+,\s\d{5}$/;
    let addr = address.value;
    console.log(regex);
    console.log(addr);
    if (regex.test(addr)) {
        console.log("it is matched");
    }
    else {
        alert("address is not in correct format please correct it.");
    }
}

// function option() {
//     var element = document.getElementById("type");
//     var output = element.value;
//     console.log(output);
// }

function changeOptions() {
    let element = document.getElementById("type").value;
    let items;
    let rooms = document.querySelector("#bedroom");

    if (element == "Economy") {
        items = ["one", "two"];
    }
    else if (element == "Luxury") {
        items = ["oneL", "twoL", "threeL"];
    }
    else if (element == "Premium") {
        items = ["oneP", "twoP", "threeP","fourP"];
    }
    let str = "";
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    rooms.innerHTML = str;
}

function RchangeOptions() {
    let element = document.querySelector('input[name="type"]:checked').value;
    // let element = value;
    console.log(element);
    let items;
    let rooms = document.querySelector("#bedroom");

    if (element == "Economy") {
        items = ["one bedroom", "two bedroom"];
    }
    else if (element == "Luxury") {
        items = ["one bedroom with pool access", "two bedroom with pool access", "three bedroom with pool access", "four bedroom with pool access"];
    }
    else if (element == "Premium") {
        items = ["two bedroom with pool, gym and bar access", "three bedroom with pool, gym and bar access","four bedroom with pool, gym and bar access","five bedroom with pool, gym and bar access","six bedroom with pool, gym and bar access"];
    }
    
    let str = "";
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    rooms.innerHTML = str;
}

var checkinDateBool = false;
function valcheckinDate() {
    let checkinDate = document.querySelector("#checkin_date");
    let date = checkinDate.value;
    let regex = /^((0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4})$/;
    let regex2 = /^((0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])[\-]\d{4})$/;
    if (date.match(regex)) {
        let op = date.split("/");
        // let op2 = date.split("-");
        let datearray = [];
        if (op.length > 1) {
            datearray = date.split("/");
        }
        let month = parseInt(datearray[0]);
        let day = parseInt(datearray[1]);
        let year = parseInt(datearray[2]);

        let lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month != 2) {
            if (day > lastDayList[month - 1]) {
                alert("you have entered day of the date wrong");
                checkinDateBool = false;
            }
        }
        else if (month == 2) {
            let leapYear = false;
            if (((!(year % 4) && year % 100) || !(year % 400))) {
                leapYear = true;
            }
            if (leapYear == false && day > 28) {
                alert("you have entered day of the day incorrectly");
                checkinDateBool = false;
            }
            if (leapYear == true && day > 29) {
                alert("you have entered day of the day incorrectly");
                checkinDateBool = false;
            }
        }
        console.log(regex);
        console.log(date);
        checkinDateBool = true;
        console.log("Date is matched");
    }
    else if (date.match(regex2)) {
        let op = date.split("-");
        // let op2 = date.split("-");
        let datearray = [];
        if (op.length > 1) {
            datearray = date.split("-");
        }
        let month = parseInt(datearray[0]);
        let day = parseInt(datearray[1]);
        let year = parseInt(datearray[2]);

        let lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month != 2) {
            if (day > lastDayList[month - 1]) {
                alert("you have entered day of the date wrong");
                checkinDateBool = false;
            }
        }
        else if (month == 2) {
            let leapYear = false;
            if (((!(year % 4) && year % 100) || !(year % 400))) {
                leapYear = true;
            }
            if (leapYear == false && day > 28) {
                alert("you have entered day of the day incorrectly");
                checkinDateBool = false;
            }
            if (leapYear == true && day > 29) {
                alert("you have entered day of the day incorrectly");
                checkinDateBool = false;
            }
        }
        console.log(regex2);
        console.log(date);
        checkinDateBool = true;
        console.log("Date is matched");
    }
    else {
        alert("you have entered day of the day incorrectly");
    }
}
var checkoutDateBool = false;
function valcheckoutDate() {
    let checkoutDate = document.querySelector("#checkout_date");
    let date = checkoutDate.value;
    let regex = /^((0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4})$/;
    let regex2 = /^((0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])[\-]\d{4})$/;
    if (date.match(regex)) {
        let op = date.split("/");
        // let op2 = date.split("-");
        let datearray = [];
        if (op.length > 1) {
            datearray = date.split("/");
        }
        let month = parseInt(datearray[0]);
        let day = parseInt(datearray[1]);
        let year = parseInt(datearray[2]);

        let lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month != 2) {
            if (day > lastDayList[month - 1]) {
                alert("you have entered day of the date wrong");
                checkoutDateBool = false;
            }
        }
        else if (month == 2) {
            let leapYear = false;
            if (((!(year % 4) && year % 100) || !(year % 400))) {
                leapYear = true;
            }
            if (leapYear == false && day > 28) {
                alert("you have entered day of the day incorrectly");
                checkoutDateBool = false;
            }
            if (leapYear == true && day > 29) {
                alert("you have entered day of the day incorrectly");
                checkoutDateBool = false;
            }
        }
        console.log(regex);
        console.log(date);
        checkoutDateBool = true;
        console.log("Date is matched");
    }
    else if (date.match(regex2)) {
        let op = date.split("-");
        // let op2 = date.split("-");
        let datearray = [];
        if (op.length > 1) {
            datearray = date.split("-");
        }
        let month = parseInt(datearray[0]);
        let day = parseInt(datearray[1]);
        let year = parseInt(datearray[2]);

        let lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month != 2) {
            if (day > lastDayList[month - 1]) {
                alert("you have entered day of the date wrong");
                checkoutDateBool = false;
            }
        }
        else if (month == 2) {
            let leapYear = false;
            if (((!(year % 4) && year % 100) || !(year % 400))) {
                leapYear = true;
            }
            if (leapYear == false && day > 28) {
                alert("you have entered day of the day incorrectly");
                checkoutDateBool = false;
            }
            if (leapYear == true && day > 29) {
                alert("you have entered day of the day incorrectly");
                checkoutDateBool = false;
            }
        }
        console.log(regex2);
        console.log(date);
        checkoutDateBool = true;
        console.log("Date is matched");
    }
    else {
        alert("you have entered day of the day incorrectly");
    }
}

// const textArea = document.querySelector("#feedback");

function checkLengthAddress() {
    let textArea = document.querySelector("#feedback");
    console.log(textArea.value.length);
    let para = document.querySelector("#add_para");
    let max_length = 200;
    para.innerHTML = "<p>Character Length: " + textArea.value.length + " / " + max_length + "</p>";
    if (textArea.value.length > max_length) {
        alert("Max number of characters exceeded.");
    }
}
// checkLengthAddress();

function valSubmition() {
    let firstName = document.querySelector("#first_name").value;
    let lastName = document.querySelector("#last_name").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#phone").value;
    let pass = document.querySelector("#password").value;
    let address = document.querySelector("#address").value;
    let checkinDate = document.querySelector("#checkin_date").value;
    let checkoutDate = document.querySelector("#checkout_date").value;
    let textArea = document.querySelector("#feedback").value;

    let firstRegex = /^([a-zA-Z][a-z\sA-z]+[a-zA-Z]+)$/;
    let lastRegex = /^([a-zA-Z][a-z\sA-z]+[a-zA-Z]+)$/;
    let emailRegex = /^(([a-zA-Z0-9]+[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~])+@([A-Za-z]+[.][A-Za-z]+([\.-]?\w+)*[A-Za-z]+))$/;
    let passRegex = /^(([A-Z][a-zA-Z0-9]+[0-9!#$%@&'*+-/=?^_`{|}~]+[a-zA-Z0-9!#$%@&'*+-/=?^_`{|}~]+))$/;
    let phoneRegex = /^(\d{3}\-\d{3}\-\d{4})$/;
    let phoneRegex2 = /^(\d{6}\-\d{4})$/;
    let phoneRegex3 = /^(\(\d{3}\)\-\d{3}\-\d{4})$/;
    let addressRegex = /^((\d{1,10}\s[ a-zA-Z\-\’]+)|([ a-zA-Z\-\’]+)|(\d{1,10}\s[ a-zA-Z\-\’]+)),\s\d{2,8},\s[ a-zA-Z\-\’]+,\s[ a-zA-Z\-\’]+,\s\d{5}$/;
    let dateRegex = /^((0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4})$/;
    let dateRegex2 = /^((0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])[\-]\d{4})$/;

    function valDate(checkDateBool) {
        if (checkDateBool) {
            return true;
        }
        else {
            return false;
        }
    }

    if (!firstRegex.test(firstName)) {
        alert("Please enter your first name in correct format: only characters and spaces");
    }
    else if (!lastRegex.test(lastName)) {
        alert("Please enter your last name in correct format: only characters and spaces");
    }
    else if (!emailRegex.test(email)) {
        alert("Please enter your email in correct format: (<>@<>.<>)");
    }
    else if (!passRegex.test(pass)) {
        alert("Please enter password in correct format.\n password should be more than eight characters");
    }
    else if (pass.length <= 8) {
        alert("password should be more than eight characters");
    }
    else if (!mobileBool) {
        console.log(mobileBool);
        alert("Please enter your phone in correct format as 123-456-7890 or 123456-7890 or (123)-456-7890");
    }
    else if (!addressRegex.test(address)) {
        alert("Please enter your address in correct format.");
    }
    else if (!valDate(checkinDateBool)) {
        alert("Please enter your date in correct format.");
    }
    else if (!valDate(checkoutDateBool)) {
        alert("Please enter your date in correct format.");
    }
    else if (textArea.length > 200) {
        alert("Maximum characters exceeded in feedback.");
    }
    else {
        window.alert("Form details verified and submiting form sucessfully.");
        document.querySelector("form").submit();
    }
    
}