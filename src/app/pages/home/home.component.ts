import { Component } from '@angular/core';
import { TitleComponent } from '../../components/home/title/title.component';
import { ProfileCardComponent } from '../../components/home/profile-card/profile-card.component';
import { CardNumberComponent } from '../../components/home/card-number/card-number.component';
import { CarouselComponent } from '../../components/home/carousel/carousel.component';
import { VacationRequestComponent } from '../../components/home/vacation-request/vacation-request.component';
import { NavbarComponent } from '../../components/body/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, ProfileCardComponent, CardNumberComponent, CarouselComponent, VacationRequestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardNumbers = [1, 2];

  ReqNum: number = 10;
  Requests: string = 'Vacation';

  ReqNum2: number = 10;
  Requests2: string = 'Leave';
}
