import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, UserX, Database, FileCheck } from "lucide-react";

const Privacy = () => {
  const privacyFeatures = [
    {
      icon: Eye,
      title: "Zero-Knowledge Architecture",
      description: "Your data never exists in plain text on our servers. All processing happens on encrypted data using advanced cryptographic techniques."
    },
    {
      icon: UserX,
      title: "Anonymous by Design", 
      description: "No personal identifiers required. Your wallet address is the only connection, and even that can be obfuscated through privacy layers."
    },
    {
      icon: Database,
      title: "Decentralized Storage",
      description: "Your encrypted reputation data is distributed across multiple nodes, ensuring no single point of failure or surveillance."
    },
    {
      icon: FileCheck,
      title: "Verifiable Deletion",
      description: "When you choose to delete your data, cryptographic proofs ensure complete removal across all storage locations."
    }
  ];

  const privacyLevels = [
    {
      level: "Public",
      description: "Aggregate statistics only",
      features: ["Total users", "Network activity", "General trends"]
    },
    {
      level: "Permissioned",
      description: "Selective data sharing",
      features: ["Chosen reputation scores", "Verified credentials", "Time-limited access"]
    },
    {
      level: "Private",
      description: "Full encryption protection",
      features: ["All personal data", "Interaction history", "Behavioral patterns"]
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
                <Shield className="w-8 h-8 text-cyber" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Privacy-First Design
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is not negotiable. Every aspect of our system is designed 
              to protect your data while enabling meaningful reputation building.
            </p>
          </div>

          {/* Privacy Levels */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {privacyLevels.map((level, index) => (
              <div key={index} className="p-6 rounded-xl bg-card/50 border border-card-border hover:border-cyber/30 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-green-500' : 
                    index === 1 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <h3 className="text-lg font-semibold">{level.level}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Privacy Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-card/30 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-6 h-6 text-cyber" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Data Control Section */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyber/10 border border-cyber/20 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Complete Data Control</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyber" />
                  What We Never See
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Your real identity or personal information</li>
                  <li>• Unencrypted reputation scores or data</li>
                  <li>• Your interaction patterns or behaviors</li>
                  <li>• Recipients of your shared information</li>
                  <li>• Your private keys or wallet contents</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyber" />
                  What You Control
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• When and how your data is accessed</li>
                  <li>• Which reputation metrics to reveal</li>
                  <li>• Duration of data sharing permissions</li>
                  <li>• Complete deletion of your information</li>
                  <li>• Migration to other privacy platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Guarantees */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technical Privacy Guarantees</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption Standard</div>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Data Breaches Possible</div>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">100%</div>
                <div className="text-sm text-muted-foreground">User Control</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;