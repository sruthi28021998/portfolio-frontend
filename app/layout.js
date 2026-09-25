import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio powered by a custom CMS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}