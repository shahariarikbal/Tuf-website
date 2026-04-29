const programData = {
  alim: {
    type: "Senior Madrasah Program",
    title: "Alim Madrasah",
    intro: "Higher madrasah education combining Islamic studies, Arabic, and academic preparation for advanced learners.",
    image: "assets/img3.jpeg",
    description: "Alim Madrasah supports senior students with Quran, Hadith, Fiqh, Arabic, Bangla, English, and board-focused academic preparation. The program is designed for learners who need strong Islamic grounding with disciplined academic progress.",
    stats: [["Senior", "Program Level"], ["Board", "Exam Preparation"], ["Arabic", "Core Focus"]],
    info: [["Level", "Senior madrasah"], ["Focus", "Islamic studies and academics"], ["Suitable For", "Post-Dakhil learners"], ["Contact", "01811473335"]],
    activities: ["Hadith, Fiqh and Arabic lessons", "Board syllabus preparation", "Weekly class tests and feedback", "Presentation and lecture practice"],
    features: [["Islamic Scholarship", "Structured study in core Islamic subjects with teacher guidance.", "bi-book"], ["Academic Preparation", "Regular tests and feedback support board exam readiness.", "bi-mortarboard"], ["Language Skills", "Arabic, Bangla and English learning are developed together.", "bi-translate"]]
  },
  ibtedaie: {
    type: "Primary Madrasah Program",
    title: "Ibtedaie Madrasah",
    intro: "Foundation-level Islamic and academic education for young learners.",
    image: "assets/img2.jpeg",
    description: "Ibtedaie Madrasah builds early learning habits through Quran reading, basic Islamic studies, Bangla, English, math, handwriting, discipline, and classroom manners.",
    stats: [["Primary", "Level"], ["Daily", "Quran Reading"], ["Core", "Basic Subjects"]],
    info: [["Level", "Primary"], ["Focus", "Quran, adab, basics"], ["Suitable For", "Young learners"], ["Contact", "01811473335"]],
    activities: ["Quran reading and basic tajweed", "Handwriting and language practice", "Math and general knowledge lessons", "Adab, prayer and classroom routine"],
    features: [["Strong Foundation", "Young students learn reading, writing, Quran and manners together.", "bi-pencil-square"], ["Caring Routine", "Classroom routines support confidence and discipline.", "bi-person-hearts"], ["Parent Updates", "Guardians receive guidance about progress and practice.", "bi-chat-dots"]]
  },
  "pre-hifz": {
    type: "Quran Preparation Program",
    title: "Pre-Hifz Madrasah",
    intro: "Preparation pathway for students before full Quran memorization.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=80",
    description: "Pre-Hifz prepares students for memorization by improving Quran reading fluency, tajweed basics, listening ability, discipline, and daily revision habits.",
    stats: [["Prep", "Hifz Readiness"], ["Daily", "Reading Practice"], ["Tajweed", "Correction"]],
    info: [["Level", "Before Hifz"], ["Focus", "Reading fluency"], ["Routine", "Tilawat and revision"], ["Contact", "01811473337"]],
    activities: ["Nazera Quran reading", "Tajweed correction", "Short surah memorization", "Daily revision habit building"],
    features: [["Reading Fluency", "Students strengthen Quran reading before memorization begins.", "bi-book-half"], ["Tajweed Basics", "Teachers correct pronunciation and rhythm step by step.", "bi-soundwave"], ["Hifz Readiness", "Routine and discipline prepare students for full Hifz.", "bi-check2-circle"]]
  },
  hifz: {
    type: "Quran Memorization Program",
    title: "Hifz Madrasah",
    intro: "Dedicated memorization program with sabaq, sabqi, manzil, and tajweed care.",
    image: "assets/img1.jpg",
    description: "Hifz Madrasah follows a disciplined memorization routine with daily sabaq, previous revision, manzil, teacher listening, tajweed correction, and regular progress review.",
    stats: [["Daily", "Sabaq Routine"], ["850+", "Graduates"], ["Tajweed", "Focused"]],
    info: [["Level", "Hifz"], ["Focus", "Quran memorization"], ["Routine", "Sabaq, sabqi, manzil"], ["Contact", "01811473337"]],
    activities: ["Daily memorization target", "Previous lesson revision", "Tajweed and recitation correction", "Monthly progress review"],
    features: [["Memorization Plan", "Targets are set according to student ability and progress.", "bi-journal-bookmark"], ["Revision System", "Regular revision protects memorized portions.", "bi-arrow-repeat"], ["Teacher Listening", "Students recite to teachers every day.", "bi-ear"]]
  },
  girls: {
    type: "Girls' Academic Program",
    title: "Girls' Madrasah",
    intro: "Separate girls' program for Quran, Islamic values, academics, and character development.",
    image: "assets/img2.jpeg",
    description: "Girls' Madrasah provides a safe and separate learning environment with Quran, Islamic studies, academic lessons, adab training, and attentive supervision.",
    stats: [["Separate", "Girls' Environment"], ["Female", "Teacher Support"], ["Safe", "Learning Routine"]],
    info: [["Level", "Girls' program"], ["Focus", "Quran and academics"], ["Environment", "Separate campus"], ["Contact", "01855935350"]],
    activities: ["Quran and tajweed classes", "Academic subject lessons", "Adab and moral education", "Creative presentation activities"],
    features: [["Safe Environment", "Separate learning space supports comfort and discipline.", "bi-shield-check"], ["Female Teachers", "Qualified teachers guide academic and personal growth.", "bi-person-hearts"], ["Balanced Learning", "Quran, academics and character are taught together.", "bi-diagram-3"]]
  },
  tahfiz: {
    type: "Integrated Quran Program",
    title: "Tahfiz School",
    intro: "An integrated school pathway balancing Quran memorization and mainstream academic subjects.",
    image: "assets/img4.jpeg",
    description: "Tahfiz School balances Hifz-style Quran learning with academic subjects, helping students continue memorization while maintaining class-based study progress.",
    stats: [["Integrated", "Quran + Academic"], ["Daily", "Dual Routine"], ["Guided", "Progress Tracking"]],
    info: [["Level", "Integrated school"], ["Focus", "Quran and academics"], ["Routine", "Memorization plus class"], ["Contact", "01811473335"]],
    activities: ["Quran memorization", "Academic class lessons", "Study monitoring", "Prayer and discipline practice"],
    features: [["Dual Routine", "Students receive dedicated time for Quran and academic lessons.", "bi-calendar-check"], ["Progress Balance", "Teachers monitor both memorization and class performance.", "bi-clipboard-data"], ["Student Discipline", "Routine builds focus, responsibility and study habits.", "bi-shield-check"]]
  },
  "girls-hifz": {
    type: "Girls' Quran Memorization",
    title: "Girls' Hifz Madrasah",
    intro: "Separate Hifz pathway for girls with Quran memorization, tajweed, and caring supervision.",
    image: "assets/s2.jpeg",
    description: "Girls' Hifz Madrasah supports memorization in a separate girls' environment with female teacher guidance, tajweed correction, revision, and guardian communication.",
    stats: [["Girls", "Separate Hifz"], ["Tajweed", "Correction"], ["Daily", "Revision"]],
    info: [["Level", "Girls' Hifz"], ["Focus", "Memorization"], ["Environment", "Separate girls' campus"], ["Contact", "01855935350"]],
    activities: ["Daily sabaq and revision", "Tajweed correction", "Short and long revision cycles", "Guardian progress updates"],
    features: [["Separate Care", "Girls learn in a safe and focused memorization environment.", "bi-house-heart"], ["Revision Routine", "Daily revision keeps memorization strong.", "bi-arrow-repeat"], ["Guardian Updates", "Parents receive guidance on progress and practice.", "bi-telephone"]]
  },
  dakhil: {
    type: "Secondary Madrasah Program",
    title: "Dakhil Madrasah",
    intro: "Secondary madrasah education with Islamic studies and board exam preparation.",
    image: "assets/img3.jpeg",
    description: "Dakhil Madrasah combines Islamic subjects with Bangla, English, math, science, Arabic, and board-focused preparation for secondary-level students.",
    stats: [["Secondary", "Level"], ["Board", "Preparation"], ["Balanced", "Islamic + Academic"]],
    info: [["Level", "Secondary"], ["Focus", "Board preparation"], ["Subjects", "Islamic and general"], ["Contact", "01707145465"]],
    activities: ["Daily class lessons", "Class tests and model exams", "Arabic and Islamic studies", "Science, math and language support"],
    features: [["Board Focus", "Class routine supports preparation for public examinations.", "bi-award"], ["Subject Support", "Teachers guide students across Islamic and general subjects.", "bi-journal-check"], ["Regular Assessment", "Tests and feedback help track student progress.", "bi-bar-chart"]]
  }
};

const params = new URLSearchParams(window.location.search);
const programKey = params.get("program") || "hifz";
const program = programData[programKey] || programData.hifz;

document.title = `${program.title} - Tanzimul Ummah Foundation`;
document.querySelector("#campusType").textContent = program.type;
document.querySelector("#campusTitle").textContent = program.title;
document.querySelector("#campusIntro").textContent = program.intro;
document.querySelector("#campusHeroBg").style.backgroundImage = `url("${program.image}")`;
document.querySelector("#campusOverviewTitle").textContent = `${program.title} Pathway`;
document.querySelector("#campusDescription").textContent = program.description;

document.querySelector("#campusStats").innerHTML = program.stats.map(([value, label]) => `
  <article>
    <strong>${value}</strong>
    <span>${label}</span>
  </article>
`).join("");

document.querySelector("#campusInfo").innerHTML = `
  <h3>Program Information</h3>
  ${program.info.map(([label, value]) => `
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("")}
  <form class="campus-inquiry-form">
    <h3>Program Inquiry</h3>
    <input type="text" name="guardian_name" placeholder="Guardian name" aria-label="Guardian name" required>
    <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required>
    <input type="text" name="student_class" placeholder="Student class / level" aria-label="Student class or level">
    <select name="interest" aria-label="Interested program">
      <option>${program.title}</option>
      <option>Hifz</option>
      <option>Tahfiz</option>
      <option>Dakhil</option>
      <option>Alim</option>
      <option>Residential</option>
    </select>
    <textarea name="message" rows="4" placeholder="Write your question" aria-label="Write your question"></textarea>
    <button type="submit">Submit Inquiry</button>
  </form>
`;

document.querySelector("#campusActivities").innerHTML = program.activities.map((activity) => `
  <article>
    <i class="bi bi-check2-circle"></i>
    <span>${activity}</span>
  </article>
`).join("");

document.querySelector("#campusFeatures").innerHTML = program.features.map(([title, text, icon]) => `
  <article>
    <i class="bi ${icon}"></i>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`).join("");
