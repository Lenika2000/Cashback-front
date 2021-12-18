import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CashbackChangeRequestPayload, CashbackForShop} from '../../../../../models/cashback.model';
import {MyErrorStateMatcher} from '../../../../login-page/login-page.component';

@Component({
  selector: 'app-update-cashback-dialog',
  templateUrl: './update-cashback-dialog.component.html',
  styleUrls: ['./update-cashback-dialog.component.scss']
})
export class UpdateCashbackDialogComponent implements OnInit {

  @Output() cashbackUpdate = new EventEmitter<CashbackChangeRequestPayload>();
  cashbackForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor( private dialogRef: MatDialogRef<UpdateCashbackDialogComponent>,
               private formBuilder: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public cashback: CashbackForShop) {
  }


  ngOnInit(): void {
    this.cashbackForm = this.formBuilder.group({
    productName: [this.cashback.productName],
    isPaid: [this.cashback.isPaid],
    isOrderCompleted: [this.cashback.isOrderCompleted],
    payment: [this.cashback.shopPayment, {validators: [Validators.required,
          Validators.pattern('^[0-9]*[.,]?[0-9]+$')] }],
    });
    // Validators.min(this.cashback.cashbackSum / 0.9)
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onCashbackUpdate(): void {
    this.closeDialog();
    this.cashbackUpdate.emit({
      cashbackId: this.cashback.id,
      isPaid: this.cashbackForm.get('isPaid').value,
      isOrderCompleted: this.cashbackForm.get('isOrderCompleted').value,
      payment: this.cashbackForm.get('payment').value
    });
  }

}
