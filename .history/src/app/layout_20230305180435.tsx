import './globals.css'
import { Metadata } from 'next';

export const metadata = {
  title: 'home page ya boss',
  description: "great explanation of something",
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
