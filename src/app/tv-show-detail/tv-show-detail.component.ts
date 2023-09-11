import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../tv-show.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {
  tvShow: any;
  isLoading = true;
  tvShowId: number = 0;
  tvShowSummary: SafeHtml | undefined;

  constructor(
      private route: ActivatedRoute,
      private tvShowService: TvShowService,
      private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tvShowId = +params.get('id')!;
      this.loadTvShowDetails(this.tvShowId);
    });
  }

  loadTvShowDetails(tvShowId: number): void {
    this.tvShowService.getTvShowDetails(tvShowId).subscribe({
      next: (data) => {
        this.tvShow = data;
        this.isLoading = false;

        // Sanitize the TV show summary and store it as safe HTML
        this.tvShowSummary = this.domSanitizer.bypassSecurityTrustHtml(data.summary);
      },
      error: (error) => {
        console.error('Error fetching TV show details:', error);
        this.isLoading = false;
      }
    });
  }
}
