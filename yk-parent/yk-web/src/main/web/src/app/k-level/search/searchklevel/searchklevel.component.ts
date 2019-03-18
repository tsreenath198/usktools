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
  public klList: KLevelModel[] = [];
  public copyKlList: KLevelModel[] = [];
  public selectedIndex: number = -1;

  public kendraTypeList = ["YK", "DPC"];
  public genderType = [{ "key": "YUVA", "value": "Yuva" }, { "key": "YUVATI", "value": "Yuvati" }];
  public categoryList = [{ "key": "VILLAGE", "value": "Village" }, { "key": "CITY_VISTAR", "value": "City Vistar" }];
  public statusList = [{ "key": "ACTIVE", "value": "Active" }, { "key": "INACTIVE", "value": "Inactive" }, { "key": "MERGED", "value": "Merged" }];
  public conducted = ["HOME", "SCHOOL", "COLLEGE", "CLASSES", "OTHER"];
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
  init() {
    this.http.getReq('kendra/getAll').subscribe(resp => {
      this.klList = resp as KLevelModel[];
      this.copyKlList = resp as KLevelModel[];
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
  update(obj) {
    this.http.postReq('kendra/update', obj).subscribe(resp => {
      this.init();
    });
  }

  setName(value, role, i): void {
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
  filterKendra(event): void {
    //event.target.value
    let temp = [];
    for (var i = 0; i < this.copyKlList.length; i++) {
      if (this.checkContains(i, event.target.value)) {
        temp.push(this.copyKlList[i]);
      }
    }
    if (temp.length) {
      this.klList = temp;
    } else if (temp.length === 0 && event.target.value === "") {
      this.klList = this.copyKlList;
    }
    console.log(this.klList)
  }
  checkContains(i, val): boolean {
    if (this.isEmptyValue(val) &&
      (this.isEmptyValue(this.copyKlList[i].jSannidatha.name) &&
        this.isEmptyValue(this.copyKlList[i].jilla) &&
        this.isEmptyValue(this.copyKlList[i].tSannidatha.name) &&
        this.isEmptyValue(this.copyKlList[i].taluka) &&
        this.isEmptyValue(this.copyKlList[i].avekshak.name) &&
        this.isEmptyValue(this.copyKlList[i].group))) {
      return (this.copyKlList[i].jSannidatha.name.indexOf(val) > -1
        || this.copyKlList[i].jilla.indexOf(val) > -1
        || this.copyKlList[i].tSannidatha.name.indexOf(val) > -1
        || this.copyKlList[i].taluka.indexOf(val) > -1
        || this.copyKlList[i].avekshak.name.indexOf(val) > -1
        || this.copyKlList[i].group.indexOf(val) > -1
      )
    }
  }

  isEmptyValue(val) {
    return (val !== null && val !== undefined && val !== "");
  }
}
