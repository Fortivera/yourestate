

export const metadata = {
  title: 'dash',
  description: "great explanation of dash",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <div lang="en">

      <body>{children}</body>
    </div>
  )
}
