import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SMSFConfigService } from '../../../../../core/services/config.service';
import { UserService } from '../../../../../core/services/user.service';
@Component({
    selector   : 'smsf-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})
export class SMSFLoginComponent implements OnInit
{
    // variable define
    private loginForm:FormGroup;
    private loginFormErrors: any;
    private submitted:boolean = false;
    private errorMessage:string = '';

    constructor(
        private SMSFConfig: SMSFConfigService,
        private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute)
    {
        this.SMSFConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.loginFormErrors = {
            email   : {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
        this._resetFormErrors();
        this.userService.logout();
        var token = localStorage.getItem('jwt');
    }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    //check form error
    private _setFormErrors(errorFields:any):void{
        for (let key in errorFields) {
            // skip loop if the property is from prototype
            if (!errorFields.hasOwnProperty(key)) continue;

            let message = errorFields[key];
            this.loginFormErrors[key].valid = false;
            this.loginFormErrors[key].message = message;
        }
    }

    //reset if no error
    private _resetFormErrors():void{
        this.loginFormErrors = {
            email: {valid: true, message: ''},
            password: {valid: true, message: ''},
        };
    }

    // check
    private _isValid(field):boolean {
        let isValid:boolean = false;

        // If the field is not touched and invalid, it is considered as initial loaded form. Thus set as true
        if(this.loginForm.controls[field].touched == false) {
            isValid = true;
        }
        // If the field is touched and valid value, then it is considered as valid.
        else if(this.loginForm.controls[field].touched == true && this.loginForm.controls[field].valid == true) {
            isValid = true;
        }
        return isValid;
    }

    public onValueChanged(data?: any) {
        if (!this.loginForm) { return; }
        const form = this.loginForm;
        for (let field in this.loginFormErrors) {
            // clear previous error message (if any)
            let control = form.get(field);
            if (control && control.dirty) {
                this.loginFormErrors[field].valid = true;
                this.loginFormErrors[field].message = '';
            }
        }
    }

    public submitForm(elementValues: any) {
        this.submitted = true;
        this.userService.login(elementValues.email, elementValues.password)
            .subscribe(
                result => {

                    if(result.success) {
                        this.router.navigate(["./bucket/practice_response"]);
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
                        //console.log(this.errorMessage);
                    }
                }
            );
    }
}
