import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { YuvaModel } from '../yuva.model';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-searchyuva',
  templateUrl: './searchyuva.component.html',
  styleUrls: ['./searchyuva.component.css']
})
export class SearchyuvaComponent implements OnInit {
  public ykPush: YuvaModel[] = [];
  public ykInput: string;
  public ykTemp: YuvaModel = <YuvaModel>{ name: "",  phone: "", dob: new Date(), role: "" };
  public ykList: YuvaModel[] = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private http: HttpService , private router: Router) { }
  //gets data from database
  ngOnInit() {
    this.http.getReq('yuvan/getAll').subscribe(resp => {
      this.ykList = resp as YuvaModel[]
    });
  }
  //navigates to next page
  addToList() {
    // if (this.ykInput) {
    //   let temp = this.ykInput.split(",");
    //   for (let i = 0; i < temp.length; i++) {
    //     this.searchInput(temp[i]);
    //   }
    //   this.http.create(this.ykPush, 'yuvan/create').subscribe(resp => {
    //     this.router.navigate(['/', 'searchdmilan'])
    //   })
    //   this.ykInput = null;
    //   this.ykPush = null;
    // }
    // else {
    //   this.router.navigate(['/', 'yuvan']);
    // }
    this.router.navigate(['/', 'yuvan']);
  }
  // searchInput(ykString) {
  //   let temp = ykString.split("\t");
  //   this.ykTemp.name = temp[7];
  //   this.ykTemp.contact = temp[8];
  //   this.ykTemp.jimmedari = temp[4];
  //   this.ykTemp.kendra = temp[2];
  //   this.ykTemp.kendraType = temp[3];
  //   this.ykTemp.middleName = temp[6];
  //   this.ykTemp.patti = temp[0];
  //   this.ykTemp.taluka = temp[0];
  //   this.ykTemp.surname = temp[5];
  //   this.ykTemp.residence = temp[17];
  //   this.ykTemp.videoKendra = temp[1];
  //   if (temp[9]) {
  //     let date = parseInt(temp[9] + temp[10]);
  //     this.ykTemp.dob.setDate(date);
  //     let month = parseInt(temp[11] + temp[12]);
  //     month -= 1;
  //     this.ykTemp.dob.setMonth(month);
  //     let year = parseInt(temp[13] + temp[14]);
  //     let currDate = new Date();
  //     let currYear = currDate.getFullYear() - 2000;
  //     if (year > 0 && year < currYear) {
  //       this.ykTemp.dob.setFullYear(2000 + year);
  //       console.log(this.ykTemp.dob.getFullYear());
  //     }
  //     else {
  //       this.ykTemp.dob.setFullYear(1900 + year);
  //     }
  //     console.log(this.ykTemp.dob);
  //   }
  //   if (temp[15]) {
  //     let age = parseInt(temp[15] + temp[16]);
  //     this.ykTemp.age = age;
  //   }
  //   this.ykPush.unshift(this.ykTemp);

  //   this.ykTemp = <YuvanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
  // }
  //deletes the row based on index value
  delete(index): void {
    this.ykList.splice(index, 1)
  }
  navigate(pth: string): void {
    this.router.navigate(['/', pth]);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
