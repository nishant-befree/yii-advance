import { Injectable } from '@angular/core';
import * as moment from "moment";
import { environment } from '../../../environments/environment';


@Injectable()
export class GlobalService{
    public apiHost:string;

    public setting:any = {};

    constructor(){
        if(environment.production == true) {
            this.apiHost = 'http://127.0.0.1/yii-advance/admin/';
        } else {
           // this.apiHost = 'http://api.smsfrecords.local/admin';
            this.apiHost = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web/user';
        }
    }

    loadGlobalSettingsFromSessionStorage():void{
        if(sessionStorage.getItem('frontend-setting') != null){
            this.setting = JSON.parse(sessionStorage.getItem('frontend-setting'));
        }

    }
}