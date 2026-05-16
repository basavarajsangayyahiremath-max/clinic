(function () {
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("site-nav");
  if (!toggle || !navLinks) return;

  var nav = toggle.closest(".nav");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navLinks.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-menu-open", open);
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.classList.contains("is-open")) return;
    if (nav && nav.contains(e.target)) return;
    setOpen(false);
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && navLinks.classList.contains("is-open")) {
      setOpen(false);
    }
  });
})();
