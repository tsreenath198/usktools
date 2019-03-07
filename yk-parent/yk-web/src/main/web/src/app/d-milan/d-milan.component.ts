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

  public submitted=false;
  public ykList: DmilanModel[] = [];
  public ykCheck:FormGroup;
  public ykCurrData: DmilanModel = <DmilanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
  public selectedIndex: number = 0;
  public kendraTypeList = ["YK", "DPC"];
  public jimmedariList = ["Sanchalak", "Sahasanchalak"];

  public thalukaList = ["Armoor", "Bheemgal", "Bodhan", "Banswada", "Kamareddy", "Domakonda", "Nizamabad", "Yellareddy", "Madnoor"];
  constructor(private clientHttp: HttpService, private router: Router, private formBuilder:FormBuilder) { }
  ngOnInit() {
    this.ykCheck= this.formBuilder.group({
      users: this.formBuilder.array([
       this.formBuilder.group({
        surname: ['', [Validators.required]],
        middleName: ['', [Validators.required]],
        name: ['', [Validators.required]],
        taluka: ['', [Validators.required]],
        patti:['', [Validators.required]],
        videoKendra:['', [Validators.required]],
        kendra:['', [Validators.required]],
        kendraType:['', [Validators.required]],
        jimmedari:['', [Validators.required]],
        contact: ['', [Validators.required]],
        dob:['', [Validators.required, Validators.minLength(10)]],
       })
     ])
  });
  //   this.ykCheck = this.formBuilder.group({
  //     surname: ['', [Validators.required]],
  //     middleName: ['', [Validators.required]],
  //     name: ['', [Validators.required]],
  //     taluka: ['', [Validators.required]],
  //     patti:['', [Validators.required]],
  //     videoKendra:['', [Validators.required]],
  //     kendra:['', [Validators.required]],
  //     kendraType:['', [Validators.required]],
  //     jimmedari:['', [Validators.required]],
  //     contact: ['', [Validators.required]],
  //     dob:['', [Validators.required, Validators.minLength(10)]],

  // });
  }
  get f() { return this.ykCheck.controls; }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ykCurrData))
  }
  
  addToList() {
        
        this.ykList.unshift(this.ykCurrData);
         this.ykCurrData = <DmilanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
         console.log(this.ykList);
        
    
  }
  delete(index): void {
    this.ykList.splice(index, 1)
  }
  getDob(yuvn) {
    //let dob = new Date(yuvn.dob);
    let timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
    //Math.abs(Date.now() - dob);
    yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  submit(): void {
    this.clientHttp.create(this.ykList, 'create').subscribe(resp => {
      this.router.navigate(['/', 'searchdmilan'])
    })
  }

}
