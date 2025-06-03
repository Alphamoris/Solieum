"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/templates/PageLayout';
import { Button } from '../components/atoms/Button';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form and show success message
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <PageLayout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(to right, var(--color-primary-purple-500), var(--color-primary-blue-500), var(--color-primary-green-500))"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We&apos;d love to hear from you. Whether you have a question about our technology, 
              ecosystem, or anything else, our team is ready to answer all your questions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-purple-500/20 via-primary-blue-500/20 to-primary-green-500/20 blur-xl"></div>
              
              <div className="relative bg-[rgba(15,12,35,0.9)] backdrop-blur-md p-8 rounded-2xl border border-[rgba(220,31,255,0.2)] shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    className="bg-primary-green-500/20 border border-primary-green-500/40 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary-green-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-[rgba(0,0,0,0.3)] border border-[rgba(220,31,255,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple-500 focus:border-transparent text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-[rgba(0,0,0,0.3)] border border-[rgba(220,31,255,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue-500 focus:border-transparent text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-[rgba(0,0,0,0.3)] border border-[rgba(220,31,255,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green-500 focus:border-transparent"
                      >
                        <option value="" className='text-white' disabled>Select a topic</option>
                        <option value="General Inquiry" className='text-white'>General Inquiry</option>
                        <option value="Technology" className='text-white'>Technology</option>
                        <option value="Partnership" className='text-white'>Partnership</option>
                        <option value="Investment" className='text-white'>Investment</option>
                        <option value="Support" className='text-white'>Support</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 bg-[rgba(0,0,0,0.3)] border border-[rgba(220,31,255,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple-500 focus:border-transparent text-white resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="gradient-tri"
                      size="lg"
                      fullWidth
                      className="relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <span className={`flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        Send Message
                      </span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Info Cards */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-purple-500 to-primary-blue-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-[rgba(15,12,35,0.9)] p-6 rounded-xl border border-[rgba(220,31,255,0.2)]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-primary-purple-500/20 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">Email Us</h4>
                      <p className="mt-1 text-gray-300">Our team is here to help</p>
                      <a href="mailto:hello@solieum.com" className="mt-2 inline-block text-primary-blue-400 hover:text-primary-blue-300 transition-colors">hello@solieum.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-[rgba(15,12,35,0.9)] p-6 rounded-xl border border-[rgba(220,31,255,0.2)]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-primary-blue-500/20 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">Live Chat</h4>
                      <p className="mt-1 text-gray-300">Chat with our support team</p>
                      <a href="#" className="mt-2 inline-block text-primary-blue-400 hover:text-primary-blue-300 transition-colors">Start a conversation</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-green-500 to-primary-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-[rgba(15,12,35,0.9)] p-6 rounded-xl border border-[rgba(220,31,255,0.2)]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-primary-green-500/20 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">Community</h4>
                      <p className="mt-1 text-gray-300">Join our Discord community</p>
                      <a href="#" className="mt-2 inline-block text-primary-green-400 hover:text-primary-green-300 transition-colors">Join Discord</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-[rgba(15,12,35,0.9)] rounded-full border border-[rgba(220,31,255,0.2)] hover:bg-primary-purple-500/30 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-[rgba(15,12,35,0.9)] rounded-full border border-[rgba(220,31,255,0.2)] hover:bg-primary-blue-500/30 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-[rgba(15,12,35,0.9)] rounded-full border border-[rgba(220,31,255,0.2)] hover:bg-primary-green-500/30 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-[rgba(15,12,35,0.9)] rounded-full border border-[rgba(220,31,255,0.2)] hover:bg-primary-purple-500/30 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 