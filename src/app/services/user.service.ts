import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  public login(payload) {
    return this.client.post(`${environment.baseUrl}${environment.login}`, payload)
  }

  public signup(payload) {
    return this.client.post(`${environment.baseUrl}${environment.signup}`, payload)
  }


}
