
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-5xl font-bold text-center mb-8 text-gradient">
            Got a Project? Let's Discuss.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection animation="fade-left" delay={200}>
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
                <p className="text-purple-400 font-semibold">
                  contact@splendenslab.com
                </p>
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
  );
};

export default ContactSection;
