import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router,) {}
  
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
    document.getElementById("scopeText").innerHTML = "scoped"
     this.color = "yellow"
    }
    else if(this.color == "yellow"){
      document.getElementById("scope").style.background = "#4F2DB2";
      document.getElementById("scopeText").innerHTML = "scope"
      this.color = "purple"
    }
  }
  image = document.getElementById('post1');
  changeImage = 'a'
  gif(){
    if(this.changeImage == 'a')
    {
      document.getElementById('post1').setAttribute( 'src','https://i.pinimg.com/originals/16/cc/3d/16cc3d909a29f6d5b81fcc9a993fda42.gif' );
      document.getElementById('play').style.visibility ='hidden'
      this.changeImage = 'b';
    }
    else if(this.changeImage == 'b')
    {
      document.getElementById('post1').setAttribute( 'src', 'https://lh3.googleusercontent.com/KfEb_eIjZ83KKeRsf-RgKQKaMNGNxyiOIMnI2Ne9_oqcXpK5VN2kRFAOP6tpwYPxMQ_7BMgMdTp8_N7xyzCrPuKVYvpp12JUbg3LyNJ1QZXZF5AJiW307KcmJi0RSDiXDzsIzZ_wxw=w2400' );
      document.getElementById('play').style.visibility ='visible'
      this.changeImage = 'a';
    }
    
}

}

