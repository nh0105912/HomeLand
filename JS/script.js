  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });



   document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".offcanvas-collapse");
    const closeBtn = document.querySelector(".close-btn");

    toggler.addEventListener("click", function () {
      menu.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  });


   const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active")); // remove from all
      this.classList.add("active"); // add to clicked
    });
  });

  // Highlight based on scroll (like React NavLink)
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop - 100; // adjust for navbar height
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });