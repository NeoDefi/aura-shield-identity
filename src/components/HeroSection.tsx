import { Button } from "@/components/ui/button";
import ReputationCard from "./ReputationCard";
import { Shield, Lock, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 mesh-pattern">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-cyber mb-6 animate-glow-fade">
            Private Reputation with FHE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your reputation is encrypted, revealed only on approval. 
            Experience the future of privacy-preserving social scoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg">
              <Shield className="w-5 h-5" />
              Connect Wallet
            </Button>
            <Button variant="neon" size="lg">
              <Lock className="w-5 h-5" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-card border border-card-border rounded-full flex items-center justify-center cyber-glow">
              <Lock className="w-8 h-8 text-cyber" />
            </div>
            <h3 className="text-xl font-bold text-cyber">Fully Encrypted</h3>
            <p className="text-muted-foreground">
              Your reputation data is encrypted using state-of-the-art FHE technology
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-card border border-card-border rounded-full flex items-center justify-center cyber-glow">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-secondary">Privacy First</h3>
            <p className="text-muted-foreground">
              Control when and how your reputation is revealed to others
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-card border border-card-border rounded-full flex items-center justify-center cyber-glow">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-accent">Instant Verification</h3>
            <p className="text-muted-foreground">
              Fast and secure reputation verification on the blockchain
            </p>
          </div>
        </div>

        {/* Reputation Cards Demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-cyber mb-4 text-center">Encrypted State</h3>
            <ReputationCard isRevealed={false} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4 text-center">Revealed State</h3>
            <ReputationCard isRevealed={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;