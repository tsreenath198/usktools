import { Component, OnInit } from '@angular/core';
import { DmilanModel } from '../d-milan/d-milan.model';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchdmilan',
  templateUrl: './searchdmilan.component.html',
  styleUrls: ['./searchdmilan.component.css']
})
export class SearchdmilanComponent implements OnInit {
  public yInput:string;
  public ykCurrData: DmilanModel = <DmilanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
  public ykList: DmilanModel[] = [];
  constructor(private http: HttpService, private router: Router) { }
  //gets data from database
  ngOnInit() {
    this.http.getReq('getAll').subscribe(resp => {
      this.ykList = resp as DmilanModel[]
    });
  }
  //navigates to next page
  addToList() {
    if(this.yInput)
    {
      let temp;
      temp=this.yInput.split(" ");
      console.log(temp);
    }
      else{
        this.router.navigate(['/', 'd-milan'])
      }
  }
  //deletes the row based on index value
  delete(index): void {
    this.ykList.splice(index, 1)
  }
}
