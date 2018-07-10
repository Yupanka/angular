import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { TableService } from '../services/table.service';
import { Element } from '../element';

@Component({
  selector: 'periodic-table',
  styleUrls: ['periodic-table.component.css'],
  templateUrl: 'periodic-table.component.html',
})
export class PeriodicTableComponent implements OnInit {
  el: Element[];
  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource;

  constructor(private jobsService: TableService) {};
  
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