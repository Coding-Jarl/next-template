import '@/styles/app.scss'

export const metadata = {
  title: 'My Home Page!',
  description: 'Lorem ipsum dolor sit amet, non consequitur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <p>Global Layout</p>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>About</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
