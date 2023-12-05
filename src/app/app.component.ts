import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username: any;
  repos: any[] =[] ;
  loader = true;
  length: number = 0;
  page: number = 0;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getUseCall('johnpapa');
  }

  getUseCall(data: string): void {
    console.log(this.page)
    this.apiService.getUser(data).subscribe( user => {
      console.log(user);
      this.username =user;
      this.page++;

      this.apiService.getRepos(data , this.page,100).subscribe( (repos: any) => {
        repos.forEach((element: any) => {
          this.repos.push(element)

        });
        console.log(this.repos)

      },
      (error) => {
        console.error('Error fetching user repos', error);
      });

      this.loader = false;
     },
     (error) => {
       console.error('Error fetching user user', error);
     });  }



}
