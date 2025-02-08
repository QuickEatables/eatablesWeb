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
            
        <Script
          id="zohodeskasap"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var d = document;
              var s = d.createElement("script");
              s.type = "text/javascript";
              s.id = "zohodeskasapscript";
              s.defer = true;
              s.nonce = "{place_your_nonce_value_here}";
              s.src = "https://desk.zoho.com/portal/api/web/asapApp/1087407000000301452?orgId=878312228";
              var t = d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s, t);
              window.ZohoDeskAsapReady = function(s) {
                var e = window.ZohoDeskAsap__asyncalls = window.ZohoDeskAsap__asyncalls || [];
                window.ZohoDeskAsapReadyStatus ? (s && e.push(s), e.forEach(s => s && s()), 
                window.ZohoDeskAsap__asyncalls = null) : s && e.push(s);
              };
            `,
          }}
        />

        </body>
    </html>
  )
}

export default RootLayout;