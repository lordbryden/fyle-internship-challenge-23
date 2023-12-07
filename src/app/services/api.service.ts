import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchData: any ;

  constructor(
    private httpClient: HttpClient,
  ) { }

  // Get user details from GitHub API
  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  // Get repositories for a user from GitHub API
  // Params:
  //   - githubUsername: GitHub username for which to fetch repositories
  //   - page: Page number for paginated results
  //   - pageSize: Number of items per page
  getRepos(githubUsername: string, page: number, pageSize: number) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`,
      {
        params: {
          per_page: pageSize.toString(),
          page: page.toString()
        }
      });
  }
}
