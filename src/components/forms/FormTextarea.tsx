import React from 'react';

interface FormTextareaProps {
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  rows?: number;
  className?: string;
}

export const FormTextarea = ({
  label,
  required = false,
  value,
  onChange,
  name,
  rows = 4,
  className = "",
}: FormTextareaProps) => {
  return (
    <div className={`relative mb-7 ${className}`}>
      <textarea
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        rows={rows}
        className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer resize-none"
      />
      <label className="absolute left-4 top-4 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
        {label}
      </label>
    </div>
  );
};
