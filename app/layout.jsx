import '@styles/globals.css';
export const metadata = {
  title: 'Eatables',
  description: 'Get connected to your next best meals'
}
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});


const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className={ubuntu.className} style={{margin: '0px'}}>
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