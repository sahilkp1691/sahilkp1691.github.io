import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Github, ExternalLink, Brain, MessageSquare, Eye, Gamepad } from 'lucide-react';
import restaurantAI from '../assets/Images/RestaurantAI.jpg';
import computerVision from '../assets/Images/computer_vision.jpeg';
import lunarLander from '../assets/Images/lunarlander.jpeg';
import nimo from '../assets/Images/Nimo.jpg';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "RestaurantAI",
      description: "An interactive 3D visualization of neural networks built with Three.js and TensorFlow.js.",
      image: restaurantAI,
      tags: ["Deep Learning", "JavaScript", "Three.js", "TensorFlow"],
      github: "https://github.com/sahilkp1691",
      demo: "https://demo-link.com",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Nimo-WhatsApp-AI-Agent",
      description: "AI Powered WhatsApp Agent, which does my usual tasks with just a simple message.",
      image: nimo,
      tags: ["NLP", "Python", "React", "Flask"],
      github: "https://github.com/sahilkp1691/Nimo-WhatsappAgent",
      demo: "https://demo-link.com",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Computer Vision Object Detection",
      description: "An object detection system using a custom-trained YOLOv5 model.",
      image: computerVision,
      tags: ["Computer Vision", "PyTorch", "YOLO", "Streamlit"],
      github: "https://github.com/sahilkp1691/Application-Object-Detection",
      demo: "https://demo-link.com",
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Reinforcement Learning Game Agent",
      description: "An AI agent trained with reinforcement learning on Lunar Lander Problem.",
      image: lunarLander,
      tags: ["Reinforcement Learning", "Python", "TensorFlow", "OpenAI Gym"],
      github: "https://github.com/sahilkp1691/Reinforcement-Learning-LunarLander",
      demo: "https://demo-link.com",
      icon: <Gamepad className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore my portfolio of machine learning and AI projects. Each project showcases different skills and technologies in the field of artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <motion.div 
          className="container mx-auto max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute top-4 left-4 p-2 bg-white/90 rounded-full z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-blue-600">
                      {project.icon}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span 
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;