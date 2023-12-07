# Fyle Frontend Challenge

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment. 

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api. 

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

__Note__ - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).



## Fru Blieden

# Repo List Component

The Repo List Component is an Angular component designed to display user and repository information from GitHub. It includes features such as a paginated list of repositories, user details, and an option to copy the GitHub profile URL to the clipboard.

## Features

- Display user information, including avatar, bio, and location.
- Paginated list of repositories with optional loading animation.
- Copy GitHub profile URL to the clipboard.
- Customizable page size options for the repository list.

## Usage
<app-repo-list
  [username]="yourGitHubUserData"
  [loader]="isLoading"
  [repos]="yourRepositoriesData"
></app-repo-list>

## user-search.component.ts
    - Angular component for user search functionality.
    - Dependencies: Angular core, ApiService, AppComponent, Angular FormBuilder.
    - Usage: Integrates with the API service and the main app component for user search functionality.
    - **Reactive Form:**
      - Form Fields:
        - Username: Text input for entering the GitHub username.
      - Validators: Required field and custom validator (noSpaceValidator) to check for white spaces.

    - **Custom Validator:**
      - Name: noSpaceValidator
      - Purpose: Validates that the username does not contain white spaces.
      - Usage: Applied to the username field in the reactive form.

    - **Search Method:**
      - Name: search()
      - Purpose: Triggered on form submission to initiate the user search.
      - Functionality:
        - Extracts the username from the form.
        - Checks for white spaces in the username.
        - If no white spaces, calls the `getUseCall` method in the main app component.

        ## API Service

### Overview

The `ApiService` is responsible for interacting with the GitHub API to fetch user details and repositories.

### Methods

#### 1.getUser(githubUsername: string)

- Purpose: Fetches details of a GitHub user.
- Parameters:
  - `githubUsername`: GitHub username for which to retrieve details.
- Returns: Observable containing user details.

#### 2. `getRepos(githubUsername: string, page: number, pageSize: number)`

- Purpose: Fetches repositories for a GitHub user with pagination.
- Parameters:
  - `githubUsername`: GitHub username for which to retrieve repositories.
  - `page`: Page number for paginated results.
  - `pageSize`: Number of repositories per page.
- Returns: Observable containing the list of repositories.

### Usage

1. Inject `ApiService` in the component or service where GitHub API data is required.

2. Call the `getUser` or `getRepos` methods with the appropriate parameters.

## Dependencies 

 - Angular Material (ng add @angular/material)
 - Skeleton loader (npm i ngx-skeleton-loader)
 - Copy to clipboard  (import ClipboardModule) 
 