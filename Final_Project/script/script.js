// --- Calendar Functionality ---
const currentMonthYearElement = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const wardCalendarDiv = document.getElementById('ward-calendar');

let currentDate = new Date();

// --- Event Data ---
const events = [
    { year: 2025, month: 3, day: 6, title: "Fast and Testimony Sunday" },     
    { year: 2025, month: 3, day: 12, title: "General Conference Rebroadcast" },
    { year: 2025, month: 3, day: 13, title: "General Conference Rebroadcast" },
    { year: 2025, month: 3, day: 20, title: "Easter Sunday No Sunday School" },
    { year: 2025, month: 3, day: 27, title: "Sunday Service" },
    { year: 2025, month: 3, day: 17, title: "Activity Night" },   
    { year: 2025, month: 3, day: 19, title: "Baptism" },
    { year: 2025, month: 3, day: 19, title: "Youth CSP" },
    { year: 2025, month: 3, day: 19, title: "FSY Orientation" },    
    { year: 2025, month: 3, day: 21, title: "FSY Day 1" },
    { year: 2025, month: 3, day: 22, title: "FSY Day 2" },       
    { year: 2025, month: 3, day: 23, title: "FSY Day 3" },
    { year: 2025, month: 3, day: 24, title: "FSY Day 4" },
    { year: 2025, month: 3, day: 25, title: "FSY Day 5" },
    { year: 2025, month: 3, day: 26, title: "Temple Day" }
];

function checkIfEventOnDate(year, month, day) {
    return events.some(event =>
        event.year === year && event.month === month && event.day === day
    );
}

function getEventTitle(year, month, day) {
    const eventsOnDate = events.filter(event =>
        event.year === year && event.month === month && event.day === day
    );
    return eventsOnDate.map(event => event.title).join('\n'); // Join titles with a newline
}

function renderCalendar() {
    if (!currentMonthYearElement || !wardCalendarDiv) {
        return; // Don't proceed if calendar elements are not found
    }

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    currentMonthYearElement.textContent = `${monthNames[month]} ${year}`;
    wardCalendarDiv.innerHTML = ''; // Clear previous calendar

    const calendarTable = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Create header row for days of the week
    let headerRow = document.createElement('tr');
    weekDays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    calendarTable.appendChild(thead);
    calendarTable.appendChild(tbody);

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        let weekRow = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const dayCell = document.createElement('td');
            if (i === 0 && j < firstDayOfWeek) {
                // Empty cells before the first day
            } else if (dayCount > daysInMonth) {
                // Empty cells after the last day
            } else {
                dayCell.textContent = dayCount;
                const eventTitle = getEventTitle(year, month, dayCount);
                if (checkIfEventOnDate(year, month, dayCount)) {
                    dayCell.classList.add('event');
                    dayCell.dataset.eventTitle = eventTitle; // Store event title in a data attribute
                    dayCell.addEventListener('click', showEventBox); // Add click listener
                }
                dayCount++;
            }
            weekRow.appendChild(dayCell);
        }
        tbody.appendChild(weekRow);
        if (dayCount > daysInMonth) {
            break;
        }
    }
    calendarTable.appendChild(tbody);
    wardCalendarDiv.appendChild(calendarTable);
}


function navigateMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => navigateMonth(1));
}

// Initial calendar render (only if the elements exist)
if (currentMonthYearElement && wardCalendarDiv) {
    renderCalendar();
}

// Function to display the event box
function showEventBox(event) {
    const clickedDayCell = event.target;
    const eventTitle = clickedDayCell.dataset.eventTitle;

    if (eventTitle) {
        // Create the event box element
        const eventBox = document.createElement('div');
        eventBox.classList.add('event-info-box');
        eventBox.textContent = eventTitle;

        // Position the event box near the clicked day
        const rect = clickedDayCell.getBoundingClientRect();
        eventBox.style.left = `${rect.left + window.scrollX}px`;
        eventBox.style.top = `${rect.bottom + window.scrollY + 5}px`; // Position below the day

        // Append the event box to the body
        document.body.appendChild(eventBox);

        // Optional: Add a way to close the box (e.g., click outside)
        setTimeout(() => {
            document.addEventListener('click', closeEventBox);
        }, 10); // Small delay to avoid immediate closing
    }
}

// Function to close the event box
function closeEventBox(event) {
    const eventBox = document.querySelector('.event-info-box');
    // Check if the event box exists AND the clicked target is NOT a day cell with an event
    if (eventBox && !event.target.classList.contains('event')) {
        eventBox.remove();
        document.removeEventListener('click', closeEventBox);
    }
}

// --- Gallery Popup Functionality ---
const galleryContainer = document.querySelector('.gallery-container');
let imagePopup;

function createImagePopup() {
    imagePopup = document.createElement('div');
    imagePopup.classList.add('image-popup');
    imagePopup.innerHTML = `
        <button class="close-button">×</button>
        <div class="image-popup-content">
            <img src="" alt="Large Image">
        </div>
    `;
    document.body.appendChild(imagePopup);

    const closeButton = imagePopup.querySelector('.close-button');
    closeButton.addEventListener('click', closePopup);
    imagePopup.addEventListener('click', closePopupOutside);
}

function openPopup(event) {
    if (!imagePopup) {
        createImagePopup();
    }

    const clickedImage = event.target.closest('.temple-card img');
    if (clickedImage) {
        const largeImageSrc = clickedImage.src;
        const popupImage = imagePopup.querySelector('.image-popup-content img');
        popupImage.src = largeImageSrc;
        imagePopup.classList.add('open');
    }
}

function closePopup() {
    if (imagePopup) {
        imagePopup.classList.remove('open');
    }
}

function closePopupOutside(event) {
    if (imagePopup && event.target === imagePopup) {
        closePopup();
    }
}

if (galleryContainer) {
    galleryContainer.addEventListener('click', openPopup);
}


// --- Image Slider Functionality (Keep this if you still need it) ---
const sliderContainer = document.querySelector('.image-slider-container');
const imageSlider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
const prevSliderButton = document.querySelector('.prev-slide');
const nextSliderButton = document.querySelector('.next-slide');

let sliderCounter = 0;
let slideWidth;
const imagesPerSlide = 3;

function updateSliderWidth() {
    if (sliderContainer) {
        slideWidth = sliderContainer.offsetWidth / imagesPerSlide;
        imageSlider.style.width = `${slideWidth * images.length}px`;
        images.forEach(img => {
            img.style.width = `${slideWidth}px`;
        });
    }
}

if (sliderContainer) {
    updateSliderWidth();
    window.addEventListener('resize', updateSliderWidth);
}

function slideToSlider(index) {
    if (imageSlider && slideWidth !== undefined) {
        imageSlider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
}

function nextSliderSlide() {
    if (images && images.length > imagesPerSlide) {
        sliderCounter++;
        if (sliderCounter > images.length - imagesPerSlide) {
            sliderCounter = 0;
        }
        slideToSlider(sliderCounter);
    }
}

function prevSliderSlide() {
    if (images && images.length > imagesPerSlide) {
        sliderCounter--;
        if (sliderCounter < 0) {
            sliderCounter = images.length - imagesPerSlide;
        }
        slideToSlider(sliderCounter);
    }
}

let sliderInterval;
if (sliderContainer) {
    sliderInterval = setInterval(nextSliderSlide, 3000);
}

if (prevSliderButton) {
    prevSliderButton.addEventListener('click', () => {
        clearInterval(sliderInterval);
        prevSliderSlide();
        sliderInterval = setInterval(nextSliderSlide, 3000);
    });
}

if (nextSliderButton) {
    nextSliderButton.addEventListener('click', () => {
        clearInterval(sliderInterval);
        nextSliderSlide();
        sliderInterval = setInterval(nextSliderSlide, 3000);
    });
}

// Get the current year and update the span with id "currentyear"
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Get the last modified date and update the paragraph with id "lastModified"
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);
    lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
}

// --- Mobile Navigation Toggle ---
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');

if (burgerMenu && mainNav) {
    burgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        burgerMenu.classList.toggle('open'); // Optional: for burger button animation
    });
}

