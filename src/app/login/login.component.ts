import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      // fullname:['', Validators.required],
      password:['', Validators.required]
    })
  }


  login(){
    console.log("hello");
    console.log(this.loginForm.value)

    return this.http.get<any>("http://localhost:3000/signupUsers")
  .subscribe(res=>{
    const user = res.find((a : any)=>{
     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password  
          // return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.fullname ===this.loginForm.value.fullname 
    });
    if (user){
      // alert("Login Success");
      this.toast.success({detail:"SUCCESS",summary:'Login Successfully!!!',duration:1000});
      this.loginForm.reset();
      this.router.navigate(['dashboard'])
    }
    else{
      // alert("user not found");
      this.toast.error({detail:"ERROR",summary:'User Not Found',sticky:true});

    }
  },error=>{
     alert("something went wrong")
     this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
  
    })
    

  }
    
    
}
