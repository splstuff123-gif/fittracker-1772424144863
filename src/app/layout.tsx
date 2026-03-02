import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitTracker",
  description: "Track your workouts and fitness goals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
