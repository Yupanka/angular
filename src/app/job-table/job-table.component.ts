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
import { Observable } from 'rxjs';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { JobsService } from '../services/jobs.service';
import { Element } from '../element';

import { ELEMENT_DATA } from '../mock-elements';

@Component({
  selector: 'job-table',
  styleUrls: ['job-table.component.css'],
  templateUrl: 'job-table.component.html',
})
export class JobTableComponent implements OnInit {
  el: Element[];
  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource;

  constructor(private jobsService: JobsService) {};
  
  getElements(): void {
    this.jobsService.getElements()
        .subscribe(elements => this.el = elements);
  }

  ngOnInit() {
    this.getElements();
    this.dataSource = new MatTableDataSource(this.el);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
}