import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
}

export const FormInput = ({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  name,
  className = "",
}: FormInputProps) => {
  return (
    <div className={`relative mb-7 ${className}`}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer"
      />
      <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
        {label}
      </label>
    </div>
  );
};
