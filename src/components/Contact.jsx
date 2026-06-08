import { useState } from 'react'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-darker flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-2xl">📧</div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a
                  href="mailto:raveensangaran10@gmail.com"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  raveensangaran10@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-2xl">💼</div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/raveen-sangaran-69b36624a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  linkedin.com/in/raveen-sangaran
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-primary/10">
              <div className="text-2xl">🎓</div>
              <div>
                <div className="text-sm text-gray-400">University</div>
                <div className="text-white">
                  Asia Pacific University (APU)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
