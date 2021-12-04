import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  //admin routes 
  {
    path:'admin',component:AdminComponent,
    children:[
     
    ]
  },
  //user routes
  {
    path:'user',component:UserComponent,
    children:[

    ]
  },

  //authorization routes
  {
    path:'admin/login',component:AdminLoginComponent
  },
  {
    path:'login',component:UserLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
