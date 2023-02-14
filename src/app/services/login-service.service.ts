import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {

  constructor(private http: HttpServiceService) { }

  isLogin= (data={}) => {
    return this.http.httpRequest('post', '/UserSettings/Login', data);
  }
}

