import { Component } from '@angular/core';
import { VacationRequestCardComponent } from '../vacation-request-card/vacation-request-card.component';
import { User, UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Photo, PhotoService } from '../../../services/photo.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-vacation-request',
  standalone: true,
  imports: [FormsModule, CommonModule, VacationRequestCardComponent],
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  photos: Photo[] = [];

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

  onSearchChange(): void {
    // Filter users based on the search query
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    ).slice(0, 4);
  }
}
