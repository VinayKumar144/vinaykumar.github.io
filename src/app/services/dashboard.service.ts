import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpServiceService) { }
  getDetails = (data = {}) => {
    return this.http.httpRequest('post', '/dasoboard', "");
  }
  getFilmsData = (data = {}) => {
    return this.http.httpRequest('post', '/Films/filmsList', data);
  }
  getUsersData = (data = {}) => {
    return this.http.httpRequest('post', '/Customer/customerList', data);
  }
}
