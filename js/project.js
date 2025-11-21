// Initialize Vanta.js Birds animation
        VANTA.BIRDS({
            el: "#birds-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0c0e1a,
            color1: 0x00a8ff,
            color2: 0x4bcffa,
            birdSize: 1.50,
            wingSpan: 20.00,
            speedLimit: 5.00,
            separation: 50.00,
            alignment: 40.00,
            cohesion: 40.00,
            quantity: 4.00
        });
        
        // Initialize ScrollReveal
        ScrollReveal().reveal('.hero-content', { 
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });
        
        ScrollReveal().reveal('.section-title', { 
            delay: 200,
            origin: 'top',
            distance: '30px',
            duration: 800,
            scale: 0.95
        });
        
        ScrollReveal().reveal('.project-link-card', { 
            delay: 300,
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            interval: 200,
            easing: 'ease-in-out'
        });
        
        // Navbar brand icon animation
        const brandIcon = document.querySelector('.navbar-brand i');
        const navbarBrand = document.querySelector('.navbar-brand');
        navbarBrand.addEventListener('mouseenter', () => {
            anime({
                targets: brandIcon,
                rotate: 360,
                duration: 800,
                easing: 'easeInOutBack'
            });
        });
        
        // Smooth scrolling for navbar links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                anime({
                    targets: document.querySelector(this.getAttribute('href')),
                    scroll: document.querySelector(this.getAttribute('href')).offsetTop - 70,
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            });
        });