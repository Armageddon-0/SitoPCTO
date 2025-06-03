// Script principale per il sito PCTO

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Animazione timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function checkTimeline() {
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }
    
    // Controlla all'avvio
    checkTimeline();
    
    // Controlla durante lo scroll
    window.addEventListener('scroll', checkTimeline);
    
    // Counter animato
    const counters = document.querySelectorAll('.counter');
    
    function animateCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounter, 50);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    function checkCounters() {
        const counterSection = document.querySelector('.counter-section');
        if (counterSection && isInViewport(counterSection)) {
            animateCounter();
            window.removeEventListener('scroll', checkCounters);
        }
    }
    
    window.addEventListener('scroll', checkCounters);
    
    // Diagramma interattivo per il progetto Arduino
    const diagramComponents = document.querySelectorAll('.diagram-component');
    const diagramTooltip = document.querySelector('.diagram-tooltip');
    
    if (diagramComponents.length > 0 && diagramTooltip) {
        diagramComponents.forEach(component => {
            component.addEventListener('mouseenter', function(e) {
                const tooltipText = this.getAttribute('data-tooltip');
                diagramTooltip.textContent = tooltipText;
                diagramTooltip.style.left = e.pageX + 'px';
                diagramTooltip.style.top = (e.pageY - 40) + 'px';
                diagramTooltip.classList.add('visible');
            });
            
            component.addEventListener('mouseleave', function() {
                diagramTooltip.classList.remove('visible');
            });
        });
    }
    
    // Smooth scroll per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Chiudi il menu mobile se aperto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});
