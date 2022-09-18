import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jokeUrl:string="https://official-joke-api.appspot.com/random_joke";
  apiJoke:string="https://v2.jokeapi.dev/joke/";
  constructor(private http:HttpClient ) { }


  getJoke(type:string){
    return this.http.get(this.apiJoke+type)
  }
}
