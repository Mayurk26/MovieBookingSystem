import { Component } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Router } from '@angular/router';
import { FormControl,Validators,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-customer-booked',
  templateUrl: './customer-booked.component.html',
  styleUrls: ['./customer-booked.component.css']
})
export class CustomerBookedComponent {

  selectedMovie: any = { name: 'Bahubali', timeslot: '9:00AM-12:00 PM', image: 'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg' };
  selectedDate: string = 'Selected Date';
  selectedSeats: string[] = ['A1', 'B3', 'C5'];
  selectedCouponCode: string = '';
  discountCoupons = [
    { code: 'SUMMER23',discountPercentage: 25},
    { code: 'WINTER23',discountPercentage: 15},
  ]
 
  snacks = [
    { name: 'Samosa', price: 80, selected: false, selectedQuantity: 1 },
    { name: 'Coke', price: 150, selected: false, selectedQuantity: 1 },
    { name: 'Popcorn', price: 200, selected: false, selectedQuantity: 1 }
    
  ];

  snackQuantities: number[] = [1, 2, 3];
   
  temp:number=0;
  selectedSnack: string = '';
  selectedSnackQuantity: number = 1;
  selectedPaymentMethod: string = '';
  temptotal:number=0;

  constructor(private customerservice:CustomerServiceService,private router :Router){
    this.selectedSeats=this.customerservice.a;
    this.temp=customerservice.totalprice;
  }

  //For credit card validations
  creditCardForm = new FormGroup({
    cardNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{16}'),Validators.maxLength(16),Validators.minLength(16)]),
    expiry: new FormControl('',[Validators.required,Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$'),Validators.maxLength(5)]),
    cvv: new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}'),Validators.maxLength(3),Validators.minLength(3)])
  })

  //for upi  validations
  upiForm = new FormGroup({
    upiId: new FormControl('',[Validators.required])
  })


  //calculates the totalprice according to the snacks selected
  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const snack of this.snacks) {
      if (snack.selected) {
        totalPrice += snack.price * snack.selectedQuantity;
      }
    }
    return totalPrice;
  }

 
  

  //to select the payment method
  selectPaymentMethod(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
  
  }

  //It gives the totalprice
  getTotalPrice():number{
     
      return this.calculateTotalPrice()+this.customerservice.totalprice;
  }

  //To get the booking date
  getdate():string{
    return this.customerservice.selectDate;
  }

  //If the credit card details are valid then it routes to the customer confirm component
  makePaymentCreditCard(){
    if(this.creditCardForm.valid){
      this.router.navigate(['customer-confirm']);
    }
  }

  //If upi id is entered then it routes to the customer confirm component
  makePaymentUpi(){
    if(this.upiForm.valid){
      this.router.navigate(['customer-confirm']);
    }
  }

  applyDiscount(couponCode: string):void {
    this.selectedCouponCode = couponCode;
    const selectedCoupon = this.discountCoupons.find(coupon => coupon.code === couponCode);
    if(selectedCoupon){
      const discountAmount = (selectedCoupon.discountPercentage / 100)* this.getTotalPrice();
      this.temptotal = discountAmount;
    }
  }

}


