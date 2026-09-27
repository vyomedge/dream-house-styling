import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Context/CartContext";
import LayoutWrapper from "@/wrappers/LayoutWrapper";
import { ToastContainer } from "react-toastify";
import AuthGuard from "@/wrappers/AuthGuard";
import { AuthProvider } from "@/Context/AuthContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dream Home Styling",
  description: "Dream Home Styling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        <AuthProvider>
          <AuthGuard>
            <CartProvider>
              <LayoutWrapper>{children}</LayoutWrapper>

              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </CartProvider>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
