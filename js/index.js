// save contact information function -
    function randomCheckbox() {
        // Get all checkboxes
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Get a random checkbox
        var randomCheckbox = checkboxes[Math.floor(Math.random() * checkboxes.length)];
        // Toggle the checked property
        randomCheckbox.checked = !randomCheckbox.checked;
    }
setInterval(randomCheckbox, 1000);

// faveicon function -
var favicon_images = [
                    'images/favicon/logo1.png',
                    'images/favicon/logo2.png',
                    'images/favicon/logo3.png',
                    'images/favicon/logo4.png',
                    'images/favicon/logo6.png',
                    'images/favicon/logo7.png',
                    'images/favicon/logo8.png',
                    'images/favicon/logo9.png',
                    'images/favicon/logo10.png',   
                ]
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    // remove current favicon
    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
        
    // add new favicon image
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 500);