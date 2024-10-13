import { Component } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Photo, PhotoService } from '../../../services/photo.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignal, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  constructor(private userService: UserService, private photoService: PhotoService) { }
  user: User | null = null;
  photo: Photo | null = null;
  id: number = 3;
  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe((data: User) => {
      this.user = data;
    });

    this.photoService.getphotoById(this.id).subscribe((data: Photo) => {
      this.photo = data;
    });
  }

  faSignal = faSignal;
  userIcon = faUser;
  levelNumber: number = 10;
}
