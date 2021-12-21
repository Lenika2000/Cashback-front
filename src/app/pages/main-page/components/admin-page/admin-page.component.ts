import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ClientService} from '../../../../services/client.service';
import {ShopService} from '../../../../services/shop.service';
import {Client} from '../../../../models/user.model';
import {Shop} from '../../../../models/shop.model';
import {CashbackService} from '../../../../services/cashback.service';
import {CashbackForAdmin} from '../../../../models/cashback.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnChanges {

  public clients: Client[] = [];
  public shops: Shop[] = [];
  public clientsTableColumnName = ['id', 'login', 'firstName', 'lastName', 'balance'];
  public cashbackTableColumnName = ['id', 'shopName', 'productName', 'productPrice', 'creationDate', 'status', 'isPaid', 'isOrderCompleted', 'confirmPayment',
    'client', 'cashbackSum', 'shopPayment'];
  @Input() cashbackChange;

  public cashbackDataSource: MatTableDataSource<CashbackForAdmin>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientService: ClientService, private shopService: ShopService, public cashbackService: CashbackService) {
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
    this.shopService.getShops().subscribe((shops: Shop[]) => {
      this.shops = shops;
    });
    this.cashbackService.gelAllCashback().subscribe((cashback: CashbackForAdmin[]) => {
      this.cashbackDataSource = new MatTableDataSource<CashbackForAdmin>(cashback);
      this.cashbackDataSource.paginator = this.paginator;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cashbackService.gelAllCashback().subscribe((cashback: CashbackForAdmin[]) => {
      this.cashbackDataSource = new MatTableDataSource<CashbackForAdmin>(cashback);
      this.cashbackDataSource.paginator = this.paginator;
    });
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

}
