// 1. Get the current year dynamically
const currentYear = new Date().getFullYear();

// Place the year into the span with id="currentyear"
document.getElementById("currentyear").innerHTML = currentYear;

// 2. Get the date the document was last modified
const modifiedDate = document.lastModified;

// Place the formatted string into the paragraph with id="lastModified"
document.getElementById("lastModified").innerHTML = `Last Modification: ${modifiedDate}`;