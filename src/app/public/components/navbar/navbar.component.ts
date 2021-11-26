import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMessages } from 'src/app/constants/auth-messages';
import { AuthService } from 'src/app/services/auth.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isAdmin:boolean;

  constructor(private authService: AuthService, private router: Router, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
    this.sweetAlertService.warning(AuthMessages.logout);
    this.router.navigateByUrl("/login")
  }

}
