import { Component, OnInit } from '@angular/core';
import { DmilanModel } from './d-milan.model';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-d-milan',
  templateUrl: './d-milan.component.html',
  styleUrls: ['./d-milan.component.css']
})
export class DMilanComponent implements OnInit {


  public ykList: DmilanModel[] = [];
  public ykCurrData: DmilanModel;
  public selectedIndex: number = 0;
  public kendraTypeList = ["YK","DPC"];
  public jimmedariList = ["Sanchalak","Sahasanchalak"];
  
  public thalukaList = ["Armoor","Bheemgal","Bodhan","Banswada","Kamareddy","Domakonda","Nizamabad","Yellareddy","Madnoor"];
  constructor(private clientHttp: HttpService) { }
  ngOnInit() {
  }
  addToList() {
    this.selectedIndex = 0;
    this.ykCurrData = <DmilanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", mName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
    this.ykList.unshift(this.ykCurrData);
    console.log(this.ykList);
  }
  delete(index): void {
    this.ykList.splice(index, 1)
  }
  getDob(yuvn){
    //let dob = new Date(yuvn.dob);
    let timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
    //Math.abs(Date.now() - dob);
    yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

  submit():void{
    this.clientHttp.create(this.ykList).subscribe(resp=>{

    })
  }

}
