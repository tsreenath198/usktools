import { Component, OnInit } from '@angular/core';
import { KLevelModel } from './k-level.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-k-level',
  templateUrl: './k-level.component.html',
  styleUrls: ['./k-level.component.css']
})
export class KLevelComponent implements OnInit {
  public klList : KLevelModel[] = [];
  public klCurrent : KLevelModel = <KLevelModel>{
    country : "",
    state : "",
    jillaName : "",
    jillaSannidhata : "",
    talukaName : "",
    talukaSannidhata : "",
    groupName : "",
    avekshakName : "",
    kendraName : "",
    kendraType : "",
    yuvaYuvati : "",
    yearOfKendra : "1997",
    category : "",
    kendraNumber : "",
    status : "",
    yearMerged : "",
    mergedTo : "",
    sanchalak1 : "",
    sanchalak2 : "",
    minAttendance : "",
    maxAttendance : "",
    YKConducted : "",
    villageOfYK : "",
    landMark : "",
    yKSthal : "",
    yKSthalPin : "",
    dayOfYK : "",
    timeOfYK : "",
    swadhyayLoc : "",
    swadhyayVillage : ""
  };
  public kendraTypeList = ["YK", "DPC"];
  public genderType =["yuva","yuvati"];
  public categoryList = ["Village" , "City Vistar"];
  public status= ["Active" , "Merged" , "Inactive"];
  public conducted= ["Home" , "School" , "College" , "Classes" , "Other"];
  public klData : object[];
  public jSannidhata : object[];
  public tSannidhata : object[];
  public avekshak : object[];
  public sanchalak : object[];
  public day ;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getLogin('assets/k-level-mock.json').subscribe(resp => {
      this.klData = resp as object[];
      this.jSannidhata = resp["jillaSannidhataList"];
      console.log(this.jSannidhata);
      this.tSannidhata = resp["talukaSannidhataList"];
      this.avekshak = resp["avekshakList"];
      this.sanchalak = resp["sanchalakList"];
      this.day = resp["weekdays"]
    });
  }

}
