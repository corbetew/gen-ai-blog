import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api';  // Adjust if your backend URL is different

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }
}
