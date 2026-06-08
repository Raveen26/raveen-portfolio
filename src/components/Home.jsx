const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-darker via-dark to-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="/profile.png" 
                alt="Raveen Sangaran" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-dark shadow-2xl"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
              <span className="text-gradient">Raveen Sangaran</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Mechatronic Engineering Student
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-gray-400">
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30">Embedded Systems</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30">IoT</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30">Robotics</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30">Computer Vision</span>
          </div>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Home
