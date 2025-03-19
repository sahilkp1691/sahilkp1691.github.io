import React from 'react';
import { Container, Typography, Paper, Grid, Divider, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { WorkOutline, School, Code, DownloadOutlined, CheckCircleOutline } from '@mui/icons-material';

const CVPage = () => {
  const skills = [
    { category: "Programming", items: ["Python", "R", "SQL"] },
    { category: "ML/AI", items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "LangChain"] },
    { category: "Data Visualization", items: ["Tableau", "Microsoft Power BI", "Matplotlib", "Dash", "Plotly"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "OpenAI (GPT4, Whisper)", "Cursor"] },
  ];

  const experiences = [
    {
      title: "Data Scientist",
      company: "BG Automotive, UK",
      period: "Mar'25 - Present",
      description: [
        "Developing a digital clone of BGA's supply chain for enhanced forecasting and inventory management.",
        "Building time series models for accurate demand forecasting and stock level optimization",
        "Implementing min-max inventory calculations to maintain optimal stock levels.",
        "Leveraging data-driven insights to improve supply chain efficiency and decision-making."
      ]
    },
    {
      title: "Data Scientist",
      company: "Ernst & Young India LLP.",
      period: "Feb'22 - May'23",
      description: [
        "Delivered time series price forecasting solutions for the State Government Agriculture Department using LSTM and ARIMA, retaining a £600,000 client project and increasing forecasting accuracy (based on MAPE) from 72% to 96%.",
        "Deployed Computer Vision models for MENA's largest power supplier, employing advanced machine learning techniques for Object Detection and Anomaly Detection, resulting in enhanced operational efficiency and cost savings.",
        "Developed an NLP chatbot for utility sector customer support using LLaMA, Flask, and Docker, reducing customer query resolution time by 40%.",
        "Built an RAG system using LLaMA, Langchain, and Chroma DB for public health research retrieval, reducing research time during crisis situations.",
        "Designed a real-time defect detection system in manufacturing using YOLOv5, increasing QA efficiency and reducing defects.",
        "Created interactive Dash/Plotly dashboards for real-time log data insights at the National Data Centre for India, improving incident resolution times. Integrated an ML model for anomaly detection, enabling the automatic flagging of potential cyber threats, enhancing security monitoring efficiency."
      ]
    },
    {
      title: "Data Scientist",
      company: "Enerdatics- Energy Analytics Startup",
      period: "Apr'21 - Dec'21",
      description: [
        "Built renewable energy consumption models, improving predictive accuracy by 20%, optimizing resource allocation for clients.",
        "Designed an NLP pipeline to classify and extract key entities from industry reports, reducing data transformation time by 2x.",
        "Conducted web scraping to compile M&A data in the renewable energy sector, producing insights that directly supported £4M worth of investments."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Bath, UK",
      period: "2023 - 2024",
      focus: "(Thesis) RadarGrasp - Developed an end-to-end radar-based framework using FMCW radar for human grasp classification and prediction with models like Temporal CNN and CNN-LSTM."
    },
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Symbiois Skills and Professional University, Pune",
      period: "2019 - 2022",
      focus: "Winner of Smart India Hackathon 2020 – Software Edition (World’s Largest Hackathon)"
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