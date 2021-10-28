import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompuComponent } from './compu.component';

describe('CompuComponent', () => {
  let component: CompuComponent;
  let fixture: ComponentFixture<CompuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
