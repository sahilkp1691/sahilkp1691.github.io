import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Code, Brain, LineChart, MessageSquare } from 'lucide-react';

const HomePage = () => {
  const { scrollY } = useScroll();
  
  // Transform values for parallax and fade effects
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.7]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, 100]);
  
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Expert in developing and deploying ML models using TensorFlow, PyTorch, and modern AI frameworks like LLaMA and LangChain."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI & NLP",
      description: "Specialized in natural language processing, building conversational AI systems, and implementing advanced language models for various applications."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Proficient in object detection, image classification, and radar-based human activity recognition using deep learning models."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Time Series Analysis",
      description: "Expertise in analyzing temporal data patterns, forecasting trends, and building predictive models using advanced statistical methods and deep learning."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-90" />
        
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{
            scale: titleScale,
            opacity: titleOpacity,
            y: titleY
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Data Scientist & ML Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transforming complex data into actionable insights through advanced analytics and machine learning
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" asChild>
                <a href="/projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section with Fade-in Effect */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-600">
                I'm a data scientist specializing in machine learning, computer vision, and time series analysis. With a proven track record of delivering impactful solutions, I currently drive supply chain optimization at BG Automotive UK.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                My journey includes leading data science initiatives at Ernst & Young and Enerdatics, where I developed innovative solutions for complex business challenges. At the University of Bath, my research broke new ground in radar-based human activity recognition.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                I'm passionate about transforming data into actionable insights and building ML solutions that create real business value.
              </p>
            </div>
          </div>

          {/* Features Grid with Stagger Effect */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="data-card bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Latest Projects Section with Slide-in Effect */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest Projects</h2>
            <p className="text-xl text-gray-600">
              Explore some of my recent work in machine learning and data science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="data-card bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Supply Chain Digital Twin</h3>
              <p className="text-gray-600 mb-4">
                Developing a digital clone of BGA's supply chain for enhanced forecasting and inventory management.
              </p>
              <Button variant="ghost" asChild>
                <a href="/projects">View Project</a>
              </Button>
            </motion.div>

            <motion.div 
              className="data-card bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">RadarGrasp Framework</h3>
              <p className="text-gray-600 mb-4">
                End-to-end radar-based framework for human grasp classification using FMCW radar and deep learning.
              </p>
              <Button variant="ghost" asChild>
                <a href="/projects">View Project</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
