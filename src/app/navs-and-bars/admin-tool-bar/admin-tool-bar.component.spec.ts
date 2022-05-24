import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToolBarComponent } from './admin-tool-bar.component';

describe('AdminToolBarComponent', () => {
  let component: AdminToolBarComponent;
  let fixture: ComponentFixture<AdminToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
