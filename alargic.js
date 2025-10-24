document.addEventListener("DOMContentLoaded", function () {
  const openAllergenBtn = document.getElementById("openAllergenModal");
  const closeAllergenBtn = document.getElementById("closeModal");
  const allergenModal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  openAllergenBtn.addEventListener("click", () => {
    allergenModal.classList.remove("opacity-0", "pointer-events-none");
    modalContent.classList.remove("translate-y-full");
  });

  closeAllergenBtn.addEventListener("click", () => {
    allergenModal.classList.add("opacity-0", "pointer-events-none");
    modalContent.classList.add("translate-y-full");
  });

  allergenModal.addEventListener("click", (e) => {
    if (e.target === allergenModal) {
      allergenModal.classList.add("opacity-0", "pointer-events-none");
      modalContent.classList.add("translate-y-full");
    }
  });
});
