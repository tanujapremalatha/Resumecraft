
function updateResume() {
    // Get the user's input and display it in the resume

    document.getElementById("previewName").textContent =
        document.getElementById("name").value || "Your Name";

    document.getElementById("previewJob").textContent =
        document.getElementById("job").value || "Your Job Title";

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    document.getElementById("previewContact").textContent =
        [email, phone].filter(Boolean).join(" | ") || "Email | Phone";

    document.getElementById("previewSummary").textContent =
        document.getElementById("summary").value ||
        "Your summary will appear here.";

    document.getElementById("previewEducation").textContent =
        document.getElementById("education").value ||
        "Your education will appear here.";

    document.getElementById("previewSkills").textContent =
        document.getElementById("skills").value ||
        "Your skills will appear here.";

    document.getElementById("previewExperience").textContent =
        document.getElementById("experience").value ||
        "Your experience will appear here.";
}

// Change between the available resume templates
function changeTemplate() {
    const selectedTemplate =
        document.getElementById("template").value;

    const resume = document.getElementById("resume");

    resume.className = "resume " + selectedTemplate;
}

// Open the browser's print dialog to save the resume as a PDF
function downloadResume() {
    window.print();
}

// Show the default resume when the page first opens
updateResume();
