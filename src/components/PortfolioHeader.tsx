const PortfolioHeader = () => {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-mustard"></div>
          <span className="text-xl font-semibold text-foreground">Aayush Una</span>
        </div>
        
        <nav className="flex gap-8">
          <a 
            href="#resume" 
            className="text-foreground hover:text-mustard transition-colors duration-300 text-sm font-medium"
          >
            Resume
          </a>
          <a 
            href="#projects" 
            className="text-foreground hover:text-mustard transition-colors duration-300 text-sm font-medium"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-mustard transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;
