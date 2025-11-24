import { Bus } from "./Bus";

export class FastBus extends Bus {
    speed: number;
    brand: string;

    constructor(passengers: number, ticketPrice: number, speed: number, brand: string) {
        super(passengers, ticketPrice); // викликаємо батьківський конструктор
        this.speed = speed;
        this.brand = brand;
    }

    override totalPrice(): number {
        // Надбавка: + (0.05 * швидкість)
        let increasedPrice = this.ticketPrice + (0.05 * this.speed);
        return this.passengers * increasedPrice;
    }
}