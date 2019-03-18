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
  public surname;
  public middlename;
  public name;
  public ykList: YuvanModel[] = [];
  public ykCurrData: YuvanModel = <YuvanModel>{ name: "",  phone: "", dob: new Date(), role: "" };
  public selectedIndex: number = 0;
  public roleList = [{"key":"J_SANNIDATHA","value":"Jilla Sannidatha"},{"key":"J_SANNIDATHA","value":"Taluka Sannidatha"},{"key":"AVEKSHAK","value":"Avekshak"},{"key":"SANCHALAK_1","value":"Sanchalak"}];
  constructor(private clientHttp: HttpService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  //addToList() pushes the data to the ykList array
  addToList(dMilanForm: NgForm) {
    this.ykCurrData.name=this.surname+" "+this.middlename+" "+this.name;
    this.ykList.unshift(this.ykCurrData);
    this.ykCurrData = <YuvanModel>{ name: "",  phone: "", dob: new Date(), role: "" };
    this.name=null;
    this.middlename=null;
    this.name=null;
    console.log(this.ykList);
  }
  //delete() deletes the row based on index
  delete(index): void {
    this.ykList.splice(index, 1)
  }
 
  //submit() submits all data to database and navigate to searchdmilan component
  submit(): void {
    this.clientHttp.create(this.ykList, 'yuvan/create').subscribe(resp => {
      this.router.navigate(['/', 'searchdmilan'])
    })
  }
}
