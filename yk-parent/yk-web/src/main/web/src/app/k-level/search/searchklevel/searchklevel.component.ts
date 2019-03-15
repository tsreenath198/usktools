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
  public klList: KLevelModel[] = [];
  public selectedIndex: number = -1;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.init();
  }
  init(){
    this.http.getReq('kendra/getAll').subscribe(resp => {
      this.klList = resp as KLevelModel[];
      this.selectedIndex = -1;
    });
  }
  addToList() {
    this.router.navigate(['/', 'k-level'])
  }

  edit(index) {
    this.selectedIndex = index;
  }

  navigate(pth: string): void {
    this.router.navigate(['/', pth]);
  }
  update(obj){
     this.http.postReq('kendra/update',obj).subscribe(resp => {
      this.init();
     });
  }

}
