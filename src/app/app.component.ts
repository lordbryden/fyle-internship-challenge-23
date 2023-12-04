import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username: any;
  repos: any;
  loader = true;
  length: number = 0;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
   this.apiService.getUser('johnpapa').subscribe( user => {
    console.log(user);
    this.username =user;
    this.apiService.getUser('johnpapa/repos').subscribe( repos => {
      this.repos = repos;
      this.length = this.repos.length
      console.log(this.repos.length)
      console.log(repos)
      // this.apiService.getUser('john')

    });

    this.loader = false;
   });
  }

}
