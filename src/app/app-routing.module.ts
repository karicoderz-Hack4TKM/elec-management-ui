import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/main/admin-home/admin-home.component';
import { AdminNotificationComponent } from './admin/main/admin-notification/admin-notification.component';
import { AdminSlabsComponent } from './admin/main/admin-slabs/admin-slabs.component';
import { AdminSubstationComponent } from './admin/main/admin-substation/admin-substation.component';
import { LoginComponent } from './auth/login/login.component';
import { ProviderLoginComponent } from './auth/provider-login/provider-login.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  //admin routes 
  {
    path:'admin',component:AdminComponent,
    children:[
      {
        path:'',component:AdminHomeComponent
      },
     {
       path:'slabs',component:AdminSlabsComponent
     },
     {
       path:'substation',component:AdminSubstationComponent
     },
     {
       path:'notification',component:AdminNotificationComponent
     }
    ]
  },
  //user routes
  {
    path:'user',component:UserComponent,
    children:[
      {
        path:'',component:UserHomeComponent
      }
    ]
  },

  //authorization routes
  {
    path:'',component:LoginComponent
  },
  {
    path:'provider/login',component:ProviderLoginComponent
  },
  
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
