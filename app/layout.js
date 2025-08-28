import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'BizVibez Properties',
  description: 'Find Your Dream Home with BizVibez Properties.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}