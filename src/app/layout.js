import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import MainMenu from "./components/menu/MainMenu";
import ReduxProvider from "./provider";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // use weights you need
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ajayaa Edtech",
  description: "we provides courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <MainMenu />

          {children}
          <Footer />

        </ReduxProvider>
      </body>
    </html>
  );
}
