import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestCardComponent } from './vacation-request-card.component';

describe('VacationRequestCardComponent', () => {
  let component: VacationRequestCardComponent;
  let fixture: ComponentFixture<VacationRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
