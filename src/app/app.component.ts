import { Component, OnInit } from '@angular/core';
import { repos } from './repos';
import { GithubService } from './trendingrepos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  githubTrending: repos[];
  totalStars: number = 0;
  searchTerm: string;
  constructor(private githubService: GithubService) { };

  ngOnInit() {
    this.search("");
  }

  search(searchTerm: string) {
    console.log(this.searchTerm);
  
    this.githubService.getTrending(searchTerm, 10).subscribe(
      repostrending => {

        this.githubTrending = repostrending.Repositry;
        this.totalStars = repostrending.SumStars;
      }
    )
  }

  onSearchKeyUp() {
     this.search(this.searchTerm);
  }

}
