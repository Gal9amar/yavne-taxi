
    function randomCheckbox() {
        // Get all checkboxes
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Get a random checkbox
        var randomCheckbox = checkboxes[Math.floor(Math.random() * checkboxes.length)];
        // Toggle the checked property
        randomCheckbox.checked = !randomCheckbox.checked;
    }
setInterval(randomCheckbox, 1000);


