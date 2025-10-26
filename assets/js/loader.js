// Disable clicks immediately so user can't interact with a half-loaded page
document.body.style.pointerEvents = "none";

// Listen for when the HTML document is ready
document.addEventListener('DOMContentLoaded', function() {
    // The page structure is loaded, so we can hide the loader
    document.querySelector(".loader-div").classList.add('hidden');
    document.body.style.pointerEvents = "all"; // Re-enable clicks
});