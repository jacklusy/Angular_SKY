import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PhotoService } from '../../../services/photo.service';
import { CommonModule } from '@angular/common';
import { faUser, faSignal, faHourglassHalf, faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

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
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  constructor(private userService: UserService, private photoService: PhotoService) { }

  // Font Awesome icons
  faUser = faUser;
  faSignal = faSignal;
  faHourglassHalf = faHourglassHalf;
  faPrescriptionBottleMedical = faPrescriptionBottleMedical;
  faPagelines = faPrescriptionBottleMedical;

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

  profile = {
    name: 'Ahmad Azmi',
    department: 'Marketing Department',
    position: 'Junior Accounting Officer',
    reportingTo: 'Salwa Assem',
    corporateLevel: 'Level 10',
    lifetime: '2.5 Years',
    vacationDaysLeft: 10,
    sickDaysLeft: 14,
    photoUrl: '../assets/images/Default.jpg'
  };
}
