import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Login} from "../models/login";
import {HttpClient} from "@angular/common/http";
import {Register} from "../models/register";

@Injectable()
export class AuthService{
  private authUrl: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {
  }

  login(login: Login){
    return this.http.post(`${this.authUrl}/login`, login);
  }

  register(register: Register){
    return this.http.post(`${this.authUrl}/register`, register);
  }
}
