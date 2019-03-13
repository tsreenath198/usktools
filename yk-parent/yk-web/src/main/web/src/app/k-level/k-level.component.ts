import { Component, OnInit } from '@angular/core';
import { KLevelModel } from './k-level.model';
import { HttpService } from '../http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-k-level',
  templateUrl: './k-level.component.html',
  styleUrls: ['./k-level.component.css']
})
export class KLevelComponent implements OnInit {
  public klList: KLevelModel[] = [];
  public klCurrent: KLevelModel = <KLevelModel>{
    country: "",
    state: "",
    jillaName: "",
    jillaSannidhata: "",
    talukaName: "",
    talukaSannidhata: "",
    groupName: "",
    avekshakName: "",
    kendraName: "",
    kendraType: "",
    yuvaYuvati: "",
    yearOfKendra: "",
    category: "",
    kendraNumber: "",
    status: "",
    yearMerged: "",
    mergedTo: "",
    sanchalak1: "",
    sanchalak2: "",
    minAttendance: "",
    maxAttendance: "",
    YKConducted: "",
    villageOfYK: "",
    landMark: "",
    yKSthal: "",
    yKSthalPin: "",
    dayOfYK: "",
    timeOfYK: "",
    swadhyayLoc: "",
    swadhyayVillage: ""
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
  constructor(private http: HttpService) { }

  ngOnInit() {
    let ak = this.http.getReq('getAllByRole/Avekshak');
    let sk = this.http.getReq('getAllByRole/Sanchalak');
    let js = this.http.getReq('getAllByRole/Jilla-sannidhata');
    let ts = this.http.getReq('getAllByRole/Taluka-sannidhata');
    let wd = this.http.getLogin('assets/weekdays.json');
    forkJoin([ak, sk, js, ts, wd]).subscribe(resultList => {
      this.avekshakList = resultList[0];
      this.sanchalakList = resultList[1];
      this.jSannidhataList = resultList[2];
      this.tSannidhataList = resultList[3];
      this.daysList = resultList[4];
    });
  }

  setName(value: string, role: string): void {
    switch (role) {
      case "jilla": {
        console.log("Excellent");
        break;
      }
      case "taluka": {
        console.log("Excellent");
        break;
      }
      case "avekshak": {
        console.log("Excellent");
        break;
      }
      case "s1": {
        console.log("Excellent");
        break;
      }
      case "s2": {
        console.log("Excellent");
        break;
      }

    }
  }

}
