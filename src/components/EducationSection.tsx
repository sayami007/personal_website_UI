import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Business Administration",
    field: "Information Technology",
    institution: "School of Management - Tribhuvan University",
    year: "February 2020",
    grade: "CGPA 3.9",
    icon: GraduationCap,
    color: "primary",
  },
  {
    degree: "Bachelor of Information Management",
    field: "",
    institution: "Asian School of Management and Technology, Kathmandu",
    year: "December 2017",
    grade: "CGPA 3.81",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    degree: "Intermediate Computer Science Management",
    field: "",
    institution: "National College of Computer Studies (NCCS), Kathmandu",
    year: "August 2013",
    grade: "71.50%",
    icon: BookOpen,
    color: "neon-cyan",
  },
  {
    degree: "SLC (School Leaving Certificate)",
    field: "",
    institution: "Pragya Higher Secondary Boarding School",
    year: "May 2011",
    grade: "80.50%",
    icon: BookOpen,
    color: "neon-violet",
  },
];

const certifications = [
  {
    name: "Certified SAFe® 6 Practitioner",
    issuer: "Scaled Agile",
    date: "April 2023",
    duration: "2 Weeks",
  },
  {
    name: "Android Application Development",
    issuer: "Asian School of Management and Technology",
    date: "August 2015",
    duration: "6 Months",
  },
  {
    name: ".NET Development",
    issuer: "Asian School of Management and Technology",
    date: "July 2014",
    duration: "6 Months",
  },
];

const EducationCard = ({ edu, index }: { edu: typeof education[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = edu.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <motion.div 
        className="glass rounded-2xl p-6 neon-border h-full relative overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20`}
          style={{ backgroundColor: `hsl(var(--${edu.color}))` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className={`p-3 rounded-xl`}
              style={{ backgroundColor: `hsl(var(--${edu.color}) / 0.1)` }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Icon size={24} style={{ color: `hsl(var(--${edu.color}))` }} />
            </motion.div>
            <motion.span 
              className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-primary/10"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {edu.grade}
            </motion.span>
          </div>
          
          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {edu.degree}
          </h3>
          {edu.field && (
            <p className="text-sm text-secondary mb-2">{edu.field}</p>
          )}
          <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar size={12} className="text-primary" />
            {edu.year}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
      className="glass rounded-xl p-5 glass-hover flex items-center gap-4 group"
    >
      <motion.div 
        className="p-3 rounded-lg bg-secondary/10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Award size={24} className="text-secondary" />
      </motion.div>
      <div className="flex-1">
        <h4 className="font-semibold group-hover:text-primary transition-colors">{cert.name}</h4>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
      </div>
      <div className="text-right">
        <p className="text-xs font-mono text-primary">{cert.date}</p>
        <p className="text-xs text-muted-foreground">{cert.duration}</p>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
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
            // Education & Certifications
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Academic Background
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            My educational journey and professional certifications
          </motion.p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <Award className="text-secondary" />
            Professional Certifications
          </motion.h3>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
