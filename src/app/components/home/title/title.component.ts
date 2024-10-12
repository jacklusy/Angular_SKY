import { Component } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  user: User | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(3).subscribe((data: User) => {
      this.user = data;
    });
  }
}
