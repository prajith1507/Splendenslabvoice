
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
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
                GET IN TOUCH
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
                Want to discuss your product or partnership? We're always ready to help.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                CONTACT US
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <AnimatedSection animation="fade-left" delay={300}>
                <div className="space-y-8">
                  <div>
                    <p className="text-lg text-slate-300 mb-6">
                      To contact us please fill in the form on the right or simply use one of the following 
                      methods. We will get back to you as soon as possible.
                    </p>
                    <p className="text-slate-300 mb-4">
                      Also, note that this form and email are for general inquiries only. Use 
                      contact@splendenslab.com for support requests.
                    </p>
                    <p className="text-purple-400 font-semibold text-lg">
                      contact@splendenslab.com
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="glass-effect p-6 rounded-lg border border-slate-700">
                      <h3 className="text-white font-semibold mb-2">Office Address</h3>
                      <p className="text-slate-300">
                       4/197-2, R.V.C Complex<br />
                        Dasanaikanpatti<br />
                        Salem, Tamil Nadu, India<br />
                      </p>
                    </div>
                    
                    <div className="glass-effect p-6 rounded-lg border border-slate-700">
                      <h3 className="text-white font-semibold mb-2">Phone</h3>
                      <p className="text-slate-300">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="glass-effect p-6 rounded-lg border border-slate-700">
                      <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                      <p className="text-slate-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection animation="fade-right" delay={400}>
                <Card className="glass-effect border-slate-700 p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Full name
                        </label>
                        <Input 
                          placeholder="Full Name" 
                          className="bg-slate-800/50 border-slate-600 text-white focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Mobile
                        </label>
                        <Input 
                          placeholder="Mobile" 
                          className="bg-slate-800/50 border-slate-600 text-white focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        className="bg-slate-800/50 border-slate-600 text-white focus:border-purple-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Tell us about your project
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={6}
                        className="bg-slate-800/50 border-slate-600 text-white focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Submit
                    </Button>
                  </form>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
