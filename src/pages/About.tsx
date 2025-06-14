
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient">
                WE ARE SPLENDENS
              </h1>
              <div className="overflow-hidden h-16 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white animate-slide-down">
                  Design | Development
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 text-justify">
                <p>
                  <span className="text-purple-400 font-semibold">Mobile & Web applications</span> development company that transforms your vision into reality through innovative digital solutions.
                </p>
                <p>
                  We <span className="text-purple-400 font-semibold">CARE</span> for your success and are committed to delivering exceptional results that exceed your expectations.
                </p>
                <p>
                  We make your hard work behind simple Web & Mobile App Solutions, ensuring that complex problems are solved with elegant and user-friendly interfaces.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHO WE ARE?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
                    alt="Team collaboration"
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={400}>
                <div className="text-justify">
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    We "Splendens" are an Agile/DevOps software development company providing comprehensive WEB & MOBILE solutions of any complexity for B2B & B2C use cases. Our expertise spans across various industries and technologies.
                  </p>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    As a company, we have more than 15 years of experience in technology services, building a strong foundation of trust and expertise in the digital landscape.
                  </p>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Our experts design, develop and deliver scalable systems with industry best practices, ensuring optimal user experience and performance across all platforms.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What's Our Secret Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHAT'S OUR SECRET?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-16">
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="text-justify">
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    Have the peace of mind that you are working with one of the best bespoke web and mobile application development companies in the industry.
                  </p>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    There are really two things that make "Splendenslab" special: <span className="text-white font-semibold">Our Process</span> and <span className="text-white font-semibold">Our Team</span>. These core elements drive our success and enable us to deliver exceptional results consistently.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={400}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80" 
                    alt="Team working on strategy"
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Our Process */}
              <AnimatedSection animation="fade-left" delay={600}>
                <div className="text-center glass-effect p-8 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                    <div className="text-6xl">🔄</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gradient">
                    OUR PROCESS
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed text-justify">
                    It is our playbook for client success and the infrastructure that allows our team to create innovative solutions that drive measurable results for our clients. Our systematic approach ensures consistent quality and timely delivery across all projects.
                  </p>
                </div>
              </AnimatedSection>

              {/* Our People */}
              <AnimatedSection animation="fade-right" delay={800}>
                <div className="text-center glass-effect p-8 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                    <div className="text-6xl">👥</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gradient">
                    OUR PEOPLE
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed text-justify">
                    They came from unicorn startups, not agencies. Instead of obsessing over awards, they've focused on satisfying customers and users. We work with organizations of all sizes, from startups to global brands, bringing diverse experience and fresh perspectives.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What Drives Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHAT DRIVES US?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Honesty */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="text-center glass-effect p-6 rounded-lg h-full">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">🤝</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Honesty</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    We love our job, and we know one thing: honesty and hard work is the only thing which will keep us in business and maintain the trust our clients place in us every day.
                  </p>
                </div>
              </AnimatedSection>

              {/* Experience */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="text-center glass-effect p-6 rounded-lg h-full">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">📈</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Experience</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    Challenging jobs have always driven us, helping the team experience the most complex outputs and enabling our professionals to perform at any level with confidence and expertise.
                  </p>
                </div>
              </AnimatedSection>

              {/* Excellence */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="text-center glass-effect p-6 rounded-lg h-full">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">🎯</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    Our mission is to deliver results that exceed client expectations at competitive rates, while maintaining quality that surpasses market standards and industry benchmarks.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                OUR CLIENT CHOOSE US BECAUSE WE EXCEL AT
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Clear Communication */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Clear Communication</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    Here at Splendenslab, we communicate with our clients in a clear and timely manner. We believe that communication is the key to success and we make sure that our clients are always in the loop about project progress and updates.
                  </p>
                </div>
              </AnimatedSection>

              {/* Efficient Project Management */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Efficient Project Management</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    We follow agile methodologies and use the latest project management tools to ensure that our projects are delivered on time and within budget, maintaining high quality standards throughout.
                  </p>
                </div>
              </AnimatedSection>

              {/* Consistent Delivery */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Consistent Delivery</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    For optimal output, we follow a systematic approach to deliver consistent results that meet our clients' expectations and requirements, ensuring reliability in every project phase.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Scaling on Demand */}
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Scaling on Demand</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    We believe our clients should have as few worries as possible. That's why when conditions change and you need to increase the size of your team, we add as many people as needed to finish everything on time. We gather the best multi-skilled specialists for you, ensuring seamless integration and maintained quality.
                  </p>
                </div>
              </AnimatedSection>

              {/* Fast Onboarding */}
              <AnimatedSection animation="fade-right" delay={400}>
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Fast Onboarding</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    Our customers are from all over the globe, so we know how to establish and streamline communication and collaboration. All our specialists are fluent in English and continue to improve their language skills daily. Our goal is to make differences in time, culture and location imperceptible.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="mt-16 text-center">
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="glass-effect p-6 rounded-lg max-w-4xl mx-auto">
                  <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Decision Based on Relevant Data</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    We believe in making informed decisions based on data and analytics. Our team uses the latest tools and technologies to gather and analyze data to make strategic decisions that drive results. This data-driven approach ensures that every decision contributes to project success and client satisfaction.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
