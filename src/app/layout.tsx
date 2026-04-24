import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antigravity Pulse - Electronic Music Festival",
  description: "A multi-sensory descent into futuristic brutalism. 48 hours of uninterrupted electronic frequencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className="antialiased selection:bg-cyan-400/30 selection:text-cyan-400">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
