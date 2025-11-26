document
  .getElementById("footer-signup-trigger")
  ?.addEventListener("click", () => {
    document.getElementById("signupModal").removeAttribute("hidden");
    document.getElementById("signupModal").classList.add("show");
  });

