
    // Wait for the DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        // Set a timer to hide the loading screen after 3 seconds
        setTimeout(function() {
          // Hide the loading screen
          document.getElementById('loading-screen').style.display = 'none';
          // Show the main content
          document.getElementById('main-content').style.display = 'block';
        }, 3000); // 3000 milliseconds = 3 seconds
      });
  