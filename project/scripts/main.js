// --- 1. FOOTER DATES ---
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// --- 2. MOBILE MENU ---
const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

// --- 3. DYNAMIC SERVICES GENERATION ---
// Rubric: Objects and Arrays
const logisticsServices = [
    {
        title: "Ocean Freight",
        description: "Cost-effective shipping for large-volume cargo with full container load (FCL) and less than container load (LCL) options.",
        icon: "🚢"
    },
    {
        title: "Air Freight",
        description: "Expedited shipping for time-sensitive cargo. We ensure your goods reach their destination anywhere in the world within days.",
        icon: "✈️"
    },
    {
        title: "Warehousing & Distribution",
        description: "Secure storage facilities strategically located near major ports, complete with inventory management and final-mile delivery.",
        icon: "🏭"
    },
    {
        title: "Customs Brokerage",
        description: "Navigate complex international trade regulations effortlessly. Our experts handle all documentation and clearance procedures.",
        icon: "📝"
    }
];

const servicesContainer = document.getElementById("services-container");

// Rubric: Conditional Branching & Array Methods
// We check if the container exists so this script doesn't throw errors on the Home or Contact pages!
if (servicesContainer) {
    // Rubric: Array Method (.forEach)
    logisticsServices.forEach(service => {
        let card = document.createElement("div");
        card.className = "service-card";
        
        // Rubric: Template Literals
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        servicesContainer.appendChild(card);
    });
}

// --- 4. LOCAL STORAGE & FORM HANDLING ---
const quoteForm = document.getElementById("quote-form");
const welcomeMessage = document.getElementById("welcome-message");

// A. Handle Form Submission
if (quoteForm) {
    quoteForm.addEventListener("submit", function() {
        const userName = document.getElementById("name").value;
        let quoteCount = localStorage.getItem("pioneer_quotes") || 0;
        
        // Increment the quote counter
        quoteCount++;
        
        // Save to localStorage
        localStorage.setItem("pioneer_name", userName);
        localStorage.setItem("pioneer_quotes", quoteCount);
    });
}

// B. Conditional Branching & DOM Manipulation (Home Page Greeting)
if (welcomeMessage) {
    const storedName = localStorage.getItem("pioneer_name");
    const storedQuotes = localStorage.getItem("pioneer_quotes");

    welcomeMessage.style.display = "block"; // Make the banner visible

    if (storedName && storedQuotes) {
        // If they have visited and submitted a quote before
        welcomeMessage.innerHTML = `Welcome back, <strong>${storedName}</strong>! You have requested <strong>${storedQuotes}</strong> quote(s) with us.`;
    } else {
        // If they are a brand new visitor
        welcomeMessage.innerHTML = `Welcome to Pioneer Global Logistics! Request your first quote today to streamline your supply chain.`;
    }
}