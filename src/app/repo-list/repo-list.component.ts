import { Component } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']

})
export class RepoListComponent {

  items = [1,3,4,5];
}
