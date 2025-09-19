import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import idCardImage from "@/assets/id-card.png";

const Footer = () => {
  const [flippedCard, setFlippedCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedCard((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { id: "A7X9-B2C4", level: "Elite", status: "Verified" },
    { id: "K3M8-L9N2", level: "Pro", status: "Active" },
    { id: "R5T1-W6Q3", level: "Basic", status: "Pending" }
  ];

  return (
    <footer className="border-t border-card-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Animated ID Cards */}
          <div className="flex justify-center space-x-4">
            {cards.map((card, index) => (
              <Card 
                key={index}
                className={`w-24 h-16 encrypted-card transition-transform duration-500 ${
                  flippedCard === index ? 'card-flip' : ''
                }`}
              >
                <CardContent className="p-2 h-full flex flex-col justify-center">
                  <div className="card-front space-y-1">
                    <div className="text-xs text-cyber font-mono">{card.id}</div>
                    <div className="text-xs text-muted-foreground">{card.level}</div>
                  </div>
                  <div className="card-back space-y-1">
                    <div className="text-xs text-neon-green font-mono binary-overlay">
                      {card.status}
                    </div>
                    <div className="text-xs text-cyber">█████</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Info */}
          <div className="text-center space-y-2">
            <h3 className="text-cyber font-bold text-lg">ReputationFHE</h3>
            <p className="text-muted-foreground text-sm">
              Private reputation scoring with fully homomorphic encryption
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex flex-col space-y-1">
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber transition-colors">
                Security
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-cyber transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-card-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2024 ReputationFHE • Encrypted by design • Powered by FHE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;