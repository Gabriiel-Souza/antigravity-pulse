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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${spaceGrotesk.variable} ${epilogue.variable}`} suppressHydrationWarning>
      <body className="selection:bg-primary-container selection:text-on-primary-container antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
