import './globals.css'

//components
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
  title: 'Plaster Pro Takeoff',
  description: 'By Robert Garofalo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Provider>
          <Nav />
          {children}
        </Provider>
        </body>
    </html>
  )
}
