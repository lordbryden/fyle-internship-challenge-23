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
  myForm: FormGroup ;


  // username =  '';
  constructor(
    private apiService : ApiService ,
    private appcomponent : AppComponent,
    private fb: FormBuilder
    ) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, this.noSpaceValidator]]
    });
  }
  noSpaceValidator(control: any) {
    if (control.value && control.value.indexOf(' ') >= 0) {
      return { noSpace: true };
    }
    return null;
  }
  search(): void {
    const username = this.myForm.value.username;
      // Check if username contains white spaces
  const hasWhiteSpace = /\s/.test(username);

  if (!hasWhiteSpace) {
    // Call the service to get user repos
    console.log(username);
    this.appcomponent.getUseCall(true, username);
  }
  }

}
