import { Component } from '@angular/core';
import { HistoryCardComponent } from '../history-card/history-card.component';

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [HistoryCardComponent],
  templateUrl: './history-section.component.html',
  styleUrl: './history-section.component.css'
})
export class HistorySectionComponent {

}
