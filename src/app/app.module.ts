import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/body/body.component';
import { SidenavComponent } from './modules/sidenav/sidenav.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AdminComponent } from './auth/page/admin/admin.component';
import { StaffComponent } from './modules/staff/staff.component';
import { HeaderComponent } from './modules/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PageComponent } from './auth/page/page.component';

// import { SignUpComponent } from './auth/page/sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AuthService } from './core/services/auth.service';
import { SignInComponent } from './auth/page/sign-in/sign-in.component';
import { SignOutComponent } from './auth/page/sign-out/sign-out.component';
import { SignUpComponent } from './auth/page/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    AdminComponent,
    StaffComponent,
    AuthComponent,
    PageComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
    }

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
