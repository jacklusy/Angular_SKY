import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPendingRequestComponent } from './card-pending-request.component';

describe('CardPendingRequestComponent', () => {
  let component: CardPendingRequestComponent;
  let fixture: ComponentFixture<CardPendingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPendingRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPendingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
