import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent {
    newUser:User={name:'',email:'',password:'',role:''};
    constructor(private router:Router,private adminService:AdminServiceService){}

    add(data:any){
      console.warn(data);
      
    }
  
    //To add the new user
    addUser(){
      if(this.newUser.name && this.newUser.email && this.newUser.password){
        this.adminService.addUser(this.newUser);
        //this.newUser={name:'',email:'',password:''};
        this.router.navigate(['admin-home']);
      }
    }

}
