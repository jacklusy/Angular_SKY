import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  isChecked: boolean;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + 'users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
