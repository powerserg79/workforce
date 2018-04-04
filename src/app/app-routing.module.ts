import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './seeker/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'seeker/register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
