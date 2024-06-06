const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll(".section");


navLinks.forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault(); // Prevent the default link behavior
        const targetId = this.getAttribute("href");// Get the target section's ID from the link's href attribute
        const targetSection = document.querySelector(targetId); // Find the corresponding section
        // console.log(`Scrolling to: ${targetId}`); 
        // console.log(`Target Section: ${targetSection}`);

        // Smooth scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });

        // Set 'aria-current' attribute for navigation links
        navLinks.forEach(link => { link.removeAttribute('aria-current')});
        this.setAttribute('aria-current', 'page');
    }); 
});

// Function to check if a section is in view
function isInViewport(element) {
    
    const rect = element.getBoundingClientRect();
    const inView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    return inView;
}


function handleScroll() {

    const animation1 = document.querySelectorAll('.animate-service-1');
    const animation2 = document.querySelectorAll('.animate-service-2');
    const animation3 = document.querySelectorAll('.animate-service-3');

    if(isInViewport(sections[1])) {
        animation1.forEach(animate => animate.classList.add("animate__animated","animate__fadeInTopLeft", "animate__fast"))
        animation2.forEach(animate => animate.classList.add("animate__animated","animate__fadeInBottomLeft", "animate__fast"))
        animation3.forEach(animate => animate.classList.add("animate__animated","animate__fadeInRight", "animate__fast"))
    }

    const galleryAnimations = document.querySelectorAll('.gallery-anim');
    if(isInViewport(sections[2])) {
        galleryAnimations.forEach(anim => anim.classList.add("animate__animated", "animate__fadeInLeft"))
        galleryAnimations[2].classList.add("animate__faster");
        galleryAnimations[1].classList.add("animate__fast")
    }
    // let isInFirstSection = true;
    sections.forEach((section, index) => {
        // Check if section is in view
        if (isInViewport(section)) {
            // Remove 'aria-current' attribute from all links
            navLinks.forEach(link => link.removeAttribute('aria-current'));
            // Set 'aria-current' attribute for the link corresponding to the current section
            navLinks[index].setAttribute('aria-current', 'page');
        } 
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);