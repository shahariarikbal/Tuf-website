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

const campusCategories = [
  {
    name: "Alim Madrasah",
    slug: "alim",
    icon: "bi-mortarboard",
    match: (campus) => campus.toLowerCase().includes("alim madrasah")
  },
  {
    name: "Hifz Madrasah",
    slug: "hifz",
    icon: "bi-book-half",
    match: (campus) => {
      const name = campus.toLowerCase();
      return name.includes("hifz madrasah") && !name.includes("pre-hifz") && !name.includes("girls hifz") && !name.includes("girls' hifz") && !name.includes("girl's hifz");
    }
  },
  {
    name: "Pre-Hifz Madrasah",
    slug: "pre-hifz",
    icon: "bi-journal-bookmark",
    match: (campus) => campus.toLowerCase().includes("pre-hifz")
  },
  {
    name: "Girls' Madrasah",
    slug: "girls",
    icon: "bi-person-hearts",
    match: (campus) => {
      const name = campus.toLowerCase();
      return (name.includes("girls madrasah") || name.includes("girls' madrasah") || name.includes("girl's madrasah") || name.includes("girls section")) && !name.includes("hifz");
    }
  },
  {
    name: "Girls' Hifz Madrasah",
    slug: "girls-hifz",
    icon: "bi-bookmark-heart",
    match: (campus) => {
      const name = campus.toLowerCase();
      return name.includes("girls hifz madrasah") || name.includes("girls' hifz madrasah") || name.includes("girl's hifz madrasah");
    }
  },
  {
    name: "Ibtedaie Madrasah",
    slug: "ibtedaie",
    icon: "bi-pencil-square",
    match: (campus) => campus.toLowerCase().includes("ibtedaie")
  },
  {
    name: "Madrasah",
    slug: "madrasah",
    icon: "bi-building",
    match: (campus) => campus.toLowerCase().includes("madrasah")
  }
];

window.tufCampusCategories = campusCategories;

function getCampusCategory(campus) {
  const ibtedaieCategory = campusCategories.find((category) => category.slug === "ibtedaie");

  if (ibtedaieCategory && ibtedaieCategory.match(campus)) {
    return ibtedaieCategory;
  }

  return campusCategories.find((category) => category.match(campus)) || campusCategories[campusCategories.length - 1];
}

function getCategoryUrl(category, division) {
  const divisionParam = division ? `division=${division.slug}&` : "";
  return `campus-division.html?${divisionParam}category=${category.slug}`;
}

function getCampusUrl(division, campus) {
  return `campus.html?division=${division.slug}&campus=${toSlug(campus)}`;
}

function getDivisionCategoryCampuses(division, category) {
  return division.campuses.filter((campus) => getCampusCategory(campus).slug === category.slug);
}

function getCategorizedCampuses(categorySlug, divisionSlug) {
  const category = campusCategories.find((item) => item.slug === categorySlug) || campusCategories[0];
  const divisions = divisionSlug
    ? campusDivisions.filter((division) => division.slug === divisionSlug)
    : campusDivisions;
  const campuses = divisions.flatMap((division) => getDivisionCategoryCampuses(division, category)
    .map((campus) => ({ division, campus })));

  return { category, campuses };
}

document.querySelectorAll(".campus-mega-menu").forEach((menu) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.querySelectorAll(".campus-program-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const item = link.closest(".campus-program-item");

    if (!item) {
      return;
    }

    event.preventDefault();
    item.parentElement.querySelectorAll(".campus-program-item.is-open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("is-open");
      }
    });
    item.classList.toggle("is-open");
  });
});

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
  const activeCategorySlug = params.get("category");
  const activeSlug = params.get("division") || campusDivisions[0].slug;
  const activeDivision = campusDivisions.find((division) => division.slug === activeSlug) || campusDivisions[0];

  if (activeCategorySlug) {
    const { category, campuses } = getCategorizedCampuses(activeCategorySlug, params.get("division"));
    const scopeLabel = params.get("division") ? `${activeDivision.name} ${category.name}` : category.name;

    document.title = `${scopeLabel} Campuses - Tanzimul Ummah Foundation`;
    divisionTitle.textContent = scopeLabel;
    divisionIntro.textContent = `Explore all ${scopeLabel} campuses under Tanzimul Ummah Foundation.`;

    if (divisionCount) {
      divisionCount.textContent = `${campuses.length} Campuses`;
    }

    if (divisionTabs) {
      divisionTabs.innerHTML = campusCategories.map((item) => `
        <a class="${item.slug === category.slug ? "is-active" : ""}" href="${getCategoryUrl(item, activeDivision)}">
          ${item.name}
        </a>
      `).join("");
    }

    divisionGrid.innerHTML = campuses.map(({ division, campus }, index) => `
      <article class="division-campus-card" id="${toSlug(campus)}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <small class="campus-card-meta">${division.name} Division</small>
        <h2>${campus}</h2>
        <p>${category.name} campus for Quran, Madrasah, academic study, supervision, and student care programs.</p>
        <a href="${getCampusUrl(division, campus)}">View Details</a>
      </article>
    `).join("");

    return;
  }

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
      <small class="campus-card-meta">${getCampusCategory(campus).name}</small>
      <h2>${campus}</h2>
      <p>${activeDivision.name} division campus for Quran, Hifz, Madrasah, academic study, and student care programs.</p>
      <a href="${getCampusUrl(activeDivision, campus)}">View Details</a>
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
