document.addEventListener("DOMContentLoaded", function() {
    // Define data object
    const data = [
        { subheading: "Web", src: "./img/undraw_devices_re_dxae.svg" },
        { subheading: "Android", src: "./img/undraw_android_jr64.svg" },
        { subheading: "iOS", src: "./img/undraw_watch_application_uhc9.svg" },
        { subheading: "Windows", src: "./img/undraw_back_home_nl-5-c.svg" }
    ];

    let currentIndex = 0;
    const subheading = document.getElementById('subheading');
    const image = document.getElementById('image');
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll('.navbar-links');

    function changeContent() {
        currentIndex = (currentIndex + 1) % data.length;
        const currentItem = data[currentIndex];

        // Apply animations to subheading and image
        subheading.classList.add('fade-out');
        image.classList.add('fade-out');

        setTimeout(() => {
            // Update content
            subheading.textContent = currentItem.subheading;
            image.src = currentItem.src;

            // Change subheading text color based on the platform
            switch (currentItem.subheading) {
                case 'Web':
                    subheading.style.color = '#00B0FF'; // Change color for Web
                    break;
                case 'Android':
                    subheading.style.color = '#00BFA6'; // Change color for Android
                    break;
                case 'iOS':
                    subheading.style.color = '#F50057'; // Change color for iOS
                    break;
                case 'Windows':
                    subheading.style.color = '#536DFE'; // Change color for Windows
                    break;
                default:
                    subheading.style.color = 'black'; // Default color
                    break;
            }

            // Remove fade-out class and add fade-in class
            subheading.classList.remove('fade-out');
            subheading.classList.add('fade-in');
            image.classList.remove('fade-out');
            image.classList.add('fade-in');
        }, 1000);

        // Remove fade-in class after animation
        setTimeout(() => {
            subheading.classList.remove('fade-in');
            image.classList.remove('fade-in');
        }, 2000);

        // Change content every 4 seconds
        setTimeout(changeContent, 4000);
    }

    // Function to update visible section based on scroll position
    function updateVisibleSection() {
        const scrollPosition = window.scrollY + 300;
        let currentSection = Math.floor(scrollPosition / window.innerHeight);
        sections.forEach((section, index) => {
            if (index === currentSection) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });

        // Set the corresponding link as active
        navLinks.forEach((link, index) => {
            if (index === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initial call for updating visible section
    updateVisibleSection();

    // Listen for scroll events
    window.addEventListener("scroll", function() {
        updateVisibleSection();
    });

    // Initial call for changing content
    changeContent();
});
