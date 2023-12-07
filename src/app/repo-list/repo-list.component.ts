import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent implements OnInit {
  @Input() username: any = []; // Input property for the GitHub username
  @Input() loader = false; // Input property indicating whether data is still loading
  @Input() repos: any[] = []; // Input property for the list of repositories

  cardSkeleton = [1, 2, 3, 4]; // Skeleton array for loading animation
  pageSize: number = 10; // Number of items per page
  pageIndex = 1; // Current page index
  pageSizeOptions = [2, 4, 10, 20, 40, 50, 80, 100]; // Available page size options

  hidePageSize = false; // Whether to hide page size selection
  showPageSizeOptions = true; // Whether to show page size options
  showFirstLastButtons = true; // Whether to show first and last page buttons
  disabled = false; // Whether the paginator is disabled

  displayedItems: any[] = []; // Items to display on the current page
  isCopied: boolean = false; // Flag indicating if the GitHub URL is copied
  lastTriggeredPage: number = 0; // Last page index that triggered the API call

  constructor(private appcomponent: AppComponent) {}

  ngOnInit(): void {
  }

  /**
   * Handles the page change event triggered by the paginator.
   * @param event The page event object.
   */
  handlePageEvent(event: any): void {
    // Handle page size change
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.pageIndex = 1; // Reset to the first page when page size changes
    } else {
      this.pageIndex = event.pageIndex + 1; // Add 1 because pageIndex is 0-based
    }

    // Update displayedItems based on the current page index and page size
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.repos.slice(startIndex, endIndex);

    // Check if API call should be triggered
    if (this.shouldTriggerGetUseCall(event)) {
      this.appcomponent.getUseCall(false, this.username.login);
      this.lastTriggeredPage = endIndex;
    }
  }

  /**
   * Callback function for successful copy to clipboard action.
   */
  onCopySuccess(): void {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000); // Hide the message after 2 seconds (adjust as needed)
  }

  /**
   * Sets the page size options based on the input string.
   * @param setPageSizeOptionsInput The input string containing page size options.
   */
  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((str) => +str);
    }
  }

  /**
   * Determines whether to trigger the getUseCall API based on the page event.
   * @param event The page event object.
   * @returns True if the API call should be triggered, false otherwise.
   */
  shouldTriggerGetUseCall(event: any): boolean {
    const endIndex = (this.pageIndex - 1) * this.pageSize + this.pageSize;
    return (
      endIndex % 100 === 0 &&
      endIndex !== this.lastTriggeredPage &&
      endIndex <= this.username.public_repos
    );
  }
}
