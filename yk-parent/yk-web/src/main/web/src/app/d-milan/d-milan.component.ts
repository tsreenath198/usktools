import { Component, OnInit } from '@angular/core';
import { DmilanModel } from './d-milan.model';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-d-milan',
  templateUrl: './d-milan.component.html',
  styleUrls: ['./d-milan.component.css']
})
export class DMilanComponent implements OnInit {

  public ykList: DmilanModel[] = [];
  public ykCheck:FormGroup;
  public ykCurrData: DmilanModel = <DmilanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
  public selectedIndex: number = 0;
  public kendraTypeList = ["YK", "DPC"];
  public jimmedariList = ["Sanchalak", "Sahasanchalak"];

  public thalukaList = ["Armoor", "Bheemgal", "Bodhan", "Banswada", "Kamareddy", "Domakonda", "Nizamabad", "Yellareddy", "Madnoor"];
  constructor(private clientHttp: HttpService, private router: Router, private formBuilder:FormBuilder) { }
  ngOnInit() {
  }
  addToList() {
        this.ykList.unshift(this.ykCurrData);
         this.ykCurrData = <DmilanModel>{ name: "", age: 0, contact:"", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
  }
  delete(index): void {
    this.ykList.splice(index, 1)
  }
  getDob(yuvn) {
    let timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
    yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  submit(): void {
    this.clientHttp.create(this.ykList, 'create').subscribe(resp => {
      this.router.navigate(['/', 'searchdmilan'])
    })
  }

}
