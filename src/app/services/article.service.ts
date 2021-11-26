import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  path: string = "Article/";

  constructor(private http: HttpService) { }

  getArticles() {
    return this.http.get(this.path);
  }

}
