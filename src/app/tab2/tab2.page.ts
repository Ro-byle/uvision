import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}

  searchText;
  players = [
    {
      name: 'Robel',
      likes: '100',
      followers: '50',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    },
    {
      name: 'Roman',
      likes: '100',
      followers: '50',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    },
    {
      name: 'Bryan',
      likes: '100',
      followers: '50',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    },
    {
      name: 'Jesse',
      likes: '100',
      followers: '50',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    }
  ];

  hidden: String = 'a';
  appear() {
    if (this.hidden == 'a') {
      document.getElementById('popup').style.visibility = 'visible';
      this.hidden = 'b';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
      this.hidden = 'a';
    }
  }
}
