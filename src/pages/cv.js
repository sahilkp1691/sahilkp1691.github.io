import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Brain,
  Download,
  ChevronRight,
  Network,
  Cpu,
  Database,
  GitBranch,
  Cloud,
  LineChart,
  Terminal,
  Boxes
} from 'lucide-react';

const CVPage = () => {
  const experience = [
    {
      title: "Data Scientist",
      company: "BG Automotive, UK",
      period: "Mar'25 - Present",
      description: [
        "Developing a digital clone of BGA's supply chain for enhanced forecasting and inventory management",
        "Building time series models for accurate demand forecasting and stock level optimization",
        "Implementing min-max inventory calculations to maintain optimal stock levels",
        "Leveraging data-driven insights to improve supply chain efficiency and decision-making"
      ]
    },
    {
      title: "Data Scientist",
      company: "Ernst & Young India LLP",
      period: "Feb'22 - May'23",
      description: [
        "Delivered time series price forecasting solutions achieving 96% accuracy (up from 72%) for State Government Agriculture Department",
        "Deployed Computer Vision models for MENA's largest power supplier, enhancing operational efficiency",
        "Developed an NLP chatbot reducing customer query resolution time by 40%",
        "Built an RAG system using LLaMA and Langchain for public health research retrieval",
        "Designed a real-time defect detection system using YOLOv5 for manufacturing QA",
        "Created interactive dashboards with ML-powered anomaly detection for cyber security monitoring"
      ]
    },
    {
      title: "Data Scientist",
      company: "Enerdatics- Energy Analytics Startup",
      period: "Apr'21 - Dec'21",
      description: [
        "Built renewable energy consumption models improving predictive accuracy by 20%",
        "Designed an NLP pipeline reducing data transformation time by 2x",
        "Conducted web scraping for M&A data supporting £4M worth of investments"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Bath, UK",
      period: "2023 - 2024",
      details: "Thesis: RadarGrasp - Developed an end-to-end radar-based framework using FMCW radar for human grasp classification and prediction with Temporal CNN and CNN-LSTM models"
    },
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Symbiosis Skills and Professional University, Pune",
      period: "2019 - 2022",
      details: "Winner of Smart India Hackathon 2020 – Software Edition (World's Largest Hackathon)"
    }
  ];

  const skills = [
    {
      category: "Programming",
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
      items: ["Python", "R", "SQL"]
    },
    {
      category: "ML/AI",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "LangChain"]
    },
    {
      category: "Data Visualization",
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      items: ["Tableau", "Microsoft Power BI", "Matplotlib", "Dash", "Plotly"]
    },
    {
      category: "Tools & Platforms",
      icon: <Boxes className="w-6 h-6 text-blue-600" />,
      items: ["Git", "Docker", "AWS", "OpenAI (GPT4, Whisper)", "Cursor"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Data Scientist & ML Engineer with expertise in developing innovative AI solutions
          </p>
          <Button size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </motion.div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Experience Section */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-blue-100 hover:border-blue-500 transition-colors duration-300"
              >
                <motion.div 
                  className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500"
                  whileHover={{ scale: 1.2 }}
                />
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{job.period}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 mt-1 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-600">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CVPage;