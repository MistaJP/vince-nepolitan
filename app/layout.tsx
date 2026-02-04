import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vince Nepolitan | Renovate Me - Author & Speaker",
  description: "Vince Nepolitan shares his powerful story of overcoming adversity, from the streets of Las Vegas to becoming a bestselling author and inspirational speaker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-white font-bold text-xl tracking-wider">
                VINCE NEPOLITAN
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-300 hover:text-white text-sm uppercase tracking-wider transition-colors">Home</a>
                <a href="/about" className="text-gray-300 hover:text-white text-sm uppercase tracking-wider transition-colors">Meet Vince</a>
                <a href="/speaking" className="text-gray-300 hover:text-white text-sm uppercase tracking-wider transition-colors">Speaking</a>
                <a href="/speaking" className="bg-gold-500 hover:bg-gold-600 text-black font-bold px-6 py-2 rounded text-sm uppercase tracking-wider transition-colors">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-black-primary text-white py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Vince Nepolitan. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
