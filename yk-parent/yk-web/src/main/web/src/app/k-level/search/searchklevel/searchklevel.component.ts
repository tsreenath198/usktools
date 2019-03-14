import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { KLevelModel } from '../../k-level.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchklevel',
  templateUrl: './searchklevel.component.html',
  styleUrls: ['./searchklevel.component.css']
})
export class SearchklevelComponent implements OnInit {
  public klList: KLevelModel [] = [];

  constructor(private http:HttpService , private router:Router) { }

  ngOnInit() {
    this.http.getReq('kendra/getAll').subscribe(resp => {
      this.klList = resp as KLevelModel[]
    });
  }
  addToList(){
    this.router.navigate(['/', 'k-level'])
  }

}
