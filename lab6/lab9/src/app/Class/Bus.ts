export class Bus {
    passengers: number;
    ticketPrice: number;

    constructor(passengers: number, ticketPrice: number) {
        this.passengers = passengers;
        this.ticketPrice = ticketPrice;
    }

    totalPrice(): number {
        return this.passengers * this.ticketPrice;
    }
}