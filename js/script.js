const backTop = document.querySelector("#backTop");
const siteHeader = document.querySelector(".site-header");
const mainNav = document.querySelector(".mainnav");
const audioBar = document.querySelector("#audioBar");
const audioCurrent = document.querySelector("#audioCurrent");
const audioButtons = document.querySelectorAll(".audio-controls button");
const preloader = document.querySelector("#preloader");
const photoLightbox = document.querySelector("#photoLightbox");
const photoLightboxImage = document.querySelector("#photoLightboxImage");
const photoLightboxTitle = document.querySelector("#photoLightboxTitle");
const photoLightboxText = document.querySelector("#photoLightboxText");
const galleryFilterButtons = document.querySelectorAll("[data-gallery-filter]");
const galleryCards = document.querySelectorAll("[data-gallery-category]");
const navSpacer = document.createElement("div");

let audioPercent = 72;
let progressTimer = null;
let navStart = 0;

navSpacer.className = "nav-spacer";
mainNav.after(navSpacer);

if (preloader) {
  document.body.classList.add("preloader-active");
}

function hidePreloader() {
  if (!preloader || preloader.classList.contains("is-hidden")) {
    return;
  }

  preloader.classList.add("is-hidden");
  document.body.classList.remove("preloader-active");

  window.setTimeout(() => {
    preloader.setAttribute("hidden", "");
  }, 500);
}

function measureNav() {
  navStart = siteHeader ? siteHeader.offsetHeight : 0;
  navSpacer.style.height = `${mainNav.offsetHeight}px`;
}

function updateStickyNav() {
  const shouldFix = window.scrollY >= navStart;
  mainNav.classList.toggle("is-fixed", shouldFix);
  navSpacer.classList.toggle("is-active", shouldFix);
}

function renderAudioProgress() {
  if (!audioBar || !audioCurrent) {
    return;
  }

  const totalSeconds = 38;
  const currentSeconds = Math.round((audioPercent / 100) * totalSeconds);
  const minutes = String(Math.floor(currentSeconds / 60)).padStart(2, "0");
  const seconds = String(currentSeconds % 60).padStart(2, "0");

  audioBar.style.width = `${audioPercent}%`;
  audioBar.parentElement.setAttribute("aria-valuenow", String(audioPercent));
  audioCurrent.textContent = `${minutes}:${seconds}`;
}

function startProgress() {
  window.clearInterval(progressTimer);
  progressTimer = window.setInterval(() => {
    audioPercent = audioPercent >= 100 ? 0 : audioPercent + 1;
    renderAudioProgress();
  }, 500);
}

audioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "play") {
      startProgress();
    }

    if (action === "pause") {
      window.clearInterval(progressTimer);
    }

    if (action === "stop") {
      window.clearInterval(progressTimer);
      audioPercent = 0;
      renderAudioProgress();
    }

    if (action === "back" || action === "forward") {
      audioPercent += action === "forward" ? 8 : -8;
      audioPercent = Math.max(0, Math.min(100, audioPercent));
      renderAudioProgress();
    }
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

if (photoLightbox && window.bootstrap) {
  const lightboxModal = new bootstrap.Modal(photoLightbox);

  document.querySelectorAll(".photo-gallery-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();

      const image = card.querySelector("img");
      const title = card.querySelector("strong");
      const caption = card.querySelector("small");

      photoLightboxImage.src = card.getAttribute("href");
      photoLightboxImage.alt = image ? image.alt : "";
      photoLightboxTitle.textContent = title ? title.textContent : "Photo Gallery";
      photoLightboxText.textContent = caption ? caption.textContent : "";
      lightboxModal.show();
    });
  });
}

galleryFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.galleryFilter;

    galleryFilterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    galleryCards.forEach((card) => {
      const categories = (card.dataset.galleryCategory || "").split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", () => {
  updateStickyNav();

  if (window.scrollY > 300) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  measureNav();
  updateStickyNav();
});

if (document.readyState === "complete") {
  window.setTimeout(hidePreloader, 0);
} else {
  window.addEventListener("load", hidePreloader);
}

window.setTimeout(hidePreloader, 3500);

// Initially hide the button
backTop.style.display = "none";

document.querySelector("#year").textContent = new Date().getFullYear();
measureNav();
updateStickyNav();
renderAudioProgress();
