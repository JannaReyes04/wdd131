document.addEventListener("DOMContentLoaded", () => {
    const tempSpan = document.getElementById("temperature");
    const humiditySpan = document.getElementById("humidity");
    const windSpeedSpan = document.getElementById("windSpeed");
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    const heroSection = document.querySelector(".hero"); // Get the hero section

    // Sample average weather data for the Philippines
    const averageTemp = 30; // °C
    const averageHumidity = 75; // %
    const averageWindSpeed = 15; // km/h

    if (tempSpan) {
        tempSpan.textContent = averageTemp;
    }
    if (humiditySpan) {
        humiditySpan.textContent = averageHumidity;
    }
    if (windSpeedSpan) {
        windSpeedSpan.textContent = averageWindSpeed;
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Create and append the visually hidden style to the head
    const style = document.createElement("style");
    style.textContent = `
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
    document.head.appendChild(style);
});