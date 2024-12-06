document.addEventListener('DOMContentLoaded', () => {
  // Function to load section dynamically
  function loadSection(sectionId, fileName) {
    fetch(`includes/${fileName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching ${fileName}: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(sectionId).innerHTML = data; // Insert fetched content into the section
      })
      .catch((error) => {
        console.error(`Error loading ${fileName}:`, error);
        const fallbackContent = `<p>Failed to load the ${sectionId} section (Error: ${error.message}). Please refresh or check back later.</p>`;
        document.getElementById(sectionId).innerHTML = fallbackContent;
      });
  }

  // Load all sections dynamically on page load
  const sections = [
    { id: 'navigation', file: 'navigation.html' },
    { id: 'hero', file: 'hero.html' },
    { id: 'about', file: 'about.html' },
    { id: 'rooms', file: 'rooms.html' },
    { id: 'booking', file: 'booking.html' },
    { id: 'contact', file: 'contact.html' },
    { id: 'footer', file: 'footer.html' },
  ];

  sections.forEach((section) => loadSection(section.id, section.file));

  // Sticky Navbar Effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky-navbar', 'scrolled');
      } else {
        navbar.classList.remove('sticky-navbar', 'scrolled');
      }
    });
  }

  // Get the toggle button and the navbar links for mobile menu
  const toggleButton = document.querySelector('.sikkim-new-toggler');
  const navbarLinks = document.querySelector('.sikkim-new-links');

  // Ensure elements are present before attaching event listener
  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
      // Toggle the 'active' class to show or hide the navigation links
      navbarLinks.classList.toggle('active');
    });
  }

  // Get references to the toggler button and navigation links container (if needed elsewhere)
  const toggler = document.querySelector('.sikkim-new-toggler');
  const navLinks = document.getElementById('navbarNav');
  
  // Attach event listener for toggling navigation visibility
  if (toggler && navLinks) {
    toggler.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});
// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the toggler button and navigation links container
  const toggler = document.querySelector('.navbar-toggler');
  const navLinks = document.getElementById('navbarNav');

  // Add a click event listener to the toggler button
  toggler.addEventListener('click', function() {
    // Toggle the 'collapse' class to show or hide the navigation menu
    navLinks.classList.toggle('collapse');
  });
});
