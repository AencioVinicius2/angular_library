import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberComponent } from './change-number.component';

describe('ChangeNumberComponent', () => {
  let component: ChangeNumberComponent;
  let fixture: ComponentFixture<ChangeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
