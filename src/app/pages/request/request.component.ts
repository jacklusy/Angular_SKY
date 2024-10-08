import { Component } from '@angular/core';
import { TitleComponent } from '../../components/request/title/title.component';
import { CardVacationRequestsComponent } from '../../components/request/card-vacation-requests/card-vacation-requests.component';
import { NavbarComponent } from '../../components/body/navbar/navbar.component';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, CardVacationRequestsComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

}
