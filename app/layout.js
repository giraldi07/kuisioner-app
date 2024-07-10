// app/layout.js
import '../app/globals.css'

export const metadata = {
  title: 'Kuisioner App',
  description: 'Aplikasi Kuisioner untuk penelitian',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
