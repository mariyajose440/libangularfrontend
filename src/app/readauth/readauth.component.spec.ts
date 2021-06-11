import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadauthComponent } from './readauth.component';

describe('ReadauthComponent', () => {
  let component: ReadauthComponent;
  let fixture: ComponentFixture<ReadauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
