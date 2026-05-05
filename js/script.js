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
const campusDivisions = [
  {
    name: "Dhaka",
    slug: "dhaka",
    campuses: [
      "Tanzimul Ummah Alim Madrasah",
      "Tanzimul Ummah Alim Madrasah, Ibtedaie Branch",
      "Tanzimul Ummah Alim Madrasah, Permanent Campus Asulia",
      "Tanzimul Ummah Girls Hifz Madrasah",
      "Tanzimul Ummah Girls Madrasah",
      "Tanzimul Ummah Girls Madrasah, Narayanganj Branch",
      "Tanzimul Ummah Girls' Madrasah, Tangail Branch",
      "Tanzimul Ummah Hifz Madrasah",
      "Tanzimul Ummah Hifz Madrasah, Jatrabari Branch",
      "Tanzimul Ummah Hifz Madrasah, Al-Arqam Branch",
      "Tanzimul Ummah Hifz Madrasah, Chittagongroad Branch",
      "Tanzimul Ummah Hifz Madrasah, Dakkinkhan Branch"
    ]
  },
  {
    name: "Chattogram",
    slug: "chattogram",
    campuses: [
      "Tanzimul Umma Hifz Madrasah, Feni Non-Residential Branch",
      "Tanzimul Ummah Girls Hifz Madrasah, Cox's Bazar Branch",
      "Tanzimul Ummah Girls Hifz Madrasah, Noakhali Branch",
      "Tanzimul Ummah Girls Madrasah, Halishahar Branch",
      "Tanzimul Ummah Girls' Madrasah, Feni Branch",
      "Tanzimul Ummah Hifz Madrasah, Chattogram Branch",
      "Tanzimul Ummah Hifz Madrasah, Chandgaon Branch",
      "Tanzimul Ummah Hifz Madrasah, Chandpur Branch",
      "Tanzimul Ummah Hifz Madrasah, Cox's Bazar Branch",
      "Tanzimul Ummah Hifz Madrasah, Cumilla Branch",
      "Tanzimul Ummah Hifz Madrasah, Feni Branch",
      "Tanzimul Ummah Hifz Madrasah, Noakhali Branch",
      "Tanzimul Ummah Hifz Madrasah, Pahartali Branch"
    ]
  },
  {
    name: "Rajshahi",
    slug: "rajshahi",
    campuses: [
      "Tanzimul Ummah Girl's Hifz Madrasah, Rajshahi Branch",
      "Tanzimul Ummah Hifz Madrasah Rajshahi Non Residential Branch",
      "Tanzimul Ummah Hifz Madrasah, Rajshahi Branch",
      "Tanzimul Ummah Hifz Madrasah, Rajshahi Branch, Pre-Hifz Section",
      "Tanzimul Ummah Hifz Madrasah, Bogura Branch",
      "Tanzimul Ummah Hifz Madrasah, Bogura Branch Girl & Pre-hifz Section",
      "Tanzimul Ummah Madrasah, Bogura Branch",
      "Tanzimul Ummah Madrasah (Girls Section), Bogura Branch"
    ]
  },
  {
    name: "Khulna",
    slug: "khulna",
    campuses: [
      "Tanzimul Ummah Girls Hifz Madrasah, Khulna Branch",
      "Tanzimul Ummah Girls' Hifz Madrasah Jashore Branch",
      "Tanzimul Ummah Girls' Madrasah, Khulna Branch",
      "Tanzimul Ummah Hifz Madrasah Satkhira Branch",
      "Tanzimul Ummah Hifz Madrasah, Jashore Branch",
      "Tanzimul Ummah Hifz Madrasah, Khulna Branch",
      "Tanzimul Ummah Hifz Madrasah, Khulna Non-Residential Branch",
      "Tanzimul Ummah Madrasah, Jashore Branch",
      "Tanzimul Ummah Madrasah, Khulna Branch",
      "Tanzimul Ummah Pre-Hifz Madrasah, Jashore Branch",
      "Tanzimul Ummah Pre-Hifz Madrasah, Khulna Branch"
    ]
  },
  {
    name: "Rangpur",
    slug: "rangpur",
    campuses: [
      "Tanzimul Ummah Girls' Hifz Madrasah, Rangpur Branch",
      "Tanzimul Ummah Hifz Madrasah, Rangpur Branch",
      "Tanzimul Ummah Hifz Madrasah, Rangpur Branch, Pre-Hifz Section",
      "Tazimul Ummah Madrasah, Rangpur Branch"
    ]
  },
  {
    name: "Mymensingh",
    slug: "mymensingh",
    campuses: [
      "Tanzimul Ummah Hifz Madrasah Mymensingh Branch Naha Road Section",
      "Tanzimul Ummah Hifz Madrasah, Mymenshing Branch",
      "Tanzimul Ummah Hifz Madrasah, Mymensingh Branch Girls & Pre-Hifz Section"
    ]
  },
  {
    name: "Barishal",
    slug: "barishal",
    campuses: [
      "Tanzimul Ummah Girls' Madrasah, Barishal Branch",
      "Tanzimul Ummah Hifz Madrasah, Barisal Branch",
      "Tanzimul Ummah Hifz Madrasah, Pirojpur Branch",
      "Tanzimul Ummah Madrasah Barishal Branch"
    ]
  },
  {
    name: "Sylhet",
    slug: "sylhet",
    campuses: ["Tanzimul Ummah Madrasah, Sylhet Branch"]
  }
].filter((division) => division.campuses.length);

window.tufCampusDivisions = campusDivisions;

let audioPercent = 72;
let progressTimer = null;
let navStart = 0;

navSpacer.className = "nav-spacer";
mainNav.after(navSpacer);

function hidePreloader() {
  if (!preloader || preloader.classList.contains("is-hidden")) {
    return;
  }

  preloader.classList.add("is-hidden");

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

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDivisionUrl(division) {
  return `campus-division.html?division=${division.slug}`;
}

function getCampusUrl(division, campus) {
  return `campus.html?division=${division.slug}&campus=${toSlug(campus)}`;
}

function renderCampusMegaMenu() {
  const campusLinks = Array.from(document.querySelectorAll(".mainnav .dropdown-toggle"))
    .filter((link) => link.textContent.trim() === "Our Campuses");

  campusLinks.forEach((link, menuIndex) => {
    const menu = link.nextElementSibling;

    if (!menu || !menu.classList.contains("dropdown-menu")) {
      return;
    }

    menu.className = "dropdown-menu campus-mega-menu";
    menu.setAttribute("aria-label", "Campus divisions");
    menu.innerHTML = `
      <li class="campus-mega-panel">
        <div class="campus-division-list" id="campusDivisionMenu${menuIndex}">
          ${campusDivisions.map((division, divisionIndex) => {
            const collapseId = `campusDivision${menuIndex}${divisionIndex}`;
            const isOpen = divisionIndex === 0;

            return `
              <div class="campus-division-group">
                <button class="campus-division-toggle ${isOpen ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isOpen}" aria-controls="${collapseId}">
                  <span>${division.name}</span>
                  <small>${division.campuses.length} campuses</small>
                  <i class="bi bi-chevron-down"></i>
                </button>
                <div id="${collapseId}" class="collapse ${isOpen ? "show" : ""}" data-bs-parent="#campusDivisionMenu${menuIndex}">
                  <div class="campus-branch-list">
                    ${division.campuses.map((campus) => `
                      <a href="${getDivisionUrl(division)}#${toSlug(campus)}" class="campus-branch-link">
                        <i class="bi bi-building"></i>
                        <span>${campus}</span>
                      </a>
                    `).join("")}
                  </div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </li>
    `;
  });

  document.querySelectorAll(".campus-mega-menu").forEach((menu) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

renderCampusMegaMenu();

function renderCampusDivisionPage() {
  const divisionTitle = document.querySelector("#divisionTitle");
  const divisionIntro = document.querySelector("#divisionIntro");
  const divisionCount = document.querySelector("#divisionCount");
  const divisionGrid = document.querySelector("#divisionCampusGrid");
  const divisionTabs = document.querySelector("#divisionTabs");

  if (!divisionTitle || !divisionGrid) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const activeSlug = params.get("division") || campusDivisions[0].slug;
  const activeDivision = campusDivisions.find((division) => division.slug === activeSlug) || campusDivisions[0];

  document.title = `${activeDivision.name} Campuses - Tanzimul Ummah Foundation`;
  divisionTitle.textContent = `${activeDivision.name} Campuses`;
  divisionIntro.textContent = `Explore Tanzimul Ummah Foundation campuses listed under ${activeDivision.name} division.`;

  if (divisionCount) {
    divisionCount.textContent = `${activeDivision.campuses.length} Campuses`;
  }

  if (divisionTabs) {
    divisionTabs.innerHTML = campusDivisions.map((division) => `
      <a class="${division.slug === activeDivision.slug ? "is-active" : ""}" href="${getDivisionUrl(division)}">
        ${division.name}
      </a>
    `).join("");
  }

  divisionGrid.innerHTML = activeDivision.campuses.map((campus, index) => `
    <article class="division-campus-card" id="${toSlug(campus)}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h2>${campus}</h2>
      <p>${activeDivision.name} division campus for Quran, Hifz, Madrasah, academic study, and student care programs.</p>
      <a href="${getCampusUrl(activeDivision, campus)}">Contact Office</a>
    </article>
  `).join("");
}

renderCampusDivisionPage();

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
