interface CreatePaymentDto {
  amount: number;
  currency: string;
  paymentSystem: string;
  urlSuccess: string;
  urlFail: string;
  courseId: number;
  tariffId: number;
  email: string;
  customerName?: string;
}

interface CreatePaymentResponse {
  paymentId: string;
  paymentUrl: string;
  status: string;
  amount: number;
  currency: string;
  orderId: string;
  redirectRequired: boolean;
  additionalData: any;
}

export class InvoiceService {
  private static API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; // Default to localhost
  private static PAYMENT_SUCCESS_URL = import.meta.env.VITE_PAYMENT_SUCCESS_URL || 'http://localhost:5173/success'; // Default for development
  private static PAYMENT_FAIL_URL = import.meta.env.VITE_PAYMENT_FAIL_URL || 'http://localhost:5173/fail'; // Default for development

  static async createInvoice(data: {
    tariffId: number;
    courseId: number;
    amount: number;
    currencyCode: string;
    email: string;
    name?: string;
  }): Promise<string> {
    const createPaymentDto: CreatePaymentDto = {
      amount: data.amount,
      currency: data.currencyCode,
      paymentSystem: "Test", // Default to "Test" as per Swagger
      urlSuccess: InvoiceService.PAYMENT_SUCCESS_URL,
      urlFail: InvoiceService.PAYMENT_FAIL_URL,
      courseId: data.courseId,
      tariffId: data.tariffId,
      email: data.email,
      customerName: data.name,
    };

    const response = await fetch(`${InvoiceService.API_BASE_URL}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createPaymentDto),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create invoice');
    }

    const responseData: CreatePaymentResponse = await response.json();
    return responseData.paymentUrl;
  }
}
