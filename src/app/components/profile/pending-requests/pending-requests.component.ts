import { Component } from '@angular/core';
import { CardPendingRequestComponent } from '../card-pending-request/card-pending-request.component';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [CardPendingRequestComponent],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent {

}
