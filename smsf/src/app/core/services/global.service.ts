import { Injectable } from '@angular/core';
import * as moment from "moment";
import { environment } from '../../../environments/environment';


@Injectable()
export class GlobalService{
    public apiHost:string;

    public setting:any = {};

    constructor(){
        if(environment.production == true) {
            this.apiHost = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web';
        } else {
           // this.apiHost = 'http://api.smsfrecords.local/admin';
            this.apiHost = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web';
        }
    }

    loadGlobalSettingsFromSessionStorage():void{
        if(sessionStorage.getItem('frontend-setting') != null){
            this.setting = JSON.parse(sessionStorage.getItem('frontend-setting'));
        }

    }
}