import { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontMain = localFont({
  src: "../../assets/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Jatin Designer",
  description:
    "Experience the magic of a designer who transforms ideas into visually striking, emotionally resonant works, setting new standards in UI/UX and brand identity design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontMain.variable} scrollbar-hide`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
