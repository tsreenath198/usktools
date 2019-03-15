import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { KLevelModel } from '../../k-level.model';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-searchklevel',
  templateUrl: './searchklevel.component.html',
  styleUrls: ['./searchklevel.component.css']
})
export class SearchklevelComponent implements OnInit {
  public klList: KLevelModel [] = [];
  public selectedIndex: number = -1;

  public kendraTypeList = ["YK", "DPC"];
  public genderType = ["yuva", "yuvati"];
  public categoryList = ["Village", "City Vistar"];
  public statusList = ["Active", "Merged", "Inactive"];
  public conducted = ["Home", "School", "College", "Classes", "Other"];
  public klData: object[];
  public jSannidathaList: any;
  public tSannidathaList: any;
  public avekshakList: any;
  public sanchalakList: any;
  public daysList: any;


  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.init();
    let ak = this.http.getReq('yuvan/getAllByRole/Avekshak');
    let sk = this.http.getReq('yuvan/getAllByRole/Sanchalak');
    let js = this.http.getReq('yuvan/getAllByRole/Jilla-sannidhata');
    let ts = this.http.getReq('yuvan/getAllByRole/Taluka-sannidhata');
    let wd = this.http.getLogin('assets/weekdays.json');
    forkJoin([ak, sk, js, ts, wd]).subscribe(resultList => {
      this.avekshakList = resultList[0];
      this.sanchalakList = resultList[1];
      this.jSannidathaList = resultList[2];
      this.tSannidathaList = resultList[3];
      this.daysList = resultList[4];
    });
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

  setName(value, role,i): void {
    let temp: any;
    switch (role) {
      case "jilla": {
        temp = this.jSannidathaList.filter(t => t.id == value);
        this.klList[i].jSannidatha.phone = temp[0].phone;
        this.klList[i].jSannidatha.dob = new Date(temp[0].dob);
        break;
      }
      case "taluka": {
        temp = this.tSannidathaList.filter(t => t.id == value);
        this.klList[i].tSannidatha.phone = temp[0].phone;
        this.klList[i].tSannidatha.dob = new Date(temp[0].dob);
        break;
      }
      case "avekshak": {
        temp = this.avekshakList.filter(t => t.id == value);
        this.klList[i].avekshak.phone = temp[0].phone;
        this.klList[i].avekshak.dob = new Date(temp[0].dob);
        break;
      }
      case "s1": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klList[i].sanchalak1.phone = temp[0].phone;
        this.klList[i].sanchalak1.dob = new Date(temp[0].dob);
        break;
      }
      case "s2": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klList[i].sanchalak2.phone = temp[0].phone;
        this.klList[i].sanchalak2.dob = new Date(temp[0].dob);
        break;
      }

    }
  }

}
