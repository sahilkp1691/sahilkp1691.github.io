import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together on your next data science project
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">sahilkp1691@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+44 7741531716</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">London, United Kingdom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href="https://github.com/sahilkp1691" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href="https://linkedin.com/in/sahil-pansare" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href="https://twitter.com/sahilkp1691" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;