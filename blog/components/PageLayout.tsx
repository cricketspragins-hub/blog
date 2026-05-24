import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-full flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">{children}</main>
      <Footer />
    </div>
  );
}
