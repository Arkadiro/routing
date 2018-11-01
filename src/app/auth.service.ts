import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  
  constructor() { }
  
  isAuthenticated(){
    const promise = new Promise((resolve, reject)=>{
      resolve(this.loggedIn);
    })
    return promise
  }
  
  loggin() {
    this.loggedIn = true;
    console.log('loggedIn')
  }

  loggout() {
    this.loggedIn = false;
  }

}
