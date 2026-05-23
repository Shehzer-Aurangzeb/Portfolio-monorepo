import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shehzar Aurangzeb — Software Engineer",
  description:
    "Portfolio of Shehzar Aurangzeb, fullstack software engineer based in Montréal.",
};

// Runs synchronously in <head> before paint to apply the stored theme; prevents
// a light/dark flash and stops initial mount transitions from firing.
const themeInitScript = `(function(){try{var p=localStorage.getItem("theme-pref")||"system";var s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var r=p==="system"?s:p;document.documentElement.setAttribute("data-theme",r);document.documentElement.classList.add("theme-ready");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
