import {Component, OnInit} from '@angular/core';
import {CashbackChangeRequestPayload, CashbackForAdmin, CashbackForShop} from '../../../../models/cashback.model';
import {CashbackService} from '../../../../services/cashback.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UpdateCashbackDialogComponent} from './update-cashback-dialog/update-cashback-dialog.component';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public cashback: CashbackForShop[] = [];
  public displayedColumns: string[] = ['productName', 'productPrice', 'creationDate', 'status', 'isPaid', 'isOrderCompleted', 'confirmPayment',
    'client', 'shopPayment', 'update'];

  constructor(private cashbackService: CashbackService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCashback();
  }

  updateCashback(cashback: CashbackForShop): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '450px';
    dialogConfig.width = '450px';
    dialogConfig.data = cashback;
    this.dialog.open(UpdateCashbackDialogComponent, dialogConfig).componentInstance.cashbackUpdate.subscribe((updatedCashback: CashbackChangeRequestPayload) => {
      this.cashbackService.updateCashback(updatedCashback).subscribe(() => {
        this.getCashback();
      }, error => {
        console.log(error);
      });
    });
  }

  getCashback(): void {
    this.cashbackService.getCashback('shops').subscribe((cashback: CashbackForShop[]) => {
      this.cashback = cashback.filter((cashbackForShop: CashbackForShop) => {
        return cashbackForShop.clientFirstName.length !== 0;
      });
    });
  }
}
