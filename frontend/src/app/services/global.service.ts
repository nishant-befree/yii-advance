import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';


@Injectable()
export class GlobalService{
    public apiHost:string;

    public setting:any = {};

    constructor(){
        if(environment.production == true) {
            this.apiHost = 'http://api.superrecords.web/v1';
        } else {
            this.apiHost = 'http://api.superrecords.local/v1';
        }
    }

    loadGlobalSettingsFromSessionStorage():void{
        if(sessionStorage.getItem('frontend-setting') != null){
            this.setting = JSON.parse(sessionStorage.getItem('frontend-setting'));
        }

    }
}