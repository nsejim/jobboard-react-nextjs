import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          Header
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
