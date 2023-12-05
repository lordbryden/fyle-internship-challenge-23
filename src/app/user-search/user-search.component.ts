import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {


  username =  '';
  constructor(private apiService : ApiService , private appcomponent : AppComponent) {}

  search(): void {
    this.username = this.username.trim();
    console.log(this.username)

    if (this.username.trim() !== '') {
      // Call the service to get user repos
      console.log(this.username)
      this.appcomponent.getUseCall(this.username);

    }
  }

}
