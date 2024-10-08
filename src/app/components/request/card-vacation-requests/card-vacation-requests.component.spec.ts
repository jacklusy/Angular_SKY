import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVacationRequestsComponent } from './card-vacation-requests.component';

describe('CardVacationRequestsComponent', () => {
  let component: CardVacationRequestsComponent;
  let fixture: ComponentFixture<CardVacationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVacationRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVacationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
