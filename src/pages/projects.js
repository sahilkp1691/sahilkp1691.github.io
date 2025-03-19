import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
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
    },
    {
      id: 2,
      title: "Nimo-WhatsApp-AI-Agent",
      description: "AI Powered WhatsApp Agent, which does my usual tasks with just a simple message.",
      image: nimo,
      tags: ["NLP", "Python", "React", "Flask"],
      github: "https://github.com/sahilkp1691/Nimo-WhatsappAgent",
      demo: "https://demo-link.com",
    },
    {
      id: 3,
      title: "Computer Vision Object Detection",
      description: "A mobile-friendly object detection system using a custom-trained YOLOv5 model.",
      image: computerVision,
      tags: ["Computer Vision", "PyTorch", "YOLO", "Streamlit"],
      github: "https://github.com/sahilkp1691/Application-Object-Detection",
      demo: "https://demo-link.com",
    },
    {
      id: 4,
      title: "Reinforcement Learning Game Agent",
      description: "An AI agent trained with reinforcement learning on Lunar Lander Problem.",
      image: lunarLander,
      tags: ["Reinforcement Learning", "Python", "TensorFlow", "OpenAI Gym"],
      github: "https://github.com/sahilkp1691/Reinforcement-Learning-LunarLander",
      demo: "https://demo-link.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" className="mb-8 text-center font-bold">
          My Projects
        </Typography>
        
        <Typography variant="body1" className="mb-12 text-center text-gray-300 max-w-2xl mx-auto">
          Explore my portfolio of machine learning and AI projects. Each project showcases different skills and technologies in the field of artificial intelligence.
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} md={6}>
              <Card className="h-full flex flex-col bg-gray-800 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="h2" className="mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-300 mb-4">
                    {project.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        className="bg-blue-900 text-blue-100"
                      />
                    ))}
                  </div>
                </CardContent>
                <CardActions className="border-t border-gray-700 px-4 py-3">
                  <Button 
                    size="small" 
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    Code
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<Launch />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectsPage;