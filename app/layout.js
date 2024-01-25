import './globals.css'
import localFont from 'next/font/local'

const alkhemikal = localFont({
  src: [
    {
      path: './fonts/Alkhemikal.ttf',
      weight: 'normal',
      style: 'normal'
    }
  ]
})

export const metadata = {
  title: "Vídeos pornô gratuitos - XVIDEOS.COM",
  description: "XVIDEOS Vídeos pornô gratuitos"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      </head>

      <body className={alkhemikal.className}>{children}</body>
    </html>
  );
}
