document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.querySelector('form');
    const productNameSelect = document.getElementById('product-name');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const featuresCheckboxes = document.querySelectorAll('input[name="features"]');
    const writtenReviewTextarea = document.getElementById('written-review');
    const yourNameInput = document.getElementById('your-name');
    const postReviewButton = document.querySelector('button[type="submit"]');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the selected product
            const selectedProduct = productNameSelect.value;

            // Get the selected rating
            let selectedRating = null;
            for (const ratingInput of ratingInputs) {
                if (ratingInput.checked) {
                    selectedRating = ratingInput.value;
                    break;
                }
            }

            // Get the selected features
            const selectedFeatures = [];
            for (const featureCheckbox of featuresCheckboxes) {
                if (featureCheckbox.checked) {
                    selectedFeatures.push(featureCheckbox.value);
                }
            }

            // Get the written review
            const writtenReview = writtenReviewTextarea.value.trim();

            // Get the user's name
            const yourName = yourNameInput.value.trim();

            // Basic validation (you can add more sophisticated validation)
            if (selectedProduct === "Choose a Product ...") {
                alert("Please choose a product.");
                return;
            }

            if (!selectedRating) {
                alert("Please select an overall rating.");
                return;
            }

            // For demonstration purposes, let's log the collected data
            console.log("Selected Product:", selectedProduct);
            console.log("Overall Rating:", selectedRating);
            console.log("Selected Features:", selectedFeatures);
            console.log("Written Review:", writtenReview);
            console.log("Your Name:", yourName);

            // In a real application, you would send this data to a server
            // using an AJAX request (e.g., fetch or XMLHttpRequest).
            alert("Review submitted (data logged to console).");

            // Optionally, you can reset the form after submission
            reviewForm.reset();
        });
    }
});