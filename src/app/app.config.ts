// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { appRoutes } from './app.routes';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     SignupComponent,
//     // other components
//   ],
//   imports: [
//     BrowserModule,
//      RouterModule.forRoot(appRoutes),  // Import this for reactive forms
//     ReactiveFormsModule // Or your actual routes
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
     BrowserModule,
    FormsModule, // For template-driven forms
    ReactiveFormsModule, // For reactive forms
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
