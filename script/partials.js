// Function to load HTML content
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// Load header and footer on every page
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('../partials/header.html', 'header-placeholder');
    loadHTML('../partials/footer.html', 'footer-placeholder');
});
