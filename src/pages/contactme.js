import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Grid, Box, Snackbar, Alert } from '@mui/material';
import { Send, Email, Phone, LocationOn, GitHub, LinkedIn } from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send this data to a server
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" className="mb-8 text-center font-bold">
          Contact Me
        </Typography>
        
        <Typography variant="body1" className="mb-12 text-center text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out through the form below or via my contact information.
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} className="bg-gray-800 p-8 h-full">
              <Typography variant="h5" component="h2" className="mb-6 font-bold text-blue-300">
                Contact Information
              </Typography>
              
              <Box className="flex items-center mb-6">
                <Email className="text-blue-400 mr-4" />
                <div>
                  <Typography variant="body2" className="text-gray-400">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    sahil.kp1691@gmail.com
                  </Typography>
                </div>
              </Box>
              
              <Box className="flex items-center mb-6">
                <Phone className="text-blue-400 mr-4" />
                <div>
                  <Typography variant="body2" className="text-gray-400">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    +44 7741531716
                  </Typography>
                </div>
              </Box>
              
              <Box className="flex items-center mb-6">
                <LocationOn className="text-blue-400 mr-4" />
                <div>
                  <Typography variant="body2" className="text-gray-400">
                    Location
                  </Typography>
                  <Typography variant="body1">
                    London, UK
                  </Typography>
                </div>
              </Box>
              
              <Typography variant="h6" className="mt-8 mb-4 font-bold">
                Connect with me
              </Typography>
              
              <Box className="flex gap-4">
                <Button 
                  variant="contained" 
                  startIcon={<GitHub />}
                  href="https://github.com/sahilkp1691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600"
                >
                  GitHub
                </Button>
                
                <Button 
                  variant="contained" 
                  startIcon={<LinkedIn />}
                  href="https://linkedin.com/in/sahil-pansare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-600"
                >
                  LinkedIn
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Paper elevation={3} className="bg-gray-800 p-8">
              <Typography variant="h5" component="h2" className="mb-6 font-bold text-blue-300">
                Send a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      className="bg-gray-700 rounded-md"
                      InputProps={{
                        className: "text-white"
                      }}
                      InputLabelProps={{
                        className: "text-gray-300"
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      className="bg-gray-700 rounded-md"
                      InputProps={{
                        className: "text-white"
                      }}
                      InputLabelProps={{
                        className: "text-gray-300"
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-700 rounded-md"
                      InputProps={{
                        className: "text-white"
                      }}
                      InputLabelProps={{
                        className: "text-gray-300"
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      className="bg-gray-700 rounded-md"
                      InputProps={{
                        className: "text-white"
                      }}
                      InputLabelProps={{
                        className: "text-gray-300"
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large"
                      endIcon={<Send />}
                      className="bg-blue-600 hover:bg-blue-700 py-3 px-6"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactPage;