// Mobile nav toggle
const nav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".nav-toggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Filter chips -> table rows
const chips = document.querySelectorAll(".chip");
const rows = document.querySelectorAll(".ranking-table tbody tr");

function applyFilter(filter) {
  rows.forEach((row) => {
    const tags = (row.dataset.tags || "").split(" ");
    if (filter === "all" || tags.includes(filter)) {
      row.classList.remove("is-hidden");
    } else {
      row.classList.add("is-hidden");
    }
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    applyFilter(filter);
  });
});

// Toggle extra rows (11–20)
const toggleExtraBtn = document.getElementById("toggleExtraRows");
const toggleText = document.getElementById("toggleText");
const tableWrapper = document.querySelector(".table-wrapper");

if (toggleExtraBtn && tableWrapper) {
  let extraVisible = false;
  toggleExtraBtn.addEventListener("click", () => {
    extraVisible = !extraVisible;
    tableWrapper.classList.toggle("show-extra", extraVisible);
    if (toggleText) {
      toggleText.textContent = extraVisible
        ? "Ocultar los 10 últimos casinos"
        : "Mostrar los 10 siguientes casinos";
    }
  });
}

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
