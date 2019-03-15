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
    country : "",
    sanghat : "",
    jilla : "",
    taluka : "",
    group : "",
    kendra : "",
    jSannidhata : {"contact":"","dob":new Date(),"name":"","role":""},
    tSannidhata : {"contact":"","dob":new Date(),"name":"","role":""},
    avekshak : {"contact":"","dob":new Date(),"name":"","role":""},
    sanchalak1 : {"contact":"","dob":new Date(),"name":"","role":""},
    sanchalak2 : {"contact":"","dob":new Date(),"name":"","role":""},
    kendraType : "",
    yuvaYuvati : "",
    yearOfKendra : "",
    category : "",
    kendraNumber : "",
    status : "",
    yearMerged : "",
    mergedTo : "",   
    minAttendance : "",
    maxAttendance : "",
    villageOfYK : "",
    landMark : "",
    yKSthal : "",
    yKSthalPin : "",
    dayOfYK : "",
    timeOfYK : "",
    swadhyayLoc : "",
    swadhyayVillage : "",
    ykConducted : "",
  };
  public kendraTypeList = ["YK", "DPC"];
  public genderType = ["yuva", "yuvati"];
  public categoryList = ["Village", "City Vistar"];
  public statusList = ["Active", "Merged", "Inactive"];
  public conducted = ["Home", "School", "College", "Classes", "Other"];
  public klData: object[];
  public jSannidhataList: any;
  public tSannidhataList: any;
  public avekshakList: any;
  public sanchalakList: any;
  public daysList: any;
  constructor(private http: HttpService , private router:Router) { }

  ngOnInit() {
    let ak = this.http.getReq('yuvan/getAllByRole/Avekshak');
    let sk = this.http.getReq('yuvan/getAllByRole/Sanchalak');
    let js = this.http.getReq('yuvan/getAllByRole/Jilla-sannidhata');
    let ts = this.http.getReq('yuvan/getAllByRole/Taluka-sannidhata');
    let wd = this.http.getLogin('assets/weekdays.json');
    forkJoin([ak, sk, js, ts, wd]).subscribe(resultList => {
      this.avekshakList = resultList[0];
      this.sanchalakList = resultList[1];
      this.jSannidhataList = resultList[2];
      this.tSannidhataList = resultList[3];
      this.daysList = resultList[4];
    });
  }
  addToList() {
    this.klList.unshift(this.klCurrent);
    this.klCurrent = <KLevelModel>{
      country : "",
    sanghat : "",
    jilla : "",
    taluka : "",
    group : "",
    kendra : "",
    jSannidhata : {"contact":"","dob":new Date(),"name":"","role":""},
    tSannidhata : {"contact":"","dob":new Date(),"name":"","role":""},
    avekshak : {"contact":"","dob":new Date(),"name":"","role":""},
    sanchalak1 : {"contact":"","dob":new Date(),"name":"","role":""},
    sanchalak2 : {"contact":"","dob":new Date(),"name":"","role":""},
    kendraType : "",
    yuvaYuvati : "",
    yearOfKendra : "",
    category : "",
    kendraNumber : "",
    status : "",
    yearMerged : "",
    mergedTo : "",   
    minAttendance : "",
    maxAttendance : "",
    villageOfYK : "",
    landMark : "",
    yKSthal : "",
    yKSthalPin : "",
    dayOfYK : "",
    timeOfYK : "",
    swadhyayLoc : "",
    swadhyayVillage : "",
    ykConducted : "",
    };
    console.log(this.klList);
  }

  setName(value , role): void {
    let temp: any;
    switch (role) {
      case "jilla": {
        temp = this.jSannidhataList.filter(t => t.id == value);
        this.klCurrent.jSannidhata.contact = temp[0].contact;
        this.klCurrent.jSannidhata.dob = new Date(temp[0].dob);
        break;
      }
      case "taluka": {
        temp = this.tSannidhataList.filter(t => t.id == value);
        this.klCurrent.tSannidhata.contact = temp[0].contact;
        this.klCurrent.tSannidhata.dob = new Date(temp[0].dob);
        break;
      }
      case "avekshak": {
        temp = this.avekshakList.filter(t => t.id == value);
        this.klCurrent.avekshak.contact = temp[0].contact;
        this.klCurrent.avekshak.dob = new Date(temp[0].dob);
        break;
      }
      case "s1": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak1.contact = temp[0].contact;
        this.klCurrent.sanchalak1.dob = new Date(temp[0].dob);
        break;
      }
      case "s2": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak2.contact = temp[0].contact;
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
