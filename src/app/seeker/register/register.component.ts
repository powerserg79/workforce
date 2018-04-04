import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hidePassword = true;

  Step1Group: FormGroup;
  Step2Group: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.Step1Group = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.Step2Group = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
