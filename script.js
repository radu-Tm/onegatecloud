function toggleMenu() {
    const navbar = document.querySelector('nav ul');
    navbar.classList.toggle('active');
}

function changeContent(section) {
    const content = {
        about: 'About Us content displayed here.',
        portfolio: 'Project Portfolio content displayed here.',
        testimonials: 'Testimonials content displayed here.',
        insights: 'Insights content displayed here.',
        pricing: 'Pricing content displayed here.',
        contact: 'Contact Us content displayed here.'
    };

    // Actualizează conținutul
    document.getElementById("main-content").innerHTML = `<section id="${section}">
        <h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>
        <p>${content[section]}</p>
    </section>`;

    // Închide meniul după ce se face selecția
    const navbar = document.querySelector('nav ul');
    navbar.classList.remove('active');
}
