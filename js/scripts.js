// Get references to HTML elements
const customNumberInput = document.getElementById("customNumber"); // Input field for custom number
const customColorButton = document.querySelector(".custColor"); // Button to change background color based on input
const randomColorButton = document.querySelector(".randColor"); // Button to change background color with a random number
const imageSelect = document.getElementById("imageSelect"); // Select list for choosing an image
const images = document.getElementById("images"); // Image element for displaying selected image
const studentId = "200543614"; // Student ID

// Function to change background color based on user input
function changeCustomColor() {
    const inputValue = customNumberInput.value;
    const body = document.body;

    if (inputValue < 0 || inputValue > 100) {
        body.style.backgroundColor = "red";
    } else if (inputValue >= 0 && inputValue <= 20) {
        body.style.backgroundColor = "green";
    } else if (inputValue > 20 && inputValue <= 40) {
        body.style.backgroundColor = "blue";
    } else if (inputValue > 40 && inputValue <= 60) {
        body.style.backgroundColor = "orange";
    } else if (inputValue > 60 && inputValue <= 80) {
        body.style.backgroundColor = "purple";
    } else if (inputValue > 80 && inputValue <= 100) {
        body.style.backgroundColor = "yellow";
    }

    // Update the content of an element with the student ID
    document.getElementById("myStudentId").textContent = `Student ID: ${studentId}`;
}

// Function to change background color with a random number
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomValue;
    changeCustomColor(); // Call the function to change background color with the new random value
}

// Function to generate options for the select list
function addList() {
    // Define your image sources in an array
    const imageSources = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    // Loop through the imageSources and add them as options to the select list
    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement("option");
        option.value = imageSources[i];
        option.text = imageSources[i];
        imageSelect.appendChild(option);
    }
}

// Function to change the image source based on the selected option in the select list
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `./img/${selectedImage}`;
}

// Event listeners for button clicks
customColorButton.addEventListener("click", changeCustomColor); // Call changeCustomColor when the customColorButton is clicked
randomColorButton.addEventListener("click", changeRandomColor); // Call changeRandomColor when the randomColorButton is clicked

// Event listener for select list change
imageSelect.addEventListener("change", changeImage); // Call changeImage when the selected option in the imageSelect changes

// Initialize the select list options
addList();
