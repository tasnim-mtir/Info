import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/views/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  helper = new JwtHelperService()
  encrypted_id: any
  data: any = { firstName: "", lastName: "" }
  firstName: any


  constructor(public Service:UserService, private router: Router) {
    const token = localStorage.getItem('token');
    if (token && !this.helper.isTokenExpired(token)) {
      const decodedToken = this.helper.decodeToken(token);
      this.encrypted_id = decodedToken.userId;
    }
  }
  ngOnInit(): void { 
    this.Service.getOneUser(this.encrypted_id).subscribe({
      next: (response: any) => {
        this.data = response.user
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  } 
  logout() {
    this.Service.userLogout()
    this.router.navigate(['/signup'])
  }
}

 
