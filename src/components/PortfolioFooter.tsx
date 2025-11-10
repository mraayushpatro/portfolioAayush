import { Linkedin } from "lucide-react";

const PortfolioFooter = () => {
  return (
    <footer className="w-full border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 993-862-2300</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:mraayushpatro@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              mraayushpatro@gmail.com
            </a>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Follow Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/aayush-una-38b503272/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-mustard transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © By Aayush Una. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
