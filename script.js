(() => {
  "use strict";

  // Replace this one value when the real purchasing page is ready.
  const PURCHASE_URL = "https://example.com/";
  const purchaseLinks = document.querySelectorAll("[data-purchase-link]");

  purchaseLinks.forEach((link) => {
    link.href = PURCHASE_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", link.getAttribute("href"));
    });
  });
})();
