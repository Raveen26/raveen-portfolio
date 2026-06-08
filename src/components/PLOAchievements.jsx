const PLOAchievements = () => {
  const plos = [
    { number: 1, score: 1.00, description: "Apply mathematics, science and engineering principles" },
    { number: 2, score: 0.67, description: "Complex engineering problem analysis" },
    { number: 3, score: 0.75, description: "Design innovative solutions" },
    { number: 4, score: 1.00, description: "Investigate using research techniques" },
    { number: 5, score: 0.75, description: "Select suitable tools and techniques" },
    { number: 6, score: 1.00, description: "Professional practice (safety, health, social, cultural, legal)" },
    { number: 7, score: 1.00, description: "Sustainable development and environmental considerations" },
    { number: 8, score: 1.00, description: "Professional and ethical responsibilities" },
    { number: 9, score: 1.00, description: "Function effectively in multi-disciplinary teams" },
    { number: 10, score: 1.00, description: "Communicate effectively on complex activities" },
    { number: 11, score: 0.67, description: "Entrepreneurship, project management, economic decision making" },
    { number: 12, score: 1.00, description: "Independent and life-long learning" }
  ]

  const getScoreColor = (score) => {
    if (score >= 0.9) return 'bg-green-500'
    if (score >= 0.75) return 'bg-blue-500'
    return 'bg-yellow-500'
  }

  const getScoreTextColor = (score) => {
    if (score >= 0.9) return 'text-green-400'
    if (score >= 0.75) return 'text-blue-400'
    return 'text-yellow-400'
  }

  return (
    <section id="plo" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">PLO Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Program Learning Outcomes Assessment</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <div className="space-y-6">
              {plos.map((plo) => (
                <div key={plo.number} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold text-lg">PLO{plo.number}</span>
                      <span className="text-gray-300 text-sm md:text-base">{plo.description}</span>
                    </div>
                    <span className={`font-bold text-lg ${getScoreTextColor(plo.score)}`}>
                      {plo.score.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${getScoreColor(plo.score)} transition-all duration-500 rounded-full group-hover:opacity-80`}
                      style={{ width: `${plo.score * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {plos.filter(p => p.score >= 0.9).length}
                  </div>
                  <div className="text-gray-400">Excellent (≥0.90)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {plos.filter(p => p.score >= 0.75 && p.score < 0.9).length}
                  </div>
                  <div className="text-gray-400">Good (0.75-0.89)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {plos.filter(p => p.score < 0.75).length}
                  </div>
                  <div className="text-gray-400">Developing (&lt;0.75)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PLOAchievements
