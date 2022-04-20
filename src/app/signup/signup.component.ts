 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import {FormGroup,FormBuilder, Validators} from "@angular/forms"
 import { Router } from '@angular/router';
 import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   public signupForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private toast : NgToastService
  ) { }

  ngOnInit(): void {
  
    this.signupForm = this.formBuilder.group({
      fullname: ['',Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required]
    })
  }

  signup()
  {
    console.log("hiiiiiiiiiiS")
    console.log(this.signupForm.value)

   return this.http.post("http://localhost:3000/signupUsers",this.signupForm.value)
   
    .subscribe(res=>{
      alert("SignUp Successfully!!");
      this.toast.success({detail:"SignupForm Successfully",summary:"Success Mesage",duration:1000})
      this.signupForm.reset();
      this.router.navigate(['login']);
    },error=>{
      alert("Something went Wrong");
      this.toast.error({detail:"SignupForm Failed",summary:"Error",duration:1000})
        })
  }

}
