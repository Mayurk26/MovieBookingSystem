import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  selectedRole: string = 'admin';
  showLogin=false;
  invalidCredentials=false;
  userExists:boolean=false;

  newUser:User={name:'',email:'',password:'',role:'customer'};

  constructor(private router:Router,private adminService:AdminServiceService,private sessionService: SessionServiceService){
    this.userExists=this.adminService.getUserExistsValue();
  }

  //In this function the particular home page is navigated according to the role of user
  // signIn(){
  //   if(this.selectedRole==='admin'){
  //     this.router.navigate(['admin-home']);
  //   }else if(this.selectedRole==='customer'){
  //     this.router.navigate(['customer-home']);
  //   }
  // }

  signIn(){
    const matchedUser = this.adminService.getUsersByEmailAndPassword(this.email,this.password);
    if(matchedUser){
      this.sessionService.setSession(matchedUser);
      if(matchedUser.role === 'admin'){
        this.router.navigate(['admin-home']);
      }else if(matchedUser.role==='customer'){
        this.router.navigate(['customer-home']);
      }
    }else{
      this.invalidCredentials=true;
    }
    
  }

  // addUser(){
  //   if(this.newUser.name && this.newUser.email && this.newUser.password && this.newUser.role){
  //     this.adminService.addUser(this.newUser);
  //   }
  //   this.showLogin=true;
  // }

  addUser(){
    if(this.newUser.name && this.newUser.email && this.newUser.password && this.newUser.role){
      this.adminService.addUser(this.newUser);
      if(this.adminService.getUserExistsValue()){
        this.userExists=true;
      }else{
        this.showLogin = true;
      }
    }
    
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignup(){
    this.showLogin=false;
  }

}
