"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  return (
    <main className="p-6 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-600 mb-4">
        {error.message || "Failed to load dashboard data."}
      </p>

      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </main>
  );
}
