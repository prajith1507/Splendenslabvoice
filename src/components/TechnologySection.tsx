

import AnimatedSection from "./AnimatedSection"

const TechnologySection = () => {
  const technologies = [
    { name: "Flutter", icon: "🚀", color: "from-blue-400 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-400 to-red-600" },
    { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-yellow-600" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-400 to-purple-600" },
    { name: "Material UI", icon: "🎨", color: "from-blue-400 to-indigo-600" },
    { name: "Java", icon: "☕", color: "from-orange-400 to-red-600" },
    { name: "Spring", icon: "🌱", color: "from-green-400 to-green-600" },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection animation="fade-right">
          <h2 className="text-5xl font-bold mb-8 text-gradient">TECHNOLOGY</h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" delay={200}>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16">
            We create and deliver custom solutions of high aesthetical and engineering quality using the following
            technologies and frameworks.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-6 glass-effect rounded-xl transition-all duration-300 cursor-pointer rotate-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Inner content stays upright */}
                <div className="preserve-text text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" delay={600}>
          <button className="text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors group">
            View more about our technical expertise
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </AnimatedSection>
      </div>

      {/* Fix: rotating the card but NOT its text */}
      <style >{`
        @keyframes rotateHorizontal {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .rotate-card {
          animation: rotateHorizontal 10s linear infinite;
          transform-style: preserve-3d;
        }

        .preserve-text {
          transform: rotateY(0deg); /* Keep text from flipping */
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}

export default TechnologySection

