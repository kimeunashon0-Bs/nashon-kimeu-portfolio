const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              I'm Nashon Kimeu — a product and experience designer with a background in software engineering, passionate about creating simple, meaningful, and user-centered solutions. I enjoy understanding how people interact with technology and using those insights to design products that are both intuitive and impactful.
            </p>
            <p className="text-lg mb-4">
              My approach combines hands-on technical skills with empathy for real users — whether it's mapping customer journeys, refining digital interfaces, or improving how a system performs in everyday life. I love collaborating with engineers, product teams, and field users to turn real challenges into thoughtful design outcomes that improve usability, safety, and satisfaction.
            </p>
            <p className="text-lg">
              For me, great design is about more than visuals — it's about solving real problems, enhancing experiences, and creating products that truly serve their communities while remaining practical, efficient, and sustainable.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">My Design Focus</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Product & Experience Design</h4>
                  <p className="text-muted-foreground">Designing intuitive and inclusive user experiences that connect digital interfaces with real-world use. I focus on usability, accessibility, and visual clarity to make products feel effortless.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">User Research & Journey Mapping</h4>
                  <p className="text-muted-foreground">Identifying user pain points through interviews, observations, and data insights — then translating them into design opportunities that enhance everyday experiences.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Prototyping & Testing</h4>
                  <p className="text-muted-foreground">Developing and refining prototypes, wireframes, and service flows to validate ideas quickly and improve functionality based on real feedback.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Cross-Functional Collaboration</h4>
                  <p className="text-muted-foreground">Working closely with engineers, product teams, and field users to ensure every design decision supports real user needs, safety, and efficiency.</p>
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
