document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");

    // Об'єкт із перекладами
    const translations = {
        uk: {
            title: "Вітаємо на сайті!",
            description: "Це приклад перемикача мов."
        },
        en: {
            title: "Welcome to the website!",
            description: "This is a language switcher example."
        }
    };

    // Функція для зміни тексту відповідно до вибраної мови
    function changeLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = translations[lang][key];
        });

        // Зберігаємо вибір користувача в localStorage
        localStorage.setItem("selectedLanguage", lang);
    }

    // Відстежуємо зміну вибору мови
    languageSelect.addEventListener("change", function () {
        changeLanguage(this.value);
    });

    // Перевіряємо, чи була вибрана мова раніше
    const savedLanguage = localStorage.getItem("selectedLanguage") || "uk";
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);
});