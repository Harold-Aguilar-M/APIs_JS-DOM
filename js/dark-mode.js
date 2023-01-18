const d = document;
const ls = localStorage;

export default function darkMode(btn, classDark) {

  const $btnDarkMode = d.querySelector(btn);
  const $selectors = d.querySelectorAll("[data-dark]");

  const setMode = () => {
    $btnDarkMode.firstElementChild.classList.toggle("is-active");
    $btnDarkMode.lastElementChild.classList.toggle("is-active");
    $selectors.forEach((el) => el.classList.toggle(classDark));
  };

  const setStorage = () => {
    $btnDarkMode.firstElementChild.classList.contains("is-active") ? ls.setItem("darkMode", true) : ls.setItem("darkMode", false);
  }

  const setStyles = () => {
    if (ls.getItem("darkMode") == "true") setMode();
  }

  if (!ls.getItem("darkMode")) {
    setStorage();
  } else {
    setStyles();
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      setMode();
      setStorage();
    }
  });
}
