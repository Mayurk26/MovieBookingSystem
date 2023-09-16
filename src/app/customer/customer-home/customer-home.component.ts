import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {

  constructor(private router:Router){}

  //Array of movies
  movies=[
    {name:'Bahubali',price:500,description:'Action|Historical',imageurl:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg'},
    {name:'Opennheimer',price:1000,description:'Action|Historical|Biography',imageurl:'https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg'},
    {name:'RRR',price:400,description:'Action|Thriller',imageurl:'https://stat5.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8-322x402.jpg'},
    {name:'Bhool Bhulaiyaa',price:400,description:'Comedy|Horror',imageurl:'https://flxt.tmsimg.com/assets/p173317_p_v8_ac.jpg'},
    {name:'KGF 2',price:600,description:'Action|Biography',imageurl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66ab0972-ff05-4650-9a8e-975bf16fe079/df3fxnw-f2efb7aa-086d-4a92-8294-9b3d499180d7.jpg/v1/fill/w_734,h_1088,q_70,strp/kgf_chapter_2_poster_by_tyrionchandu_df3fxnw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzY2YWIwOTcyLWZmMDUtNDY1MC05YThlLTk3NWJmMTZmZTA3OVwvZGYzZnhudy1mMmVmYjdhYS0wODZkLTRhOTItODI5NC05YjNkNDk5MTgwZDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qPAKbbTXnfh-CYEzxsKJpJ0N_SkMOxCyogHwJSaLAlU'},
    {name:'Gadar 2',price:500,description:'Action|Thriller',imageurl:'https://static.zoomnews.com/photo/102820934/102820934.jpg'}

  ]

  //To navigate to the component which contains the movie description
  viewdetail(){
      this.router.navigate(['customer-movie']);
  }

}
