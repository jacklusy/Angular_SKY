import { Component, Input } from '@angular/core';
import { User } from '../../../services/user.service';
import { Photo } from '../../../services/photo.service';

@Component({
  selector: 'app-card-pending-request',
  standalone: true,
  imports: [],
  templateUrl: './card-pending-request.component.html',
  styleUrl: './card-pending-request.component.css'
})
export class CardPendingRequestComponent {
  @Input() user!: User;
  @Input() photo!: Photo;
}
