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

  // Navigation Toggler
  const toggler = document.querySelector('.sikkim-new-toggler');
  const navLinks = document.querySelector('.sikkim-new-links');

  if (toggler && navLinks) {
    toggler.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggler.classList.toggle('open'); // Optional: Add an open class for toggler animation
    });
  }

  // Carousel Setup
  function initializeCarousel(carouselId, interval = 5000) {
    const carouselElement = document.getElementById(carouselId);
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval,
        ride: 'carousel',
      });
    }
  }

  // Initialize carousels
  initializeCarousel('hotelCarousel');
  initializeCarousel('sikkim-sojourns-about-carousel');

  // Swipe Gesture for Carousel
  const carouselInner = document.getElementById('carousel-inner');
  let touchStartX = 0;
  let touchEndX = 0;

  function handleSwipeGesture() {
    const carouselInstance = new bootstrap.Carousel('#hotelCarousel');
    if (touchEndX < touchStartX) {
      // Swipe left, go to next item
      carouselInstance.next();
    }
    if (touchEndX > touchStartX) {
      // Swipe right, go to previous item
      carouselInstance.prev();
    }
  }

  if (carouselInner) {
    carouselInner.addEventListener('touchstart', (e) => {
      e.preventDefault(); // Prevent default touch behavior (scrolling)
      touchStartX = e.changedTouches[0].screenX;
    });

    carouselInner.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    });
  }
});
