import { Component } from '@angular/core';
import { TitleComponent } from '../../components/request/title/title.component';
import { NavbarComponent } from '../../components/body/navbar/navbar.component';
import { User, UserService } from '../../services/user.service';
import { Photo, PhotoService } from '../../services/photo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VacationCardComponent } from "../../components/body/vacation-card/vacation-card.component";

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, CommonModule, FormsModule, VacationCardComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
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


  onSearchChange(searchQuery: string): void {
    console.log('Search query:', searchQuery);
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log('Filtered users:', this.filteredUsers);
  }


  onCheckboxChange(checked: boolean): void {
    this.filteredUsers.forEach(user => {
      user.isChecked = checked;
    });
  }

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }


}
