import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: HttpService , private router:Router) { }
  username: string = "";
  password: string = "";
  ngOnInit() {

  }
  validate() {
    this.loginService.getLogin('assets/login.json').subscribe(resp => {
      let response = resp as LoginModel
      if (response.username == this.username) {
        console.log("succes");
        this.router.navigate(['/', 'landing'])
      }
    });
  }
}
