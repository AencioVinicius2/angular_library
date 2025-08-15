import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonRoxoComponent } from './card-button-roxo.component';

describe('CardButtonRoxoComponent', () => {
  let component: CardButtonRoxoComponent;
  let fixture: ComponentFixture<CardButtonRoxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardButtonRoxoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardButtonRoxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
