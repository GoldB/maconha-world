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
      <body className={`bg-zinc-950 text-white select-none antialiased ${outfit.className}`}>{children}</body>
    </html>
  );
}
