import React from 'react';
import { Container, Typography, Paper, Grid, Divider, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { WorkOutline, School, Code, DownloadOutlined, CheckCircleOutline } from '@mui/icons-material';

const CVPage = () => {
  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "ML/AI", items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "NLTK", "OpenCV"] },
    { category: "Web Development", items: ["React", "Node.js", "Express", "Flask", "Django"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Google Cloud", "Kubernetes"] },
  ];

  const experiences = [
    {
      title: "Senior Machine Learning Engineer",
      company: "AI Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Led the development of a computer vision system that improved product defect detection by 35%",
        "Designed and implemented a recommendation engine that increased user engagement by 28%",
        "Mentored junior engineers and conducted technical interviews",
        "Collaborated with cross-functional teams to deploy ML models to production"
      ]
    },
    {
      title: "Data Scientist",
      company: "Data Innovations LLC",
      period: "2020 - 2022",
      description: [
        "Built predictive models for customer churn analysis with 92% accuracy",
        "Developed NLP pipelines for sentiment analysis of customer feedback",
        "Created interactive dashboards using Plotly and Dash",
        "Optimized ETL processes reducing data processing time by 40%"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Tech Startup",
      period: "2019 - 2020",
      description: [
        "Assisted in the development of image recognition algorithms",
        "Performed data cleaning and preprocessing for various ML projects",
        "Implemented data visualization tools using D3.js and Matplotlib"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      focus: "Specialization in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      period: "2014 - 2018",
      focus: "Minor in Mathematics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <Container maxWidth="lg">
        <Box className="flex justify-between items-center mb-8">
          <Typography variant="h2" component="h1" className="font-bold">
            Resume / CV
          </Typography>
          
          <Button 
            variant="contained" 
            startIcon={<DownloadOutlined />}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Download PDF
          </Button>
        </Box>
        
        <Paper elevation={3} className="bg-gray-800 p-8 mb-8">
          <Typography variant="h4" component="h2" className="mb-4 font-bold text-blue-300">
            Professional Experience
          </Typography>
          
          {experiences.map((exp, index) => (
            <div key={index} className={index !== experiences.length - 1 ? "mb-8" : ""}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className="text-gray-300 font-medium">
                    {exp.period}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="h6" className="font-bold">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" className="text-blue-400 mb-2">
                    {exp.company}
                  </Typography>
                  <List dense>
                    {exp.description.map((item, i) => (
                      <ListItem key={i} className="px-0 py-1">
                        <ListItemIcon className="min-w-8">
                          <CheckCircleOutline fontSize="small" className="text-blue-500" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
              {index !== experiences.length - 1 && <Divider className="my-6 border-gray-700" />}
            </div>
          ))}
        </Paper>
        
        <Paper elevation={3} className="bg-gray-800 p-8 mb-8">
          <Typography variant="h4" component="h2" className="mb-4 font-bold text-blue-300">
            Education
          </Typography>
          
          {education.map((edu, index) => (
            <div key={index} className={index !== education.length - 1 ? "mb-6" : ""}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle1" className="text-gray-300 font-medium">
                    {edu.period}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="h6" className="font-bold">
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" className="text-blue-400 mb-1">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" className="text-gray-300">
                    {edu.focus}
                  </Typography>
                </Grid>
              </Grid>
              {index !== education.length - 1 && <Divider className="my-6 border-gray-700" />}
            </div>
          ))}
        </Paper>
        
        <Paper elevation={3} className="bg-gray-800 p-8">
          <Typography variant="h4" component="h2" className="mb-6 font-bold text-blue-300">
            Skills
          </Typography>
          
          <Grid container spacing={4}>
            {skills.map((skillGroup, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Typography variant="h6" className="mb-3 font-bold">
                  {skillGroup.category}
                </Typography>
                <List dense>
                  {skillGroup.items.map((skill, i) => (
                    <ListItem key={i} className="px-0 py-1">
                      <ListItemIcon className="min-w-8">
                        <Code fontSize="small" className="text-blue-500" />
                      </ListItemIcon>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default CVPage;