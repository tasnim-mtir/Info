import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bloging',
  templateUrl: './bloging.component.html',
  styleUrls: ['./bloging.component.css']
})
export class BlogingComponent {
  helper = new JwtHelperService()
  id: any
  UserId: any
  myForm: any;
  data1: any
  encrypted_id: any 
  data3= { encrypted_id: "" ,userName: "" ,}

  //data:any={Title:"",Price:"",Quantity:"",Description:"",Email:"",Password:""}

  constructor(
    private user: UserService,
    private router: Router,
    private formBuilder: FormBuilder) {
      const token = localStorage.getItem('token');
    if (token && !this.helper.isTokenExpired(token)) {
      const decodedToken = this.helper.decodeToken(token);
       this.encrypted_id = decodedToken.userId;}
      }

  myCustomValidator(control: FormControl): { [key: string]: boolean } | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email is valid using the regular expression
    const isValid = EMAIL_REGEXP.test(control.value);
    // Return an object with the error code and message if the email is invalid
    return isValid ? null : { 'invalidEmail': true };
  }

  ngOnInit(): void {
       
    this.myForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      image : ['', Validators.required], 
      date : ['', Validators.required],
      idea: ['', Validators.required]
    });

 
  }

  addbloges(f: any) {
    let data = f.value
    this.user.addblogs(data).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

}

