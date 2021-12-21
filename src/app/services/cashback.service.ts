import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {CashbackChangeRequestPayload} from '../models/cashback.model';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {

  public statusMap: Map<string, string> = new Map();

  constructor(private http: HttpClient) {
    this.initStatusMap();
  }

  public getCashback(userRole: string): Observable<any> {
    const userId = localStorage.getItem('cashback.user.id');
    return this.http.get(`${environment.basePath}api/${userRole}/${userId}/cashback`);
  }

  public updateCashback(cashbackChangeRequestPayload: CashbackChangeRequestPayload): Observable<any> {
    return this.http.put(`${environment.basePath}api/cashback/${cashbackChangeRequestPayload.cashbackId}`, cashbackChangeRequestPayload);
  }

  public processCashback(): Observable<any> {
    return this.http.post(`${environment.basePath}api/admin/cashback/process`, {});
  }

  public gelAllCashback(): Observable<any> {
    return this.http.get(`${environment.basePath}api/admin/cashback`);
  }

  private initStatusMap(): void {
    this.statusMap.set('NEW', 'Создан');
    this.statusMap.set('RECEIVED_INF', 'Получена информация от магазина');
    this.statusMap.set('APPROVED', 'Выплачен');
    this.statusMap.set('REJECTED', 'Отклонен');
    this.statusMap.set('RECEIVED_SUM', 'Получена выплата от магазина');
  }

}

