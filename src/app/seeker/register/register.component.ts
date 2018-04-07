import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder, AbstractControl } from '@angular/forms';
import { SignUpModel } from './signup';
import { OBSERVABLE_MEDIA_PROVIDER_FACTORY } from '@angular/flex-layout';

function birthdayValidator(c: AbstractControl): { [key: string]: boolean } | null {

c.value

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  detailsGroup: FormGroup;

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

    this.detailsGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateofbirth:['', Validators.required]
    });

    this.signupForm.get('email').valueChanges.subscribe(value => console.log(value));
  }

  saveSignup(): void {
    console.log('signup submitted.');
  }


  saveDetails(): void {
    console.log('details submitted.');
  }

}


