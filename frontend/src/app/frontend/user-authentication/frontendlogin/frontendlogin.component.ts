/**
 * Created by pankajk on 8/2/2017.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//service
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-frontendlogin',
  templateUrl: './frontendlogin.component.html'
})
export class FrontendloginComponent implements OnInit {
  // variable define
  private frontendLoginForm:FormGroup;
  private formErrors:any;
  private submitted:boolean = false;
  private errorMessage:string = '';
  private returnURL:string = '/pankaj';

  //create object for service and controls
  constructor(private userService:UserService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder) {
    this.frontendLoginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
    this.frontendLoginForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
  }

  //On load function
  ngOnInit() {
    this._resetFormErrors();
    this.userService.logout();

    // get return url from route parameters or default to '/'
    this.returnURL = this.activatedRoute.snapshot.queryParams['r'] || '/';
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("login-page");
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("login-page");
  }

  //check form error
  private _setFormErrors(errorFields:any):void{
    for (let key in errorFields) {
      // skip loop if the property is from prototype
      if (!errorFields.hasOwnProperty(key)) continue;

      let message = errorFields[key];
      this.formErrors[key].valid = false;
      this.formErrors[key].message = message;
    }
  }

  //reset if no error
  private _resetFormErrors():void{
    this.formErrors = {
      username: {valid: true, message: ''},
      password: {valid: true, message: ''},
    };
  }

  // check
  private _isValid(field):boolean {
    let isValid:boolean = false;

    // If the field is not touched and invalid, it is considered as initial loaded form. Thus set as true
    if(this.frontendLoginForm.controls[field].touched == false) {
      isValid = true;
    }
    // If the field is touched and valid value, then it is considered as valid.
    else if(this.frontendLoginForm.controls[field].touched == true && this.frontendLoginForm.controls[field].valid == true) {
      isValid = true;
    }
    return isValid;
  }

  public onValueChanged(data?: any) {
    if (!this.frontendLoginForm) { return; }
    const form = this.frontendLoginForm;
    for (let field in this.formErrors) {
      // clear previous error message (if any)
      let control = form.get(field);
      if (control && control.dirty) {
        this.formErrors[field].valid = true;
        this.formErrors[field].message = '';
      }
    }
  }

  public submitForm(elementValues: any) {
    this.submitted = true;
    this.userService.login(elementValues.username, elementValues.password)
        .subscribe(
            result => {
              if(result.success) {
                this.router.navigate(["frontend/dashboard"]);
              } else {
                this.errorMessage = 'Username or password is incorrect.';
                this.submitted = false;
              }
            },
            error => {
              this.submitted = false;
              // Validation error
              if(error.status == 422) {
                this._resetFormErrors();
                // this._errorMessage = "There was an error on submission. Please check again.";
                let errorFields = JSON.parse(error.data.message);
                this._setFormErrors(errorFields);
              } else {
                this.errorMessage = error.data;
              }
            }
        );
  }
}
