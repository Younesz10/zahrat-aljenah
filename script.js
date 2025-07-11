
const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});
// Close menu when any menu option is selected
const menuOptions = document.querySelectorAll(".navbar__menu li a");

menuOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menulinks.classList.remove("active");
  });
});


var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

$(document).ready(function () {
  // Initialize each carousel individually
  $("#carousel1").slick({
    prevArrow: $("#prevBtn1"),
    nextArrow: $("#nextBtn1"),
    slidesToShow: 3, // Adjust this value as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#carousel2").slick({
    prevArrow: $("#prevBtn2"),
    nextArrow: $("#nextBtn2"),
    slidesToShow: 3, // Adjust this value as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Add more carousel initializations as needed for additional carousels
});

// Simple Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Show current slide
    if (slides[index]) {
      slides[index].classList.add('active');
    }
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  // Add event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  // Auto-advance slides
  setInterval(nextSlide, 3000);

  // Show first slide initially
  showSlide(0);
});

// Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Optimize all product images with lazy loading
  const productImages = document.querySelectorAll('.product_image img');
  productImages.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    // Improve alt text if it's generic
    if (img.alt === 'HDPE PLASTİK VARİL') {
      const fileName = img.src.split('/').pop().replace('.jpg', '').replace(/-/g, ' ');
      img.alt = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    }
  });

  // Preload critical images
  const criticalImages = [
    '/Images/zahrataljenah-logo.png',
    '/Images/background-image.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Optimize carousel performance
  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach((item, index) => {
    if (index > 0) {
      const img = item.querySelector('img');
      if (img) {
        img.setAttribute('loading', 'lazy');
      }
    }
  });

  // Add intersection observer for better lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all lazy-loaded images
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Optimize font loading
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}

// UX Enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Loading Spinner Management
  const loadingSpinner = document.getElementById('loading-spinner');
  const pageTransition = document.getElementById('page-transition');
  
  // Hide loading spinner after page loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingSpinner.classList.add('hidden');
      setTimeout(() => {
        loadingSpinner.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // Page Transition Effects
  const navLinks = document.querySelectorAll('.navbar__links[data-section]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== window.location.pathname) {
        e.preventDefault();
        pageTransition.classList.add('active');
        
        setTimeout(() => {
          window.location.href = this.getAttribute('href');
        }, 300);
      }
    });
  });

  // Scroll Animation for Sections
  const sections = document.querySelectorAll('.hero, .brands, .benefits, .image_carousel, .section4, .location');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Enhanced Image Loading Feedback
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.classList.add('loading');
    
    img.addEventListener('load', function() {
      this.classList.remove('loading');
      this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
      this.classList.remove('loading');
      this.style.opacity = '0.5';
    });
  });

  // Smooth Scroll for Internal Links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced Button Click Feedback
  const buttons = document.querySelectorAll('.cta_primary, .cta_secondary, .section_cta, #prevBtn, #nextBtn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Enhanced Carousel Navigation Feedback
  const carouselButtons = document.querySelectorAll('#prevBtn, #nextBtn');
  carouselButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'translateY(-50%) scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'translateY(-50%) scale(1)';
      }, 150);
    });
  });

  // Enhanced Product Card Interactions
  const productItems = document.querySelectorAll('.product-item');
  productItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });

  // Enhanced Brand Card Interactions
  const brandItems = document.querySelectorAll('.brand_info');
  brandItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });

  // Call Button Enhancement
  const callButton = document.querySelector('.call-button a');
  if (callButton) {
    callButton.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // Add ripple effect CSS dynamically
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .cta_primary,
    .cta_secondary,
    .section_cta,
    #prevBtn,
    #nextBtn {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
});

// Enhanced Mobile Menu Animation
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (mobileMenu && menuLinks) {
  mobileMenu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
    // Add animation to menu items
    const menuItems = menuLinks.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      if (menuLinks.classList.contains('active')) {
        item.style.animation = `slideInRight 0.3s ease forwards ${index * 0.1}s`;
      } else {
        item.style.animation = 'none';
      }
    });
  });
}

// Add slideInRight animation
const slideInRightStyle = document.createElement('style');
slideInRightStyle.textContent = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(slideInRightStyle);




