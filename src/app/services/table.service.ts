import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Element } from '../element';
import { ELEMENT_DATA } from '../mock-elements';

@Injectable({
  providedIn: 'root'
})
export class TableService {

// TODO:
// this version uses fake data from mock-elements (for simplicity)
// extending the functionality, I'd use httpClient to get the data from real or mock API
// or possibly, from the .csv file

  getElements(): Observable<Element[]> {
	return of(ELEMENT_DATA);
  }
}
