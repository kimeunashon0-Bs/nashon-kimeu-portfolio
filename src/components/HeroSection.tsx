
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const roles = [
    "Frontend Developer",
    "Data Analyst",
    "SQL Developer", 
    "Web Developer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 grid grid-cols-6 gap-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-full bg-primary/5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-full bg-primary/5 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
        </div>
        
        {/* Floating orbs/blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-purple-400 dark:bg-purple-700 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-cyan-400 dark:bg-cyan-700 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Digital particles */}
        <div className="hidden md:block absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-primary rounded-full animate-float-up opacity-70"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Digital circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            className="text-primary animate-pulse"
            style={{ animationDuration: '10s' }}
          />
          <path 
            d="M0,200 Q100,150 200,200 T400,200" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            className="text-primary animate-pulse"
            style={{ animationDuration: '15s' }}
          />
          <path 
            d="M100,0 Q150,50 100,100 T100,200 T100,300" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            className="text-primary animate-pulse"
            style={{ animationDuration: '12s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-float-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              Hi, I'm{" "}
              <span className="text-primary bg-clip-text">Nashon Kimeu</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 flex items-center">
              I'm a <span className="mx-2"><TypewriterText texts={roles} /></span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Hi! I'm Nashon, a passionate frontend developer and data analyst who thrives at the intersection of design, technology, and data insights. I specialize in building intuitive user interfaces while leveraging my expertise in SQL, Excel, and data analysis to extract meaningful insights from complex datasets. I'm always eager to learn new tools, adapt quickly to different challenges, and create solutions that are both visually appealing and data-driven. I bring flexibility, analytical thinking, and strong attention to detail to every project I work on.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg transition-all hover:shadow-lg hover:bg-primary/90"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded-lg transition-all hover:bg-primary/10"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* JARVIS-style Interface Elements */}
              <div className="absolute -inset-12 z-0">
                {/* Circular Interface */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-8 rounded-full border border-primary/10"></div>
                
                {/* Radial segments */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                      style={{ transform: `rotate(${i * 45}deg)` }}
                    ></div>
                  ))}
                </div>
                
                {/* Holographic data points */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                    style={{ 
                      top: `${20 + Math.random() * 60}%`, 
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  ></div>
                ))}
                
                {/* Digital readouts */}
                <div className="absolute top-0 left-10 text-xs text-primary/40 font-mono animate-pulse">SYSTEM.INIT</div>
                <div className="absolute bottom-5 right-5 text-xs text-primary/40 font-mono animate-pulse" style={{ animationDelay: '1s' }}>JARVIS.v2.5</div>
                <div className="absolute top-1/3 -right-4 text-xs text-primary/40 font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>ANALYZING</div>
                <div className="absolute bottom-1/3 -left-4 text-xs text-primary/40 font-mono animate-pulse" style={{ animationDelay: '1.5s' }}>STATUS: ACTIVE</div>
                
                {/* Scanning effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan"></div>
                </div>
              </div>

              {/* Profile image with layered glowing effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full blur-md bg-gradient-to-br from-blue-500/30 to-purple-600/30 animate-pulse opacity-75" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Nashon Kimeu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card shadow-lg p-3 rounded-full">
                <div className="bg-primary/20 dark:bg-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">4+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
