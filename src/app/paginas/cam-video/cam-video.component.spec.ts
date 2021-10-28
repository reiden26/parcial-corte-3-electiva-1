import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamVideoComponent } from './cam-video.component';

describe('CamVideoComponent', () => {
  let component: CamVideoComponent;
  let fixture: ComponentFixture<CamVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
