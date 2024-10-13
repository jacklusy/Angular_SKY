import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../services/user.service';
import { Photo } from '../../../services/photo.service';

@Component({
  selector: 'app-vacation-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacation-card.component.html',
  styleUrl: './vacation-card.component.css'
})
export class VacationCardComponent {
  @Input() user!: User;
  @Input() photo!: Photo;
  @Output() checkboxChange = new EventEmitter<boolean>();
  @Input() isHaveCheckbox!: boolean;

  isChecked: boolean = false;
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.isHaveCheckbox = this.isChecked;
    console.log('Checked status:', this.isChecked);
    this.checkboxChange.emit(this.isChecked);
  }
}
