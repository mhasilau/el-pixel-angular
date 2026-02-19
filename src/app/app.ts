import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  router = inject(Router);
  lastPersonData: any = null;

  get randId() {
    return Math.floor(Math.random() * 100);
  }

  goToPerson(id: number) {
    this.router.navigate(['/person-resolve', id]).then(() => {
      // После навигации подписываемся на данные маршрута
      const currentRoute = this.router.routerState.root;
      let child = currentRoute;
      while (child.firstChild) {
        child = child.firstChild;
      }
      child.data.subscribe((data) => {
        this.lastPersonData = data['data'];
      });
    });
  }
}
