export interface Invoice {
  id: string;
  amount: number;
  currency: string;
  paymentLink: string;
  expiresAt: string;
};
