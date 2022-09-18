import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoading=false;
  joke:string="Click on Generate Joke to Genarate new Joke"
  seeWay=false;
  type="Programming"
  formJoke!:FormGroup;
  hasSetup=false;
  delivery="";
  setu="spong3.png"
  imageUrl="../../assets/" +this.setu
 
  constructor( private serv:ApiService, private forB:FormBuilder) { }

  ngOnInit(): void {

    this.formJoke=this.forB.group({
      'type':['Programming']
    } )
  }

  getJoke(){
    this.isLoading=true
    this.serv.getJoke(this.formJoke.value.type).subscribe((res:any)=>{
      this.isLoading=false;
      if(res.setup){
        this.hasSetup=true
        this.delivery=res.delivery
      }else{
        this.hasSetup=false
      }
      this.seeWay=false;
      this.setu="spong3.png";
      this.joke=res.setup==null?res.joke:res.setup
    })
    
  }
  jokeWay(){
    this.seeWay=!this.seeWay;
    this.setu=this.seeWay?"spong.png":"spong3.png";
    console.log(this.setu);
    

  }

}
