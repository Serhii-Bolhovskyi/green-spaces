
# Green Spaces - pet project
![Image](/images/logo-icon.svg)

## Description

### Overview
>“Green Spaces” is a project developed for a gardening company that offers comprehensive gardening services. These include creating gardens from scratch, modernizing existing spaces, garden maintenance, and the installation of automatic irrigation systems. Our product tells the story of the company, showcasing its expertise and range of services.

### Target Audience
>This project is aimed at adults who are interested in professional gardening services. It seeks to highlight the company’s experience and professionalism, building trust with potential clients.

### Main goal
>The primary objective of “Green Spaces” is to introduce clients to the gardening company and its services. It aims to provide detailed information about the contractor’s offerings and showcase completed projects in a portfolio. The ultimate goal is to encourage potential clients to purchase services or fill out a contact form for further inquiries or collaboration opportunities.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Features
- [Scroll-Based Animation and Section Highlighting](#scroll-based-animation-and-section-highlighting)
- [Navigation and Tab Functionality](#navigation-and-tab-functionality)
- [Gallery Lightbox Functionality](#gallery-lightbox-functionality)
- [ Contact Form Validation and Submission](#contact-form-validation-and-submission)

### Scroll-Based Animation and Section Highlighting

1. **Smooth Scrolling**:
    - Navigation links smooth scroll to their corresponding sections when clicked, enhancing user experience.

2. **Section Highlighting**:
    - Navigation links are dynamically highlighted based on the currently visible section, providing users with a visual cue of their current location on the page.
    - The `aria-current` attribute is used to indicate the current section.

3. **Scroll-Based Animations**:
    - Animations are triggered when specific sections come into view, creating an engaging visual experience.
    - Different animations for different sections:
        - **Service Section**: Animations such as `fadeInTopLeft`, `fadeInBottomLeft`, and `fadeInRight` are applied.
        - **Gallery Section**: Animations such as `fadeInLeft` are applied with varying speeds (`fast`, `faster`).

4. **Viewport Detection**:
    - The project includes a utility function to detect if an element is within the viewport, ensuring animations are only triggered when the relevant sections are visible.

### Navigation and Tab Functionality

1. **Responsive Navigation Menu**:
    - A responsive navigation menu that toggles between showing and hiding when the menu button is clicked.
    - The menu button and menu items change their state to reflect the menu’s visibility.

2. **Menu Toggle on Click**:
    - The menu button (`#menu-btn`) toggles the visibility of the navigation menu (`#menu`) by adding or removing CSS classes `flex` and `hidden`.
    - Menu links also close the menu when clicked, ensuring a smooth user experience on mobile devices.

3. **Tab Navigation**:
    - A tab navigation system where clicking on a tab header displays the corresponding content panel.
    - Tabs are styled to show the active tab with a bottom border.

4. **Dynamic Tab Content Switching**:
    - Clicking on a tab header hides all other content panels and shows the one corresponding to the clicked tab.
    - The active tab is visually distinguished with a border, indicating the selected state.


### Gallery Lightbox Functionality

1. **Lightbox Display**:
    - Clicking on any image in the gallery opens a lightbox displaying the clicked image in a larger view.

2. **Dynamic Image Loading**:
    - The lightbox dynamically loads the clicked image and all other images in the same gallery for navigation.

3. **Thumbnail Navigation**:
    - Thumbnails of the gallery images are displayed within the lightbox, allowing users to navigate directly to any image by clicking its thumbnail.
    - The currently displayed image's thumbnail is highlighted to indicate its active state.

4. **Keyboard Navigation**:
    - Users can navigate through images in the lightbox using the left and right arrow keys on the keyboard.
    - The lightbox supports continuous cycling through images.

5. **Responsive Design**:
    - The gallery and lightbox are designed to be responsive, ensuring a consistent user experience across different screen sizes.

6. **Close Lightbox**:
    - The lightbox can be closed by clicking outside the image area, returning the user to the main gallery view.

7. **Image Change on Navigation**:
    - Users can navigate to the next or previous image within the lightbox using navigation arrows.
    - The navigation ensures that the current image is updated correctly and the corresponding thumbnail is highlighted.

8. **Visual Feedback for Thumbnails**:
    - Thumbnails are visually styled to indicate the active image, enhancing user navigation.

### Contact Form Validation and Submission

1. **Dynamic Contact Number Generation**:
    - A unique contact number is generated each time the form is used. This number is included in the form submission to ensure each email has a unique identifier.

2. **EmailJS Integration**:
    - The form is integrated with [EmailJS](https://www.emailjs.com/) to facilitate the sending of contact form submissions directly to an email account. This integration uses the EmailJS service to handle form data and send it securely.

3. **Form Validation**:
    - The form includes comprehensive validation checks for:
        - **Name Field**: Ensures the name is not empty.
        - **Email Field**: Ensures the email is not empty and follows a valid email format.
        - **Message Field**: Ensures the message is not empty.
    - Validation feedback is provided to users in real-time, highlighting fields that require attention with error messages and visual cues.

4. **Success and Error Handling**:
    - Visual feedback is provided to users upon successful form submission through a toast notification system.
    - Errors during form submission are logged to the console for debugging purposes.

5. **Toast Notification**:
    - A toast notification is displayed to confirm successful form submission. The notification automatically hides after a few seconds, but users can manually dismiss it by clicking a close icon.

6. **Input Validation Feedback**:
    - Inputs are visually marked as valid or invalid based on the validation results.
    - Error messages are displayed next to invalid inputs to guide the user on what needs to be corrected.

## Technologies Used
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=white) <br>
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-000000?style=for-the-badge&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://github.com/your-username)


## Contact
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/serhii-bolhovskyi-235503261) <br>
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:azeror72@gmail.com) <br>
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/SerhiiB21)
