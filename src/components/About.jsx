const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-darker/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 shadow-xl">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-primary font-semibold">Mechatronic Engineering student</span> at 
                <span className="text-white font-semibold"> Asia Pacific University (APU)</span>, driven by a deep fascination 
                with the intersection of mechanical systems, electronics, and intelligent software.
              </p>
              
              <p>
                My expertise lies in <span className="text-secondary font-semibold">embedded systems, IoT, robotics, and artificial intelligence</span>. 
                I thrive on designing innovative engineering solutions that push the boundaries of what's possible, 
                with a strong focus on sustainability and real-world impact.
              </p>
              
              <p>
                Through hands-on projects ranging from smart farming systems to automated medical devices, 
                I've developed a comprehensive skill set that bridges hardware and software. My work with 
                <span className="text-primary font-semibold"> ESP32 microcontrollers, ROS-based robotics, and computer vision systems</span> reflects 
                my commitment to creating intelligent, connected solutions for tomorrow's challenges.
              </p>
              
              <p>
                I believe in <span className="text-white font-semibold">continuous learning and sustainable development</span>, 
                constantly exploring emerging technologies and methodologies to stay at the forefront of engineering innovation. 
                My goal is to contribute to the advancement of Industry 4.0 and smart manufacturing through creative problem-solving 
                and interdisciplinary collaboration.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">APU</div>
                  <div className="text-gray-400">University</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">12+</div>
                  <div className="text-gray-400">Technical Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-gray-400">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
