import { Component } from '@angular/core';
import { TitleComponent } from '../../components/request/title/title.component';
import { CardVacationRequestsComponent } from '../../components/request/card-vacation-requests/card-vacation-requests.component';
import { NavbarComponent } from '../../components/body/navbar/navbar.component';
import { User, UserService } from '../../services/user.service';
import { Photo, PhotoService } from '../../services/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, CardVacationRequestsComponent, CommonModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  photos: { [key: number]: Photo } = {}; // Adjusted type for photos

  constructor(private userService: UserService, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });

    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data.reduce((acc, photo) => {
        acc[photo.id] = photo; // Store photos by ID for easy access
        return acc;
      }, {} as { [key: number]: Photo });
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onCheckboxChange(checked: boolean) {
    this.filteredUsers.forEach(user => {
      user.isChecked = checked;
    });
  }

  handleSelectAllChange(checked: boolean) {
    // Handle the select all checkbox change
    console.log('Select all changed:', checked);
  }
}
