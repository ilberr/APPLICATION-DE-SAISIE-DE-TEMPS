import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserMangerComponent } from './add-user-manger.component';

describe('AddUserMangerComponent', () => {
  let component: AddUserMangerComponent;
  let fixture: ComponentFixture<AddUserMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserMangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
