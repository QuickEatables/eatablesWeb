import '@styles/globals.css';
export const metadata = {
  title: 'Eatables',
  description: 'Get connected to your next best meals'
}
import { Ubuntu } from 'next/font/google';
import Script from "next/script";

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
            
          <Script id="zoho-salesiq" strategy="afterInteractive">
            {`
              var $zoho=$zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "siqea8710ad44c1c7d57907e2b63191739457718c2066693da729460f2f55db7cfe",
                values: {},
                ready: function() {},
              };
            `}
          </Script>
          <Script
            src="https://salesiq.zoho.com/widget"
            strategy="afterInteractive"
          />
          <div id="zsiqwidget"></div>
        </body>
    </html>
  )
}

export default RootLayout;