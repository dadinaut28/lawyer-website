const body = document.querySelector("body");
const hamburger = document.querySelector("nav .hamburger");
const closeSidebarButton = document.querySelector(
  ".links-container-wrapper .close-icon",
);
const sidebar = document.querySelector(".links-container-wrapper");
const faqShowButtons = document.querySelectorAll(
  ".question-response-row .show-button",
);

closeSidebarButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

hamburger.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

const observer = new ResizeObserver(([entry]) => {
  if (entry.contentRect.width > 720) {
    body.dataset.onLargeScreen = true;
  } else {
    if (body.dataset.onLargeScreen === "true") {
      sidebar.classList.remove("show-sidebar");
    }
    body.dataset.onLargeScreen = false;
  }
});
// Every show response button in faq has a response paragraph associated with the data-linkId, a paragraph with the same value for data-linkId. When we click on a button, we show or hide the response paragraph associated.
for (const button of faqShowButtons) {
  const response = document.querySelector(
    `p[data-linkId=${button.dataset.linkid}]`,
  );

  button.addEventListener("click", () => {
    if (button.dataset.showresponse === "false") {
      response.style.display = "block";
      button.dataset.showresponse = "true";
      button.textContent = "Fermer";
    } else {
      response.style.display = "none";
      button.dataset.showresponse = "false";
      button.textContent = "Ouvrir";
    }
  });
}

observer.observe(body);
