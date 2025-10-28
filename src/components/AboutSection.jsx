import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Crafting the Web with Purpose
            </h3>
            <p className="text-muted-foreground">
              I value clean design, solid architecture, and consistent
              performance. I aim to build products that are not only visually
              appealing but also fast, reliable, and easy to maintain.
            </p>
            <p className="text-muted-foreground">
              I have experience developing full-stack projects using
              <b>
                {" "}
                React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS,{" "}
              </b>
              and I’ve also completed a frontend development internship where I
              focused on building responsive, user-centered interfaces. I enjoy
              writing clean, maintainable code and continuously improving my
              skills to deliver scalable, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/NourCv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primart transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and we applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    User-Centered Design
                  </h4>
                  <p className="text-muted-foreground">
                    Building intuitive, responsive interfaces that prioritize
                    usability and create seamless experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Execution</h4>
                  <p className="text-muted-foreground">
                    Delivering complete, production-ready applications through
                    clear planning, consistency, and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
