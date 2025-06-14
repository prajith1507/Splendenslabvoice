import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  name: string;
  company: string;
  initials: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jimmy Jacob',
    company: 'June IT solutions',
    initials: 'JJ',
    message:
      'We have been working with SplendenLabs Tech for a year now. With the best intention in mind for customer needs, they seamlessly adapted our workflow and were quick to collaborate with our existing devs much more like an internal team than a group of remote developers.',
  },
  {
    name: 'Priya Mehta',
    company: 'Bright Innovations',
    initials: 'PM',
    message:
      'Their team exceeded expectations in every way. The communication was top-notch and the final product was delivered ahead of schedule.',
  },
  {
    name: 'Ravi Kumar',
    company: 'CodeNest',
    initials: 'RK',
    message:
      'We found their development process to be very collaborative. They really took time to understand our goals and business logic.',
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePagination = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            TESTIMONIAL
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="max-w-4xl mx-auto glass-effect border-slate-700 p-8 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-6 text-6xl text-purple-500/30 font-serif">"</div>
            <div className="absolute bottom-4 right-6 text-6xl text-purple-500/30 font-serif rotate-180">"</div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[current].initials}
                  </span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed italic">
                  {testimonials[current].message}
                </p>

                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-purple-400 font-medium">
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePagination(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-purple-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialSection;
