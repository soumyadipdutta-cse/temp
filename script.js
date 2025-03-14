// Theme Toggle Functionality
const themeToggleButton = document.getElementById("theme-toggle");

function toggleMenu() {
  const navMenu = document.querySelector("nav .right");
  navMenu.classList.toggle("nav-active");
}

// Check if the user has a saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

themeToggleButton.addEventListener("click", () => {
  const icon = document.getElementById("theme-icon");
  document.body.classList.toggle("dark-mode");

  // Update icon based on theme
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.textContent = "🌞"; // Sun for dark mode
  } else {
    localStorage.setItem("theme", "light");
    icon.textContent = "🌙"; // Moon for light mode
  }
});

// About Modal handling
const aboutModal = document.getElementById("aboutModal");
const aboutLink = document.getElementById("aboutLink");
const closeAbout = document.querySelector(".close");

// Open About Modal
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutModal.style.display = "flex"; // Show about modal
  aboutModal.classList.add("fade-in"); // Add fade-in animation
});

// Close About Modal
closeAbout.addEventListener("click", () => {
  aboutModal.classList.remove("fade-in");
  aboutModal.classList.add("fade-out");
  setTimeout(() => {
    aboutModal.style.display = "none"; // Hide modal
    aboutModal.classList.remove("fade-out");
  }, 400);
});

// Contact Modal handling
const contactModal = document.getElementById("contactModal");
const contactLink = document.querySelector("a[href='#'][id='contactLink']");
const closeBtns = document.querySelectorAll(".close");

// Open Contact Modal
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "flex"; // Show contact modal
  contactModal.classList.add("fade-in");
});

// Close Contact Modal
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal"); // Find the closest modal
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 400);
  });
});

// Close Modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("fade-in");
    e.target.classList.add("fade-out");
    setTimeout(() => {
      e.target.style.display = "none";
      e.target.classList.remove("fade-out");
    }, 400);
  }
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scrolling for each link
navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute("href").slice(1); // Get target section ID
    const targetElement = document.getElementById(targetId);

    // Smoothly scroll to the target element
    targetElement.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start" // Align to the top of the section
    });
  });
});
