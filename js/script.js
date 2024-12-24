// Add event listeners for footer buttons
document.getElementById('aboutUsBtn').addEventListener('click', function() {
    loadContent('aboutUs');
});

document.getElementById('helpSupportBtn').addEventListener('click', function() {
    loadContent('helpSupport');
});

document.getElementById('contactUsBtn').addEventListener('click', function() {
    loadContent('contactUs');
});

// Function to dynamically load content
function loadContent(section) {
    const contentDiv = document.getElementById('content');
    
    if (section === 'aboutUs') {
        contentDiv.innerHTML = `
            <h2>About Us</h2>
            <p>Welcome to Jinx Esports, where we bring together passionate gamers and enthusiasts to compete and enjoy the best of esports.</p>
            <img src="resources/images/Aboutf" alt="About Us Image">
        `;
    } else if (section === 'helpSupport') {
        contentDiv.innerHTML = `
            <h2>Help & Support</h2>
            <p>If you have any questions or need assistance, feel free to reach out to our support team at <a href="mailto:jinxesports70@gmail.com">jinxesports70@gmail.com</a>.</p>
            <img src="resources/images/Hel" alt="Help & Support Image">
        `;
    } else if (section === 'contactUs') {
        contentDiv.innerHTML = `
            <h2>Contact Us</h2>
            <p>If you need any information, our team is here to assist you. Reach us at <a href="mailto:jinxesports70@gmail.com">jinxesports70@gmail.com</a>.</p>
            <img src="resources/images/contac" alt="Contact Us Image">
        `;
    }
}
