
const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              I'm Nashon Kimeu — a creative and adaptable software developer who thrives on turning 
              challenges into elegant digital solutions. I specialize in building engaging user interfaces, 
              functional web systems, and extracting meaningful insights from data through analysis and 
              database management.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in software engineering and expertise in data analysis tools like 
              SQL and Excel, I bring a unique perspective to development projects. I love working with 
              databases, creating efficient queries, and transforming raw data into actionable insights 
              that drive decision-making.
            </p>
            <p className="text-lg">
              Whether I'm building responsive frontends, designing database schemas, or analyzing complex 
              datasets, I bring curiosity, analytical thinking, and attention to detail to every project. 
              For me, development isn't just about writing code — it's about solving problems and creating 
              value through technology and data.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Frontend Development</h4>
                  <p className="text-muted-foreground">Building responsive and interactive user interfaces with modern frameworks.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Data Analysis & SQL</h4>
                  <p className="text-muted-foreground">Extracting insights from complex datasets using SQL, Excel, and data visualization tools.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V16M4 8V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Database Management</h4>
                  <p className="text-muted-foreground">Designing efficient database schemas and optimizing queries for performance.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Software Testing</h4>
                  <p className="text-muted-foreground">Ensuring quality and reliability through manual and automated testing.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
