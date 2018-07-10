import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

import { Element } from '../element';
import { ELEMENT_DATA } from '../mock-elements';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  dataUrl = 'assets/data.json';

  getElements(): Observable<Element[]> {
  	return of(ELEMENT_DATA);
  }

 //  getData() {
	// return this.http.get(this.dataUrl);
 //  }
}
