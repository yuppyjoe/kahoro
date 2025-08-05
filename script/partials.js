// partials.js

document.addEventListener("DOMContentLoaded", () => {
    const depth = window.location.pathname.split("/").length - 2;
    const basePath = "../".repeat(depth);
  
    function loadPartial(file, targetId) {
      fetch(basePath + "partials/" + file)
        .then(res => res.text())
        .then(html => {
          document.getElementById(targetId).innerHTML = html;
        })
        .catch(err => console.error(`Error loading ${file}:`, err));
    }
  
    loadPartial("header.html", "header-placeholder");
    loadPartial("footer.html", "footer-placeholder");
  });
  