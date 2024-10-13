import { Component } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Photo, PhotoService } from '../../../services/photo.service';
import { FormsModule } from '@angular/forms';
import { VacationCardComponent } from "../../body/vacation-card/vacation-card.component";
import { SearchVacationCardComponent } from "../../body/search-vacation-card/search-vacation-card.component";
import { RouterModule } from '@angular/router';
import { ViewMoreComponent } from "../../body/view-more/view-more.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-vacation-request',
  standalone: true,
  imports: [FormsModule, CommonModule, VacationCardComponent, SearchVacationCardComponent, RouterModule, ViewMoreComponent, FontAwesomeModule],
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  photos: Photo[] = [];
  isHaveCheckbox: boolean = false;

  constructor(private userService: UserService, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });

    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

  onSearchChange(searchQuery: string): void {
    console.log('Search query:', searchQuery);
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log('Filtered users:', this.filteredUsers);
  }

  listCheck = faListCheck;

}
