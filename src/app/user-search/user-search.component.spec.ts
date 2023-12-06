import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search.component';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Add this import

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule], // Add HttpClientTestingModule
      providers: [ApiService, AppComponent]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call appcomponent.getUseCall when search is invoked', () => {
    const apiService = TestBed.inject(ApiService);
    const appComponent = TestBed.inject(AppComponent);
    const spy = spyOn(appComponent, 'getUseCall');

    // Mock the form value
    component.myForm.setValue({ username: 'testuser' });

    component.search();

    expect(spy).toHaveBeenCalledWith(true, 'testuser');
  });
});
