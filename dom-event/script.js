function validateForm() {

    let name = document.getElementById("inputName");
    let pName = document.getElementById("errorName")
    let email = document.getElementById("inputEmail");
    let pEmail = document.getElementById("errorEmail")
    let phone = document.getElementById("inputPhone");
    let pPhone = document.getElementById("errorPhone")
    let subject = document.getElementById("inputSubject");
    let pSubject = document.getElementById("errorSubject")
    let message = document.getElementById("inputMessage");
    let pMessage = document.getElementById("errorMessage");
    let check = true;

    if (name.value == "") {
        name.classList.add('input-error');
        pName.classList.add('text-error');
        check = false;
    } else {
        name.classList.remove('input-error');
        pName.classList.remove('text-error');
    }

    if (email.value == "") {
        email.classList.add('input-error');
        pEmail.classList.add('text-error');
        check = false;
    } else {
        email.classList.remove('input-error');
        pEmail.classList.remove('text-error');
    }

    if (phone.value == "") {
        phone.classList.add('input-error');
        pPhone.classList.add('text-error');
        check = false;
    } else {
        phone.classList.remove('input-error');
        pPhone.classList.remove('text-error');
    }

    if (subject.value == "") {
        subject.classList.add('input-error');
        pSubject.classList.add('text-error');
        check = false;
    } else {
        subject.classList.remove('input-error');
        pSubject.classList.remove('text-error');
    }

    if (message.value == "") {   
        message.classList.add('error');
        pMessage.classList.add('text-error');
        check = false;
    } else {
        message.classList.remove('error');
        pMessage.classList.remove('text-error');
    }
    if (check) {
        alert("Send fail!");
        return true;
    }
    else {
        alert("Send successful!");
        return false;
    }
}

function checkInput() {
    let inputNumber = document.getElementById("inputField");
    let number = inputNumber.replace(/ /g, '');
    if (!isNaN(number) && number !== '') {
        let numberr = parseFloat(number);
        alert("The number is: " + numberr);
    } else {
        alert("This is not a number!");
    }
}