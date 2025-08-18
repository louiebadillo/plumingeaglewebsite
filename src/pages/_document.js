import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-AU">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,opsz,wght@0,14..16,300..800;1,14..16,300..800&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/pellogo.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pellogo.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pellogo.png?v=2" />
        <link rel="shortcut icon" href="/pellogo.png?v=2" />
        <link rel="icon" href="/pellogo.png?v=2" />
      </Head>
      <body className="bg-light dark:bg-dark">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
