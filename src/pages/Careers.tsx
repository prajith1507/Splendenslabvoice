
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const jobPositions = [
    {
      title: "Web Developer",
      type: "Full-time",
      location: "Remote / On-site",
      description: "We are looking for a skilled Web Developer who will be responsible for developing and/or designing websites for our company. You will be working alongside a team of other developers in creating, maintaining and updating our websites.",
      requirements: [
        "Bachelor degree in computer or related field, or relevant experience",
        "Solid knowledge and experience in programming applications",
        "Proficient in HTML5, CSS3, JavaScript, jQuery, React.js, Next.js, Bootstrap, MaterialUI",
        "Dedicated team player",
        "Ability to thrive in fast-paced environment",
        "Solid ability in both written and verbal communication",
        "Knowledge of programming language and technical terminology",
        "Able to develop ideas and processes and clearly express them"
      ],
      responsibilities: [
        "Website and software application designing, building, or maintaining",
        "Using scripting or authoring languages, management tools, content creation tools, applications and digital media",
        "Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions",
        "Directing or performing Website updates",
        "Developing or validating test routines and schedules to ensure that test cases mimic external interfaces and address all browser and device types",
        "Editing, writing or designing website content, and directing team members who produce content"
      ]
    },
    {
      title: "Microservices Developer",
      type: "Full-time",
      location: "Remote / On-site",
      description: "We are looking for a qualified Microservices Developer to join our team! As a Microservices Developer, you will design and code functional programs and services. You will work both as part of the team and individually.",
      requirements: [
        "Knowledge of programming language such as Java, Spring boot, JPA/Hibernate, Maven, MySQL, AWS",
        "Great understanding of software design and programming principles",
        "Sense of ownership and pride in your performance and its impact on company's success",
        "Critical thinker and problem-solving skills",
        "Team player",
        "Good time-management skills",
        "Great interpersonal and communication skills",
        "Bachelors in computer science or relevant field",
        "Certification is a plus"
      ],
      responsibilities: [
        "Understand clients requirements",
        "Work with other IT professionals to set specifications for new sevices",
        "Design creative prototypes based on specifications",
        "Write high quality source code to program complete the requirements within deadlines",
        "Perform unit and integration testing before launch",
        "Find bugs and offer timely solutions",
        "Test existing applications, identify deficiencies and offer solutions"
      ]
    }
  ];

  const benefits = [
    {
      title: "Culture",
      description: "At Splendenslab, we're bringing meaningful change to clients' businesses by enabling our people to create tools and processes that respond to the rapid evolution of the market. We are a culture that celebrates autonomy, and inspires leadership at every level of our organization.",
      icon: "🏢"
    },
    {
      title: "Career Development",
      description: "Our people are our greatest assets. That's why we believe in developing talent at all stages of their careers. With the incredible pace of change in brands, consumers and technology, we focus on giving talent the tools to grow and evolve their skills beyond their immediate job functions.",
      icon: "📈"
    },
    {
      title: "Real Life Projects",
      description: "Students who pass our internship selection and prove their talent will get the chance to work closely together with one of our teams, having the opportunity to experience real life project workflow.",
      icon: "💼"
    },
    {
      title: "Mentorship",
      description: "We offer an individual approach to students in internship program, meaning that each of you will have a personal mentor. An experienced professional at your disposal to guide you through internship, which is crucial for gaining knowledge and new skills in an efficient way.",
      icon: "🎯"
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
                CAREERS
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-8">
                Create clever things with us!
              </p>
              <p className="text-lg text-center text-slate-300 max-w-4xl mx-auto">
                We are always eager to meet fresh talent, so check our positions
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex justify-center mt-8">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  JOIN US
                </Button>
              </div>
            </AnimatedSection>
            


          </div>
        </section>
 


        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <p className="text-center text-lg text-slate-300 max-w-4xl mx-auto">
                Let's do clever things together! Are you up for it?Let us know
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Job Positions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {jobPositions.map((job, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                  <Card className="glass-effect border-slate-700 p-8">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold text-white">{job.title}</h2>
                        <div className="flex space-x-4">
                          <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Responsibilities */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {job.title} Responsibilities:
                        </h3>
                        <ul className="space-y-3">
                          {job.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-slate-300 flex items-start">
                              <span className="text-green-400 mr-3 mt-1">✓</span>
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {job.title} Requirements:
                        </h3>
                        <ul className="space-y-3">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-slate-300 flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">✓</span>
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                What Are The Benefits?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-white/90 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <p className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-12">
                As a constantly growing company we are looking for passionate individuals who will join our team and use that 
                opportunity to develop their potential.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-center text-slate-300 max-w-6xl mx-auto mb-16">
                Splendenslab team is made of the most talented software engineers, programmers and designers who happen to be excellent teammates 
                with a tendency to make your working environment casual and stress-free. We have a cheerful office in Niš where we develop some pretty 
                useful skills, drink a lot of coffee, play table tennis, host regular team buildings, throw memorable Wednesdays and create awesome software 
                solutions on the way.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-center text-slate-300 max-w-6xl mx-auto">
                Splendenslab was designed as a delightful place to work. We value people who strive 
                for bigger and better, who put additional effort in their individual growth and 
                embrace open communication. By celebrating diversity, we appreciate all the little 
                things that make our team a unique one.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
