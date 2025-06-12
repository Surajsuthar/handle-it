import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Handle-it | Get Things Done",
  description: "Handle-it helps you organize, manage, and get things done effortlessly.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}
