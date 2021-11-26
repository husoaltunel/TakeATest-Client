import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMessages } from 'src/app/constants/auth-messages';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { getCurrentUsernameFromLocalStorage, getLoginStateFromLocalStorage, setLoginStateToLocalStorage } from 'src/app/services/helpers/local-storage-helper';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isAdmin: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginInfo: LoginModel;
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, private sweetAlertService: SweetAlertService) {
    this.loginInfo = new LoginModel();
    this.setLoggedIn();
    this.loggedIn = this.getLoggedIn();
  }

  ngOnInit(): void {
  }

  emitisAdmin(bool : boolean) {
    this.isAdmin.emit(bool);
  }

  setLoggedIn() {
    this.authService.isLoggedIn().subscribe(response => {
      this.loggedIn = true;
      setLoginStateToLocalStorage(true);
      this.setisAdmin();
    }, error => {
      this.loggedIn = false;
      setLoginStateToLocalStorage(false);
    });
  }
  setisAdmin(){
    this.authService.isAdmin().subscribe(response =>
       this.emitisAdmin(true)
    )
  }
  getLoggedIn() {
    return getLoginStateFromLocalStorage();
  }
  login() {
    this.authService.login(this.loginInfo).subscribe((response: any) => {
      if (response.success) {
        this.loggedIn = true;
        this.router.navigateByUrl("/")
        this.sweetAlertService.success(AuthMessages.successLogin);
      }
      else {
        this.router.navigateByUrl("/login")
        this.sweetAlertService.error(response.message)
      }

    });

  }
  
  getCurrentUsername(): string {
    return getCurrentUsernameFromLocalStorage();
  }

}
