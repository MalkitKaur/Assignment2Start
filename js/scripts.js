const customNumberInput = document.getElementById("customNumber");
        const customColorButton = document.querySelector(".custColor");
        const randomColorButton = document.querySelector(".randColor");
        const imageSelect = document.getElementById("imageSelect");
        const images = document.getElementById("images");
        const studentId = "200543614";

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

            document.getElementById("myStudentId").textContent = `Student ID: ${studentId}`;
        }

        // Function to change background color with a random number
        function changeRandomColor() {
            const randomValue = Math.floor(Math.random() * 100) + 1;
            customNumberInput.value = randomValue;
            changeCustomColor();
        }

        // Function to generate options for select list
        function addList() {
            // Define your image sources in an array
            const imageSources = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"];

            // Loop through the imageSources and add them as options to the select list
            for (let i = 0; i < imageSources.length; i++) {
                const option = document.createElement("option");
                option.value = imageSources[i];
                option.text = imageSources[i];
                imageSelect.appendChild(option);
            }
        }

        // Function to change the image source based on select list option
        function changeImage() {
            const selectedImage = imageSelect.value;
            images.src = `./img/${selectedImage}`;;
        }

        // Event listeners for button clicks
        customColorButton.addEventListener("click", changeCustomColor);
        randomColorButton.addEventListener("click", changeRandomColor);

        // Event listener for select list change
        imageSelect.addEventListener("change", changeImage);

        // Initialize the select list options
        addList();
