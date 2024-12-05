// Function to load section dynamically
function loadSection(sectionId, fileName) {
  // Fetch the HTML content for the specified section
  fetch(`includes/${fileName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching ${fileName}: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(sectionId).innerHTML = data;  // Insert the fetched content into the section
    })
    .catch(error => {
      console.error(`Error loading ${fileName}:`, error);
      document.getElementById(sectionId).innerHTML = "<p>Sorry, we couldn't load this section. Please try again later.</p>";
    });
}

// Load all sections dynamically on page load
window.onload = function() {
  loadSection('navigation', 'navigation.html');
  loadSection('hero', 'hero.html');
  loadSection('about', 'about.html');
  loadSection('rooms', 'rooms.html');
  loadSection('booking', 'booking.html');
  loadSection('contact', 'contact.html');
  loadSection('footer', 'footer.html');
};
// JavaScript to add sticky class when scrolling
window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
};
// Autoplay Carousel (optional)
// Autoplay Carousel (optional)
var myCarousel = document.getElementById('hotelCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000, // Adjust time for the next slide (in milliseconds)
  ride: 'carousel' // Automatically start the carousel when the page loads
});

// Add sticky navbar effect on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('sticky-navbar');
  } else {
    navbar.classList.remove('sticky-navbar');
  }
});

// Function to handle swipe gesture

let touchStartX = 0;
let touchEndX = 0;
const carouselInner = document.getElementById('carousel-inner');

// Function to handle swipe gesture
function handleSwipeGesture() {
  const carousel = new bootstrap.Carousel('#hotelCarousel', {
    ride: 'carousel',
  });

  if (touchEndX < touchStartX) {
    // Swipe left, go to next item
    carousel.next();
  }

  if (touchEndX > touchStartX) {
    // Swipe right, go to previous item
    carousel.prev();
  }
}

// Add event listeners for touch start and touch end events
carouselInner.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselInner.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});
document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.getElementById('hotelCarousel');
  const carousel = new bootstrap.Carousel(carouselElement, {
    ride: 'carousel'
  });

  let touchStartX = 0;
  let touchEndX = 0;
  const carouselInner = document.getElementById('carousel-inner');

  // Function to handle swipe gesture
  function handleSwipeGesture() {
    if (touchEndX < touchStartX) {
      // Swipe left, go to next item
      carousel.next();
    }

    if (touchEndX > touchStartX) {
      // Swipe right, go to previous item
      carousel.prev();
    }
  }

  // Add event listeners for touch start and touch end events
  carouselInner.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselInner.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  });
});
