export interface Cashback {
  id: number;
  creationDate: Date;
  productName?: string;
  status: CashbackStatus;
  cashbackSum: number;
}

export type CashbackStatus = 'NEW' | 'RECEIVED_INF' | 'APPROVED' | 'REJECTED' | 'RECEIVED_SUM';

export interface CashbackForClient extends Cashback{
  shopName: number;
}

export interface CashbackForShop extends Cashback{
  isPaid: boolean;
  isOrderCompleted: boolean;
  confirmPayment: boolean;
  clientLastName: string;
  clientFirstName: string;
}
