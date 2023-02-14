import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

const APP_URL = environment.APP_URL;

@Injectable({
  providedIn: 'root',
})

export class HttpServiceService {
  constructor(private http: HttpClient) { }
  httpRequest(method: any, url: any, body = {}) {
    const session = localStorage.getItem('isSession')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': session || ""
      })
    };
    return this.http[method](APP_URL + url, body, httpOptions)
  }
}
