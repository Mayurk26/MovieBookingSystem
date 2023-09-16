import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies=[
    {name:'Bahubali',price:500,description:'Action|Historical',imageurl:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg'},
    {name:'Opennheimer',price:1000,description:'Action|Historical|Biography',imageurl:'https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg'},
    {name:'RRR',price:400,description:'Action|Thriller',imageurl:'https://stat5.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8-322x402.jpg'},

  ]
}
