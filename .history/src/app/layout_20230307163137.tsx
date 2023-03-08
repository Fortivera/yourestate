import './globals.css'



export const metadata = {
  title: 'Home',
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
