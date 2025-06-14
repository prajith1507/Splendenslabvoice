import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-500 rounded-full animate-bounce-slow opacity-60" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-500 rounded-full animate-float opacity-60" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection animation="fade-up" delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">MOBILE AND WEB</span>
            <br />
            <span className="text-white">APPLICATIONS</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            DESIGN & DEVELOPMENT
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Our experts design, develop and deliver scalable web based applications with the industry best practices for the 
            best user experience and performance. We primarily focus on device-agnostic solutions that work on any platform 
            guaranteeing an unforgettable user experience. We use platforms like Flutter, React Native, Swift, Kotlin, Android, 
            React, Angular and Spring boot microservices.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 glow-effect">
              Explore our services
              <span className="ml-2">→</span>
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default HeroSection;
