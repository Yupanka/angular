// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator, MatSort } from '@angular/material';
// import { JobTableDataSource } from './job-table-datasource';

// @Component({
//   selector: 'app-job-table',
//   templateUrl: './job-table.component.html',
//   styleUrls: ['./job-table.component.css']
// })
// export class JobTableComponent implements OnInit {
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   dataSource: JobTableDataSource;

//   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
//   displayedColumns = ['id', 'name'];

//   ngOnInit() {
//     this.dataSource = new JobTableDataSource(this.paginator, this.sort);
//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Observable } from 'rxjs';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', date: new Date('Jan 1, 2018')},
  {position: 2, name: 'Helium', date: new Date()},
  {position: 3, name: 'Lithium', date: new Date()},
  {position: 4, name: 'Beryllium', date: new Date()},
  {position: 5, name: 'Boron', date: new Date()},
  {position: 6, name: 'Carbon', date: new Date()},
  {position: 7, name: 'Nitrogen', date: new Date()},
  {position: 8, name: 'Oxygen', date: new Date()},
  {position: 9, name: 'Fluorine', date: new Date()},
  {position: 10, name: 'Neon', date: new Date()},
];

@Component({
  selector: 'job-table',
  styleUrls: ['job-table.component.css'],
  templateUrl: 'job-table.component.html',
})
export class JobTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}