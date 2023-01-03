import styles from "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header className={styles.header}>
          Header
        </header>
        {children}
        <footer className="styles.footer">Footer</footer>
      </body>
    </html>
  )
}
