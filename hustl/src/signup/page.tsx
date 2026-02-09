"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signupSchema,
  SignupFormData,
} from "@/lib/schemas/signupSchema";
import FormInput from "@/components/form/FormInput";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Form Submitted:", data);
    alert(`Welcome, ${data.name}!`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign Up
        </h1>

        <FormInput<SignupFormData>
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <FormInput<SignupFormData>
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <FormInput<SignupFormData>
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </main>
  );
}
