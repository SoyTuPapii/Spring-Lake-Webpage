"use-strict";

// Determine the next milking period based on the current time
function updateMilkingCountdown() {
    const now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let nextMilkingPeriod, nextMilkingHour;
    let isMilkingNow = false

    // Check if we are currently milking (3 AM - 6 AM or 3 PM - 6 PM)
    if ((currentHour >= 3 && currentHour < 6) || (currentHour >= 15 && currentHour < 18)) {
        isMilkingNow = true;
    }

    // If we are not currently milking, determine next milking time
    if (isMilkingNow) {
        document.getElementById("milkingCountdown").innerText = "We are currently milking cows!";
        return
    }

    if (currentHour < 3 || (currentHour === 3 && currentMinute === 0)) {
        nextMilkingHour = 3 // Next milking is today at 3 AM;
        nextMilkingPeriod = "3 AM";
    } else if (currentHour < 15 || (currentHour === 15 && currentMinute === 0)) {
        nextMilkingHour = 15 // Next milking is today at 3 PM;
        nextMilkingPeriod = "3 PM";
    } else {
        nextMilkingHour = 3 // Next milking is tomorrow at 3 AM;
        nextMilkingPeriod = "3 AM";
    }

    // Calculate hours and minutes until the next milking period
    let hoursUntil = (nextMilkingHour - currentHour + 24) % 24;
    let minutesUntil = 60 - currentMinute;


    if (currentMinute === 0) {
        minutesUntil = 0;
        hoursUntil += 1; // Move to the next hour
    }

    // Display time until the next milking
    let message = `Time remaining until next milking: ${hoursUntil} hour(s) and ${minutesUntil} minutes`;
    document.getElementById("milkingCountdown").innerText = message
}   

// Initial call to display the countdown
updateMilkingCountdown();
// Update every second
setInterval(updateMilkingCountdown, 1000); // 1000 ms = 1 second