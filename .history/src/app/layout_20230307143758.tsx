import './globals.css'
import ReactQuery from './providers';


export const metadata = {
  title: 'Home',
  description: "great explanation of something",
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
