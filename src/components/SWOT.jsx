const SWOT = () => {
  const swotData = [
    {
      title: "Strengths",
      icon: "💪",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      items: [
        "Strong technical foundation in embedded systems and IoT (PLO1, PLO7: 1.00)",
        "Excellent research and investigation skills (PLO4: 1.00)",
        "Strong professional and ethical practice (PLO6, PLO8, PLO9, PLO10: 1.00)",
        "Committed to lifelong learning and sustainable development (PLO12: 1.00)"
      ]
    },
    {
      title: "Weaknesses",
      icon: "⚠️",
      color: "from-red-500 to-rose-500",
      borderColor: "border-red-500/30",
      items: [
        "Complex engineering problem analysis needs improvement (PLO2: 0.67)",
        "Entrepreneurship and project management skills developing (PLO11: 0.67)"
      ]
    },
    {
      title: "Opportunities",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      items: [
        "Internships in robotics/IoT industry",
        "Certifications in ROS and advanced AI/ML",
        "Cross-disciplinary projects combining hardware and software",
        "Industry 4.0 and smart manufacturing growth"
      ]
    },
    {
      title: "Threats",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/30",
      items: [
        "Rapidly evolving technology requires constant upskilling",
        "Competition from specialized computer science graduates in AI roles",
        "Economic factors affecting engineering job market"
      ]
    }
  ]

  return (
    <section id="swot" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">SWOT Analysis</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Strategic Self-Assessment</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {swotData.map((section, index) => (
            <div
              key={index}
              className={`bg-darker/50 backdrop-blur-sm rounded-xl p-8 border ${section.borderColor} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{section.icon}</span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                  {section.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                    <span className={`mt-1 text-lg bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                      ▹
                    </span>
                    <span className="leading-relaxed">{item}</span>
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

export default SWOT
