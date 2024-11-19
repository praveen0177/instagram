document.addEventListener("DOMContentLoaded", () => {
    const createSection = document.querySelector("#create");
    const uploadPhotoInput = document.querySelector("#upload-photo");
    const modal = document.querySelector("#photo-modal");
    const closeModal = document.querySelector(".close-modal");
    const previewImage = document.querySelector("#preview-image");
    const postPhotoButton = document.querySelector("#post-photo");
    const postsContainer = document.querySelector("#posts-container");

    // Trigger file input dialog
    createSection.addEventListener("click", () => {
        uploadPhotoInput.click();
    });

    // Handle file selection and show modal
    uploadPhotoInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result; // Set the preview image
                modal.style.display = "block"; // Show the modal
            };
            reader.readAsDataURL(file);
        } else {
            alert("No file selected.");
        }
    });

    // Close the modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        uploadPhotoInput.value = ""; // Reset the file input
    });

    // Simulate posting the photo to .post-area
    postPhotoButton.addEventListener("click", () => {
        // Create a new post element
        const newPost = document.createElement("div");
        newPost.classList.add("post-item");

        const postImage = document.createElement("img");
        postImage.src = previewImage.src;
        postImage.alt = "Uploaded Post";

        // Append the image to the new post
        newPost.appendChild(postImage);

        // Add the new post to the posts container
        postsContainer.appendChild(newPost);

        // Close the modal
        modal.style.display = "none";
        uploadPhotoInput.value = ""; // Reset the file input

        alert("Your photo has been posted!");
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            uploadPhotoInput.value = ""; // Reset the file input
        }
    });
});
