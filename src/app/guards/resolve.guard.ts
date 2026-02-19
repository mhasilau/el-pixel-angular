import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolveGuard implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> | Promise<any> | any {
    // Получаем id из параметров маршрута
    const id = route.paramMap.get('id');
    // Здесь можно сделать реальный http-запрос, а пока просто возвращаем объект
    return of({ userId: id, name: 'User ' + id });
  }
}
