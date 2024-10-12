import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl + 'posts';
  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

}
