import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customer-movie',
  templateUrl: './customer-movie.component.html',
  styleUrls: ['./customer-movie.component.css']
})
export class CustomerMovieComponent {
  movies: Movie[] = [
    {
      name: 'Bahubali',
      price: 500,
      description: 'Action | Thriller',
      movieImage: 'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg'
    }]
  dateOptions: string[] = [];
  selectedDate : string = '';
  rows=5;
  cols=10;
  arr:string[]=[];
  seats:Seat[]=[];
  status:any=[];
  rowLabels: string[] = ['A', 'B', 'C', 'D', 'E'];
  temp: number=0;
  constructor(private router:Router,private customerservice:CustomerServiceService){
    this.createSeatLayout();
    this.generateDateOptions();
    
  }

  hoveredSeatLabel:string|null=null;

  onSeatHover(seat: Seat){
    this.hoveredSeatLabel=seat.id;
  }
  
  onSeatLeave(){
    this.hoveredSeatLabel=null;
  }

  //this function is used to show the today,tomorrows and theyafterTomorrows date in day and date format
  generateDateOptions() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    this.dateOptions = [
      today.toLocaleDateString(undefined, options),
      tomorrow.toLocaleDateString(undefined, options),
      dayAfterTomorrow.toLocaleDateString(undefined, options)
    ];

    this.selectedDate=this.dateOptions[0];
   
    //for passing the booking seats and totalprice and selected date to customer service
    this.customerservice.a=this.arr;
    this.customerservice.totalprice += this.totalPrice;
    this.customerservice.selectDate=this.selectedDate;
    
  }

  

  //For creating the seat layout
  createSeatLayout() {
    for (let row = 1; row <= this.rows; row++) {
      for (let col = 1; col <= this.cols; col++) {
        const rowLabel = this.rowLabels[row - 1]; // Get the corresponding row label
        const seatLabel = `${rowLabel}${col}`; // Combine row label and seat number
        this.seats.push({ id: seatLabel, status: 'available' });
      }
    }
  }

 

  //For getting seats in row for corresponding rowLabel
  getSeatsInRow(rowLabel: string): Seat[] {
    return this.seats.filter(seat => seat.id.startsWith(rowLabel));
  }
  

  //this is used to select and deselect the seats
  toggleSeat(seat:Seat){
    if(seat.status==='available'){
      seat.status='selected';
      this.arr.push(seat.id);
    }else if(seat.status==='selected'){
      seat.status='available';
      var index:number=this.arr.indexOf(seat.id,0);
      this.arr.splice(index);
    }
  }

  //Use to route to the customer booked component
  book(){
    this.router.navigate(['customer-booked']);
  }

  disablebook(){
    if(this.arr.length==0){
      return true;
    }else{
      return false;
    }
  }

  //To get the Totalprice according to no of seats
  get totalPrice(): number {
    this.temp=this.arr.length * this.movies[0].price;
    this.customerservice.totalprice=this.temp;
    return this.temp;
  }

  

}

interface Seat{
  id:string;
  status:'available'|'reserved'|'selected';
}

interface Movie {
  name: string;
  price: number;
  description: string;
  movieImage: string; 
}
