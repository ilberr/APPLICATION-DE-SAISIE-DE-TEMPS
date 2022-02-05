import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  isLogin: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  doStart(){
    if(!this.isLogin){
      alert("Please Login!!")
    }else{
      console.log(" ok!")
    }
  }
}
