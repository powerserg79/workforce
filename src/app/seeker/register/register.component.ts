import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SignUpModel } from './signup';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  Step2Group: FormGroup;

  signupModel: SignUpModel = new SignUpModel();

  hidePassword = true;

  constructor(private _formBuilder: FormBuilder) { }

  // getEmailErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value'
  //     : this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
                    email: [{ value: '', disabled: false }, [Validators.required, Validators.email]],
                    password: [{ value: '', disabled: false }, Validators.required],
                    terms: [false, Validators.pattern('true')]
    });
    this.Step2Group = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  saveSignup(): void {
    console.log('signup submitted.');
  }

}


