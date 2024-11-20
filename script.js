function toggleMenu() {
    const navbar = document.querySelector('nav ul');
    navbar.classList.toggle('active');
    document.getElementById("menu-icon").style.display = "none";
}

function changeContent(section) {
    if (section === "contact") {
        fetch('contact.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById("main-content").innerHTML = html;
            })
            .catch(error => {
                console.error("Error loading contact form:", error);
                document.getElementById("main-content").innerHTML = `<p>Failed to load contact form. Please try again later.</p>`;
            });
    } else {
        const content = {
            about: 'About Us content displayed here.',
            portfolio: 'Project Portfolio content displayed here.',
            testimonials: 'Testimonials content displayed here.',
            insights: 'Insights content displayed here.',
            pricing: 'Pricing content displayed here.'
        };

        document.getElementById("main-content").innerHTML = `<section id="${section}">
            <h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            <p>${content[section]}</p>
        </section>`;
    }
    if (window.matchMedia("(max-width: 768px)").matches) { document.getElementById("menu-icon").style.display = "block";}
    const navbar = document.querySelector('nav ul');
    navbar.classList.remove('active');
}

async function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('https://zja72hqpac.execute-api.us-east-1.amazonaws.com/sedmaildev/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    alert(result.message || 'Ceva nu a funcționat.');
}

