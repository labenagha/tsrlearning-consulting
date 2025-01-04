
function toggleAnswer(button) {
    
// Get the .faq-answer div right after the clicked button
    const answer = button.nextElementSibling;

    // Toggle its visibility
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}