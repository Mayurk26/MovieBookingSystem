import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private readonly SESSION_KEY = 'userSession';
  constructor() { }

  setSession(user: User):void{
    const userJson = JSON.stringify(user);
    sessionStorage.setItem(this.SESSION_KEY,userJson);
  }

  getSession(): User | null {
    const userJson = sessionStorage.getItem(this.SESSION_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  clearSession(): void{
    sessionStorage.removeItem(this.SESSION_KEY);
  }
}
