import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserSearchComponent } from './user-search/user-search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import
import { RepoListComponent } from './repo-list/repo-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, UserSearchComponent,RepoListComponent], // Add UserSearchComponent to declarations
      imports: [HttpClientTestingModule, MatPaginatorModule,ClipboardModule,BrowserAnimationsModule], // Add MatPaginatorModule

      // Add your dependencies, imports, providers here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
