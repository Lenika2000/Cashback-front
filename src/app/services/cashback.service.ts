import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public getCashback(): Observable<any> {
    const userId = localStorage.getItem('cashback.user.id');
    return this.http.get(`${environment.basePath}/client/${userId}/cashback`);
  }

}

