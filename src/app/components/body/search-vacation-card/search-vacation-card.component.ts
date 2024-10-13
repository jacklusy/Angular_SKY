import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-vacation-card',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
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
  search = faSearch;
}
