import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call httpClient.get when getUser is invoked', () => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.returnValue(of({}));

    service.getUser('testuser');

    expect(spy).toHaveBeenCalledWith('https://api.github.com/users/testuser');
  });

  it('should call httpClient.get when getRepos is invoked', () => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.returnValue(of({}));

    service.getRepos('testuser', 1, 10);

    expect(spy).toHaveBeenCalledWith('https://api.github.com/users/testuser/repos', {
      params: { per_page: '10', page: '1' }
    });
  });
});
