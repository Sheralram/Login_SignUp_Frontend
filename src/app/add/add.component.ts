import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employeeForm!: FormGroup;


  constructor() {
    // private fb : FormBuilder
   }

  ngOnInit(): void {
  }


  onSubmit(){
    // console.log(this.employee);
    // this.saveEmployee();
    window.alert("Employee Details added Successfully!");
  }
}
