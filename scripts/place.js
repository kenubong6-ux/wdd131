// --- FOOTER DATES ---
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the last modified date of the document and insert it
const modifiedDate = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${modifiedDate}`;


// --- WIND CHILL CALCULATOR ---
const temperature = 31; 
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.getElementById("windchill");
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        windChillElement.innerHTML = `${windChillValue} °C`;
    } else {
        windChillElement.innerHTML = "N/A";
    }
}

displayWindChill();