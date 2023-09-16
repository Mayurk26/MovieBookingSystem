import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private users:User[]=[
    {name:'Mayur',email:'mayurkarpe0@gmail.com',password:'Mayur@123',role:'admin'},
    {name:'Rahul',email:'rahul@gmail.com',password:'Rahul@123',role:'customer'}
  ];
  private movies:Movie[]=[];
  private currentId = 1;
  private userExists:boolean=false;

  constructor() { }

  //for adding the user in users array
  // addUser(user:User){
  //   this.users.push(user);
  // }
  addUser(newUser:User){
      const existingUser = this.users.find(user => user.email === newUser.email);
      if(existingUser){
        this.setUserExistsValue(true);
      }else{
        this.users.push(newUser);
        this.setUserExistsValue(false);
      }
  }

  getUsersByEmailAndPassword(email:string,password:string):User | undefined {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user;
  }

  setUserExistsValue(value:boolean){
    this.userExists = value;
  }

  getUserExistsValue():boolean{
    return this.userExists;
  }

  //for getting the users
  getUsers():User[]{
    return this.users;
  }

  //for removing the user
  removeUser(index:number){
    this.users.splice(index,1);
  }

  updateUserRole(email: string,newRole: string){
    const userIndex = this.users.findIndex(user => user.email === email);
    if(userIndex !== -1){
      this.users[userIndex].role = newRole;
    }
  }

  //for adding the movie in the movies array
  addMovie(movie:Movie){
    movie.id=this.currentId++;
    this.movies.push(movie);
  }

  //for getting the movies 
  getMovies():Movie[]{
    return this.movies;
  }

  //for removing the movie
  removeMovie(id:number){
    const index = this.movies.findIndex(movie=>movie.id === id);
    if(index!==-1){
      this.movies.splice(index,1);
    }
  }

  //for updating the movie
  updateMovie(updatedMovie: Movie){
    const indexToUpdate = this.movies.findIndex(movie => movie.name === updatedMovie.name);
    if(indexToUpdate !== -1){
      this.movies[indexToUpdate]=updatedMovie;
    }
  }

}
