import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { VacationRequestsComponent } from "../vacation-requests/vacation-requests.component";
import { WelcomeComponent } from "../welcome/welcome.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, VacationRequestsComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
