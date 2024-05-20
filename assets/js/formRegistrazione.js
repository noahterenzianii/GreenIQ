const form = document.forms.form;
const button = document.querySelector("#invio");
let bool = bool1 = bool2 = bool3 = bool4 = bool5 = bool6 = false;
button.onclick = () =>{
    event.preventDefault();
    window.location.assign('index.html');
}
updateButton = () => {
    button.disabled = !(bool && bool1 && bool2 && bool3 && bool4 && bool5 && bool6);
}
updateButton();
document.body.querySelector("#nome").onchange = () => {
    if ((/^[a-zA-Z]{1}[a-z ]+$/.test(form.nome.value))) {
        form.querySelector("#nome").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool = true;
    }
    else {
        form.querySelector("#nome").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool = false;
    }
    updateButton();
}

document.body.querySelector("#cognome").onchange = () => {
    if ((/^[a-zA-Z]{1}[a-z ]+$/.test(form.cognome.value))) {
        form.querySelector("#cognome").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool1 = true;
    }
    else {
        form.querySelector("#cognome").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool1 = false;
    }
    updateButton();
}

document.body.querySelector("#username").onchange = () => {
    if ((/^[a-zA-Z0-9]+$/.test(form.username.value))) {
        form.querySelector("#username").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool2 = true;
    }
    else {
        form.querySelector("#username").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool2 = false;
    }
    updateButton();
}

document.body.querySelector("#telefono").onchange = () => {
    if ((/^3\d{9}$/.test(form.telefono.value))) {
        form.querySelector("#telefono").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool3 = true;
    }
    else {
        form.querySelector("#telefono").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool3 = false;
    }
    updateButton();
}

document.body.querySelector("#email").onchange = () => {
    if ((/^.+@.+\..+$/.test(form.email.value))) {
        form.querySelector("#email").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool4 = true;
    }
    else {
        form.querySelector("#email").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool4 = false;
    }
    updateButton();
}

document.body.querySelector("#password").onchange = () => {
    if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password.value))) {
        form.querySelector("#password").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool5 = true;
    }
    else {
        form.querySelector("#password").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool5 = false;
    }
    updateButton();
}

document.body.querySelector("#confermaPassword").onchange = () => {
    if (form.password.value === form.confermaPassword.value) {
        form.querySelector("#confermaPassword").setAttribute("class", "btn btn-lg btn-outline-success col-6");
        bool6 = true;
    }
    else {
        form.querySelector("#confermaPassword").setAttribute("class", "btn btn-lg btn-outline-danger col-6");
        bool6 = false;
    }
    updateButton();
}