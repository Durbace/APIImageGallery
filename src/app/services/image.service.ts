import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }
}
