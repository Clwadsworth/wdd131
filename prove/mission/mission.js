let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#1a1a1a';
        document.querySelector('main').style.backgroundColor = "#2d2d2d";
        document.querySelector('main').style.color = '#e0e0e0';
        document.querySelector('h2').style.color = '#7ab8d9';
        document.querySelector('hr').style.borderTopColor = '#e0e0e0';
        logo.src = 'images/byui-logo-white.png';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#f0f0f0';
        document.querySelector('main').style.backgroundColor = 'white';
        document.querySelector('main').style.color = 'black';
        document.querySelector('h2').style.color = '#006eb6';
        document.querySelector('hr').style.borderTopColor = 'e0e0e0';
        logo.src = 'images/byui-logo-blue.png';
    }
}           
                    