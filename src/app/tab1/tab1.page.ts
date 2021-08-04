import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router) {}
  
  filled: boolean = true;
  like(): void {
    this.filled = !this.filled;
  }
  go(){
      this.router.navigate(['comment']);
    };
    
    color: string = "purple"
    goo(){
      this.router.navigate(['login']);
    }
  stats(){
    if(this.color == "purple")
    {
    document.getElementById("scope").style.background = "#ffda87";
     this.color = "yellow"
    }
    else if(this.color == "yellow"){
      document.getElementById("scope").style.background = "#4F2DB2";
      this.color = "purple"
    }
  }  
  }
  

