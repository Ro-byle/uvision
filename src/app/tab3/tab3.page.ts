import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  hidden: String = "a"
  stats(){
    if(this.hidden == "a")
    {
    document.getElementById("statsPicture").style.visibility = "visible";
     this.hidden = "b"
    }
   
  }
  change(){
    document.getElementById("statsPicture").style.visibility = "hidden";
    this.hidden = "a"
  }
}
