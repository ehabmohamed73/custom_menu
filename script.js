const menuItemsPizza = [
    {
        nameAr: "بيتزا مارجريتا",
        nameEn: "Pizza Margherita",
        descAr: "صلصة سان مارزانو، طماطم سان مارزانو الطازجة، بارميزان معتق، ريحان طازج، وزيت زيتون بكر ممتاز.",
        descEn: "San Marzano sauce, fresh San Marzano tomatoes, aged Parmesan, fresh basil, and extra virgin olive oil.",
        price: "45.00 ﷼",
        image: "assets/Margherita.jpg"
    },
    {
        nameAr: "بيبروني كلاسيكا",
        nameEn: "Pepperoni Classica",
        descAr: "بيبروني مقرمش مع موزاريلا طازجة وبروفولوني مدخن. يقدم مع رشة من العسل.",
        descEn: "Crispy pepperoni with fresh mozzarella and smoked provolone. served with a drizzle of honey.",
        price: "45.00 ﷼",
        image: "assets/Pepperoni.jpg"
    },
    {
        nameAr: "بيتزا دجاج فريسكا",
        nameEn: "Chicken Fresca Pizza",
        descAr: "دجــاج مشـوي متبــل بالليمـــون والأعشــــاب الإيطاليــة، مــع صوص ريكوتا طازج، زبدة مكرملة، ونصف ليمونة حلوة مشوية.",
        descEn: "Grilled chicken marinated in lemon and Italian herbs, served with fresh ricotta sauce, caramelized butter, and half a grilled sweet lemon.",
        price: "55.00 ﷼",
        image: "assets/Fresca.jpg"
    }
];
const menuItemsPasta = [
    // اصناف الباستا
    {
        nameAr: "باستا بارميزان الكريمية",
        nameEn: "Creamy Parmesan Pasta",
        descAr: "باستا بصوص كريمي ناعم وغني بنكهة البارميزان. ُتقدم ساخنة مع رشة فلفل وزيت الترافل أسود وبارميزان إضافي.",
        descEn: "Pasta in a smooth, rich cream sauce with a bold parmesan flavor. served hot with a touch of truffle oil black pepper and extra parmesan.",
        price: "45.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "باستا دجاج فريسكا ",
        nameEn: "Chicken Fresca Pizza",
        descAr: "راجو لحم أنغوس الممتاز مع بشاميل فرنسي ناعم، بين سبع طبقات من اللازانيا المخبوزة بإتقان.",
        descEn: "Premium angus beef ragù and silky French béchamel, layered between seven sheets of perfectly baked lasagna.",
        price: "45.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "كلمراتا ان بلونيس",
        nameEn: "Calamarata Pasta in Bolognese",
        descAr: "لحم مفروم يضاف إليه صوص كريمي بلوني مع ماسكر بون",
        descEn: "Minced meat calamarata pasta cook with special beef Bolognese sauce and finish with mascarpone cheese",
        price: "40.00 ﷼",
        image: "assets/Fresca.jpg"
    },
];
const menuItemSalad = [
    // اصناف الباستا
    {
        nameAr: "فتوش إيطالي",
        nameEn: "Italian Fattoush",
        descAr: "سلطة الفتوش بلمسة إيطالية: رقائق بارميزان مقرمشة، ريحان وأعشاب طازجة، وتتبيلة بلسميك.",
        descEn: "Fattoush salad with an Italian twist: crispy parmesan chips, fresh basil and herbs, and a balsamic dressing.",
        price: "45.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "سلطة الروكا الطازجة",
        nameEn: "Fresh Rucola Salad",
        descAr: "روكا إيطالية مع مخلل هوم ميد، جبنة موزاريلا طرية صوص بالسميك مميز مع رشة لوز .",
        descEn: "Fresh arugula salad with home-made pickles, soft mozzarella, and a touch of Italian balsamic.",
        price: "40.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "أرانشيني البورشيني",
        nameEn: "Porcini Arancini",
        descAr: "كرات أرز مقلية محشوة بفطر البورشيني والموزاريلا الطازجة، تقدم مع صوص الترافل الأبيض المتوازن.",
        descEn: "Fried porcini mushroom arancini stuffed with fresh mozzarella, served with a balanced white truffle sauce.",
        price: "45.00 ﷼",
        image: "assets/Fresca.jpg"
    },
];
const menuItemSoda = [
    // اصناف الباستا
    {
        nameAr: "كولا",
        nameEn: "Kola",
        descAr: "",
        descEn: "",
        price: "7.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "سبرايت",
        nameEn: "sprite",
        descAr: "",
        descEn: "",
        price: "7.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "فانتا",
        nameEn: "fanta",
        descAr: "",
        descEn: "",
        price: "7.00 ﷼",
        image: "assets/Fresca.jpg"
    },
    {
        nameAr: "ماء",
        nameEn: "water",
        descAr: "",
        descEn: "",
        price: "3.00 ﷼",
        image: "assets/Fresca.jpg"
    }
];
const menuContainer = document.getElementById("menu-pizza");
const menuContainerPasta = document.getElementById("menu-pasta");
const menuContainerSalad = document.getElementById("menu-salad");
const menuContainerSoda = document.getElementById("menu-soda");
/// اصناف البيتزا
menuItemsPizza.forEach(item => {
    const card = `
        <div class="flex flex-col justify-start sm:flex-row items-center sm:items-start p-4 gap-4">
            <!-- النصوص -->
            <div class="flex-1 text-center sm:text-right justify-start" >
            <h2 class="text-xl font-bold text-teal-700" data-ar="${item.nameAr}" data-en="${item.nameEn}">
                ${item.nameAr}
            </h2>
            <p class="text-teal-600 text-sm leading-relaxed" data-ar="${item.descAr}" data-en="${item.descEn}">
                ${item.descAr}
            </p>
            <div class="bg-teal-700 text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                ${item.price}
            </div>
            </div>
            <!-- صورة المنتج -->
            <img src="${item.image}" alt="${item.nameAr}" class="w-28 h-28 object-fill rounded-lg">
        </div>
        `;
    menuContainer.insertAdjacentHTML("beforeend", card);
});
/// اصناف الباستا
menuItemsPasta.forEach(item => {
    const card = `
        <div class="flex flex-col justify-start sm:flex-row items-center sm:items-start p-4 gap-4">
            <!-- النصوص -->
            <div class="flex-1 text-center sm:text-right justify-start" >
            <h2 class="text-xl font-bold text-teal-700" data-ar="${item.nameAr}" data-en="${item.nameEn}">
                ${item.nameAr}
            </h2>
            <p class="text-teal-600 text-sm leading-relaxed " data-ar="${item.descAr}" data-en="${item.descEn}">
                ${item.descAr}
            </p>
            <div class="bg-teal-700 text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                ${item.price}
            </div>
            </div>
            <!-- صورة المنتج -->
            <img src="${item.image}" alt="${item.nameAr}" class="w-28 h-28 object-fill rounded-lg">
        </div>
        `;
    menuContainerPasta.insertAdjacentHTML("beforeend", card);
});
///اصناف السلطات
menuItemSalad.forEach(item => {
    const card = `
        <div class="flex flex-col justify-start sm:flex-row items-center sm:items-start p-4 gap-4">
            <!-- النصوص -->
            <div class="flex-1 text-center sm:text-right justify-start" >
            <h2 class="text-xl font-bold text-teal-700" data-ar="${item.nameAr}" data-en="${item.nameEn}">
                ${item.nameAr}
            </h2>
            <p class="text-teal-600 text-sm leading-relaxed" data-ar="${item.descAr}" data-en="${item.descEn}">
                ${item.descAr}
            </p>
            <div class="bg-teal-700 text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                ${item.price}
            </div>
            </div>
            <!-- صورة المنتج -->
            <img src="${item.image}" alt="${item.nameAr}" class="w-28 h-28 object-fill rounded-lg">
        </div>
        `;
    menuContainerSalad.insertAdjacentHTML("beforeend", card);
});
/// اصناف المشروبات الغازيه
menuItemSoda.forEach(item => {
    const card = `
        <div class="flex flex-col justify-start sm:flex-row items-center sm:items-start p-4 gap-4">
            <!-- النصوص -->
            <div class="flex-1 text-center sm:text-right justify-start" >
            <h2 class="text-xl font-bold text-teal-700" data-ar="${item.nameAr}" data-en="${item.nameEn}">
                ${item.nameAr}
            </h2>
            <p class="text-teal-600 text-sm leading-relaxed" data-ar="${item.descAr}" data-en="${item.descEn}">
                ${item.descAr}
            </p>
            <div class="bg-teal-700 text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                ${item.price}
            </div>
            </div>
            <!-- صورة المنتج -->
            <img src="${item.image}" alt="${item.nameAr}" class="w-28 h-28 object-fill rounded-lg">
        </div>
        `;
    menuContainerSoda.insertAdjacentHTML("beforeend", card);
});

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
