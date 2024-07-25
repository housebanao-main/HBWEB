"use client";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import UiProvider from "./store/UiProvider";
import { Wrapper } from "./Wrapper/Wrapper";

// const inter = Inter({ subsets: ["latin"] });
const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "Craft Your Dream Home with House Banao",
//   description: "Craft Your Dream Home: Build Your Vision, One Brick at a Time",
// };

export default function RootLayout({ children }) {
  console.log("TESTING");
  return (
    <html lang="en">
      <head>
        <title>House Banao - Best Interior Designer & Construction Company</title>
        <link rel="icon" href="/favicon/housebanao.ico" sizes="any" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DXVWWZQ0NL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DXVWWZQ0NL');
            `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PKHCSZWC');
            `,
          }}
        ></script>
      </head>

      <body className={poppinsFont.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKHCSZWC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <UiProvider>
          <Wrapper>{children}</Wrapper>
        </UiProvider>
      </body>
    </html>
  );
}
