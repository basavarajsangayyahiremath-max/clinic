(function () {
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("site-nav");
  if (!toggle || !navLinks) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navLinks.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
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
