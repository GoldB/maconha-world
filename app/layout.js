import { Outfit } from "next/font/google";
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: "maconha.world",
  description: "#TT"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      </head>

      <body className={`bg-black text-white select-none antialiased ${outfit.className}`}>{children}</body>
    </html>
  );
}
