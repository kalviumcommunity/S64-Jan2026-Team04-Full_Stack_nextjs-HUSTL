import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
}: FormInputProps<T>) {
  const inputId = name;

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block mb-1 font-medium">
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        {...register(name)}
        aria-invalid={!!error}
        className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
