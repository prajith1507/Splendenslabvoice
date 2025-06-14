import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "web-applications",
      title: "Web Applications",
      category: "Web Application",
      description:
        "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows. At Splendenslab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      image: "./lovable-uploads/web1.png",
      technologies: ["React", "Node.js", "MySQL", "REST API"],
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      category: "Mobile Application",
      description:
        "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
      image: "./lovable-uploads/mobile1.png",
      technologies: ["Flutter", "React Native", "Firebase", "iOS/Android"],
    },
    {
      id: "micro-services",
      title: "Micro Services",
      category: "Web Application",
      description:
        "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "./lovable-uploads/micro1.png",
      technologies: ["Docker", "Kubernetes", "Node.js", "GraphQL"],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design and Development",
      category: "Design",
      description:
        "We aspire to create simple, user-friendly by conducting comprehensive research on end-user behaviour, their needs before start designing the apps. Our best-in-class result-driven strategies works on a wide range of platforms. We deliver designs with better functionality and user experience.",
      image: "./lovable-uploads/uiux2.png",
      technologies: ["Figma", "Adobe XD", "HTML5", "CSS3"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      category: "Marketing",
      description:
        "We offer a suite of services promoting your business online to target, strategize, execute, measure, and optimize across various digital channels. Our focus is on delivering exceptional digital experience to your audience thereby offering maximum Return on Investment for your marketing budget.",
      image: "./lovable-uploads/digital1.png",
      technologies: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
    },
    {
      id: "testing-services",
      title: "Testing Services",
      category: "Quality Assurance",
      description:
        "A small glitch in performance can spell doomsday for the entire development process. Our holistic approach in software testing by implementing the best possible testing methodologies & applications ensures to deliver quality and decreased cost.",
      image: "./lovable-uploads/testing2.png",
      technologies: ["Selenium", "JMeter", "Postman", "Manual Testing"],
    },
  ];

  const categories = ["All", "Web Application", "Mobile Application", "Design", "Marketing", "Quality Assurance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleViewProject = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

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
                Our Portfolio
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform their digital presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="pb-10">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex justify-center flex-wrap gap-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`px-6 py-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-400"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
                    <div className="relative h-64 mb-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handleViewProject(project.id)}
                        className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        View Project
                      </Button>
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

export default Portfolio;
