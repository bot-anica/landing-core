import { FC } from 'react';

interface CustomInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Added onBlur prop
  error?: string | null;
  helperText?: string;
  required?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required,
}) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {label} {required && '*'}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className={`appearance-none border ${error ? 'border-red-500' : 'border-primary-blue/15'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default CustomInput;
