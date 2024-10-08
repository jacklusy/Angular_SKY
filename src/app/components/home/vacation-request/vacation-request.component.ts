import { Component } from '@angular/core';
import { VacationRequestCardComponent } from '../vacation-request-card/vacation-request-card.component';

@Component({
  selector: 'app-vacation-request',
  standalone: true,
  imports: [VacationRequestCardComponent],
  templateUrl: './vacation-request.component.html',
  styleUrl: './vacation-request.component.css'
})
export class VacationRequestComponent {

}
