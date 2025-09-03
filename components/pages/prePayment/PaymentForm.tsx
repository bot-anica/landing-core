import { FC, useEffect } from 'react';
import { Loader2, X } from 'lucide-react';
import { Button, CustomSelect, CustomInput } from '../../common';
import { Currency } from '../../../types/sections';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface PaymentFormProps {
  availableCurrencies: Currency[];
  onSubmit: (values: PaymentFormValues) => void;
  isLoading: boolean;
  apiError: string | null;
  onCurrencyCodeChange: (currencyCode: string) => void; // New prop
}

export interface PaymentFormValues {
  selectedCurrencyCode: string;
  name: string;
  email: string;
}

const PaymentForm: FC<PaymentFormProps> = ({
  availableCurrencies,
  onSubmit,
  isLoading,
  apiError,
  onCurrencyCodeChange, // Destructure new prop
}) => {
  const validationSchema = Yup.object({
    selectedCurrencyCode: Yup.string().required('Пожалуйста, выберите валюту'),
    name: Yup.string().optional(),
    email: Yup.string().email('Некорректный формат email').required('Пожалуйста, введите ваш email'),
  });

  const formik = useFormik<PaymentFormValues>({
    initialValues: {
      selectedCurrencyCode: availableCurrencies[0]?.code || '',
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true, // Reinitialize form when availableCurrencies changes
  });

  // Update selectedCurrencyCode if availableCurrencies changes and current code is not valid
  // This handles the case where initialValues might not have the correct default if availableCurrencies loads later
  // or if the first currency changes.
  if (formik.values.selectedCurrencyCode === '' && availableCurrencies.length > 0) {
    formik.setFieldValue('selectedCurrencyCode', availableCurrencies[0].code);
  }

  // Call onCurrencyCodeChange when selectedCurrencyCode changes in Formik
  useEffect(() => {
    onCurrencyCodeChange(formik.values.selectedCurrencyCode);
  }, [formik.values.selectedCurrencyCode, onCurrencyCodeChange]);

  return (
    <form onSubmit={formik.handleSubmit} className="flex-1">
      <h2 className="text-2xl font-bold text-primary-dark mb-6">Данные для оплаты</h2>
      <CustomSelect
        id="selectedCurrencyCode"
        label="Валюта оплаты *"
        options={availableCurrencies.map(currency => ({ value: currency.code, label: `${currency.name} (${currency.code})` }))}
        selectedValue={formik.values.selectedCurrencyCode}
        onValueChange={(value: string) => {
          formik.setFieldValue('selectedCurrencyCode', value);
          // No need to call onCurrencyCodeChange here directly, as useEffect will handle it
        }}
        error={formik.touched.selectedCurrencyCode && formik.errors.selectedCurrencyCode ? formik.errors.selectedCurrencyCode : null}
      />
      <CustomInput
        id="name"
        name="name" // Added name prop
        label="Имя (необязательно)"
        type="text"
        placeholder="Введите ваше имя"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
      />
      <CustomInput
        id="email"
        name="email" // Added name prop
        label="Email *"
        type="email"
        placeholder="your.email@example.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        helperText="На этот email будут отправлены материалы курса"
        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
      />
      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Ошибка!</strong>
          <span className="block sm:inline ml-2">{apiError}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => formik.setFieldError('apiError', undefined)}> {/* Using setFieldError to clear apiError */}
            <X className="h-6 w-6 text-red-500" />
          </span>
        </div>
      )}
      <Button
        type="submit"
        disabled={isLoading || (!formik.isValid && formik.submitCount > 0)} // Disable only if loading or form is invalid after first submission attempt
        className="w-full mb-4"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Создание инвойса...
          </>
        ) : (
          "Перейти к оплате"
        )}
      </Button>
      <p className="max-w-sm text-xs text-gray-500 text-center mb-8 mx-auto">Нажимая кнопку, вы соглашаетесь с условиями предоставления услуг</p>
    </form>
  );
};

export default PaymentForm;
