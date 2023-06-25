import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path:"" ,
    component:LayoutComponent,
    children:[
      { path:"login" , component:LogInComponent },
      { path:"register" , component:RegisterComponent },
    ] },
  { path:"**" , redirectTo:"" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
