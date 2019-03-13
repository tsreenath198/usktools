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
    let temp: any;
    switch (role) {
      case "jilla": {
        temp = this.jSannidhataList.filter(t => t.id == value);
        this.klCurrent.jillaSannidhataContact = temp[0].contact;
        this.klCurrent.jillaSannidhataDOB = new Date(temp[0].dob);
        break;
      }
      case "taluka": {
        temp = this.tSannidhataList.filter(t => t.id == value);
        this.klCurrent.talukaSannidhataContact = temp[0].contact;
        this.klCurrent.talukaSannidhataDOB = new Date(temp[0].dob);
        break;
      }
      case "avekshak": {
        temp = this.avekshakList.filter(t => t.id == value);
        this.klCurrent.avekshakContact = temp[0].contact;
        this.klCurrent.avekshakDOB = new Date(temp[0].dob);
        break;
      }
      case "s1": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak1Contact = temp[0].contact;
        this.klCurrent.sanchalak1DOB = new Date(temp[0].dob);
        break;
      }
      case "s2": {
        temp = this.sanchalakList.filter(t => t.id == value);
        this.klCurrent.sanchalak2Contact = temp[0].contact;
        this.klCurrent.sanchalak2DOB = new Date(temp[0].dob);
        break;
      }

    }
  }

}
