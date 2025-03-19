import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import spLogo from './assets/Images/logo.jpeg';
// Import pages
import HomePage from './pages/homepage';
import ProjectsPage from './pages/projects';
import CVPage from './pages/cv';
import ContactPage from './pages/contactme';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3f8cff' },
    secondary: { main: '#00e5ff' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600, color: '#64ffda' },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 8, textTransform: 'none' } },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'CV', path: '/cv' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="p-4">
      <Box className="flex justify-between items-center border-b pb-2 mb-4">
        <Typography variant="h6" className="font-bold text-accent">Menu</Typography>
        <IconButton><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            button 
            component={Link} 
            to={item.path}
            className="rounded-lg hover:bg-accent/20 my-1"
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Box className="flex flex-col min-h-screen">
          <AppBar position="sticky" className="bg-gradient-to-r from-header to-background border-b border-gray-800">
            <Toolbar>
              <Typography 
                  component={Link} 
                  to="/" 
                  className="no-underline mr-auto"
                >
                  <img 
                    src={spLogo} 
                    alt="Logo" 
                    style={{ height: '40px', width: 'auto' }} 
                  />
              </Typography>
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box className="flex">
                  {navItems.map((item) => (
                    <Button 
                      key={item.label} 
                      component={Link} 
                      to={item.path}
                      className="text-white mx-1 hover:text-accent"
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            className="border-l-4 border-accent"
          >
            {drawer}
          </Drawer>

          <Box className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/cv" element={<CVPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;