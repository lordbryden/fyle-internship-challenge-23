import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your actual AppComponent type
import { AppComponent } from '../app.component';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let mockAppComponent: jasmine.SpyObj<AppComponent>;

  beforeEach(async () => {
    mockAppComponent = jasmine.createSpyObj('AppComponent', ['getUseCall']);

    await TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      imports: [HttpClientTestingModule, MatPaginatorModule, ClipboardModule, BrowserAnimationsModule],
      providers: [{ provide: AppComponent, useValue: mockAppComponent }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    component.username = { login: 'testuser', public_repos: 10 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSizeOptions based on the input string', () => {
    // Arrange
    const inputString = '2,4,8,16';

    // Act
    component.setPageSizeOptions(inputString);

    // Assert
    expect(component.pageSizeOptions).toEqual([2, 4, 8, 16]);
  });

  it('should not set pageSizeOptions if the input string is empty', () => {
    // Arrange
    const initialPageSizeOptions = component.pageSizeOptions.slice();

    // Act
    component.setPageSizeOptions('');

    // Assert
    expect(component.pageSizeOptions).toEqual(initialPageSizeOptions);
  });

  it('should not set pageSizeOptions if the input string is null or undefined', () => {
    // Arrange
    const initialPageSizeOptions = component.pageSizeOptions.slice();

    // Act
    component.setPageSizeOptions(null!);
    component.setPageSizeOptions(undefined!);

    // Assert
    expect(component.pageSizeOptions).toEqual(initialPageSizeOptions);
  });
});
