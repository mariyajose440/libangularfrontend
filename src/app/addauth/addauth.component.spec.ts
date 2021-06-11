import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddauthComponent } from './addauth.component';

describe('AddauthComponent', () => {
  let component: AddauthComponent;
  let fixture: ComponentFixture<AddauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
