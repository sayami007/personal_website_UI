import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, Award, Code2 } from "lucide-react";

const skills = [
  { name: "Angular / AngularJS", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript / JavaScript", level: 95 },
  { name: "Node.js / Sails.js", level: 88 },
  { name: "Vue.js", level: 50 },
  { name: "Flutter / Mobile Dev", level: 30 },
];

const workExperience = [
  {
    year: "Feb 2019 - Present",
    role: "Senior Software Engineer",
    company: "Ghimire Group Pvt. Ltd.",
    location: "Jhamsikhel, Lalitpur",
    description: "Developing Healthcare applications using AngularJS, HTML5, CSS3, and Sails.js. Leading migration of AngularJS to Angular 13. Working with TypeScript, REST APIs, React, NextJS, VueJS, and MySQL.",
    color: "primary",
  },
  {
    year: "Jul 2017 - Feb 2018",
    role: "Android Application Developer",
    company: "3 Callistos Service Pvt. Ltd.",
    location: "Maharajgunj, Kathmandu",
    description: "Lead developer for MeroJob Mobile Application. Implemented RESTful APIs, conducted code reviews, and collaborated with UX/UI designers using Java and Kotlin.",
    color: "neon-cyan",
  },
  {
    year: "Sep 2016 - Jul 2017",
    role: "Software Developer",
    company: "Unlimited Technologies",
    location: "New Road, Kathmandu",
    description: "Developed Android applications, MVC architecture, Bootstrap websites, and UWP applications with Entity Framework Core.",
    color: "neon-violet",
  }
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <motion.span 
          className="text-sm text-primary font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            // About Me
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Get to Know Me
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 relative">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-white flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  <img src="/images/image.png" alt="Profile" className="w-full h-full object-cover absolute top-0 left-0" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="text-center sm:text-left">
                <motion.h3 
                  className="text-2xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Bibesh Manandhar
                </motion.h3>
                <motion.p 
                  className="text-primary font-mono mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Senior Software Engineer
                </motion.p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <MapPin size={14} className="text-primary" />
                    Thamel-26, Kathmandu, Nepal
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <Briefcase size={14} className="text-primary" />
                    8+ Years Experience
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <Award size={14} className="text-primary" />
                    SAFe® 6 Certified Practitioner
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.p 
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              Highly organized & dedicated developer with a positive attitude and strong self-motivation. 
              Able to handle multiple assignments under high pressure within tight deadlines. 
              Specialized in Healthcare applications, Web Development, and Mobile Application Development. 
              Experienced with Agile/Scrum methodologies and cross-functional team collaboration.
            </motion.p>

            <div>
              <motion.h4 
                className="font-semibold mb-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <Code2 size={18} className="text-primary" />
                <span className="text-primary">{"<"}</span>
                Technical Skills
                <span className="text-primary">{" />"}</span>
              </motion.h4>
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={1.1 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h4 
              className="font-semibold mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Calendar size={20} className="text-primary" />
              Work Experience
            </motion.h4>

            <div className="relative">
              <motion.div 
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {workExperience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  <motion.div 
                    className="absolute left-0 w-8 h-8 rounded-full glass flex items-center justify-center neon-border"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div 
                      className={`w-3 h-3 rounded-full bg-${item.color}`}
                      style={{ backgroundColor: `hsl(var(--${item.color}))` }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="glass rounded-xl p-6 glass-hover group-hover:neon-border transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                    <h5 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">{item.role}</h5>
                    <p className="text-sm text-secondary mt-1">{item.company}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin size={10} /> {item.location}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
