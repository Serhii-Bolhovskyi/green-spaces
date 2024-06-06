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

