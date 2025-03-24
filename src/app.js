import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button';
// Import pages
import HomePage from './pages/homepage';
import ProjectsPage from './pages/projects';
import CVPage from './pages/cv';
import ContactPage from './pages/contactme';

const App = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'CV', path: '/cv' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Simple Header */}
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="font-mono text-lg tracking-wider text-primary hover:text-primary/80 no-underline">
              Sahil Pansare
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                >
                  <Link to={item.path} className="text-sm font-mono tracking-wider">
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;