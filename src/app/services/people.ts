import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  http = inject(HttpClient);

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPersonById(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  deletePersonById(id: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  postPerson(data: any): Observable<any> {
    return this.http.post<any>(`https://jsonplaceholder.typicode.com/users`, data);
  }
}
