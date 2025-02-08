import type { Metadata } from "next";
import ClientRoot from "./components/clientRoot"; // Importing the client-side component
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/globals.css";
import "@fontsource/montserrat";
import "@fontsource/playfair-display";
import { AuthProvider } from "./authContext"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO (runs on the server)
export const metadata: Metadata = {
  title: "Humanness Program",
  description: "Ending hunger one shirt at a time ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrapping the content with ClientRoot for client-side functionality */}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
    </AuthProvider>
  );
}