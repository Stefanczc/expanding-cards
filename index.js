const gridItems = document.querySelectorAll('.picture-box');
const container = document.querySelector('.container');

// gridItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     let newColumns = '';
//     for (let i = 0; i < 5; i++) {
//       if (i === index) {
//         newColumns += ' 70%';
//       } else {
//         newColumns += ' 5%';
//       }
//     }
//     container.style.gridTemplateColumns = newColumns;
//   });
// });

const flexItems = document.getElementsByClassName('picture-box');
let rememberFlex = flexItems[0]; // Set the initially expanded element

for (let i = 0; i < flexItems.length; i++) {
    let flexItem = flexItems[i];
    flexItem.addEventListener('click', () => {
        if (rememberFlex !== flexItem) {
            rememberFlex.style.flex = '1'; // Reset the previously expanded element
            flexItem.style.flex = '15';    // Expand the clicked element
            rememberFlex = flexItem;       // Update the rememberFlex variable
        }
    });
}

