import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {

	private BASE_URL:string = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket';
	
	constructor(
		private http:Http
	) { }

	public getdata(page:Number):any{
		return this.http.get(this.BASE_URL)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

	public getdataCount(page:Number):any{
		return this.http.get(`${this.BASE_URL}${page}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
