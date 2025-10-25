//// get categories from backend
const frontCategories = document.getElementById("front-categories");
function loadCategories() {
  fetch("api/get_categories.php")
    .then((res) => res.json())
    .then((data) => {
      frontCategories.innerHTML = "";

      data.forEach((item) => {
        let card = document.createElement("div");
        card.innerHTML = `
                <!-- البيتزا -->
                <a href="#${item.name_en}" class="block">
  <div class="flex flex-col items-center text-center cursor-pointer w-20 sm:w-24 md:w-28 lg:w-32 p-2 sm:p-3 hover:scale-105 transition-transform duration-200 group">
    <div class="bg-teal-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
      <img src="http://localhost/menu_dashboard/api/${item.image}" 
           alt="${item.name_ar}" loading="lazy" 
           class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain">
    </div>
    <span class="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800 leading-tight px-1 line-clamp-2" 
          data-ar="${item.name_ar}" 
          data-en="${item.name_en}">
      ${item.name_ar}
    </span>
  </div>
</a>

                `;
        frontCategories.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
}

//========================= تحميل مسببات الحساسية===========================
const allergyContainer = document.getElementById("allergiesContainer");
async function loadAllergies() {
  fetch("api/get_allergens.php")
    .then((res) => res.json())
    .then((data) => {
      allergyContainer.innerHTML = "";
      data.forEach((aller) => {
        let card = document.createElement("div");
        card.className = "flex items-center gap-2  p-3 w-full";
        card.innerHTML = `
        <div class="bg-teal-600 text-white p-2 rounded-full text-[14px]">
          <img src="http://localhost/menu_dashboard/api/${aller.image_url}" class="w-10 h-10" alt="${aller.name_ar}">
        </div>
        <div>
          <h3 class="text-[14px] text-teal-900 px-4" data-ar="${aller.name_ar}" data-en="${aller.name_en}">${aller.name_ar}</h3>
           <p class="text-[10px] text-teal-600 px-4" data-ar="${aller.description_ar}" data-en="${aller.description_en}">${aller.description_ar}</p>
        </div>
        `;
        allergyContainer.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
}

// LOAD MENU ITEMS ======== اصناف المنيو
const frontMenuItems = document.getElementById("front-items");

async function loadMenuItems() {
  fetch("api/get_items.php")
    .then((res) => res.json())
    .then((data) => {
      frontMenuItems.innerHTML = "";

      data.forEach((category) => {
        let card = document.createElement("div");
        card.innerHTML = `
<div id="${category.category_name_en}" class="w-full py-3 px-6 flex justify-start scroll-mt-[150px]">
    <span class="text-2xl font-bold text-black" data-ar="${category.category_name_ar}"
        data-en="${category.category_name_en}">
        ${category.category_name_ar}
    </span>
</div>
`;

        // تكرار الأصناف داخل التصنيف
        category.items.forEach((item) => {
          let itemCard = document.createElement("div");
          itemCard.classList.add("mb-6", "px-6");
          itemCard.innerHTML = `
<div class="flex flex-row items-start p-3 sm:p-4">
    <!-- النصوص -->
    <div class="flex-1 text-right">
        <h2 class="text-base sm:text-xl font-bold text-teal-700" data-ar="${
          item.name_ar
        }" data-en="${item.name_en}">
            ${item.name_ar}
        </h2>
        <p class="text-teal-600 text-xs sm:text-sm leading-relaxed my-1.5 sm:my-2" data-ar="${
          item.description_ar
        }"
            data-en="${item.description_en}">
            ${item.description_ar}
        </p>
        <div data-en="${item.price}" data-ar="${item.price}"
            class="bg-teal-700 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block rtl:float-right ltr:float-left">
            ${item.price}
        </div>
    </div>
    <!-- صورة المنتج -->
    <img loading="lazy" src="${
      item.image.startsWith("http")
        ? item.image
        : `http://localhost/menu_dashboard/api/${item.image}`
    }" alt="${
            item.name_en
          }" class="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-lg shrink-0">
</div>
`;
          card.appendChild(itemCard);
        });

        frontMenuItems.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
}

/// التعامل مع اللغات
let currentLang = localStorage.getItem("lang") || "ar";

function applyLanguage() {
  // يبدل النصوص حسب اللغة الحالية
  document.querySelectorAll("[data-ar]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  // يغير اتجاه الصفحة واللغة
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;

  // يغير نص الزر
  const langBtn = document.getElementById("langBtnText");
  if (langBtn) {
    langBtn.textContent = currentLang === "ar" ? "English" : "العربية";
  }

  // يغير المحاذاة تلقائياً حسب اللغة
  document.querySelectorAll("[data-ar]").forEach((el) => {
    if (currentLang === "ar") {
      el.classList.remove("text-left", "sm:text-left");
      el.classList.add("text-right", "sm:text-right");
    } else {
      el.classList.remove("text-right", "sm:text-right");
      el.classList.add("text-left", "sm:text-left");
    }
  });
}

function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

// تنفيذ التبديل عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", applyLanguage);
// ==================== Initialize ====================
(async () => {
  await loadCategories();
  await loadMenuItems();
  await loadAllergies();
})();
