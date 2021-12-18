export interface Cashback {
  id: number;
  creationDate: Date;
  productName?: string;
  productPrice?: number;
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
  shopPayment: string;
}

export interface CashbackChangeRequestPayload {
  cashbackId: number;
  isPaid: boolean;
  isOrderCompleted: boolean;
  payment: boolean;
}

export interface CashbackForAdmin extends CashbackForShop{
  shopName: number;
}
