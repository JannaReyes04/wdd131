const currentMonthYearElement = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const wardCalendarDiv = document.getElementById('ward-calendar');

let currentDate = new Date();

function renderCalendar() {
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

    let dayCount = 1;
    for (let i = 0; i < 6; i++) { // Up to 6 rows to accommodate all months
        let weekRow = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const dayCell = document.createElement('td');
            if (i === 0 && j < firstDayOfWeek) {
                // Empty cells before the first day
            } else if (dayCount > daysInMonth) {
                // Empty cells after the last day
            } else {
                dayCell.textContent = dayCount;
                // Add event highlighting logic here (e.g., check against an events array)
                // if (checkIfEventOnDate(year, month, dayCount)) {
                //     dayCell.classList.add('event');
                //     dayCell.title = getEventTitle(year, month, dayCount);
                // }
                dayCount++;
            }
            weekRow.appendChild(dayCell);
        }
        tbody.appendChild(weekRow);
        if (dayCount > daysInMonth) {
            break; // Stop if all days are rendered
        }
    }
    calendarTable.appendChild(tbody);
    wardCalendarDiv.appendChild(calendarTable);
}

function navigateMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
nextMonthBtn.addEventListener('click', () => navigateMonth(1));

// Initial calendar render
renderCalendar();

// --- Optional: Dummy Event Data (for testing) ---
const events = [
    { year: 2025, month: 3, day: 7, title: "Sunday Service" }, // April (month 3)
    { year: 2025, month: 3, day: 17, title: "Activity Night" },
    { year: 2025, month: 4, day: 11, title: "Another Event" } // May (month 4)
];

function checkIfEventOnDate(year, month, day) {
    return events.some(event => event.year === year && event.month === month && event.day === day);
}

function getEventTitle(year, month, day) {
    const event = events.find(e => e.year === year && e.month === month && e.day === day);
    return event ? event.title : '';
}

// Call renderCalendar again if you want to highlight initial events
renderCalendar();