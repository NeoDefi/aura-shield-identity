import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { IdentityManager } from "@/components/IdentityManager";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <div className="mt-12">
          <IdentityManager />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
