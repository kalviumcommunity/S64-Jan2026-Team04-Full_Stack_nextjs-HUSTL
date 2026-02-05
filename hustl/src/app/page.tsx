"use client";

import { useAuth } from "@/hooks/useAuth";
import { useUI } from "@/hooks/useUI";

export default function Home() {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme, sidebarOpen, toggleSidebar } = useUI();

  return (
    <main
      className={`min-h-screen p-8 transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        Global State Management (Context API)
      </h1>

      {/* Authentication Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Authentication</h2>

        {isAuthenticated ? (
          <div className="space-y-2">
            <p>Logged in as: <strong>{user}</strong></p>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => login("KalviumUser")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        )}
      </section>

      {/* UI Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">UI Controls</h2>

        <p className="mb-3">Current Theme: {theme}</p>

        <div className="flex gap-3">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Toggle Theme
          </button>

          <button
            onClick={toggleSidebar}
            className="bg-yellow-500 text-black px-4 py-2 rounded"
          >
            {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>
      </section>
    </main>
  );
}
