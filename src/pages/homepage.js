import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-8">
      <Container maxWidth="md" className="text-center space-y-10">
        
        <Typography variant="h2" className="font-bold text-accent">
          Sahil Pansare
        </Typography>

        <Typography variant="h4" className="text-primary">
          Data Scientist & Machine Learning Engineer
        </Typography>

        <Typography variant="body1" className="text-gray-400">
          Building intelligent systems and leveraging AI to solve complex problems.
          Passionate about deep learning, computer vision, and natural language processing.
        </Typography>

        <div className="flex justify-center gap-4 mt-6">
            <Button
                component={Link}
                to="/projects"
                variant="contained"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3 transition-all duration-100 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10"
            >
                View Projects
            </Button>

            <Button
                component={Link}
                to="/cv"
                variant="outlined"
                className="border-accent text-accent hover:bg-accent hover:text-background px-6 py-3 transition-all duration-100 transform hover:scale-105 shadow-md hover:shadow-accent/10"
            >
                Resume/CV
            </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
