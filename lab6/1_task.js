//Створення масиву книг
var arrBooks = [];

arrBooks[0] = {
    Name: "Перетворення",
    Author: "Франц Кафка",
    Genre: "Новела",
    Pages: 120,
    TakenDate: new Date(2025, 9, 15)
};

arrBooks[1] = {
    Name: "Майстер і Маргарита",
    Author: "Михайло Булгаков",
    Genre: "Роман",
    Pages: 480,
    TakenDate: new Date(2025, 9, 25)
};

arrBooks[2] = {
    Name: "451° за Фаренгейтом",
    Author: "Рей Бредбері",
    Genre: "Фантастика",
    Pages: 320,
    TakenDate: new Date(2025, 9, 20)
};

//Функцвя для розрахунку кількості днів до повернення
function daysLeft(takenDate) {
    const returnDate = new Date(takenDate);
    returnDate.setDate(returnDate.getDate() + 10);
    const today = new Date();
    const diffTime = returnDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

//Функція, яка формує рядок виводу для одного запису
function makeBookRow(book) {
    const left = daysLeft(book.TakenDate);

    //рядок HTML з інформацією про книгу
    let result = `<div class="book-item" style="
        padding:10px;
        margin:10px 0;
        border-radius:8px;
        border:1px solid;`;

    //кольори залежно від терміну
    if (left < 0) {
        result += `background-color:#ffebee; border-color:#c62828;">`;
    } else {
        result += `background-color:#e8f5e9; border-color:#2e7d32;">`;
    }

    result += `
        <strong>${book.Name}</strong> — ${book.Author}<br>
        Жанр: ${book.Genre}, ${book.Pages} стор.<br>
        Днів до повернення: <b>${left >= 0 ? left : "прострочено на " + Math.abs(left)}</b>
    </div>`;

    return result;
}


function showBooks() {
    //порожній рядок, у який будемо додавати книги
    let output = "";

    // перебираємо всі книги з масиву arrBooks
    arrBooks.forEach(function(book) {
        output = output + makeBookRow(book);
    });

    // знаходимо елемент із id="result" у HTML і вставляємо туди всі книги
    document.getElementById("result").innerHTML = output;
}


//прив'язуємо головну функцію до кнопки
document.querySelector(".b-button").addEventListener("click", showBooks);
