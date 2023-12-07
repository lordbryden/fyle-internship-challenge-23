import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  // Reactive form group for user input
  myForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private appcomponent: AppComponent,
    private fb: FormBuilder
  ) {
    // Initialize the form with username field and custom validator
    this.myForm = this.fb.group({
      username: ['', [Validators.required, this.noSpaceValidator]]
    });
  }

  // Custom validator to check for white spaces in the username
  noSpaceValidator(control: any) {
    if (control.value && control.value.indexOf(' ') >= 0) {
      return { noSpace: true };
    }
    return null;
  }

  // Method triggered on form submission to initiate user search
  search(): void {
    // Extract username from the form
    const username = this.myForm.value.username;

    // Check if username contains white spaces
    const hasWhiteSpace = /\s/.test(username);

    // If no white spaces, call the service to get user repos
    if (!hasWhiteSpace) {
      console.log(username);
      this.appcomponent.getUseCall(true, username);
    }
  }
}
