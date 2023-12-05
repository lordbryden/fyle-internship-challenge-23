import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']

})
export class RepoListComponent implements OnInit {
  @Input() username: any =  [];
  @Input() loader = false;
  @Input() repos : any[] = [];
  @Input() length :number = 0;
  // loader = false;
  cardSkeleton = [1,2,3,4]
  items : any;
  pageSize: number = 10; // Number of items per page
  currentPage: number = 1; // Current page
  value : any;
  displayedItems: any[] = [];
  isCopied: boolean = false;
  // length : number = 0 ;
  pageIndex = 1;
  pageSizeOptions = [2, 4, 10,20,40,50,80,100];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent:any= PageEvent;
  lastTriggeredPage: number= 0;
  constructor(private  appcomponent : AppComponent) {}

  ngOnInit(): void {



  }
  handlePageEvent(event: any): void {
    // Handle page size change
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.pageIndex = 1; // Reset to the first page when page size changes
    } else {
      this.pageIndex = event.pageIndex + 1; // Note: Add 1 because pageIndex is 0-based
    }

    // Update paginatedItems based on the current page index and page size
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.repos.slice(startIndex, endIndex);
    console.log(this.pageSize)
    if(endIndex % 100 === 0 && endIndex !== this.lastTriggeredPage && endIndex <= this.username.public_repos){
      this.appcomponent.getUseCall(this.username.login);
      this.lastTriggeredPage = endIndex;

    }

  }

  onCopySuccess(): void {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000); // Hide the message after 2 seconds (adjust as needed)
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      console.log(this.pageSize)
this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
