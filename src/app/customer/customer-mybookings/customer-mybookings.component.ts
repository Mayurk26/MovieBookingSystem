import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-mybookings',
  templateUrl: './customer-mybookings.component.html',
  styleUrls: ['./customer-mybookings.component.css']
})
export class CustomerMybookingsComponent {

  //Array which represents the bookings for movie
  bookings=[
    {moviePoster:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg',movieName:'Bahubali',numSeats:2,totalAmount:1000,date:new Date(new Date().getTime()+24*60*60*1000),showTime:'morning(9:00AM-12:00PM)'},
    {moviePoster:'https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg',movieName:'Opennheimer',numSeats:1,totalAmount:1000,date:new Date(new Date().getTime()-24*60*60*1000),showTime:'evening(12:00PM-3:00PM)'}
  ]

  constructor(private router:Router){}

  //If the Cancel Booking Button will be active then this function will call and it will make route to customer home component
  book(){
    alert("Booking cancelled Succesfully");
    this.router.navigate(['customer-home']);
  }
  
  //This function takes the booking date as a parameter and if the date is of tomorrows or theyaftertommorrows then 
  //cancel booking button will be active otherwise it will disabled the button
  shouldDisableButton(bookingDate: Date):boolean{
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate()+1);
    const dayAfterTomorrow = new Date(now);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate()+2);

    return !(bookingDate.getDate()===tomorrow.getDate() || bookingDate.getDate()===dayAfterTomorrow.getDate());
  }


}
