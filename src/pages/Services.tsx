
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows. At Splendenslab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      image: "./lovable-uploads/web.png",
      features: ["Custom Web Development", "Progressive Web Apps", "E-commerce Solutions", "API Development"]
    },
    {
      title: "Mobile Applications", 
      description: "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
      image: "./lovable-uploads/mobile1.png",
      features: ["iOS App Development", "Android App Development", "Cross-platform Development", "App Store Optimization"]
    },
    {
      title: "UI/UX Design and Development",
      description: "We aspire to create simple, user-friendly by conducting comprehensive research on end-user behaviour, their needs before start designing the apps. Our best-in-class result-driven strategies works on a wide range of platforms.",
      image: "./lovable-uploads/uiux.png",
      features: ["User Experience Design", "User Interface Design", "Prototyping", "Design Systems"]
    },
    {
      title: "Digital Marketing",
      description: "We offer a suite of services promoting your business online to target, strategize, execute, measure, and optimize across various digital channels. Our focus is on delivering exceptional digital experience to your audience.",
      image: "./lovable-uploads/digital.png",
      features: ["Search Engine Optimization", "Social Media Marketing", "Content Marketing", "Pay-Per-Click Advertising"]
    },
    {
      title: "Micro services",
      description: "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "./lovable-uploads/micro.png",
      features: ["Microservices Architecture", "API Development", "Cloud Migration", "System Integration"]
    },
    {
      title: "Testing Services",
      description: "A small glitch in performance can spell doomsday for the entire development process. Our holistic approach in software testing by implementing the best possible testing methodologies & applications ensures to deliver quality and decreased cost.",
      image: "./lovable-uploads/testing.png",
      features: ["Manual Testing", "Automation Testing", "Performance Testing", "Security Testing"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h1 className="text-6xl font-bold text-center mb-8 text-gradient">
                Our Services
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
                We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden h-full">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <div className="absolute inset-0  z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-slate-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
