import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsesrService {

  private API_URL = 'http://localhost:3000/users'
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-type', 'application/json; charset=utf-8');
  }

  getAll() {
    return this.http.get(this.API_URL, { headers: this.headers })
  }

  getUser(id: number) {
    return this.http.get<number>(this.API_URL + id, { headers: this.headers })
  }

  addUser(user: IUser) {
    return this.http.post<IUser>(this.API_URL, JSON.stringify(user), { headers: this.headers })
  }

  deleteUser(user: IUser) {
    return this.http.put<IUser>(this.API_URL, JSON.stringify(user), { headers: this.headers })
  }

  updateUser(user: IUser) {
    return this.http.put<IUser>(this.API_URL, JSON.stringify(user), { headers: this.headers })
  }

}
