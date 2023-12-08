import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  helper=new JwtHelperService()
  private refreshTokenUrl = '/api/refreshToken';
  backendLink='http://localhost:5000'
  isLoggin:BehaviorSubject<boolean>= new BehaviorSubject (false)
  constructor(private http:HttpClient) {
    
   if(localStorage.getItem("token")){
      this.isLoggin.next(true)
    }else{
      this.isLoggin.next(false)
    }
   } 
   userLogIn(token:string){
    localStorage.setItem("token",token)
    this.isLoggin.next(true)
   }
   userLogout(){
    localStorage.removeItem("token")
    this.isLoggin.next(false)
   }
   login(data:any){
    return this.http.post(`${this.backendLink}/Login`,data)
  }

  register(data:any){
    return this.http.post(`${this.backendLink}/Register`,data)
  }  

  getOneUser(encrypted_id:any){
    return this.http.get(`${this.backendLink}/user/${encrypted_id}`)
  }
  addblogs(data:any){
    return this.http.post(`${this.backendLink}/blogs`,data)
  }
}
