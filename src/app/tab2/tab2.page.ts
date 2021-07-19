import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router) {}
  go(){
    this.router.navigate(['profilepage']);
  }
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
      likes: '80',
      followers: '30',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    },
    {
      name: 'Bryan',
      likes: '40',
      followers: '20',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png'
    },
    {
      name: 'Jesse',
      likes: '20',
      followers: '10',
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
