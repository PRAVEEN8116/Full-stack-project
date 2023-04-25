import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {InsertComponent} from './insert/insert.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';
import {ViewComponent} from './view/view.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
const routes: Routes = [
  
    {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'insert',component:InsertComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'delete',component:DeleteComponent},
  {path:'view',component:ViewComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
