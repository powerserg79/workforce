import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatStepperModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class SeekerModule { }
