const flexItems = document.getElementsByClassName('picture-box'); //get the list of images 
let rememberFlex = flexItems[0]; // Set the first element that is expanded

for (let i = 0; i < flexItems.length; i++) { // iterate through the list of images 
    let flexItem = flexItems[i]; 
    flexItem.addEventListener('click', () => { // add event listener to each image 
        if (rememberFlex !== flexItem) {   // condition to check if user is selecting a new image on click
            rememberFlex.style.flex = '1'; // update value for not selected image
            flexItem.style.flex = '15';    // update value for the selected image
            rememberFlex = flexItem;       // update the rememberFlex variable so that we keep track of the expanded image
        }
    });
}

