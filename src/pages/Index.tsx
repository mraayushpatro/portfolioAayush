import PortfolioHeader from "@/components/PortfolioHeader";
import HeroSection from "@/components/HeroSection";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main>
        <HeroSection />
      </main>
      <PortfolioFooter />
    </div>
  );
};

export default Index;
