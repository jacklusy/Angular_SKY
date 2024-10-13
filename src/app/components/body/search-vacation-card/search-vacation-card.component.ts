import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-vacation-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-vacation-card.component.html',
  styleUrl: './search-vacation-card.component.css'
})
export class SearchVacationCardComponent {
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();


  onSearchInput(): void {
    console.log('Input value:', this.searchQuery);
    this.searchQueryChange.emit(this.searchQuery);
  }

}
