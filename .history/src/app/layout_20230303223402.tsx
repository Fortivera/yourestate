import './globals.css'
import Navbar from './Navbar';

export const metadata = {
  title: 'home page ya boss',
  description: "great explanation of something",
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
