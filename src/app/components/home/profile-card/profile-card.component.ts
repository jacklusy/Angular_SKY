import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../../../services/photo.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignal, faUser } from '@fortawesome/free-solid-svg-icons';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
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
