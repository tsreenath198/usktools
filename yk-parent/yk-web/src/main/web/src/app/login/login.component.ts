import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  username: string = "";
  password: string = "";
  ngOnInit() {

  }
  validate() {
    this.loginService.getLogin('assets/login.json').subscribe(resp => {
      let response = resp as LoginModel
      if (response.username == this.username) {
        console.log("succes")
      }
    });
  }
}