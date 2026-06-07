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
        guestContainer.hidden = true;
        idStd.required = true;
        idGst.required = false;
    } else if (value === 'guest') {
        guestContainer.hidden = false;
        studentContainer.hidden = true;
        idGst.required = true;
        idStd.required = false;
    } else {
        studentContainer.hidden = true;
        idStd.required = false;
        guestContainer.hidden = true;
        idGst.required = false;
    }
}

idForm.addEventListener("change", updateIdField);
updateIdField();

function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(value);
    chosen.setHours(0, 0, 0, 0);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const idInform = form.idForm.value.trim();
    const eventDate = form.eventDate.value;
    const studentId = idStd.value.trim();
    const guestCode = idGst.value.trim();

        if (idInform === "") {
            output.textContent = "Please choose if you are a student or a guest.";
            return;
        }
        
        if (idInform === "student" && studentId.length < 9) {
            output.textContent = "Your Student ID must be 9 digits.";
            return;
        }

        if (idInform === "guest" && guestCode !== "EVENT131") {
            output.textContent = "Access code is incorrect. Please enter a valid access code."
            return;
        }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    let ticketIdLine = "";
    if (idInform === "student") {
        ticketIdLine = `<p>Student ID: ${studentId}</p>`
    } else {
        ticketIdLine = `<p>Access Code: ${guestCode}</p>`
    }

    output.innerHTML = `
        <h2>Ticket Created!<h2>
        <p>${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Confirmed: ${eventDate}</p>
        <p>Type: ${idInform}</p>
        ${ticketIdLine}
    `;

    form.reset();
    updateIdField();
});