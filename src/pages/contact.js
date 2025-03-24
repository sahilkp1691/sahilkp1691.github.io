import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/sahilkp1691',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/sahilkp1691/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/sahilkp1691',
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'sahilkp1691@gmail.com',
      link: 'mailto:sahilkp1691@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+44 7774 123456',
      link: 'tel:+447774123456'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Bath, United Kingdom'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-8 text-gray-900">Send me a message</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="w-full min-h-[200px] resize-none"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 p-8 bg-gray-50 rounded-xl"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Follow Me</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-50 rounded-full text-gray-600 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 