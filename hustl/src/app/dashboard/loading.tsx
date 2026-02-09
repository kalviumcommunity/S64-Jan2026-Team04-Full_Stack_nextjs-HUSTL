export default function LoadingDashboard() {
  return (
    <main className="p-6 animate-pulse">
      <div className="h-8 w-48 bg-gray-300 rounded mb-6" />

      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>
    </main>
  );
}
