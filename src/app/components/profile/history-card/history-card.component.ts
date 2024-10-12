import { Component, Input } from '@angular/core';
import { Post } from '../../../services/post.service';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  @Input() post: Post | null = null;
}
