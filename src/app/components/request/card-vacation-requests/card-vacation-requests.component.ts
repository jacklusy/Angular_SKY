import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../services/user.service';
import { Photo } from '../../../services/photo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-vacation-requests',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-vacation-requests.component.html',
  styleUrl: './card-vacation-requests.component.css'
})
export class CardVacationRequestsComponent {
  @Input() users: any;
  @Input() photo: any;
  @Output() checkboxChange = new EventEmitter<boolean>();

  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.checkboxChange.emit(this.isChecked);
  }
}
