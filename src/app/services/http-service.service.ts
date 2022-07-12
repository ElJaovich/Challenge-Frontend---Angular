import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { environment } from '../environments/environment.dev'
import Swal from 'sweetalert2'

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
			res = await lastValueFrom( this.http.get < any > ( `${url}?apiKey=11891b2ccd694600b3e4b5ae6e382051`, this.options ) )
			console.log( url, res )
		} catch ( err ) {
			console.log( 'ERROR: ', err )
		}

		return res
	}

	async post( endpoint: string, param: object ) {
		const url = endpoint
		let res
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.addEventListener('mouseenter', Swal.stopTimer)
			  toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		  })

		try {
			res = await lastValueFrom( this.http.post < any > ( url, param, this.options ) )
		} catch ( err ) {
			const error: any = {err}
			Toast.fire({
				icon: 'error',
				title: 'Error!',
				text: `${error.err.name}`
			  })
			console.log( 'Error!: ', error )
		}

		return res
	}
}
