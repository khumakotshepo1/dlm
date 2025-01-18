import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dihlabeng Municipality",
  description: "Developed by Visionary Theo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex flex-col justify-between",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Header />

          <main className="flex-1 container pt-12 mb-36">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
