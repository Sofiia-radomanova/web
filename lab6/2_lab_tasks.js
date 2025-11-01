//1
// Функція для перетворення списку країн у рядок
function convertCountries() {
    // Знаходимо всі елементи списку <li> усередині #country-list
    let listItems = document.querySelectorAll("#country-list li");

    // Створюємо масив з назв країн
    let countries = [];
    listItems.forEach(function (item) {
        countries.push(item.textContent.trim());
    });

    // Об’єднуємо через кому
    let result = countries.join(", ");

    // Виводимо результат у <p>
    document.getElementById("countries-result").textContent = "Результат: " + result;
}

//2
// Функція для активації редагування комірок таблиці
function makeTableEditable() {
    // Знаходимо всі клітинки таблиці
    var cells = document.querySelectorAll("#numbers-table td");

    // Проходимось по кожній клітинці
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            var cell = this; // зберігаємо посилання на натиснуту клітинку
            var value = parseFloat(cell.textContent); // зчитуємо її значення

            // Якщо число невід’ємне або вже є input — нічого не робимо
            if (value >= 0 || cell.querySelector("input")) {
                return;
            }

            var oldValue = cell.textContent; // запам’ятовуємо старе значення

            // Замінюємо вміст клітинки на input і кнопку
            cell.innerHTML =
                '<input type="number" value="' +
                oldValue +
                '" style="width:60px;"> <button>Зберегти</button>';

            var input = cell.querySelector("input");
            var button = cell.querySelector("button");

            // Обробник для кнопки 
            button.addEventListener("click", function () {
                var newValue = parseFloat(input.value);

                // Якщо введено додатне число замінюємо
                if (newValue > 0) {
                    cell.textContent = newValue;
                } else {
                    alert("Введіть додатнє число!");
                    cell.textContent = oldValue; //попереднє значення
                }
            });
        });
    }
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener("DOMContentLoaded", makeTableEditable);