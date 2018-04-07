import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './seeker/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './seeker/profile/profile.component';
import { ProfileGuard } from './seeker/profile/profile.guard';


const routes: Routes = [
  { path: 'seeker/register', component: RegisterComponent },
  {
    path: 'seeker/profile/:id',
    canActivate: [ProfileGuard],
    component: ProfileComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProfileGuard
  ]
})
export class AppRoutingModule { }
