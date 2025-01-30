window.addEventListener('scroll', function() {
    const textElements = document.querySelectorAll('h1, h2, h3, p, li, img'); 

    textElements.forEach(element => {
        const rect = element.getBoundingClientRect(); 

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
        }
    });

    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    if (scrollTopBtn) {  
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1'; 
            scrollTopBtn.style.visibility = 'visible'; 
        } else {
            scrollTopBtn.style.opacity = '0'; 
            scrollTopBtn.style.visibility = 'hidden'; 
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollTopBtn.style.opacity = '1'; 
            scrollTopBtn.style.visibility = 'visible';
        }
    }
});

const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) { 
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}


