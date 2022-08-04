import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandsComponent } from './listcommands.component';

describe('ListcommandsComponent', () => {
  let component: ListcommandsComponent;
  let fixture: ComponentFixture<ListcommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
