document.addEventListener('DOMContentLoaded', function() {
    // Existing form submission handling (no changes needed here)
    const reviewForm = document.querySelector('form');
    const productNameSelect = document.getElementById('product-name');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const featuresCheckboxes = document.querySelectorAll('input[name="features"]');
    const writtenReviewTextarea = document.getElementById('written-review');
    const yourNameInput = document.getElementById('your-name');
    const postReviewButton = document.querySelector('button[type="submit"]');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const selectedProduct = productNameSelect.value;
            let selectedRating = null;
            for (const ratingInput of ratingInputs) {
                if (ratingInput.checked) {
                    selectedRating = ratingInput.value;
                    break;
                }
            }
            const selectedFeatures = [];
            for (const featureCheckbox of featuresCheckboxes) {
                if (featureCheckbox.checked) {
                    selectedFeatures.push(featureCheckbox.value);
                }
            }
            const writtenReview = writtenReviewTextarea.value.trim();
            const yourName = yourNameInput.value.trim();

            if (selectedProduct === "Choose a Product ...") {
                alert("Please choose a product.");
                return;
            }

            if (!selectedRating) {
                alert("Please select an overall rating.");
                return;
            }

            console.log("Selected Product:", selectedProduct);
            console.log("Overall Rating:", selectedRating);
            console.log("Selected Features:", selectedFeatures);
            console.log("Written Review:", writtenReview);
            console.log("Your Name:", yourName);

            alert("Review submitted (data logged to console).");
            reviewForm.reset();
        });
    }

    // JavaScript for the footer
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    if (lastModifiedParagraph) {
        const lastModifiedDate = new Date(document.lastModified);
        const formattedDate = lastModifiedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }); // Short month format
        const formattedTime = lastModifiedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // 24-hour format
        lastModifiedParagraph.textContent = `Last Modification: ${formattedDate.split('/').join('/')} ${formattedTime.replace(':', ':')}`;
    }
});