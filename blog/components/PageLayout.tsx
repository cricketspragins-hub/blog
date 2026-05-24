import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-full flex-col bg-background text-sage-dark">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-6 pb-16">
        <div className="animate-fade-in">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
