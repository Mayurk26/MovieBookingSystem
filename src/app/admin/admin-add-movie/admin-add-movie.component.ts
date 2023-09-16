import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent {

  newMovie:Movie={id:0,name:'',price:0,timeSlot:'',image:''};

  constructor(private router:Router,private adminService:AdminServiceService){}

  

  //To add the new movie
  addMovie(){
    if(this.newMovie.name && this.newMovie.price && this.newMovie.timeSlot && this.newMovie.image){
      this.adminService.addMovie(this.newMovie);
      //this.newMovie={id:0,name:'',price:0,timeSlot:'',image:''};
    }
    this.router.navigate(['admin-home']);
  }



}
