const form = document.querySelector("#etForm");
const idForm = document.querySelector("#idForm");
const studentContainer = document.querySelector("#studentContainer");
const guestContainer = document.querySelector("#guestContainer");
const idStd = document.querySelector("#idStd");
const idGst = document.querySelector("#idGst");

function updateIdField() {
    const value = idForm.value;

    if (value === 'student') {
        studentContainer.hidden = false;
        idStd.required = true
    } else if (value === 'guest') {
        guestContainer.hidden = false;
        idGst.required = true;
    } else {
        studentContainer.hidden = true;
        idStd.required = false;
        guestContainer.hidden = true;
        idGst.required = false;
    }
}

idForm.addEventListener("change", updateIdField);
updateIdField;

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const idInform = form.idForm.value.trim();
    const availableDate = form.availableDate.value;
    // const for student and guest?

        if () {
            return;
        }
        
        if () {
            return;
        }

        if () {
            return;
        }

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    
    `;

    form.reset();
    updateIdField();
});