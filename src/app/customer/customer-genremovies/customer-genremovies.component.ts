import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-genremovies',
  templateUrl: './customer-genremovies.component.html',
  styleUrls: ['./customer-genremovies.component.css']
})
export class CustomerGenremoviesComponent {

  genreName:string='';

  genreMovie:Movie[]=[];

  constructor(private activeRoute: ActivatedRoute,private customerService:CustomerServiceService,private router:Router){
    
  }

  ngOnInit(){
      this.genreName=this.activeRoute.snapshot.paramMap.get('name')!;
      this.genreMovie=this.customerService.genrewiseMovies(this.genreName);
  }

  viewdetail(){
    this.router.navigate(['customer-movie']);
}

}
