import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelAboutComponent } from './tel-about.component';

describe('TelAboutComponent', () => {
  let component: TelAboutComponent;
  let fixture: ComponentFixture<TelAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
