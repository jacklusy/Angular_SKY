import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  userName: string = 'Hazem';
  profile = {
    name: 'Ahmad Azmi',
    position: 'Junior Accounting Officer',
    supervisor: 'Salwa Assem',
    level: 'Level 10'
  };
  requestsCount: number = 10;
  searchText: string = '';  
  isProfileVisible: boolean = true; 

  toggleProfileView() {
    this.isProfileVisible = !this.isProfileVisible;
  }
}
