import { Component, OnInit } from '@angular/core';
import { KLevelModel } from './k-level.model';
import { HttpService } from '../http.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-k-level',
  templateUrl: './k-level.component.html',
  styleUrls: ['./k-level.component.css']
})
export class KLevelComponent implements OnInit {
  public klList: KLevelModel[] = [];
  public klCurrent: KLevelModel = <KLevelModel>{
    country: "",
    sanghat: "",
    jilla: "",
    taluka: "",
    group: "",
    kendra: "",
    jSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
    tSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
    avekshak: { "phone": "", "dob": new Date(), "name": "", "role": "" },
    sanchalak1: { "phone": "", "dob": new Date(), "name": "", "role": "" },
    sanchalak2: { "phone": "", "dob": new Date(), "name": "", "role": "" },
    kendraType: "",
    yuvaYuvati: "",
    yearOfKendra: "",
    kendraCategory: "",
    kendraNumber: "",
    status: "",
    yearMerged: "",
    mergedTo: "",
    minAttendance: "",
    maxAttendance: "",
    villageOfYK: "",
    landmark: "",
    yKSthal: "",
    yKSthalPin: "",
    dayOfYK: "",
    timeOfYK: "",
    swadhyayLoc: "",
    swadhyayVillage: "",
    ykconducted: "",
  };
  public kendraTypeList = [{"key":"YK","value":"Yuva Kendra"},{"key":"DPC","value":"DPC"}];
  public genderType = [{"key":"YUVA","value":"Yuva"},{"key":"YUVATI","value":"Yuvati"}];
  public categoryList = [{"key":"VILLAGE","value":"Village"},{"key":"CITY_VISTAR","value":"City Vistar"}];
  public statusList = [{"key":"ACTIVE","value":"Active"},{"key":"INACTIVE","value":"Inactive"},{"key":"MERGED","value":"Merged"}];
 
  public conducted = ["Home", "School", "College", "Classes", "Other"];
  public klData: object[];
  public jSannidathaList: any;
  public tSannidathaList: any;
  public avekshakList: any;
  public sanchalakList: any;
  public daysList: any;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    let ak = this.http.getReq('yuvan/getAllByRole/AVEKSHAK');
    let sk = this.http.getReq('yuvan/getAllByRole/SANCHALAK_1');
    let js = this.http.getReq('yuvan/getAllByRole/J_SANNIDATHA');
    let ts = this.http.getReq('yuvan/getAllByRole/T_SANNIDATHA');
    let wd = this.http.getLogin('assets/weekdays.json');
    forkJoin([ak, sk, js, ts, wd]).subscribe(resultList => {
      this.avekshakList = resultList[0];
      this.sanchalakList = resultList[1];
      this.jSannidathaList = resultList[2];
      this.tSannidathaList = resultList[3];
      this.daysList = resultList[4];
    });
  }
  addToList() {
    this.klList.unshift(this.klCurrent);
    this.klCurrent = <KLevelModel>{
      country: "",
      sanghat: "",
      jilla: "",
      taluka: "",
      group: "",
      kendra: "",
      jSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
      tSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
      avekshak: { "phone": "", "dob": new Date(), "name": "", "role": "" },
      sanchalak1: { "phone": "", "dob": new Date(), "name": "", "role": "" },
      sanchalak2: { "phone": "", "dob": new Date(), "name": "", "role": "" },
      kendraType: "",
      yuvaYuvati: "",
      yearOfKendra: "",
      kendraCategory: "",
      kendraNumber: "",
      status: "",
      yearMerged: "",
      mergedTo: "",
      minAttendance: "",
      maxAttendance: "",
      villageOfYK: "",
      landmark: "",
      yKSthal: "",
      yKSthalPin: "",
      dayOfYK: "",
      timeOfYK: "",
      swadhyayLoc: "",
      swadhyayVillage: "",
      ykconducted: "",
    };
    console.log(this.klList);
  }

  setName(value, role): void {
    let temp: any;
    switch (role) {
      case "jilla": {
        temp = this.jSannidathaList.filter(t => t.id == value);
        this.klCurrent.jSannidatha.phone = temp[0].phone;
        this.klCurrent.jSannidatha.name = temp[0].name;
        this.klCurrent.jSannidatha.role = temp[0].role;
        this.klCurrent.jSannidatha.id = temp[0].id;
        this.klCurrent.jSannidatha.dob = new Date(temp[0].dob);
        break;
      }
      case "taluka": {
        temp = this.tSannidathaList.filter(t => t.id == value);
        this.klCurrent.tSannidatha.phone = temp[0].phone;
        this.klCurrent.tSannidatha.name = temp[0].name;
        this.klCurrent.tSannidatha.role = temp[0].role;
        this.klCurrent.tSannidatha.id = temp[0].id;
        this.klCurrent.tSannidatha.dob = new Date(temp[0].dob);
        break;
      }
      case "avekshak": {
        temp = this.avekshakList.filter(t => t.id == value);
        this.klCurrent.avekshak.phone = temp[0].phone;
        this.klCurrent.avekshak.name = temp[0].name;
        this.klCurrent.avekshak.role = temp[0].role;
        this.klCurrent.avekshak.id = temp[0].id;
        this.klCurrent.avekshak.dob = new Date(temp[0].dob);
        break;
      }
      case "s1": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak1.phone = temp[0].phone;
        this.klCurrent.sanchalak1.name = temp[0].name;
        this.klCurrent.sanchalak1.role = "SANCHALAK_1";
        this.klCurrent.sanchalak1.id = temp[0].id;
        this.klCurrent.sanchalak1.dob = new Date(temp[0].dob);
        break;
      }
      case "s2": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak2.phone = temp[0].phone;
        this.klCurrent.sanchalak2.name = temp[0].name;
        this.klCurrent.sanchalak2.role = "SANCHALAK_2";
        this.klCurrent.sanchalak2.id = temp[0].id;
        this.klCurrent.sanchalak2.dob = new Date(temp[0].dob);
        break;
      }

    }
  }
  submit(): void {
    console.log(this.klList);
    this.http.create(this.klList, 'kendra/create').subscribe(resp => {
      this.router.navigate(['/', 'searchklevel'])

    })
  }

}
