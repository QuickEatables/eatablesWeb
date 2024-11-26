import '@styles/globals.css';
export const metadata = {
  title: 'Eatables',
  description: 'Get connected to your next best meals'
}
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-plus-jakarta-sans',
});



const RootLayout = ( {children}) => {
  return (
    <html lang="en">
        <body>
          <div className="main">
            
          </div>

          <main className="app">
       
            {children}
          </main>
            
        </body>
    </html>
  )
}

export default RootLayout;