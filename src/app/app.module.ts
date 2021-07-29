import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { QuestionComponent } from './question/question.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, ProfilepageComponent, QuestionComponent, CommentComponent, ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(environment.firebaseConfig),],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
