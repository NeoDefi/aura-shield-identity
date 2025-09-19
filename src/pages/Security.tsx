import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Zap } from "lucide-react";

const Security = () => {
  const securityLayers = [
    {
      icon: Lock,
      title: "Fully Homomorphic Encryption",
      level: "Critical",
      description: "Mathematical operations performed directly on encrypted data without ever decrypting it."
    },
    {
      icon: Key,
      title: "Multi-Party Computation", 
      level: "High",
      description: "Distributed computation across multiple nodes ensures no single point can access complete data."
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      level: "High", 
      description: "Verify information authenticity without revealing the underlying data or computation."
    },
    {
      icon: Zap,
      title: "Quantum-Resistant Algorithms",
      level: "Future-Proof",
      description: "Cryptographic methods designed to withstand attacks from quantum computers."
    }
  ];

  const threatMitigations = [
    {
      threat: "Data Breach",
      mitigation: "Even if our servers are compromised, all data remains encrypted and unusable",
      status: "Protected"
    },
    {
      threat: "Insider Threats", 
      mitigation: "Zero-trust architecture ensures no employee can access user data",
      status: "Protected"
    },
    {
      threat: "Man-in-the-Middle",
      mitigation: "End-to-end encryption with certificate pinning prevents interception",
      status: "Protected"
    },
    {
      threat: "Quantum Computing",
      mitigation: "Post-quantum cryptography algorithms future-proof all encryption",
      status: "Protected"
    }
  ];

  const auditResults = [
    { metric: "Cryptographic Implementation", score: "A+", auditor: "Trail of Bits" },
    { metric: "Smart Contract Security", score: "A", auditor: "ConsenSys Diligence" },
    { metric: "Infrastructure Security", score: "A+", auditor: "Kudelski Security" },
    { metric: "Privacy Compliance", score: "A", auditor: "Privacy International" }
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
                Military-Grade Security
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered cryptographic protection designed to withstand nation-state 
              attacks and future quantum computing threats.
            </p>
          </div>

          {/* Security Layers */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {securityLayers.map((layer, index) => (
              <div key={index} className="p-6 rounded-xl bg-card/50 border border-card-border hover:border-cyber/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <layer.icon className="w-6 h-6 text-cyber" />
                  <div>
                    <h3 className="text-lg font-semibold">{layer.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      layer.level === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      layer.level === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {layer.level}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{layer.description}</p>
              </div>
            ))}
          </div>

          {/* Threat Protection Matrix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Threat Protection Matrix</h3>
            <div className="space-y-4">
              {threatMitigations.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-card/30 border border-card-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">{item.threat}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-400">{item.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Audits */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-green-500/10 to-cyber/10 border border-cyber/20 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Independent Security Audits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {auditResults.map((audit, index) => (
                <div key={index} className="p-4 rounded-lg bg-card/30 border border-card-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{audit.metric}</span>
                    <span className="text-xl font-bold text-green-400">{audit.score}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Audited by {audit.auditor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Management */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-card/30 border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-6 h-6 text-cyber" />
                <h3 className="text-xl font-semibold">Key Management</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Hardware Security Module (HSM) protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Multi-signature key generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated key rotation protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Threshold secret sharing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card/30 border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">Incident Response</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 security monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated threat detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Instant breach containment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Transparent incident reporting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Security Metrics */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Security Metrics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">99.99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">&lt;1ms</div>
                <div className="text-sm text-muted-foreground">Threat Detection</div>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">0</div>
                <div className="text-sm text-muted-foreground">Successful Attacks</div>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-card-border">
                <div className="text-2xl font-bold text-cyber mb-2">SOC2</div>
                <div className="text-sm text-muted-foreground">Type II Certified</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;