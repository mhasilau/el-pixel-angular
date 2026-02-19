// Пример компонента, реализующего CanComponentDeactivate
// Этот компонент спросит подтверждение при попытке покинуть страницу
// Для работы [(ngModel)] убедитесь, что FormsModule импортирован в модуль

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-deactivate',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Demo Deactivate</h2>
    <input [(ngModel)]="text" placeholder="Введите что-нибудь..." />
  `,
})
export class DemoDeactivateComponent implements CanComponentDeactivate {
  text = '';

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.text) {
      return confirm('У вас есть несохранённые данные. Покинуть страницу?');
    }
    return true;
  }
}
