const body = document.querySelector("body");
const hamburger = document.querySelector("nav .hamburger");
const closeSidebarButton = document.querySelector(
  ".links-container-wrapper .close-icon",
);
const sidebar = document.querySelector(".links-container-wrapper");

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

observer.observe(body);
