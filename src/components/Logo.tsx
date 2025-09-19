import { Eye } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
        <div className="relative bg-card border border-card-border rounded-full p-3 mesh-pattern">
          <Eye className="w-8 h-8 text-cyber" />
        </div>
      </div>
      <span className="text-cyber text-xl font-bold">
        Aura Shield
      </span>
    </div>
  );
};

export default Logo;