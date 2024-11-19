function toggleMenu() {
    const navbar = document.querySelector('nav ul');
    navbar.classList.toggle('active');
	document.getElementById("menu-icon").style.display = "none";
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

    // Actualizeaza
    document.getElementById("main-content").innerHTML = `<section id="${section}">
        <h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>
        <p>${content[section]}</p>
    </section>`;
	document.getElementById("menu-icon").style.display = "block";
   
    const navbar = document.querySelector('nav ul');
    navbar.classList.remove('active');
	
}
