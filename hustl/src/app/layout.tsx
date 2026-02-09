import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUSTL – Hustle Smarter",
  description: "Unified internship and mentorship platform for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary antialiased">
        {children}
      </body>
    </html>
  );
}
