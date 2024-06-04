const menu = document.getElementById("menu");
const button = document.getElementById("menu-btn");

button.addEventListener('click', navToggle);

function navToggle() {
    button.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => link.addEventListener('click', navToggle));

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll(".section");
// const result1 = navLinks.forEach(link => console.log(link.getAttribute('href')));
// const result2 = sections.forEach(section => console.log(section.id))
// if(result1 === result2 ) {
//     console.log(true);
// }

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
    // console.log(`Element ${element.id} in viewport: ${inView}`);
    return inView;
}


function handleScroll() {
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

  // If no section is in view, set 'aria-current' attribute for the first link
    // if (!isInFirstSection) {
    //     navLinks.removeAttribute('aria-current', 'page');
    // }
}
// Add scroll event listener
window.addEventListener('scroll', handleScroll);

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
    // Deactive all tabs
    tabs.forEach(tab => {
        tab.children[0].classList.remove(
            'border-b-4',
            'border-darkGrayishLimeGreen',
        );
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    // activate a new tab and panel based on the target
    e.target.classList.add('border-b-4','border-darkGrayishLimeGreen');
    const classString = e.target.getAttribute('data-target')
    document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

