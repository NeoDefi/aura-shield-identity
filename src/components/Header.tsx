import Logo from "./Logo";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <header className="border-b border-card-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/reputation" className="text-muted-foreground hover:text-cyber transition-colors">
              Reputation
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-cyber transition-colors">
              Privacy
            </a>
            <a href="/security" className="text-muted-foreground hover:text-cyber transition-colors">
              Security
            </a>
          </nav>
          
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;