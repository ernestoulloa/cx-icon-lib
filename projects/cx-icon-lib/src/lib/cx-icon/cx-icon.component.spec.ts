import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxIconComponent } from './cx-icon.component';

describe('CxIconComponent', () => {
  let component: CxIconComponent;
  let fixture: ComponentFixture<CxIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
