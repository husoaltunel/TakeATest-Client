import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpService } from './http.service';
import {map} from 'rxjs/operators'
import { LoginInfoModel } from '../models/loginInfo.model';

import { setLoginStateToLocalStorage, setUserStateToLocalStorage } from './helpers/local-storage-helper';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = "Auth/";
  private loginInfo : LoginInfoModel;
  
  constructor(private http: HttpService) {
    this.loginInfo = new LoginInfoModel();
  }

  login(model: LoginModel)  {
    return this.http.post(this.path + "login", model).pipe(
      map((response : any)  => {
        if(response.success){
          this.loginInfo = response.data;
          setUserStateToLocalStorage(this.loginInfo);          
        }
        return response;
      })
    )
  }
  logOut(){
    localStorage.removeItem('user');
    setLoginStateToLocalStorage(false);
  }
 
  isLoggedIn(){
    return this.http.get(this.path + "is-logged-in");
  }
  isAdmin(){
    return this.http.get(this.path + "is-admin");
  }

  
}
