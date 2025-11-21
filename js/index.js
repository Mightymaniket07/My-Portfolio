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
        
        // Initialize ScrollReveal with more dynamic effects
        ScrollReveal().reveal('.hero-content, .hero-img', { 
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            rotate: { x: 20 }
        });
        
        ScrollReveal().reveal('.section-title', { 
            delay: 200,
            origin: 'top',
            distance: '30px',
            duration: 800,
            scale: 0.95
        });
        
        ScrollReveal().reveal('.skill-card, .project-card, .link-card', { 
            delay: 300,
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            interval: 200,
            easing: 'ease-in-out'
        });
        
        // Enhanced timeline animations
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkTimeline() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                
                if (itemTop < triggerBottom) {
                    item.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkTimeline);
        checkTimeline(); // Check on load
        
        // Anime.js animations with more effects
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.target,
                    color: '#00a8ff',
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: e.target.querySelector('i'),
                    translateY: -5,
                    duration: 300,
                    easing: 'easeOutBack'
                });
            });
            
            link.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.target,
                    color: '#f5f6fa',
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: e.target.querySelector('i'),
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutBack'
                });
            });
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
        
        // Popmotion animations for buttons with spring effects
        document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom').forEach(button => {
            button.addEventListener('mouseenter', () => {
                popmotion.animate({
                    from: { 
                        boxShadow: button.classList.contains('btn-primary-custom') ? '0 0 10px rgba(0, 168, 255, 0.8)' : '0 0 10px rgba(75, 207, 250, 0.8)',
                        scale: 1
                    },
                    to: { 
                        boxShadow: button.classList.contains('btn-primary-custom') ? '0 0 20px rgba(0, 168, 255, 0.6)' : '0 0 20px rgba(75, 207, 250, 0.6)',
                        scale: 1.05
                    },
                    duration: 300,
                    onUpdate: (latest) => {
                        button.style.boxShadow = latest.boxShadow;
                        button.style.transform = `translateY(-3px) scale(${latest.scale})`;
                    }
                });
            });
            
            button.addEventListener('mouseleave', () => {
                popmotion.animate({
                    from: { 
                        boxShadow: button.classList.contains('btn-primary-custom') ? '0 0 20px rgba(0, 168, 255, 0.6)' : '0 0 20px rgba(75, 207, 250, 0.6)',
                        scale: 1.05
                    },
                    to: { 
                        boxShadow: button.classList.contains('btn-primary-custom') ? '0 0 10px rgba(0, 168, 255, 0.8)' : '0 0 10px rgba(75, 207, 250, 0.8)',
                        scale: 1
                    },
                    duration: 300,
                    onUpdate: (latest) => {
                        button.style.boxShadow = latest.boxShadow;
                        button.style.transform = `translateY(0) scale(${latest.scale})`;
                    }
                });
            });
        });
        
        // FIXED: Proper smooth scrolling for navbar links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate the target position with offset for fixed navbar
                    const targetPosition = targetElement.offsetTop - 70;
                    
                    // Use native smooth scrolling
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add ripple effect to buttons
        document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom').forEach(button => {
            button.addEventListener('click', function(e) {
                let x = e.clientX - e.target.getBoundingClientRect().left;
                let y = e.clientY - e.target.getBoundingClientRect().top;
                
                let ripple = document.createElement('span');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple-effect');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
            });
        });
        
        // Animate about section cards
        ScrollReveal().reveal('.about-card', {
            delay: 200,
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            interval: 200,
            easing: 'ease-in-out'
        });