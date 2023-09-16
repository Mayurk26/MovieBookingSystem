import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:String='default';
  searchQuery: string = '';
  autoSuggestions:string[]=[];
  selectedSuggestion:string='';

  constructor(private router:Router,private customerService:CustomerServiceService,private sessionService:SessionServiceService){}

  //This helps to change the navbar sections according to Admin , Customer 
  ngOnInit():void{
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(val.url.includes('admin')){
          console.warn("in admin area");
          this.menuType="admin";
        }else if(val.url.includes('customer')){
          console.warn("inside customer");
          this.menuType="customer";
        }
        else{
          console.warn('default area');
          this.menuType="default";
        }
      }
    })
  }
  
  //this function is passing the search query to the customer Service
  onSearch(){
    this.customerService.setSearchQuery(this.searchQuery);
    this.customerService.searchMovies(this.searchQuery);
    this.router.navigate(['customer-search']);
  }

  onSearchInputChange(){
    const query = this.searchQuery.toLowerCase();
    this.autoSuggestions = this.customerService.getAutoSuggestions(query);
  }

  selectSuggestion(suggestion: string){
    this.searchQuery=suggestion;
    this.selectedSuggestion=suggestion;
    this.autoSuggestions=[];
  }

  clearSearch(){
    this.searchQuery='';
    this.autoSuggestions=[];
  }

  clearSuggestions(){
    this.autoSuggestions = [];
  }

  logout(){
    this.sessionService.clearSession();
    this.router.navigate(['login']);
  }

}
