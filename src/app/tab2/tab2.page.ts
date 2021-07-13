import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
hidden: String = "a";
appear(){
  if(this.hidden == "a")
  {
  document.getElementById("popup").style.visibility = "visible";
   this.hidden = "b"
  }
  else
  {
    document.getElementById("popup").style.visibility = "hidden";
    this.hidden = "a"
  }
 }
}
