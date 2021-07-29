import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { QuestionComponent } from './question/question.component';
const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profilepage',
    component: ProfilepageComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
