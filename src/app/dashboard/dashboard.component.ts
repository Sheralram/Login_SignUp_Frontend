import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  local:any;
  ssn?:any;
  ngOnInit(): void {
  }

save(){
  sessionStorage.setItem('name','Ramkrishna');
  localStorage.setItem('localname','local');
  localStorage.setItem('localname1','local1');

}
retrive(){
  this.ssn=sessionStorage.getItem('name');
  this.local=localStorage.getItem('localname');
}
remove(){
  sessionStorage.removeItem('name');
  localStorage.removeItem('localname');
}

clearAll(){
  sessionStorage.clear();
  localStorage.clear();
}
}
