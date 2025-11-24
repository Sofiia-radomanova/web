import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormsModule } from '@angular/forms'; // Якщо потрібно глобально

// Імпортуємо ваші компоненти
// (Перевірте, чи папки називаються header і bus-calc)
import { HeaderComponent } from './app/header/header.component';
import { BusCalcComponent } from './app/bus-calc/bus-calc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BusCalcComponent],
  // Ось тут ми додаємо обгортку <main class="b-main">
  template: `
    <main class="b-main">
      <app-header></app-header>
      <app-bus-calc></app-bus-calc>
    </main>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);