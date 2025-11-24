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
    let normalBus = new Bus(50, 40);                        // базовий клас
    let fastBus = new FastBus(50, 40, 100, "Mercedes");     // нащадок

    let out = "";

    out += "<b>Звичайний автобус:</b><br>";
    out += "Кількість пасажирів: " + normalBus.passengers + "<br>";
    out += "Ціна квитка: " + normalBus.ticketPrice + " грн<br>";
    out += "Загальна вартість: <b>" + normalBus.totalPrice() + " грн</b><br><br>";

    out += "<b>Скорий автобус:</b><br>";
    out += "Марка: " + fastBus.brand + "<br>";
    out += "Кількість пасажирів(не змінюється): " + fastBus.passengers + "<br>";
    out += "Швидкість: " + fastBus.speed + " км/год<br>";
    out += "Базова ціна квитка: " + fastBus.ticketPrice + " грн<br>";
    out += "Ціна з надбавкою: " + 
           (fastBus.ticketPrice + fastBus.speed * 0.05).toFixed(2) +
           " грн<br>";
    out += "Загальна вартість: <b>" + fastBus.totalPrice().toFixed(2) + " грн</b><br>";

    document.getElementById("result").innerHTML = out;
}
