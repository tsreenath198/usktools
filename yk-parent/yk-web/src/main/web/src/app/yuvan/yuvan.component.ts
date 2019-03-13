import { Component, OnInit } from '@angular/core';
import { YuvanModel } from './yuvan.model';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-yuvan',
  templateUrl: './yuvan.component.html',
  styleUrls: ['./yuvan.component.css']
})
export class YuvanComponent implements OnInit {
  public ykList: YuvanModel[] = [];
  public ykCurrData: YuvanModel = <YuvanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "", role: "" };
  public selectedIndex: number = 0;
  public kendraTypeList = ["YK", "DPC"];
  public jimmedariList = ["Sanchalak", "Sahasanchalak"];
  public thalukaList = ["Armoor", "Bheemgal", "Bodhan", "Banswada", "Kamareddy", "Domakonda", "Nizamabad", "Yellareddy", "Madnoor"];
  public roleList = ["Sanchalak", "Avekshak"];
  constructor(private clientHttp: HttpService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  //addToList() pushes the data to the ykList array
  addToList(dMilanForm: NgForm) {
    this.ykList.unshift(this.ykCurrData);
    this.ykCurrData = <YuvanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "", role: "" };
    console.log(this.ykList);
  }
  //delete() deletes the row based on index
  delete(index): void {
    this.ykList.splice(index, 1)
  }
  //getDob() calculates the age based on date of birth
  getDob(yuvn) {
    let timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
    yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }
  //submit() submits all data to database and navigate to searchdmilan component
  submit(): void {
    this.clientHttp.create(this.ykList, 'create').subscribe(resp => {
      this.router.navigate(['/', 'searchdmilan'])
    })
  }
}
