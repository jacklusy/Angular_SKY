import { Component } from '@angular/core';
import { TitleComponent } from '../../components/request/title/title.component';
import { CardVacationRequestsComponent } from '../../components/request/card-vacation-requests/card-vacation-requests.component';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [TitleComponent, CardVacationRequestsComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

}
