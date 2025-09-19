import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Unlock, Eye, EyeOff } from "lucide-react";

interface ReputationCardProps {
  isRevealed?: boolean;
  title?: string;
  score?: number;
  onReveal?: () => void;
}

const ReputationCard = ({ 
  isRevealed: initialRevealed = false, 
  title = "REPUTATION ID",
  score = 94,
  onReveal 
}: ReputationCardProps) => {
  const [isRevealed, setIsRevealed] = useState(initialRevealed);
  
  const handleReveal = () => {
    if (onReveal) {
      onReveal();
    } else {
      setIsRevealed(!isRevealed);
    }
  };
  
  const encryptedData = "████████████████████████████████████████████████████████████████████████";
  const realData = {
    score: score,
    trustLevel: "Elite",
    transactions: 1247,
    reputation: "Verified Contributor"
  };

  return (
    <Card className="encrypted-card cyber-glow group hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-cyber animate-pulse-glow" />
            <span className="text-cyber font-bold text-mono">{title}</span>
          </div>
          <Button
            variant="neon"
            size="sm"
            onClick={handleReveal}
            className="flex items-center space-x-1"
          >
            {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            <span>{isRevealed ? "Hide" : "Reveal"}</span>
          </Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-mono">Score:</span>
            <span className={`font-bold text-lg ${isRevealed ? 'text-neon-green' : 'text-muted-foreground'} text-mono`}>
              {isRevealed ? realData.score : "███"}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-mono">Trust Level:</span>
            <span className={`font-bold ${isRevealed ? 'text-cyber' : 'text-muted-foreground'} text-mono`}>
              {isRevealed ? realData.trustLevel : "████████"}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-mono">Transactions:</span>
            <span className={`font-bold ${isRevealed ? 'text-neon-purple' : 'text-muted-foreground'} text-mono`}>
              {isRevealed ? realData.transactions.toLocaleString() : "████"}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-mono">Status:</span>
            <span className={`font-bold ${isRevealed ? 'text-neon-green' : 'text-muted-foreground'} text-mono`}>
              {isRevealed ? realData.reputation : "████████████████"}
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-card-border">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            {isRevealed ? (
              <Unlock className="w-4 h-4 text-neon-green" />
            ) : (
              <Lock className="w-4 h-4 text-cyber animate-pulse" />
            )}
            <span className="text-mono">
              {isRevealed ? "Decrypted via FHE" : "Encrypted with FHE"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReputationCard;