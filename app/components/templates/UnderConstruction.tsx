import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { PageLayout } from './PageLayout';

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title,
  description = "This page is currently under development. Please check back soon for updates.",
}) => {
  return (
    <PageLayout>
      <div className="relative min-h-[70vh] flex items-center">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Replace Gradient components with div elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-purple-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue-500/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
        </div>
        
        <Container className="py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography as="h1" variant="h1" className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple-300 via-white to-primary-blue-300 mb-6">
                {title}
              </Typography>
              
              <div className="relative flex justify-center items-center my-10">
                <Typography as="p" variant="h3" className="absolute">
                  Coming Soon
                </Typography>
              </div>
              
              <Typography as="p" variant="lead" className="mb-10">
                {description}
              </Typography>
              
              <Button variant="gradient" size="lg" href="/">
                Return to Home
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}; 