export default function Footer() {
  return (
    <footer className="text-center p-6 text-gray-500 border-t mt-12">
      © {new Date().getFullYear()} MyPortfolio. All rights reserved.
    </footer>
  );
}