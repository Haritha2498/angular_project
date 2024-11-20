import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
