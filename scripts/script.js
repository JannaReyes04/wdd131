document.addEventListener("DOMContentLoaded", () => {
    const tempSpan = document.getElementById("temperature");
    const humiditySpan = document.getElementById("humidity");
    const windSpeedSpan = document.getElementById("windSpeed");
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

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
});