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
  public ykList: DmilanModel[] = [];
  constructor(private http:HttpService, private router:Router) { }

  ngOnInit() {
    this.http.getReq('getAll').subscribe(resp => {
      this.ykList = resp as DmilanModel[]});
  }
  addToList(){
    this.router.navigate(['/', 'd-milan'])
  }

}
