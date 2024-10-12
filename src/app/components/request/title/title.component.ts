import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() selectAllChange = new EventEmitter<boolean>();

  onSearchChange() {
    this.searchQueryChange.emit(this.searchQuery);
  }

  onCheckboxChange(checked: boolean) {
    this.selectAllChange.emit(checked);
  }
}
