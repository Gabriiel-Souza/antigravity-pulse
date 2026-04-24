import type { Metadata } from "next";
import { Space_Grotesk, Epilogue } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

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
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${epilogue.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased relative">
        <div className="fixed inset-0 bg-noise pointer-events-none z-[-1] opacity-50" />
        {children}
      </body>
    </html>
  );
}
