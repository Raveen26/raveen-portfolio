const Projects = () => {
  const projects = [
    {
      title: "Smart Farming System",
      description: "Multi-sensor IoT-based smart farming system using ESP32 integration with real-time monitoring via cloud dashboard.",
      technologies: ["ESP32", "DHT11", "Soil Moisture Sensor", "pH Sensor", "Cloud Communication"],
      icon: "🌱"
    },
    {
      title: "Automated Ventilator System using Camshaft",
      description: "Automated ventilator system designed using camshaft train model for controlled mechanical ventilation.",
      technologies: ["Camshaft Mechanism", "Motor Control", "Automation Logic", "Sensor Feedback"],
      icon: "🏥"
    },
    {
      title: "Solar Powered Heart Rate Monitoring Wearable Device",
      description: "Sustainable wearable device for heart rate monitoring powered by solar energy.",
      technologies: ["MAX30102 Sensor", "Solar Power Integration", "BLE Communication", "Low-Power Design"],
      icon: "⌚"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-darker/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
