import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  title: "Harapan Jaya - Masakan Padang Otentik",
  description: "Cita rasa legendaris dari tanah Minangkabau di Palembang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-padang-cream text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}