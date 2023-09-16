import { Component } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customer-genre',
  templateUrl: './customer-genre.component.html',
  styleUrls: ['./customer-genre.component.css']
})
export class CustomerGenreComponent {
  genres:Genre[]=[];

  constructor(private router:Router,private customerService:CustomerServiceService){
    this.genres=this.customerService.getAllGenres();
  }

 

  selectedGenre(name:string){
    console.log(name);
    this.router.navigate(['customer-genre/'+ `${name}`]);
  }

}
