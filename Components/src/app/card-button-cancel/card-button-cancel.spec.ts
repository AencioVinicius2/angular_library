import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonCancel } from './card-button-cancel';

describe('CardButtonCancel', () => {
  let component: CardButtonCancel;
  let fixture: ComponentFixture<CardButtonCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardButtonCancel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardButtonCancel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
