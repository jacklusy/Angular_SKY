import { Component } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { CommonModule } from '@angular/common';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

}
