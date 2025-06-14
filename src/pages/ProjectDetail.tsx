import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Star, Users, Calendar, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "web-applications": {
      title: "Web Applications",
      category: "Web Application",
      description: "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows.",
      fullDescription: "At Splendenslab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      detailedDescription: "Our web applications are built with cutting-edge technologies to ensure scalability, security, and performance. We've helped numerous businesses transform their digital presence with responsive, user-friendly web applications that drive engagement and growth.",
      technologies: ["React", "Node.js", "MySQL", "REST API", "TypeScript", "AWS", "Docker"],
      images: [
      "/lovable-uploads/web.png",
  "/lovable-uploads/web1.png",
  "/lovable-uploads/web2.png",
  "/lovable-uploads/web3.png"
      ],
      features: [
        "Custom web application development",
        "Responsive design for all devices",
        "Secure authentication systems",
        "API integration",
        "Performance optimization",
        "Cloud deployment"
      ],
      timeline: "3-6 months",
      client: "Various Clients",
      teamSize: "5-10 developers",
      rating: "4.8/5",
      users: "100K+ active users"
    },
    "mobile-applications": {
      title: "Mobile Applications",
      category: "Mobile Application",
      description: "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps.",
      fullDescription: "We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
      detailedDescription: "Our mobile applications are built with Flutter and React Native for cross-platform compatibility, ensuring your app works perfectly on both iOS and Android. We focus on intuitive UX, performance, and security to deliver apps that users love.",
      technologies: ["Flutter", "React Native", "Firebase", "iOS/Android", "Redux", "GraphQL"],
      images: [
        "/lovable-uploads/mobile1.png",
          "/lovable-uploads/mobile2.png",
            "/lovable-uploads/mobile3.png"
      ],
      features: [
        "Cross-platform development",
        "Offline functionality",
        "Push notifications",
        "Biometric authentication",
        "App store optimization",
        "Analytics integration"
      ],
      timeline: "4-8 months",
      client: "Various Clients",
      teamSize: "3-8 developers",
      rating: "4.7/5",
      users: "500K+ downloads"
    },
      "ui-ux-design": {
    "title": "UI/UX Design",
    "category": "Design Services",
    "description": "We craft visually engaging and user-centered designs to enhance your product’s usability and engagement.",
    "fullDescription": "From wireframes to interactive prototypes, we build interfaces that align with both brand and user goals.",
    "detailedDescription": "Our design process is rooted in research, empathy, and iteration. We use Figma, Adobe XD, and modern UI trends to design stunning yet practical user experiences for web and mobile platforms.",
    "technologies": ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
    "images": [
      "/lovable-uploads/uiux1.png",
 "/lovable-uploads/uiux.png", "/lovable-uploads/uiux2.png", "/lovable-uploads/uiux3.png"
    ],
    "features": [
      "Wireframing & Prototyping",
      "Design Systems",
      "User Research & Personas",
      "A/B Testing",
      "Accessibility Standards",
      "Responsive Design"
    ],
    "timeline": "2-4 months",
    "client": "Startup to Enterprise",
    "teamSize": "2-5 designers",
    "rating": "4.8/5",
    "users": "1M+ user interfaces designed"
  },

  "micro-services": {
    "title": "Microservices Architecture",
    "category": "Backend Services",
    "description": "Scalable and resilient backend systems using modern microservices architecture.",
    "fullDescription": "We break down complex applications into modular, independently deployable services to improve agility and scalability.",
    "detailedDescription": "Our microservices are built with Docker, Kubernetes, and Node.js or Spring Boot, ensuring secure, fast, and maintainable services with RESTful APIs or gRPC. CI/CD pipelines and monitoring ensure high uptime.",
    "technologies": ["Node.js", "Spring Boot", "Docker", "Kubernetes", "MongoDB", "RabbitMQ"],
    "images": [
      "/lovable-uploads/micro.png",
       "/lovable-uploads/micro1.png",
        "/lovable-uploads/micro2.png",
         "/lovable-uploads/micro3.png"
      
    ],
    "features": [
      "Independent service deployment",
      "CI/CD pipelines",
      "API Gateway integration",
      "Service discovery",
      "Resilience & retries",
      "Monitoring & Logging"
    ],
    "timeline": "3-6 months",
    "client": "Fintech & SaaS Companies",
    "teamSize": "4-10 engineers",
    "rating": "4.9/5",
    "users": "Used by 200+ enterprise applications"
  },

  "digital-marketing": {
    "title": "Digital Marketing",
    "category": "Marketing Services",
    "description": "We help your brand grow and reach target audiences using data-driven digital marketing strategies.",
    "fullDescription": "From SEO to paid ads, we handle every digital marketing channel with performance-focused planning.",
    "detailedDescription": "We specialize in search engine optimization, Google Ads, social media marketing, and email campaigns. Our team leverages analytics and user behavior insights to constantly refine campaigns for higher ROI.",
    "technologies": ["Google Analytics", "Ahrefs", "Meta Ads", "Google Ads", "Mailchimp", "HubSpot"],
    "images": [
      "/lovable-uploads/digital.png",
        "/lovable-uploads/digital1.png",
          "/lovable-uploads/digital2.png",
            "/lovable-uploads/digital3.png",
      
    ],
    "features": [
      "SEO Optimization",
      "Social Media Campaigns",
      "PPC Advertising",
      "Email Automation",
      "Conversion Tracking",
      "Audience Targeting"
    ],
    "timeline": "2-5 months",
    "client": "Retail & E-Commerce",
    "teamSize": "3-6 marketers",
    "rating": "4.6/5",
    "users": "10M+ ad impressions"
  },

  "testing-services": {
    "title": "Testing & QA Services",
    "category": "Quality Assurance",
    "description": "Ensure your product's reliability, performance, and usability with our complete QA and testing solutions.",
    "fullDescription": "We conduct rigorous manual and automated testing to ensure your application is bug-free and performs flawlessly.",
    "detailedDescription": "Our QA team uses Selenium, Cypress, and JMeter for functional, regression, and performance testing. We simulate real-world usage and edge cases to ensure software stability across all platforms.",
    "technologies": ["Selenium", "Cypress", "Jest", "JMeter", "Postman", "BrowserStack"],
    "images": [
      "/lovable-uploads/testing.png",
      "/lovable-uploads/testing1.png",
      "/lovable-uploads/testing2.png",
      "/lovable-uploads/testing3.png",
    
    ],
    "features": [
      "Automated testing",
      "Performance testing",
      "Cross-browser testing",
      "Security checks",
      "CI/CD integration",
      "Bug tracking and reporting"
    ],
    "timeline": "1-3 months",
    "client": "Product Companies & Startups",
    "teamSize": "2-6 QA engineers",
    "rating": "4.8/5",
    "users": "Tested on 1M+ user sessions"
  }
    // Add similar data for other projects...
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button 
            onClick={() => navigate('/portfolio')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600"
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <Button 
                variant="outline"
                onClick={() => navigate('/portfolio')}
                className="mb-8 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Badge className="bg-purple-600/80 text-white">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: {project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe className="w-4 h-4" />
                  <span>Client: {project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{project.rating}</span>
                </div>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 text-white">
                {project.title}
              </h1>
              
              <p className="text-xl text-slate-300 max-w-4xl mb-6">
                {project.fullDescription}
              </p>

              <p className="text-lg text-slate-300 max-w-5xl mb-8 leading-relaxed">
                {project.detailedDescription}
              </p>

              <div className="mb-8">
                <Badge className="text-lg px-4 py-2 bg-purple-600/80 text-white">
                  {project.users}
                </Badge>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Images Carousel */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">Project Gallery</h2>
              <div className="max-w-5xl mx-auto">
                <Carousel 
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="glass-effect border-slate-700 overflow-hidden group hover:border-purple-500">
                            <div className="relative h-64 overflow-hidden">
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100"></div>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Badge className="bg-slate-900/90 text-white">
                                  Image {index + 1}
                                </Badge>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" />
                  <CarouselNext className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" />
                </Carousel>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technologies & Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-left">
                <Card className="glass-effect border-slate-700 p-8 hover:border-purple-500">
                  <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.technologies.map((tech, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-slate-800 rounded-lg text-center text-slate-300 hover:bg-purple-600/20"
                      >
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-right">
                <Card className="glass-effect border-slate-700 p-8 hover:border-purple-500">
                  <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-500 rounded-full mr-4"></div>
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-purple-600/20"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"></div>
                        <span className="text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <Card className="glass-effect border-slate-700 p-12 text-center bg-gradient-to-br from-blue-600/5 to-purple-600/5">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
                </p>
                
                  <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600"
    onClick={() => navigate('/contact')}
  >
    Get Started Today
  </Button>
  <Button 
    size="lg" 
    variant="outline" 
    className="w-full sm:w-auto border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
    onClick={() => navigate('/portfolio')}
  >
    View More Projects
  </Button>
</div>

                
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
