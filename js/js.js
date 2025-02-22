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

// <!DOCTYPE html>
// <html lang="uk">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     {/* <title>Приклад JavaScript</title> */}
//     <script>
//     document.getElementById("icon-instagram").addEventListener("click", function() {
//     window.open("https://www.instagram.com/symbiosrec?igsh=MTVwM2M2MW9vd3ZyMQ==", "_blank");
//     });
//     </script>
// </head>
// {/* <body>
//     <h1 id="myText">Цей текст зміниться через JavaScript</h1>
//     <button onclick="змінитиТекст()">Змінити текст</button>
// </body> */}
// </html>

