import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './utilities/interceptor/interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin/partials/admin-navbar/admin-navbar.component';
import { AdminToolbarComponent } from './admin/partials/admin-toolbar/admin-toolbar.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin/main/admin-home/admin-home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminToolbarComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminHomeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
