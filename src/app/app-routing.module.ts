import { NotFoundComponent } from './not-found/not-found.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  { path: 'user-data', component:UserDataComponent },
  { path: 'repo', component:RepoComponent },
  { path: '', redirectTo:"/user-data", pathMatch:"full"},
  { path: '**', component:NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }