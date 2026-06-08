const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Embedded Systems & Microcontrollers",
      icon: "🔌",
      skills: [
        "ESP32, Arduino",
        "Microcontroller-based system design",
        "Sensor integration",
        "Real-time data acquisition",
        "ESP-NOW, Bluetooth Low Energy (BLE)"
      ]
    },
    {
      title: "Automation & Control Systems",
      icon: "⚙️",
      skills: [
        "Design of automated systems",
        "Motor control",
        "Closed-loop and sensor-based automation logic"
      ]
    },
    {
      title: "Artificial Intelligence & Computer Vision",
      icon: "🤖",
      skills: [
        "YOLO-based object detection",
        "Vision-based inspection systems",
        "MATLAB image processing",
        "LLMs Google API Key integration"
      ]
    },
    {
      title: "IoT & Smart Systems",
      icon: "🌐",
      skills: [
        "Systems with multiple sensors and ESP32",
        "IoT data communication between devices and cloud dashboards",
        "Real-time monitoring"
      ]
    },
    {
      title: "Simulation & Engineering Software",
      icon: "💻",
      skills: [
        "MATLAB/Simulink",
        "LTspice",
        "SolidWorks"
      ]
    },
    {
      title: "Programming Languages",
      icon: "👨‍💻",
      skills: [
        "C / Embedded C",
        "Python",
        "MATLAB scripting",
        "Basic web API integration (FastAPI)"
      ]
    },
    {
      title: "ROS & LiDAR",
      icon: "🦾",
      skills: [
        "ROS (Robot Operating System)",
        "LiDAR-based mapping",
        "Basic SLAM concepts",
        "Real-time robotic navigation"
      ]
    },
    {
      title: "CAD & CAM",
      icon: "📐",
      skills: [
        "SolidWorks for 3D modeling",
        "Mechanical design",
        "Assembly simulation"
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
