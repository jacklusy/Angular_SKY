import { Component } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { Photo, PhotoService } from '../../../services/photo.service';
import { CommonModule } from '@angular/common';
import { ViewMoreComponent } from "../../body/view-more/view-more.component";
import { CardPendingRequestComponent } from '../card-pending-request/card-pending-request.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [CardPendingRequestComponent, CommonModule, ViewMoreComponent, FontAwesomeModule],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent {
  users: User[] = [];
  photos: Photo[] = []

  constructor(private userService: UserService, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: User[]) => {
      this.users = data;
    });

    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

  listCheck = faListCheck;

}
