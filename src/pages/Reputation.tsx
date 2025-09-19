import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReputationCard from "@/components/ReputationCard";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Star, Award, TrendingUp } from "lucide-react";

const Reputation = () => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const reputationMetrics = [
    {
      title: "Trust Score",
      value: 92,
      encrypted: true,
      description: "Based on verified interactions and peer validation",
      icon: Shield
    },
    {
      title: "Expertise Level", 
      value: 87,
      encrypted: true,
      description: "Domain knowledge and contribution quality",
      icon: Award
    },
    {
      title: "Consistency Rating",
      value: 95,
      encrypted: true,
      description: "Reliability and predictable behavior patterns",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyber/10 border border-cyber/20">
                <Star className="w-8 h-8 text-cyber" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Encrypted Reputation System
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your reputation scores are fully encrypted and only revealed when you grant access. 
              Build trust while maintaining complete privacy control.
            </p>
          </div>

          {/* Reputation Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {reputationMetrics.map((metric, index) => (
              <div key={index} className="group">
                <ReputationCard
                  title={metric.title}
                  score={metric.value}
                  isRevealed={selectedScore === index}
                  onReveal={() => setSelectedScore(selectedScore === index ? null : index)}
                />
                <div className="mt-4 p-4 rounded-lg bg-card/30 border border-card-border">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4 text-cyber" />
                    <span className="font-medium text-sm">{metric.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-card/50 border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-cyber" />
                <h3 className="text-xl font-semibold">Selective Disclosure</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Choose exactly what reputation data to share and with whom. 
                Your encrypted scores remain private until you decide to reveal them.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Granular permission controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Time-limited access grants</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Revocable permissions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyber" />
                <h3 className="text-xl font-semibold">FHE Protection</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fully Homomorphic Encryption ensures your reputation data is processed 
                without ever being decrypted on our servers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Zero-knowledge proofs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Computation on encrypted data</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                  <span>Cryptographic guarantees</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="p-8 rounded-xl bg-gradient-to-r from-cyber/10 to-purple-500/10 border border-cyber/20">
              <h3 className="text-2xl font-bold mb-4">Start Building Your Encrypted Reputation</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect your wallet to begin establishing your encrypted reputation scores. 
                Your privacy is guaranteed from day one.
              </p>
              <Button variant="cyber" size="lg" className="animate-pulse">
                Connect Wallet & Start
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reputation;