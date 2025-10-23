window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const content = document.getElementById("page-content");

  loader.classList.add("opacity-0");
  setTimeout(() => {
    loader.classList.add("hidden");
    content.classList.remove("hidden");
  }, 400); // بعد نصف ثانية تختفي شاشة التحميل بسلاسة
});
