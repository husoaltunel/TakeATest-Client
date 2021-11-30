import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel : RegisterModel;

  constructor(private authService : AuthService,private route : Router,private sweetAlertService : SweetAlertService) {
    this.registerModel = new RegisterModel();
   }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.registerModel).subscribe(response => {
      if(response.success){
        return this.route.navigateByUrl("/login");
      }
      return this.sweetAlertService.error(response.message);
    });
  }

}
