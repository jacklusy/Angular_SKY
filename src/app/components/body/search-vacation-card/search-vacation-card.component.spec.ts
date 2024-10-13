import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVacationCardComponent } from './search-vacation-card.component';

describe('SearchVacationCardComponent', () => {
  let component: SearchVacationCardComponent;
  let fixture: ComponentFixture<SearchVacationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchVacationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchVacationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
