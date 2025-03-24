import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight, Code, Database, Brain, LineChart } from 'lucide-react';
import GridBackground from '../components/ui/grid-background';

const HomePage = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning & AI",
      description: "Expert in developing and deploying ML models using TensorFlow, PyTorch, and modern AI frameworks like LLaMA and LangChain."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes using Python, SQL, and cloud platforms like AWS and GCP."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Time Series Analysis",
      description: "Specialized in forecasting and time series modeling using LSTM, ARIMA, and other advanced techniques."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack ML",
      description: "End-to-end ML solutions from model development to deployment, including computer vision and NLP applications."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
        <GridBackground />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Data Scientist & ML Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforming complex data into actionable insights through advanced analytics and machine learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contactme">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              I'm a data scientist with expertise in machine learning, computer vision, and time series analysis. 
              Currently working at BG Automotive UK on supply chain optimization, I've previously led data science 
              initiatives at Ernst & Young and Enerdatics. My research at the University of Bath focused on radar-based 
              human activity recognition, and I'm passionate about developing innovative ML solutions that drive business value.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="data-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Projects</h2>
            <p className="text-xl text-muted-foreground">
              Explore some of my recent work in machine learning and data science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="data-card group"
            >
              <h3 className="text-xl font-semibold mb-2">Supply Chain Digital Twin</h3>
              <p className="text-muted-foreground mb-4">
                Developing a digital clone of BGA's supply chain for enhanced forecasting and inventory management.
              </p>
              <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                <span className="mr-2">View Project</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="data-card group"
            >
              <h3 className="text-xl font-semibold mb-2">RadarGrasp Framework</h3>
              <p className="text-muted-foreground mb-4">
                End-to-end radar-based framework for human grasp classification using FMCW radar and deep learning.
              </p>
              <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                <span className="mr-2">View Project</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 