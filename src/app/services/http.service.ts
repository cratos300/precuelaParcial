import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "https://restcountries.com/v3.1/region/americas"
  constructor(private http:HttpClient) { }

  obtenerPaises()
  {
    return this.http.get(this.url)
  }
}
