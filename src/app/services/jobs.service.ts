import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  dataUrl = 'assets/data.json';

  getData() {
	return this.http.get(this.dataUrl);
  }
}
