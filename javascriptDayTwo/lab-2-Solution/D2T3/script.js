// Function to convert 24-hour time to 12-hour time
function convertTo12HourClock(hour) {
    if (hour === 0) {
        return "12AM";
    } else if (hour >= 1 && hour <= 11) {
        return hour + "AM";
    } else if (hour === 12) {
        return "12PM";
    } else {
        return (hour - 12) + "PM";
    }
}

// Examples
let time1 = 0;   // 12AM
let time2 = 11;  // 11AM
let time3 = 13;  // 1PM

// Display the converted times
console.log(`${time1} -> ${convertTo12HourClock(time1)}`);
console.log(`${time2} -> ${convertTo12HourClock(time2)}`);
console.log(`${time3} -> ${convertTo12HourClock(time3)}`);
