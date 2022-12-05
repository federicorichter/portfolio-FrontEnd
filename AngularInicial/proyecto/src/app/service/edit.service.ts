import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private logedIn= new Subject<boolean>();

  constructor() { }

  logIn$=this.logedIn.asObservable();

  logIn(){
    this.logedIn.next(true);
  }
  logOut(){
    this.logedIn.next(false)
  }

  
}
