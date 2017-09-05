import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

import {GlobalService} from './global.service';
import {UserService} from './user.service';
import {Practice} from './Practice';
import {PracticeAT} from './PracticeAT';
import {PracticeUT} from './PracticeUT';
import {PracticeIQ} from './PracticeIQ';
import {PracticeMT} from './PracticeMT';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class PracticeService {

	constructor(private _globalService:GlobalService,
				private _userService:UserService,
				private _authHttp: AuthHttp){
	}



	private getHeaders():Headers {
		return new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+this._userService.getToken(),
		});
	}

	// GET /bucket/practicePR/
	public practicePR():Observable<Practice> {
		let headers = this.getHeaders();

		return this._authHttp.get(
			this._globalService.apiHost+'/bucket',
			{
				headers: headers
			}
		)
            .map(response => response.json())
            .map((response) => {
				return <Practice>response.data;
			})
            .catch(this.handleError);
	}
	// GET /bucket/practiceAT/
	public practiceAT():Observable<PracticeAT> {
		let headers = this.getHeaders();

		return this._authHttp.get(
			this._globalService.apiHost+'/bucket/bucket/assigntask',
			{
				headers: headers
			}
		)
            .map(response => response.json())
            .map((response) => {
				return <PracticeAT>response.data;
			})
            .catch(this.handleError);
	}

	// GET /bucket/practiceUT/
	public practiceUT():Observable<PracticeUT> {
		let headers = this.getHeaders();

		return this._authHttp.get(
			this._globalService.apiHost+'/bucket/bucket/unassigntask',
			{
				headers: headers
			}
		)
            .map(response => response.json())
            .map((response) => {
				return <PracticeUT>response.data;
			})
            .catch(this.handleError);
	}

	// GET /bucket/practiceIQ/
	public practiceIQ():Observable<PracticeIQ> {
		let headers = this.getHeaders();

		return this._authHttp.get(
			this._globalService.apiHost+'/bucket/bucket/internalquery',
			{
				headers: headers
			}
		)
            .map(response => response.json())
            .map((response) => {
				return <PracticeIQ>response.data;
			})
            .catch(this.handleError);
	}
	// GET /bucket/practiceMT/
	public practiceMT():Observable<PracticeMT> {
		let headers = this.getHeaders();

		return this._authHttp.get(
			this._globalService.apiHost+'/bucket/bucket/mytask',
			{
				headers: headers
			}
		)
            .map(response => response.json())
            .map((response) => {
				return <PracticeMT>response.data;
			})
            .catch(this.handleError);
	}

	//Check handle error
	private handleError (error: Response | any) {

		let errorMessage:any = {};
		// Connection error
		if(error.status == 0) {
			errorMessage = {
				success: false,
				status: 0,
				data: "Sorry, there was a connection error occurred. Please try again.",
			};
		}
		else {
			errorMessage = error.json();
		}
		return Observable.throw(errorMessage);
	}
}
