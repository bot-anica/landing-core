import { useState, useEffect } from 'react';
import { InvoiceService } from '../services/InvoiceService';
import { Invoice } from '../types/invoice';
import { useCourse } from './useCourse';

export const usePrePayment = (courseUrlParam: string | undefined) => {
  const { course, isLoading: isCourseLoading, error: courseError } = useCourse(courseUrlParam);
  
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [isInvoiceLoading, setIsInvoiceLoading] = useState(false);
  const [invoiceError, setInvoiceError] = useState<string | null>(null);

  useEffect(() => {
    if (course) {
      const createInvoice = async () => {
        setIsInvoiceLoading(true);
        setInvoiceError(null);
        try {
          // The course ID from the course object is now a number, but createInvoice might expect a string.
          // Let's ensure it's a string.
          const invoiceData = await InvoiceService.createInvoice(String(course.id));
          setInvoice(invoiceData);
        } catch (err) {
          setInvoiceError(err instanceof Error ? err.message : 'Failed to create invoice');
        } finally {
          setIsInvoiceLoading(false);
        }
      };
      createInvoice();
    }
  }, [course]);

  return {
    course,
    invoice,
    isLoading: isCourseLoading || isInvoiceLoading,
    error: courseError || invoiceError,
  };
};