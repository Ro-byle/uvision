import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  constructor() {}
  hidden: String = 'a';
  dropdown(thing) {
    if (this.hidden == 'a') {
      document.getElementById(thing).style.visibility = 'visible';
      this.hidden = 'b';
    } else if (this.hidden == 'b') {
      document.getElementById(thing).style.visibility = 'hidden';
      this.hidden = 'a';
    }
  }
  ngOnInit() {}
}
