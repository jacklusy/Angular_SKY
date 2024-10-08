import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './pages/request/request.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'request', component: RequestComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
