// базовий клас
class Bus {
    constructor(passengers, ticketPrice) {
        this.passengers = passengers;    // кількість пасажирів
        this.ticketPrice = ticketPrice;  // ціна квитка
    }

    // Метод: загальна вартість всіх квитків
    totalPrice() {
        return this.passengers * this.ticketPrice;
    }
}


//нащадок
class FastBus extends Bus {
    constructor(passengers, ticketPrice, speed, brand) {
        super(passengers, ticketPrice);  // виклик конструктора батька

        this.speed = speed;              // км/год
        this.brand = brand;              // марка автобуса
    }

    // Перевизначаємо метод totalPrice()
    totalPrice() {
        // Надбавка: + (0.05 × швидкість) до вартості квитка
        let increasedPrice = this.ticketPrice + (0.05 * this.speed);
        return this.passengers * increasedPrice;
    }
}


//функція виведення
function showResult() {
    let passengers = parseFloat(document.getElementById("inp-pass").value);
    let price = parseFloat(document.getElementById("inp-price").value);
    let speed = parseFloat(document.getElementById("inp-speed").value);
    let brand = document.getElementById("inp-brand").value;

    // Створюємо об’єкти
    let normalBus = new Bus(passengers, price);
    let fastBus = new FastBus(passengers, price, speed, brand);

    //вивід
    let out = "";

    out += "<b>Звичайний автобус:</b><br>";
    out += "Пасажирів: " + passengers + "<br>";
    out += "Ціна квитка: " + price + " грн<br>";
    out += "Загальна вартість: <b>" + normalBus.totalPrice() + " грн</b><br><br>";

    out += "<b>Скорий автобус:</b><br>";
    out += "Марка: " + brand + "<br>";
    out += "Швидкість: " + speed + " км/год<br>";
    out += "Ціна з надбавкою: " + 
            (price + speed * 0.05).toFixed(2) + " грн<br>";
    out += "Загальна вартість: <b>" + fastBus.totalPrice().toFixed(2) + " грн</b><br>";

    document.getElementById("result").innerHTML = out;
}
