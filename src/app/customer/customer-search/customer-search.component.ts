import { Component,OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent {
  searchResults: Movie[]=[];
  constructor(private customerService:CustomerServiceService,private router:Router){}

  //Its for getting the search results from the customer servive and storing in the array
  ngOnInit(){
    this.customerService.getSearchResults().subscribe(results => {
      this.searchResults = results;
    })
  }

  //for navigating the route to the customer movie component
  viewdetail(){
    this.router.navigate(['customer-movie']);
  }

}
