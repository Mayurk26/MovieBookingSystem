import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-admin-update-movie',
  templateUrl: './admin-update-movie.component.html',
  styleUrls: ['./admin-update-movie.component.css']
})
export class AdminUpdateMovieComponent {
  updatedMovie:Movie={id:0,name:'',price:0,timeSlot:'',image:''};
  constructor(private router:Router,private adminService : AdminServiceService,private route:ActivatedRoute){}

  ngOnInit():void{
    const movieData = history.state.movieData;
    if(movieData){
      this.updatedMovie={...movieData};
    }
  }

  updateMovie(){
    this.adminService.updateMovie(this.updatedMovie);
    this.router.navigate(['admin-home']);
  }

}
