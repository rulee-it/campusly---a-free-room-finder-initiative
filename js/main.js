// DOM Elements - Home Screen
const homeScreen = document.getElementById('home-screen');
const resultsScreen = document.getElementById('results-screen');
const searchButton = document.getElementById('search-button');

// Block dropdown elements
const blockDropdownBtn = document.getElementById('block-dropdown-btn');
const blockDropdownContent = document.getElementById('block-dropdown-content');
const blockDropdownText = blockDropdownBtn.querySelector('.dropdown-text');

// Day dropdown elements
const dayDropdownBtn = document.getElementById('day-dropdown-btn');
const dayDropdownContent = document.getElementById('day-dropdown-content');
const dayDropdownText = dayDropdownBtn.querySelector('.dropdown-text');

// Time dropdown elements
const timeDropdownBtn = document.getElementById('time-dropdown-btn');
const timeDropdownContent = document.getElementById('time-dropdown-content');
const timeDropdownText = timeDropdownBtn.querySelector('.dropdown-text');

// Results Screen elements
const blockChip = document.getElementById('block-chip');
const dayChip = document.getElementById('day-chip');
const timeChip = document.getElementById('time-chip');
const loadingContainer = document.getElementById('loading-container');
const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('error-message');
const noResultsContainer = document.getElementById('no-results-container');
const resultsContainer = document.getElementById('results-container');
const resultsCount = document.getElementById('results-count');
const roomsList = document.getElementById('rooms-list');
const goBackButton = document.getElementById('go-back-button');
const newSearchButton = document.getElementById('new-search-button');
const resultsBackButton = document.getElementById('results-back-button');

// Navigation elements
const navbarToggle = document.querySelector('.navbar-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.navbar-item a, .mobile-item a');

// Theme switcher
const themeToggle = document.getElementById('theme-toggle');

// Testimonial slider elements
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

// Room filter elements
const floorFilters = document.querySelectorAll('.floor-filter');
const sortSelect = document.getElementById('sort-rooms');

// Cards for animation
const allCards = document.querySelectorAll('.card');
const featuresSection = document.querySelector('.features-section');
const testimonialSection = document.querySelector('.testimonials-section');
const contactSection = document.querySelector('.contact-section');

// Search parameters
let selectedBlockNo = '';
let selectedDay = '';
let selectedPeriodId = '';

// Slider state
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.testimonial-slide').length;

// Filtered rooms
let allRooms = [];
let filteredRooms = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    setupDropdowns();
    setupEventListeners();
    addAnimationEffects();
    initSlider();
    loadThemePreference();
    initNavigation();
    initScrollAnimations();
}

function setupDropdowns() {
    // Populate Block dropdown
    const blocks = getBlocks();
    blocks.forEach(block => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        item.textContent = `Block ${block}`;
        item.addEventListener('click', () => {
            selectedBlockNo = block;
            blockDropdownText.textContent = `Block ${block}`;
            blockDropdownBtn.classList.add('selected');
            toggleDropdown(blockDropdownContent);
            validateForm();
        });
        blockDropdownContent.appendChild(item);
    });

    // Populate Day dropdown
    const days = getDays();
    days.forEach(day => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        item.textContent = day.label;
        item.addEventListener('click', () => {
            selectedDay = day.value;
            dayDropdownText.textContent = day.label;
            dayDropdownBtn.classList.add('selected');
            toggleDropdown(dayDropdownContent);
            validateForm();
        });
        dayDropdownContent.appendChild(item);
    });

    // Populate Time dropdown
    const timePeriods = getTimePeriods();
    timePeriods.forEach(period => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        item.textContent = period.time;
        item.addEventListener('click', () => {
            selectedPeriodId = period.id;
            timeDropdownText.textContent = period.time;
            timeDropdownBtn.classList.add('selected');
            toggleDropdown(timeDropdownContent);
            validateForm();
        });
        timeDropdownContent.appendChild(item);
    });
}

function setupEventListeners() {
    // Dropdown toggle events
    blockDropdownBtn.addEventListener('click', () => toggleDropdown(blockDropdownContent));
    dayDropdownBtn.addEventListener('click', () => toggleDropdown(dayDropdownContent));
    timeDropdownBtn.addEventListener('click', () => toggleDropdown(timeDropdownContent));

    // Search button event
    searchButton.addEventListener('click', handleSearch);

    // Go back and new search buttons
    goBackButton.addEventListener('click', goToHomeScreen);
    newSearchButton.addEventListener('click', goToHomeScreen);
    resultsBackButton.addEventListener('click', goToHomeScreen);

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Enable keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllDropdowns();
        } else if (event.key === 'Enter' && !event.target.closest('.dropdown') && isFormValid()) {
            handleSearch();
        }
    });

    // Back to top button
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Theme toggle
    themeToggle.addEventListener('change', toggleTheme);

    // Mobile menu toggle
    navbarToggle.addEventListener('click', toggleMobileMenu);

    // Room filters
    floorFilters.forEach(filter => {
        filter.addEventListener('change', applyRoomFilters);
    });

    sortSelect.addEventListener('change', applyRoomFilters);

    // Testimonial slider controls
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function addAnimationEffects() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 5px 15px rgba(229, 9, 20, 0.3)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card:not(.search-params-card):not(.room-card)');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add netflix-style hover to room cards
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 10px 25px rgba(229, 9, 20, 0.2)';
            this.style.borderColor = 'var(--primary-color)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            this.style.borderColor = 'var(--border-color)';
        });
    });
    
    // Add hover effects to dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-button');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (!this.classList.contains('selected')) {
                this.style.borderColor = 'var(--primary-color)';
                this.style.transition = 'all 0.3s ease';
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.borderColor = 'var(--border-color)';
            }
        });
    });
    
    // Add hover effects to navbar items
    const navItems = document.querySelectorAll('.navbar-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.color = 'var(--primary-color)';
                    icon.style.transition = 'color 0.3s ease';
                }
            }
        });
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.color = '';
                }
            }
        });
    });
}

// Navigation Functions
function initNavigation() {
    // Set active navigation link based on current scroll position
    const sections = document.querySelectorAll('section, .card, .features-section, .testimonials-section, .contact-section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                if (section.getAttribute('id')) {
                    current = section.getAttribute('id');
                }
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    
    // Add slide-in animation
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.animation = 'slideInRight 0.3s forwards';
    } else {
        mobileMenu.style.animation = 'slideOutRight 0.3s forwards';
    }
}

// Theme Functions
function loadThemePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else {
        // Force dark theme initially as we're defaulting to Netflix style
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        localStorage.setItem('darkMode', 'true');
    }
}

function toggleTheme() {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('darkMode', 'false');
    }
    
    // Add subtle transition effect on theme change
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// Scroll animation for sections
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer all cards and sections for scroll animations
    document.querySelectorAll('.card, .features-section, .testimonials-section, .contact-section').forEach(item => {
        item.classList.add('animate-scroll');
        observer.observe(item);
    });
    
    // Add animation to feature cards with delay
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

// Testimonial Slider Functions
function initSlider() {
    // Set initial slider position
    goToSlide(0);

    // Auto-scroll slider every 5 seconds
    setInterval(() => {
        goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
}

function goToSlide(slideIndex) {
    // Handle wrapping around
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Update current slide
    currentSlide = slideIndex;

    // Move slider with smooth transition
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Back to Top Functions
function toggleBackToTopButton() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleDropdown(dropdown) {
    closeAllDropdowns();
    dropdown.classList.toggle('show');
    
    // Rotate dropdown icon with animation
    const parentBtn = dropdown.previousElementSibling;
    const icon = parentBtn.querySelector('.dropdown-icon');
    if (dropdown.classList.contains('show')) {
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'rotate(180deg)';
        
        // Add netflix-style animation to dropdown
        dropdown.style.animation = 'fadeInDown 0.3s forwards';
    } else {
        icon.style.transform = 'rotate(0)';
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
        const icon = dropdown.previousElementSibling.querySelector('.dropdown-icon');
        if (icon) {
            icon.style.transform = 'rotate(0)';
        }
    });
}

function validateForm() {
    if (isFormValid()) {
        searchButton.removeAttribute('disabled');
        searchButton.style.opacity = '1';
        
        // Add pulse animation to indicate readiness
        searchButton.classList.add('pulse-animation');
    } else {
        searchButton.setAttribute('disabled', 'true');
        searchButton.style.opacity = '0.7';
        searchButton.classList.remove('pulse-animation');
    }
}

function isFormValid() {
    return selectedBlockNo && selectedDay && selectedPeriodId;
}

function handleSearch() {
    // Validate inputs
    if (!isFormValid()) {
        showFormErrors();
        return;
    }
    
    // Add search button animation
    searchButton.classList.add('search-active');
    setTimeout(() => {
        // Navigate to results screen
        goToResultsScreen();
        searchButton.classList.remove('search-active');
    }, 300);
    
    // Update chips with selected values
    blockChip.querySelector('span').textContent = `Block ${selectedBlockNo}`;
    
    const selectedDayObj = getDays().find(d => d.value === selectedDay);
    dayChip.querySelector('span').textContent = selectedDayObj ? selectedDayObj.label : selectedDay;
    
    const selectedPeriod = getTimePeriods().find(p => p.id === selectedPeriodId);
    timeChip.querySelector('span').textContent = selectedPeriod ? selectedPeriod.time : '';
    
    // Show loading state
    showLoading();
    
    // Fetch results
    fetchFreeRooms(selectedBlockNo, selectedDay, selectedPeriodId)
        .then(rooms => {
            hideLoading();
            // Store all rooms for filtering
            allRooms = [...rooms];
            applyRoomFilters();
        })
        .catch(error => {
            hideLoading();
            showError(error);
        });
}

function applyRoomFilters() {
    // Get selected floor filters
    const selectedFloors = Array.from(floorFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);

    // Filter rooms by floor
    filteredRooms = allRooms.filter(room => {
        // Handle "Third+" floor category
        if (selectedFloors.includes('Third') && 
            !['Ground', 'First', 'Second'].includes(room.floor)) {
            return true;
        }
        return selectedFloors.includes(room.floor);
    });

    // Sort rooms
    const sortBy = sortSelect.value;
    if (sortBy === 'floor') {
        // Define floor order
        const floorOrder = {
            'Ground': 0,
            'First': 1,
            'Second': 2,
            'Third': 3,
            'Fourth': 4,
            'Fifth': 5,
            'Sixth': 6,
            'Seventh': 7,
            'Eighth': 8
        };
        
        filteredRooms.sort((a, b) => {
            const floorA = floorOrder[a.floor] || 999;
            const floorB = floorOrder[b.floor] || 999;
            return floorA - floorB;
        });
    } else {
        // Sort by room number
        filteredRooms.sort((a, b) => a.roomNumber.localeCompare(b.roomNumber, undefined, {numeric: true}));
    }

    // Display filtered rooms
    displayResults(filteredRooms);
}

function showFormErrors() {
    if (!selectedBlockNo) {
        blockDropdownBtn.style.borderColor = 'var(--primary-color)';
        blockDropdownBtn.classList.add('shake-animation');
        setTimeout(() => {
            blockDropdownBtn.style.borderColor = 'var(--border-color)';
            blockDropdownBtn.classList.remove('shake-animation');
        }, 800);
    }
    
    if (!selectedDay) {
        dayDropdownBtn.style.borderColor = 'var(--primary-color)';
        dayDropdownBtn.classList.add('shake-animation');
        setTimeout(() => {
            dayDropdownBtn.style.borderColor = 'var(--border-color)';
            dayDropdownBtn.classList.remove('shake-animation');
        }, 800);
    }
    
    if (!selectedPeriodId) {
        timeDropdownBtn.style.borderColor = 'var(--primary-color)';
        timeDropdownBtn.classList.add('shake-animation');
        setTimeout(() => {
            timeDropdownBtn.style.borderColor = 'var(--border-color)';
            timeDropdownBtn.classList.remove('shake-animation');
        }, 800);
    }
}

function goToResultsScreen() {
    // Add transition effect
    homeScreen.style.animation = 'fadeOut 0.3s forwards';
    
    setTimeout(() => {
        homeScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        resultsScreen.style.animation = 'fadeIn 0.3s forwards';
    }, 300);
    
    // Reset filters
    floorFilters.forEach(filter => {
        filter.checked = true;
    });
    sortSelect.value = 'roomNumber';
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

function goToHomeScreen() {
    // Add transition effect
    resultsScreen.style.animation = 'fadeOut 0.3s forwards';
    
    setTimeout(() => {
        resultsScreen.classList.remove('active');
        homeScreen.classList.add('active');
        homeScreen.style.animation = 'fadeIn 0.3s forwards';
    }, 300);
    
    // Reset results screen state
    loadingContainer.style.display = 'flex';
    errorContainer.style.display = 'none';
    noResultsContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    
    // Reset all rooms and filtered rooms
    allRooms = [];
    filteredRooms = [];
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

function showLoading() {
    loadingContainer.style.display = 'flex';
    errorContainer.style.display = 'none';
    noResultsContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
}

function hideLoading() {
    loadingContainer.style.display = 'none';
}

function showError(message) {
    errorContainer.style.display = 'block';
    errorMessage.textContent = message || 'An error occurred. Please try again.';
    
    // Add animation
    errorContainer.classList.add('animate-in');
}

function displayResults(rooms) {
    if (rooms.length === 0) {
        noResultsContainer.style.display = 'block';
        noResultsContainer.classList.add('animate-in');
    } else {
        resultsContainer.style.display = 'block';
        resultsContainer.classList.add('animate-in');
        resultsCount.querySelector('span').textContent = `${rooms.length} available room${rooms.length !== 1 ? 's' : ''} found`;
        
        // Clear previous results
        roomsList.innerHTML = '';
        
        // Add room cards with staggered animation
        rooms.forEach((room, index) => {
            const roomCard = createRoomCard(room);
            roomCard.style.animationDelay = `${index * 0.05}s`;
            roomCard.classList.add('room-card-animate');
            roomsList.appendChild(roomCard);
        });
    }
}

function createRoomCard(room) {
    const card = document.createElement('div');
    card.classList.add('card', 'room-card');
    
    // Determine a random occupancy percentage for visual effect
    const randomOccupancy = Math.floor(Math.random() * 70) + 10;
    const occupancyColor = randomOccupancy < 30 ? '#4caf50' : 
                         randomOccupancy < 60 ? '#ff9800' : '#f44336';
    
    card.innerHTML = `
        <div class="card-content">
            <div class="room-header">
                <h2><i class="fas fa-door-open"></i> Room ${room.roomNumber}</h2>
                <div style="margin-left: auto; display: flex; align-items: center;">
                    <span style="font-size: 12px; color: var(--text-secondary); margin-right: 5px;">Typical occupancy</span>
                    <div style="width: 80px; height: 10px; background-color: rgba(255,255,255,0.1); border-radius: 5px; overflow: hidden;">
                        <div style="width: ${randomOccupancy}%; height: 100%; background-color: ${occupancyColor}; transition: width 1s ease-in-out;"></div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <p><i class="fas fa-building"></i> Block ${room.block}</p>
            <p><i class="fas fa-layer-group"></i> ${room.floor} Floor</p>
            <p><i class="fas fa-clock"></i> Available at ${room.periodInfo}</p>
        </div>
    `;
    
    return card;
} 