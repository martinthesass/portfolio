const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");






closeBtn.addEventListener("click", function(){
sidebar.classList.toggle("show-sidebar");
});

navBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 80) {
          navbar.classList.add("navbar-fixed");
        } else {
          navbar.classList.remove("navbar-fixed");
        }
      });