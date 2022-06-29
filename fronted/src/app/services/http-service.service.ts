import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { environment } from '../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  
	options = {
		headers: new HttpHeaders( {
			'Content-Type': 'application/json',
		} )
	}
	constructor ( private http: HttpClient ) {
	}

	async get( endpoint: string ) {
		//const url = endpoint + '?apiKey=' + environment.apiKey
		const url = endpoint
		let res

		try {
			res = await lastValueFrom( this.http.get < any > ( url, this.options ) )
			console.log( url, res )
		} catch ( err ) {
			console.log( 'ERROR: ', err )
		}

		return res
	}

	async post( endpoint: string, param: object ) {
		const url = environment.http + endpoint
		let res

		try {
			res = await lastValueFrom( this.http.post < any > ( url, param, this.options ) )
			//console.log( url, res )
		} catch ( err ) {
			console.log( 'ERROR: ', err )
		}

		return res
	}
}
