import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { Bus } from '../Class/Bus';
import { FastBus } from '../Class/FastBus';

@Component({
  selector: 'app-bus-calc',
  standalone: true, // 
  imports: [CommonModule, FormsModule], // 
  templateUrl: './bus-calc.component.html',
  styleUrls: ['./bus-calc.component.css']
})
export class BusCalcComponent {
  passengers: number = 50;
  price: number = 40;
  speed: number = 100;
  brand: string = 'Mercedes';
  resultOutput: string = '';

  calculate() {
    if (this.passengers < 0 || this.price < 0 || this.speed < 0) {
      alert("Будь ласка, введіть додатні числа!");
      return;
    }
    // Логіка розрахунку
    let normalBus = new Bus(this.passengers, this.price);
    let fastBus = new FastBus(this.passengers, this.price, this.speed, this.brand);

    this.resultOutput = `
      <p><b>Звичайний автобус:</b> ${normalBus.totalPrice()} грн</p>
      <p><b>Скорий автобус:</b> ${fastBus.totalPrice().toFixed(2)} грн</p>
    `;
  }
}