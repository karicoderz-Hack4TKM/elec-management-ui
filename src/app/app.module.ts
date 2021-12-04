import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './utilities/interceptor/interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin/partials/admin-navbar/admin-navbar.component';
import { AdminToolbarComponent } from './admin/partials/admin-toolbar/admin-toolbar.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin/main/admin-home/admin-home.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './errors/internal-server-error/internal-server-error.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { AdminSlabsComponent } from './admin/main/admin-slabs/admin-slabs.component';
import { AdminNotificationComponent } from './admin/main/admin-notification/admin-notification.component';
import { AdminSubstationComponent } from './admin/main/admin-substation/admin-substation.component';
import { LoginComponent } from './auth/login/login.component';
import { SubstationComponent } from './substation/substation.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ProviderLoginComponent } from './auth/provider-login/provider-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminToolbarComponent,
    AdminHomeComponent,
    UserComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    UnauthorizedComponent,
    AdminSlabsComponent,
    AdminNotificationComponent,
    AdminSubstationComponent,
    LoginComponent,
    SubstationComponent,
    UserNavbarComponent,
    UserHomeComponent,
    ProviderLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
