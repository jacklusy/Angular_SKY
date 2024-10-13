import { Component } from '@angular/core';
import { HistoryCardComponent } from '../history-card/history-card.component';
import { Post, PostService } from '../../../services/post.service';
import { CommonModule } from '@angular/common';
import { ViewMoreComponent } from "../../body/view-more/view-more.component";

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [HistoryCardComponent, CommonModule, ViewMoreComponent],
  templateUrl: './history-section.component.html',
  styleUrl: './history-section.component.css'
})
export class HistorySectionComponent {
  constructor(private postService: PostService) { }

  posts: Post[] = [];

  ngOnInit() {
    this.postService.getPost().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
