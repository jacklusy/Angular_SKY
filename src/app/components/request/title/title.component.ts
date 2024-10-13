import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchVacationCardComponent } from "../../body/search-vacation-card/search-vacation-card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [FormsModule, SearchVacationCardComponent, FontAwesomeModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() selectAllChange = new EventEmitter<boolean>();

  onSearchChange(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.searchQueryChange.emit(this.searchQuery);
  }

  onCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectAllChange.emit(isChecked);
  }

  listCheck = faListCheck;

}
