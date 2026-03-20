// --- FOOTER DATES ---
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const modifiedDate = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${modifiedDate}`;

// --- HAMBURGER MENU ---
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button
hambutton.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation menu
    mainnav.classList.toggle('show');
    // Toggle the 'show' class on the hamburger button (changes symbol to X)
    hambutton.classList.toggle('show');
});