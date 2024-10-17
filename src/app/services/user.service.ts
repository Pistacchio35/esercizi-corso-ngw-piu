import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = "http://reqres.in/api/users"

  constructor(private http: HttpClient) { }

  getUser(page: number, per_page: number) {
    const x = `${this.api}?page=${page}$per_Page=${per_page}`;

    return this.http.get(x);
  }
}