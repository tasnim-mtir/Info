import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/views/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  myForm: any;
  msg:any
  f: any;
constructor( private Service:UserService,private router:Router ,private formBuilder: FormBuilder){}
  

myCustomValidator(control: FormControl): { [key: string]: boolean } | null {
  const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email is valid using the regular expression
  const isValid = EMAIL_REGEXP.test(control.value);

  // Return an object with the error code and message if the email is invalid
  return isValid ? null : { 'invalidEmail': true };}


  register(f:any){
    let data=f.value
    this.Service.register(data).subscribe(data=>{
      if(data){
        this.router.navigate(['/login']).then(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'compte créé avec succès',
            showConfirmButton: false,
            timer: 1500
          })
        })
      } else {
        console.log('Registration failed');
      }
    }, err => {
      console.log(err);
      this.msg = err.error.msg;
    });
  } 
  
public ngSubmit(f:any){}
  ngOnInit(): void { 
    this.myForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email,this.myCustomValidator]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],   
      passwordVerification: ['', Validators.required]},
       
      {
      validator: this.matchingPasswords('password', 'passwordVerification')
        // other form fields...
    });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];
  
      // If both fields are empty, they are not considered matching
      if (!password.value && !confirmPassword.value) {
        return confirmPassword.setErrors({ emptyPasswords: true });
      }
  
      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ mismatchedPasswords: true });
      } else {
        return confirmPassword.setErrors(null);
      }
    };
  }


}






