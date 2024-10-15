// Function to load external HTML into a specified element
function loadHTML(elementId, url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
      });
  }
  
  // Load the navbar on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    loadHTML('navbar', '../components/navbar.html');
  });
  