import { Component, OnInit } from '@angular/core';
import {CashbackForClient} from '../../../../models/cashback.model';
import {CashbackService} from '../../../../services/cashback.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  public cashback: CashbackForClient[] = [];
  public displayedColumns: string[] = ['productName', 'productPrice', 'shopName', 'creationDate', 'status', 'cashbackSum'];
  constructor(private cashbackService: CashbackService) { }

  ngOnInit(): void {
    this.cashbackService.getCashback('clients').subscribe((cashback: CashbackForClient[]) => {
      this.cashback = cashback;
    });
  }

}
