import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router,) {}
  go(){
    this.router.navigate(['profilepage']);
  }
  
  goo(){
    this.router.navigate(['question']);
  }
  
  searchText;
  players = [
    {
      name: 'Robel',
      likes: '100',
      followers: '50',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png',
      Sport: 'basketball'
    },
    {
      name: 'Roman',
      likes: '80',
      followers: '30',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png',
        Sport: 'baseball'
    },
    {
      name: 'Bryan',
      likes: '40',
      followers: '20',
      image:
        'https://www.indieweek.com/wp-content/uploads/2019/08/profile-icon-300x300.png',
        Sport: 'soccer'
    },
    {
      name: 'Jesse',
      likes: '20',
      followers: '10',
      image:
        'https://lh3.googleusercontent.com/M4BHVtr2v66T1hlLwcwK5kp1qsD69mnnUnuyaG_fbYT-5l8JTq9iaqyAO0Lt9OqyW8oi0zSJ0go5JnHemlJlu3h1b8sNvSusz-2oUn_qUGMPDkKp9JYVi7SK4We57O9m486rVZD41w=w2400',
        Sport: 'football'
    }
  ];

  sports = [
  {sport:'basketball', icon:'basketball-outline'},
   {sport:'football', icon:'american-football-outline'}, 
   {sport:'soccer', icon: 'football-outline'}, 
   {sport:'baseball', icon: 'baseball-outline'}, 
   {sport:'volleyball', icon: 'baseball-outline'}
];
save: any = 'a';
  modifiedData = JSON.parse(JSON.stringify(this.players));
  resetData(){
   this.modifiedData = JSON.parse(JSON.stringify(this.players));
  }
  filterData(athletics){
    this.resetData();
    if(this.save == athletics){
      this.resetData();
      this.save = "a";
    }
    else if(this.save != athletics){
      this.save = athletics;
    this.modifiedData = this.modifiedData.filter((player) => {
      return player.Sport == athletics;
    })};
  }
}
