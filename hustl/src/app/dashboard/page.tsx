export default async function DashboardPage() {
  // ⏳ Simulate slow network
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // ❌ Uncomment to test error state
  // throw new Error("Failed to load dashboard data");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700">
        Dashboard data loaded successfully.
      </p>
    </main>
  );
}
