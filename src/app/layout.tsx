import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Óticas Vizz",
  description: "O melhor preço e qualidade da região!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
