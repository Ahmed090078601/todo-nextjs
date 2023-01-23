import './globals.css'
import utilStyles from '../styles/utils.module.css';
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}</body>
    </html>
  );
}
