import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauthComponent } from './updateauth.component';

describe('UpdateauthComponent', () => {
  let component: UpdateauthComponent;
  let fixture: ComponentFixture<UpdateauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
