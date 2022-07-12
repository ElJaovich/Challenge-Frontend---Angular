import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem( key: string, value: any ): void {
		localStorage.setItem( key, value )
	}

	getItem( key: string ): any { 
		return localStorage.getItem( key )
	}

	removeItem( key: string ) {
		localStorage.removeItem( key )
	}

	clear( ) {
		localStorage.clear( )
	}
}
