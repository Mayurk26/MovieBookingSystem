import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  a:any[] = [];
  totalprice: number=0;
  selectDate:string='';
  
  constructor() { }

  private searchQuerySubject = new BehaviorSubject<string>('');
  private searchResultsSubject = new BehaviorSubject<Movie[]>([]);

  //array for movie search
  private movies: Movie[] = [
    {id:1,name:'Bahubali',price:500,timeSlot:'9:00AM-12:00PM',image:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg',genre:[{name:'Action',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
    {id:2,name:'Opennheimer',price:1000,timeSlot:'12:00PM-3:00PM',image:'https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg',genre:[{name:'Horror',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
    {id:3,name:'RRR',price:500,timeSlot:'4:00PM-7:00PM',image:'https://stat5.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8-322x402.jpg',genre:[{name:'Action',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
    {id:3,name:'Bhool Bhulaiyaa',price:400,timeSlot:'4:00PM-7:00PM',image:'https://flxt.tmsimg.com/assets/p173317_p_v8_ac.jpg',genre:[{name:'Horror',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
    {id:3,name:'KGF 2',price:600,timeSlot:'4:00PM-7:00PM',image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66ab0972-ff05-4650-9a8e-975bf16fe079/df3fxnw-f2efb7aa-086d-4a92-8294-9b3d499180d7.jpg/v1/fill/w_734,h_1088,q_70,strp/kgf_chapter_2_poster_by_tyrionchandu_df3fxnw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzY2YWIwOTcyLWZmMDUtNDY1MC05YThlLTk3NWJmMTZmZTA3OVwvZGYzZnhudy1mMmVmYjdhYS0wODZkLTRhOTItODI5NC05YjNkNDk5MTgwZDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qPAKbbTXnfh-CYEzxsKJpJ0N_SkMOxCyogHwJSaLAlU',genre:[{name:'Action',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
    {id:3,name:'Gadar 2',price:500,timeSlot:'4:00PM-7:00PM',image:'https://static.zoomnews.com/photo/102820934/102820934.jpg',genre:[{name:'Action',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'}]},
  ]!;

  genres: Genre[] = [
    {name:'Action',imageUrl:'https://e7.pngegg.com/pngimages/316/847/png-clipart-clapperboard-graphics-illustration-film-action-movies-photography-logo-thumbnail.png'},
    {name:'Horror',imageUrl:'https://mcdn.wallpapersafari.com/medium/16/42/kNspvJ.png'},
    {name:'Comedy',imageUrl:'https://toppng.com/uploads/preview/247-comedy-11549754164d1jdi9msty.png'},
  ];

  //for storing the search query
  setSearchQuery(query: string){
    this.searchQuerySubject.next(query);
  }

  //for storing the search results
  setSearchResults(results:Movie[]){
    this.searchResultsSubject.next(results);
  }

  //for getting the search results
  getSearchResults(): Observable<Movie[]>{
    return this.searchResultsSubject.asObservable();
  }

  total(totalprice:number):void{
    this.totalprice=totalprice;
  }

  //for searching the particular movie by its name  and storing it in results
  searchMovies(query:string):Movie[]{
    query = query.toLowerCase();
    const results = this.movies.filter(movie =>
      movie.name.toLowerCase().includes(query)
      );
      this.setSearchResults(results);
      return results;

  }

  getAutoSuggestions(query:string):string[] {
    query = query.toLowerCase();
    const suggestions = this.movies.filter(movie => movie.name.toLowerCase().includes(query)).map(movie=>movie.name);
    return suggestions;
  }

  genrewiseMovies(name:string){
    // if(this.movies.find(p => p.genre.name===name)!)
    let moviesToReturn:Movie[]=[];
    for(let i=0;i<this.movies.length;i++){
      if(this.movies[i].genre!.find(p => p.name===name)&& this.movies[i]!=undefined){
          moviesToReturn.push(this.movies[i])
      }
    }
    return moviesToReturn;

  }

  getAllGenres(){
    return this.genres;
  }
}
