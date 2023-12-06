import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AppComponent } from '../app.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Add this import
import { ClipboardModule } from '@angular/cdk/clipboard'; // Add this import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      imports: [HttpClientTestingModule,MatPaginatorModule,ClipboardModule,BrowserAnimationsModule], // Add HttpClientTestingModule
      providers: [AppComponent]
    })
    .compileComponents();
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

  it('should call appcomponent.getUseCall when handlePageEvent is invoked', () => {
    const appComponent = TestBed.inject(AppComponent);
    const spy = spyOn(appComponent, 'getUseCall');

    const event: PageEvent = { pageIndex: 1, pageSize: 10, length: 10 };
    component.handlePageEvent(event);

    expect(spy).toHaveBeenCalledWith(false, 'testuser');
  });
});
