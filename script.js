// Sample announcements data (replace this with your actual data)
const announcementsData = [
    // Add more announcements as needed
];

// Sample calendar events data (replace this with your actual data)
const calendarEventsData = [
    // Add more events as needed
];

//Sample
document.addEventListener("DOMContentLoaded", function() {
    // Load announcements
    const announcementContainer = document.getElementById("announcement-container");
    announcementsData.forEach(announcement => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${announcement.title}</h3><p>${announcement.content}</p>`;
        announcementContainer.appendChild(div);
    });

    // Load calendar events
    const calendarContainer = document.getElementById("calendar-container");
    calendarEventsData.forEach(event => {
        const div = document.createElement("div");
        div.innerHTML = `<p><strong>${event.date}</strong>: ${event.event}</p>`;
        calendarContainer.appendChild(div);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fullscreenVideoLink = document.getElementById("fullscreen-video-link");

    fullscreenVideoLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        const videoUrl = "https://www.youtube.com/embed/A3U5R3aEQZM?rel=0&autoplay=1"; // URL of the YouTube video
        openFullscreen(videoUrl);
    });

    function openFullscreen(url) {
        // Open the URL in fullscreen mode
        const fullscreenWindow = window.open(url, "_blank", "fullscreen=yes");
        if (fullscreenWindow) {
            // Listen for the fullscreen change event
            fullscreenWindow.addEventListener("resize", function() {
                // Close fullscreen mode if it's exited
                if (!document.fullscreenElement) {
                    fullscreenWindow.close();
                }
            });
        }
    }
});

