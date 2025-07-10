/**
 * Modern Business Theme JavaScript
 * Provides interactive functionality for the theme
 */

class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupCart();
    this.setupSearch();
    this.setupLazyLoading();
    this.setupSmoothScrolling();
    this.setupAccordions();
    this.setupModals();
    this.setupProductVariants();
    this.setupQuantityButtons();
    this.setupAnnouncements();
    this.setupIntersectionObserver();
  }

  // Mobile Menu Functionality
  setupMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      };

      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
      }

      if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        }
      });
    }
  }

  // Cart Functionality
  setupCart() {
    const cartButton = document.querySelector('.cart-button');
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartClose = document.querySelector('.cart-close');
    const cartOverlay = document.querySelector('.cart-overlay');

    if (cartButton && cartDrawer) {
      cartButton.addEventListener('click', () => {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      const closeCart = () => {
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
      };

      if (cartClose) {
        cartClose.addEventListener('click', closeCart);
      }

      if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartDrawer.classList.contains('active')) {
          closeCart();
        }
      });
    }

    // Cart item quantity changes
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('cart-item-remove')) {
        e.preventDefault();
        this.removeCartItem(e.target.dataset.key);
      }
    });

    // Add to cart forms
    document.addEventListener('submit', (e) => {
      if (e.target.classList.contains('add-to-cart-form')) {
        e.preventDefault();
        this.addToCart(e.target);
      }
    });
  }

  // Search Functionality
  setupSearch() {
    const searchButton = document.querySelector('.search-button');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');

    if (searchButton && searchModal) {
      searchButton.addEventListener('click', () => {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (searchInput) {
          searchInput.focus();
        }
      });

      const closeSearch = () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
      };

      if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
      }

      if (searchOverlay) {
        searchOverlay.addEventListener('click', closeSearch);
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
          closeSearch();
        }
      });
    }

    // Predictive search
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.performSearch(e.target.value);
        }, 300);
      });
    }
  }

  // Lazy Loading
  setupLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Accordion Functionality
  setupAccordions() {
    document.querySelectorAll('.accordion-button').forEach(button => {
      button.addEventListener('click', () => {
        const accordion = button.closest('.accordion');
        const content = accordion.querySelector('.accordion-content');
        const isActive = accordion.classList.contains('active');

        // Close all accordions in the same group
        const group = button.closest('.accordion-group');
        if (group) {
          group.querySelectorAll('.accordion').forEach(acc => {
            acc.classList.remove('active');
            acc.querySelector('.accordion-content').style.maxHeight = null;
          });
        }

        // Toggle current accordion
        if (!isActive) {
          accordion.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // Modal Functionality
  setupModals() {
    document.querySelectorAll('.modal-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.querySelectorAll('.modal-close').forEach(close => {
      close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', () => {
        const modal = overlay.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // Product Variant Selection
  setupProductVariants() {
    document.querySelectorAll('.product-variant-select').forEach(select => {
      select.addEventListener('change', (e) => {
        this.updateProductVariant(e.target);
      });
    });
  }

  // Quantity Buttons
  setupQuantityButtons() {
    document.querySelectorAll('.quantity-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const input = button.parentElement.querySelector('.quantity-input');
        const isIncrease = button.classList.contains('quantity-increase');
        const currentValue = parseInt(input.value);
        const min = parseInt(input.min) || 1;
        const max = parseInt(input.max) || 999;

        if (isIncrease && currentValue < max) {
          input.value = currentValue + 1;
        } else if (!isIncrease && currentValue > min) {
          input.value = currentValue - 1;
        }

        // Trigger change event
        input.dispatchEvent(new Event('change'));
      });
    });
  }

  // Announcement Bar
  setupAnnouncements() {
    const announcements = document.querySelectorAll('.announcement-bar');
    if (announcements.length > 1) {
      let currentIndex = 0;
      setInterval(() => {
        announcements[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % announcements.length;
        announcements[currentIndex].classList.add('active');
      }, 5000);
    }
  }

  // Intersection Observer for animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Cart API Functions
  async addToCart(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    try {
      submitButton.disabled = true;
      submitButton.textContent = 'Adding...';

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const item = await response.json();
        this.updateCartUI();
        this.showNotification('Item added to cart!', 'success');
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      this.showNotification('Error adding item to cart', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }

  async removeCartItem(key) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: key,
          quantity: 0
        })
      });

      if (response.ok) {
        this.updateCartUI();
        this.showNotification('Item removed from cart', 'success');
      }
    } catch (error) {
      this.showNotification('Error removing item from cart', 'error');
    }
  }

  async updateCartUI() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      // Update cart count
      document.querySelectorAll('.cart-count').forEach(count => {
        count.textContent = cart.item_count;
      });

      // Update cart total
      document.querySelectorAll('.cart-total').forEach(total => {
        total.textContent = this.formatMoney(cart.total_price);
      });
    } catch (error) {
      console.error('Error updating cart UI:', error);
    }
  }

  async performSearch(query) {
    if (query.length < 2) return;

    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
      const data = await response.json();
      
      // Update search results
      this.displaySearchResults(data.resources.results.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displaySearchResults(products) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;

    if (products.length === 0) {
      resultsContainer.innerHTML = '<p>No products found</p>';
      return;
    }

    const html = products.map(product => `
      <div class="search-result">
        <a href="${product.url}" class="search-result-link">
          <img src="${product.featured_image}" alt="${product.title}" loading="lazy">
          <div class="search-result-content">
            <h3>${product.title}</h3>
            <p class="price">${this.formatMoney(product.price)}</p>
          </div>
        </a>
      </div>
    `).join('');

    resultsContainer.innerHTML = html;
  }

  updateProductVariant(select) {
    const form = select.closest('form');
    const priceElement = form.querySelector('.price');
    const availabilityElement = form.querySelector('.availability');
    const selectedVariant = select.selectedOptions[0];

    if (selectedVariant) {
      const price = selectedVariant.dataset.price;
      const available = selectedVariant.dataset.available === 'true';

      if (priceElement) {
        priceElement.textContent = this.formatMoney(price);
      }

      if (availabilityElement) {
        availabilityElement.textContent = available ? 'In stock' : 'Out of stock';
        availabilityElement.className = `availability ${available ? 'available' : 'unavailable'}`;
      }
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  formatMoney(cents) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(cents / 100);
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    }
  });
}

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
}

// Accessibility improvements
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('user-is-tabbing');
});

// Export for use in other scripts
window.ThemeManager = ThemeManager;