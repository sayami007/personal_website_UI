import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  GitBranch,
  Settings,
  Layers,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: ["Angular", "AngularJS", "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: ["Node.js", "Sails.js", "Express.js", "REST APIs", ".NET", "Entity Framework Core", "FastAPI"],
  },
  {
    title: "Database",
    icon: Database,
    color: "neon-cyan",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "neon-violet",
    skills: ["Android (Java/Kotlin)", "Flutter", "Xamarin.Forms", "React Native", "UWP"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "neon-pink",
    skills: ["Git", "GitBash", "SourceTree", "Docker", "CI/CD", "Agile/Scrum"],
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "neon-blue",
    skills: ["MVC", "RESTful APIs", "Microservices", "Component-Based", "SAFe Framework"],
  },
];

const technologies = [
  { name: "Angular", icon: "🅰️" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Flutter", icon: "🐦" },
  { name: "MySQL", icon: "🐬" },
  { name: "Git", icon: "📚" },
  { name: "Android", icon: "🤖" },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl p-6 neon-border glass-hover group relative overflow-hidden"
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--${category.color}) / 0.2), transparent)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className={`p-3 rounded-xl bg-${category.color}/10`}
            style={{ backgroundColor: `hsl(var(--${category.color}) / 0.1)` }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <category.icon size={24} style={{ color: `hsl(var(--${category.color}))` }} />
          </motion.div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div 
        className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 0, -50],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, 0, 50],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            // Skills & Tools
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Scrolling Tech Icons */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -400] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-6 py-3 glass rounded-full whitespace-nowrap"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "5", label: "Companies Worked" },
            { value: "3", label: "Certifications" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 glass rounded-2xl neon-border group"
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
