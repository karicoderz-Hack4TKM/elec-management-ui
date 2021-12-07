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
import { SubstationDeficitComponent } from './substation/substation-deficit/substation-deficit.component';
import { SubstationGeneratorComponent } from './substation/substation-generator/substation-generator.component';
import { SubstationHomeComponent } from './substation/substation-home/substation-home.component';
import { SubstationUsageChartComponent } from './substation/substation-usage-chart/substation-usage-chart.component';
import { SubstationUsersComponent } from './substation/substation-users/substation-users.component';
import { SubstationComponent } from './substation/substation.component';
import { UserBillComponent } from './user/user-bill/user-bill.component';
import { UserEvRequestComponent } from './user/user-ev-request/user-ev-request.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserRequestFormComponent } from './user/user-request-form/user-request-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  //admin routes 
  {
    path:'admin',component:AdminComponent,
    children:[
     {
       path:'',component:AdminSlabsComponent
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
      },
      {
        path:'request',component:UserRequestFormComponent
      },
      {
        path:'bill',component:UserBillComponent
      },
      {
        path:'ev-request',component:UserEvRequestComponent
      }
    ]
  },
  {
    path:'substation',component:SubstationComponent,
    children:[
      {
        path:'',component:SubstationHomeComponent
      },
      {
        path:'generator',component:SubstationGeneratorComponent
      },
      {
        path:'deficit',component:SubstationDeficitComponent
      },
      {
        path:'users',component:SubstationUsersComponent
      },
      {
        path:'user/:id',component:SubstationUsageChartComponent
      }
    ]
  },

  //authorization routes
  {
    path:'',component:LoginComponent
  },
  {
    path:'providers/login',component:ProviderLoginComponent
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
