document.addEventListener("DOMContentLoaded", () => {
    // Follow button toggle logic
    const followButtons = document.querySelectorAll(".follow-btn");
    followButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const isFollowing = btn.getAttribute("data-following") === "true";
            btn.textContent = isFollowing ? "Follow" : "Following";
            btn.classList.toggle("following", !isFollowing);
            btn.setAttribute("data-following", !isFollowing);
        });
    });

    // Simulate dynamic suggestions
    const suggestions = [
        { id: "ubey_lih", name: "Ubey Lih", img: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg" },
        { id: "limsean_awersom", name: "Limsean Awersom", img: "https://cdn.pixabay.com/photo/2020/08/02/18/08/woman-5458225_640.png" },
        { id: "rootpies567t", name: "Rootpies567t", img: "https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg" },
        { id: "Cosmo-Charm_17", name: "Rootpies567t", img: "https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg" },
        { id: "devanda_bike_rider_", name: "vasu devan", img: "vasu.jpg" },
    ];

    const seeAllBtn = document.querySelector(".see-all-btn");
    const suggestionsContainer = document.getElementById("suggestions-container");

    seeAllBtn.addEventListener("click", () => {
        suggestionsContainer.innerHTML = ""; // Clear existing suggestions
        suggestions.forEach((profile) => {
            const profileHTML = `
                <div class="profile-follow profile-follow-hovering">
                    <div class="profile-follow-left">
                        <div class="profile-follow-image">
                            <img src="${profile.img}" alt="Profile picture of ${profile.name}">
                        </div>
                        <div class="profile-follow-content">
                            <p class="profile-id">${profile.id}</p>
                            <p class="profile-name">${profile.name}</p>
                        </div>
                    </div>
                    <button class="follow-btn" data-following="false">Follow</button>
                </div>
            `;
            suggestionsContainer.insertAdjacentHTML("beforeend", profileHTML);
        });

        // Reattach follow button events to newly added buttons
        const newFollowButtons = suggestionsContainer.querySelectorAll(".follow-btn");
        newFollowButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const isFollowing = btn.getAttribute("data-following") === "true";
                btn.textContent = isFollowing ? "Follow" : "Following";
                btn.classList.toggle("following", !isFollowing);
                btn.setAttribute("data-following", !isFollowing);
            });
        });
    });
});
