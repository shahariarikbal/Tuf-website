const campusData = {
  main: {
    type: "Main Campus",
    title: "Main Campus",
    intro: "The central campus for academic programs, student supervision, parent communication, and foundation activities.",
    image: "assets/img1.jpg",
    description: "Main Campus brings together Quran learning, Islamic studies, academic classes, discipline, and co-curricular guidance in a structured environment. Parents can visit this campus for admission support, academic progress updates, and foundation-level program information.",
    stats: [["2,500+", "Students Connected"], ["180+", "Teachers & Staff"], ["12+", "Academic Programs"]],
    info: [["Location", "Uttara, Dhaka-1230"], ["Office Time", "Sat - Thu, 8:00 AM - 5:00 PM"], ["Programs", "Dakhil, Alim, Hifz, Tahfiz"], ["Contact", "01811473335"]],
    activities: ["Morning assembly and Quran recitation", "Class tests and academic monitoring", "Parent meetings and progress reports", "Seminars, competitions, and foundation events"],
    features: [["Academic Coordination", "Central academic planning, routine management, and progress tracking.", "bi-diagram-3"], ["Student Counseling", "Guidance for study habits, discipline, and character development.", "bi-chat-square-heart"], ["Parent Support", "Office support for admission, records, fees, and campus communication.", "bi-people-fill"]]
  },
  boys: {
    type: "Boys' Campus",
    title: "Boys' Campus",
    intro: "A focused boys' learning environment for Quran, Islamic values, discipline, and academic preparation.",
    image: "assets/img4.jpeg",
    description: "Boys' Campus supports students through separate classrooms, supervised routines, prayer practice, and regular academic follow-up. The environment is designed to build confidence, responsibility, and consistent study habits.",
    stats: [["900+", "Boys Enrolled"], ["65+", "Teachers"], ["8+", "Activity Clubs"]],
    info: [["Environment", "Separate boys' campus"], ["Focus", "Adab, study routine, prayer"], ["Programs", "Ibtedaie, Dakhil, Hifz"], ["Contact", "01707145465"]],
    activities: ["Daily prayer and adab practice", "Quran recitation and memorization support", "Classroom competitions and quiz programs", "Sports and healthy group activities"],
    features: [["Discipline Routine", "Daily routines help students build punctuality and responsibility.", "bi-alarm"], ["Academic Support", "Teachers monitor homework, tests, and subject progress.", "bi-journal-check"], ["Character Building", "Students practice respect, service, and Islamic manners.", "bi-person-check"]]
  },
  girls: {
    type: "Girls' Campus",
    title: "Girls' Campus",
    intro: "A caring and separate campus for girls' Islamic education, academic study, and personal development.",
    image: "assets/img2.jpeg",
    description: "Girls' Campus offers a safe learning setting with attentive supervision, Quran classes, Islamic studies, academic lessons, and character-focused guidance. The campus supports parents through communication and regular progress updates.",
    stats: [["750+", "Girls Enrolled"], ["55+", "Female Teachers"], ["6+", "Core Programs"]],
    info: [["Environment", "Separate girls' campus"], ["Focus", "Quran, academics, character"], ["Programs", "Girls' Madrasah, Girls' Hifz"], ["Contact", "01855935350"]],
    activities: ["Quran and tajweed practice", "Academic classwork and assessments", "Moral education and adab sessions", "Creative learning and presentation activities"],
    features: [["Safe Supervision", "Dedicated supervision and structured routines for every class level.", "bi-shield-check"], ["Female Teachers", "Qualified teachers support learning, discipline, and confidence.", "bi-person-hearts"], ["Progress Updates", "Parents receive guidance on attendance and academic progress.", "bi-clipboard-data"]]
  },
  hifz: {
    type: "Hifz Campus",
    title: "Hifz Campus",
    intro: "Dedicated Quran memorization campus with tajweed, revision, and teacher-guided progress.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=80",
    description: "Hifz Campus is built around disciplined memorization, daily sabaq, revision cycles, tajweed correction, and close teacher supervision. Students are guided step by step so memorization remains accurate, steady, and spiritually grounded.",
    stats: [["850+", "Hifz Graduates"], ["40+", "Hifz Teachers"], ["Daily", "Revision Routine"]],
    info: [["Focus", "Hifz, tajweed, revision"], ["Routine", "Sabaq, sabqi, manzil"], ["Assessment", "Weekly progress review"], ["Contact", "01811473337"]],
    activities: ["Daily sabaq and teacher listening", "Sabqi and manzil revision cycle", "Tajweed correction and recitation practice", "Monthly memorization progress review"],
    features: [["Memorization Plan", "Personalized targets according to student ability and progress.", "bi-book-half"], ["Tajweed Care", "Correct pronunciation and fluency are reviewed every day.", "bi-soundwave"], ["Revision System", "Structured revision protects previous memorization.", "bi-arrow-repeat"]]
  },
  tahfiz: {
    type: "Tahfiz Campus",
    title: "Tahfiz Campus",
    intro: "An integrated pathway combining Quran memorization with academic learning and student discipline.",
    image: "assets/img3.jpeg",
    description: "Tahfiz Campus supports students who need both memorization and academic continuity. The routine balances Quran study, subject lessons, revision, prayer, and character training.",
    stats: [["500+", "Tahfiz Students"], ["30+", "Teachers"], ["Balanced", "Quran & Academic Routine"]],
    info: [["Focus", "Quran plus academics"], ["Routine", "Memorization and class lessons"], ["Support", "Study monitoring"], ["Contact", "01811473335"]],
    activities: ["Quran memorization with class study", "Academic subject support", "Prayer and discipline routine", "Progress tracking for both streams"],
    features: [["Balanced Routine", "Students receive time for Quran and mainstream subjects.", "bi-calendar-check"], ["Teacher Follow-up", "Class and memorization progress are monitored together.", "bi-person-lines-fill"], ["Study Skills", "Students learn revision discipline and independent study habits.", "bi-lightbulb"]]
  },
  residential: {
    type: "Residential Campus",
    title: "Residential Campus",
    intro: "A supervised residential environment for study, worship, discipline, and daily student care.",
    image: "assets/s3.jpeg",
    description: "Residential Campus gives students a structured daily routine with study time, prayer practice, meal supervision, rest, and character-building guidance. It is suitable for families who want a more controlled learning environment.",
    stats: [["24/7", "Supervision"], ["Safe", "Residential Care"], ["Daily", "Study Routine"]],
    info: [["Care", "Residential supervision"], ["Routine", "Study, prayer, meals, rest"], ["Support", "Guardian communication"], ["Contact", "01855935350"]],
    activities: ["Supervised study periods", "Prayer and Quran routine", "Meal and rest schedule", "Guardian updates and student care"],
    features: [["Daily Supervision", "Students follow a guided schedule from morning to night.", "bi-clock-history"], ["Residential Safety", "Care routines support discipline, cleanliness, and wellbeing.", "bi-house-check"], ["Guardian Updates", "Campus staff communicate important progress and care notes.", "bi-telephone"]]
  }
};

const params = new URLSearchParams(window.location.search);
const campusKey = params.get("campus") || "main";
const campus = campusData[campusKey] || campusData.main;

document.title = `${campus.title} - Tanzimul Ummah Foundation`;
document.querySelector("#campusType").textContent = campus.type;
document.querySelector("#campusTitle").textContent = campus.title;
document.querySelector("#campusIntro").textContent = campus.intro;
document.querySelector("#campusHeroBg").style.backgroundImage = `url("${campus.image}")`;
document.querySelector("#campusOverviewTitle").textContent = `${campus.title} Environment`;
document.querySelector("#campusDescription").textContent = campus.description;

document.querySelector("#campusStats").innerHTML = campus.stats.map(([value, label]) => `
  <article>
    <strong>${value}</strong>
    <span>${label}</span>
  </article>
`).join("");

document.querySelector("#campusInfo").innerHTML = `
  <h3>Campus Information</h3>
  ${campus.info.map(([label, value]) => `
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("")}
  <form class="campus-inquiry-form">
    <h3>Campus Inquiry</h3>
    <input type="text" name="guardian_name" placeholder="Guardian name" aria-label="Guardian name" required>
    <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required>
    <input type="text" name="student_class" placeholder="Student class / level" aria-label="Student class or level">
    <select name="interest" aria-label="Interested program">
      <option value="">Interested program</option>
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

document.querySelector("#campusActivities").innerHTML = campus.activities.map((activity) => `
  <article>
    <i class="bi bi-check2-circle"></i>
    <span>${activity}</span>
  </article>
`).join("");

document.querySelector("#campusFeatures").innerHTML = campus.features.map(([title, text, icon]) => `
  <article>
    <i class="bi ${icon}"></i>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`).join("");
