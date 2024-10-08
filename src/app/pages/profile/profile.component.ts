import { Component } from '@angular/core';
import { ProfileInfoComponent } from '../../components/profile/profile-info/profile-info.component';
import { HistorySectionComponent } from '../../components/profile/history-section/history-section.component';
import { PendingRequestsComponent } from '../../components/profile/pending-requests/pending-requests.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileInfoComponent, HistorySectionComponent, PendingRequestsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
