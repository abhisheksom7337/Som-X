console.log("🚀 Welcome to SomX");

// ================= WAITLIST MODAL =================

document.addEventListener("DOMContentLoaded", function () {

    const openWaitlist = document.getElementById("openWaitlist");
    const closeWaitlist = document.getElementById("closeWaitlist");
    const waitlistModal = document.getElementById("waitlistModal");
    const waitlistForm = document.getElementById("waitlistForm");

    // Check if all required elements exist
    if (!openWaitlist || !closeWaitlist || !waitlistModal || !waitlistForm) {
        console.error("❌ Waitlist elements not found.");
        return;
    }

    // Open Popup
    openWaitlist.addEventListener("click", function (e) {
        e.preventDefault();
        waitlistModal.classList.add("active");
    });

    // Close Popup
    closeWaitlist.addEventListener("click", function () {
        waitlistModal.classList.remove("active");
    });

    // Close when clicking outside
    waitlistModal.addEventListener("click", function (e) {
        if (e.target === waitlistModal) {
            waitlistModal.classList.remove("active");
        }
    });

    // ================= GOOGLE FORM SUBMIT =================

    waitlistForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const college = document.getElementById("college").value.trim();

        const formURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSdoMWKYKHA8Nc__A0oloDTjfLlswMh1ni1Zxi1Y8of4P5QslQ/formResponse";

        const formData = new FormData();

        formData.append("entry.898040606", name);
        formData.append("entry.454043486", email);
        formData.append("entry.362883358", college);

        fetch(formURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        waitlistForm.innerHTML = `
            <div class="success-message">
                <h2>🎉 You're In!</h2>
                <p>
                    Welcome to the SomX Early Access Program.
                    <br><br>
                    We'll notify you when SomX launches.
                </p>
            </div>
        `;
    });

});