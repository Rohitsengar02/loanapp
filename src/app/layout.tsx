import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoanHub - Smart Loans, Simple Process | Instant Personal, Home & Business Loans",
  description: "Get instant loans anytime, anywhere with LoanHub. Quick approval in minutes, lowest interest rates, and 100% digital paperless process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
