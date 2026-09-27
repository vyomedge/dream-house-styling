import "./globals.css";
import { CartProvider } from "@/Context/CartContext";
import LayoutWrapper from "@/wrappers/LayoutWrapper";
import { ToastContainer } from "react-toastify";
import AuthGuard from "@/wrappers/AuthGuard";
import { AuthProvider } from "@/Context/AuthContext";

export const metadata = {
  title: "Dream Home Styling",
  description: "Dream Home Styling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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
