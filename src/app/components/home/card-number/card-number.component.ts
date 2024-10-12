import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-number',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-number.component.html',
  styleUrl: './card-number.component.css'
})
export class CardNumberComponent {
  @Input() requests: string = 'Vacation';
  @Input() reqNum: number = 10;

  listCheck = faListCheck;
}
