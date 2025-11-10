import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[calc(100vh-73px)] flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={profileImage}
                alt="Aayush Una - Data Analyst" 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
                Hello, I am Aayush                
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Driven Data Analyst & AI Enthusiast with skills in data analytics, visualization, and automation. Experienced in cloud infrastructure and AI implementation, with strong problem-solving and teamwork abilities.
              </p>
            </div>

            {/* Circular Buttons */}
            <div className="flex gap-6 flex-wrap">
              <a
                href="#resume"
                className="w-36 h-36 rounded-full bg-mustard flex items-center justify-center text-foreground font-semibold text-lg hover:scale-110 hover:shadow-2xl hover:shadow-mustard/40 transition-all duration-300"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="w-36 h-36 rounded-full bg-red flex items-center justify-center text-white font-semibold text-lg hover:scale-110 hover:shadow-2xl hover:shadow-red/40 transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="w-36 h-36 rounded-full bg-cyan flex items-center justify-center text-foreground font-semibold text-lg hover:scale-110 hover:shadow-2xl hover:shadow-cyan/40 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
