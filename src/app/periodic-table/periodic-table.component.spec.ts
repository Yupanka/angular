
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicTableComponent } from './periodic-table.component';

describe('PeriodicTableComponent', () => {
  let component: PeriodicTableComponent;
  let fixture: ComponentFixture<PeriodicTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  // TODO: update unit tests
  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
});
