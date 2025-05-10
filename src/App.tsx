import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, BookOpen, MapPin, Calendar, Building, Menu, X, ChevronUp, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowScrollTop(position > 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col font-sans">
      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 0.7; transform: scale(1.2) rotate(5deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(0px); }
          75% { transform: translateY(-15px) translateX(-5px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(10px) rotate(2deg); }
          50% { transform: translateY(-15px) translateX(0px) rotate(0deg); }
          75% { transform: translateY(-10px) translateX(-10px) rotate(-2deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(168, 85, 247, 0.6); }
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes animate-blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9) rotate(-5deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
        }
        
        .animate-blob {
          animation: animate-blob 15s infinite alternate;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes scrollDown {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        
        .animate-scrollDown {
          animation: scrollDown 1.5s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes slideDown {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        @keyframes rotate3d {
          0%, 100% { transform: rotate3d(1, 1, 1, 0deg); }
          50% { transform: rotate3d(1, 1, 1, 10deg); }
        }
        
        .animate-rotate3d {
          animation: rotate3d 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-5px) scaleY(0.95); }
        }
        
        .animate-wave {
          animation: wave 5s ease-in-out infinite;
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        `}
      </style>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 z-50 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Header/Navigation */}
      <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrollPosition > 50 ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-2xl tracking-tight">Portfolio</span>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                ['Home', 'hero'],
                ['About', 'about'],
                ['Experience', 'experience'],
                ['Projects', 'projects'],
                ['Education', 'education'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-indigo-600 font-medium relative group transition-colors px-2 py-1"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfWKqFThI-RUQJVpFZdSUzTJwv2tzaNGtcXIdDx6_kLyu72Sw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1"
              >
                <span>Contact Me</span>
                <ExternalLink size={16} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-indigo-100 bg-white animate-slideDown">
              <div className="flex flex-col gap-4">
                {[
                  ['Home', 'hero'],
                  ['About', 'about'],
                  ['Experience', 'experience'],
                  ['Projects', 'projects'],
                  ['Education', 'education'],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-700 hover:text-indigo-600 py-2 px-4 transition-colors rounded-md hover:bg-indigo-50 flex items-center justify-between"
                  >
                    <span>{label}</span>
                    <ChevronUp size={16} className="transform rotate-90" />
                  </button>
                ))}
                <a
                  href="hhttps://docs.google.com/forms/d/e/1FAIpQLSfWKqFThI-RUQJVpFZdSUzTJwv2tzaNGtcXIdDx6_kLyu72Sw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white my-2 py-3 rounded-xl hover:shadow-lg transition-all duration-300 text-center mx-4 flex items-center justify-center gap-1"
                >
                  <span>Contact Me</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div id="hero" className="text-white pt-24 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated wallpaper background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          {/* Animated stars/particles */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 7%)' }}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/50"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated gradient blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-2/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
          </div>
          
          {/* Animated light rays */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-b from-indigo-400/40 to-transparent transform -rotate-45 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-0 right-1/3 w-full h-full bg-gradient-to-b from-purple-500/40 to-transparent transform rotate-45 animate-pulse animation-delay-3000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 lg:gap-6">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
                <span className="block">Raghul S</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-200">
                Full Stack Developer
              </h2>
               
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-4 text-lg leading-relaxed shadow-xl border border-white/20 md:max-w-lg">
                Passionate about transforming raw data into powerful insights. Proficient in Python, data analytics, and AI model development, I excel at building machine learning models.
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 md:mb-0">
                <a 
                  href="https://linkedin.com/in/prem-kumar-2003in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={20} />
                  Connect With Me
                </a>
              </div>
            </div>
            <div className="relative mt-4 md:mt-0 md:ml-4 lg:ml-6 flex-shrink-0">
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                <img 
                  src="/portfolio/images/profile.png" 
                  alt="Raghul S"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator - repositioned for better mobile view */}
          <div className="mt-8 md:mt-0 md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1.5 h-2.5 bg-white rounded-full mt-2 animate-scrollDown"></div>
            </div>
          </div>
          
          {/* Extra padding for mobile */}
          <div className="h-8 md:hidden"></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50 rounded-tr-full opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">About Me</span>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Get to Know Me
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-indigo-100 mb-16 transform hover:scale-[1.01] transition-all duration-300">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Passionate about Data Science, I am actively improving my analytical and coding skills through continuous learning and hands-on projects. Proficient in Python, data analytics, and AI model development, I explore innovative solutions using data-driven approaches.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Currently focused on Data Science, Machine Learning, and LLM applications, I seek opportunities to apply my skills, collaborate, and grow professionally.
              </p>
            </div>
          </div>

          {/* Top Skills */}
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {['Data Science', 'Machine Learning', 'Python', 'Data Analysis', 'Artificial Intelligence'].map((skill, index) => (
              <div 
                key={skill} 
                className={`bg-gradient-to-br p-6 rounded-xl shadow-md text-center border transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center ${
                  index % 2 === 0 
                    ? 'from-indigo-50 to-indigo-100 border-indigo-200 hover:bg-indigo-100' 
                    : 'from-purple-50 to-purple-100 border-purple-200 hover:bg-purple-100'
                }`}
              >
                <p className={`font-semibold text-base md:text-lg ${index % 2 === 0 ? 'text-indigo-700' : 'text-purple-700'}`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">What I Know</span>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Technical Skills
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Languages</h3>
              <ul className="space-y-3 text-gray-600">
                {['Python', 'Java'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Libraries/Frameworks */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Libraries/Frameworks</h3>
              <ul className="space-y-3 text-gray-600">
                {['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Streamlit', 'tkinter'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Developer Tools</h3>
              <ul className="space-y-3 text-gray-600">
                {['Google Colab', 'Jupyter Notebook', 'VS Code', 'Git', 'Linux'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Other Skills</h3>
              <ul className="space-y-3 text-gray-600">
                {['Team work', 'Problem solving', 'Adaptability', 'Quick learner'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">My Journey</span>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Professional Experience
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {/* Software Developer Intern */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full opacity-70 -z-10"></div>
              
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white p-2 inline-block rounded-lg shadow-sm mb-2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">Mar 2025 - Present</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Software Developer Internship</h3>
                  <div className="flex flex-col gap-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building size={18} />
                      <a href="https://www.suryainduction.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Surya Induction Engineering</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      <span>Melpakkam, Avadi, Chennai</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="font-bold text-lg mb-4 text-indigo-700">Energy Consumption Dashboard Project</h4>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">1</span>
                      <span>Developed a real-time energy consumption dashboard that enables efficient monitoring and analysis of usage patterns.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">2</span>
                      <span>Implemented responsive design principles ensuring optimal user experience across all devices.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">3</span>
                      <span>Enhanced user engagement through interactive elements and dynamic data visualization.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Data Analyst Internship */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-br-full opacity-70 -z-10"></div>
              
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white p-2 inline-block rounded-lg shadow-sm mb-2">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg">Jan 2025 - Feb 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Data Analyst Internship</h3>
                  <div className="flex flex-col gap-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building size={18} />
                      <a href="https://menpower.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Men Power Media Network (MP TV)</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      <span>Nemili, Ranipet District</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs mt-0.5">1</span>
                      <span>Proficient in data analysis using Google Sheets and Python libraries</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs mt-0.5">2</span>
                      <span>Skilled in data visualization using Tableau and Python libraries</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs mt-0.5">3</span>
                      <span>Created a Google Maps scraper using Beautiful Soup and tkinter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* AI and ML Internship */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full opacity-70 -z-10"></div>
              
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white p-2 inline-block rounded-lg shadow-sm mb-2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">Jan 2024 - Feb 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">AI and ML Internship</h3>
                  <div className="flex flex-col gap-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building size={18} />
                      <a href="https://msme.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Ministry of Micro, Small & Medium Enterprises (MSME)</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      <span>Guindy, Chennai</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">1</span>
                      <span>Conducted data collection and exploratory data analysis (EDA) using Python libraries</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">2</span>
                      <span>Developed and validated machine learning models using Scikit-learn</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs mt-0.5">3</span>
                      <span>Created visual reports with Matplotlib and Seaborn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 -right-16 w-48 h-48 bg-purple-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-sm">Professional Work</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              Featured Projects
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Showcasing a selection of my best projects that demonstrate my skills in data science, machine learning, and AI application development.</p>
          </div>
          
          <div className="space-y-16">
            {/* Movie Recommendation System */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden shadow-inner">
                  <img 
                    src="/prem-portfolio/images/01.png"
                    alt="Movie Recommendation System"
                    className="w-full h-[350px] object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Movie Recommendation System</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl mb-5 flex-grow shadow-inner">
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      Finding the right movie to watch can be overwhelming due to the vast number of available options. This content-based movie recommendation system suggests movies based on their similarity to a given movie using machine learning techniques.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Processed movie data from TMDB using Pandas for data cleaning and preprocessing.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Used Scikit-learn's CountVectorizer to implement the Bag of Words model for feature extraction.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Built a cosine similarity matrix using Scikit-learn to find similar movies.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Developed an interactive web interface using Streamlit for real-time recommendations.</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/premkumar0607/MOVIE-RECOMMENDATION-ENGINE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transform hover:translate-y-px transition-all duration-300 self-start"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Crime Perpetrator Detection System */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden shadow-inner">
                  <img 
                    src="/prem-portfolio/images/02.png"
                    alt="Crime Perpetrator Detection System"
                    className="w-full h-[350px] object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Crime Perpetrator Detection System</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'deepface', 'retinaface', 'Streamlit', 'Numpy'].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl mb-5 flex-grow shadow-inner">
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      This AI-powered system automates suspect identification from CCTV footage and images using advanced face recognition techniques. It processes video frames and images to detect and verify faces, comparing them against a query image to find matches.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Captures and processes video frames using OpenCV for face detection and recognition.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Extracts key frames from videos and saves them for further analysis and comparison.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Uses DeepFace with RetinaFace to detect and verify faces against the query image.</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/premkumar0607/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transform hover:translate-y-px transition-all duration-300 self-start"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Real-time Hand Gesture Recognition */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden shadow-inner">
                  <img 
                    src="/prem-portfolio/images/03.png"
                    alt="Real-time Hand Gesture Recognition"
                    className="w-full h-[350px] object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Real-time Hand Gesture Recognition</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'MediaPipe', 'NumPy'].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl mb-5 flex-grow shadow-inner">
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      This real-time hand gesture recognition system allows users to control key presses using hand gestures. It leverages computer vision and machine learning techniques to track hand movements and map them to keyboard inputs.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Captured real-time video feed using OpenCV for processing hand gestures.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Implemented MediaPipe Hands to detect and track hand landmarks with high accuracy.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">Extracted key fingertip positions using NumPy to determine gesture patterns.</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/premkumar0607/Real-time-Hand-Gesture-Recognition-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transform hover:translate-y-px transition-all duration-300 self-start"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-purple-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">Academic Background</span>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12">
            {/* S.A. Engineering College */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl border border-indigo-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-24 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
                <div className="absolute -bottom-12 left-8 w-24 h-24 bg-white p-2 rounded-xl shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">B.Tech</span>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-2xl font-bold mb-2 text-indigo-600">S.A. Engineering College</h3>
                <p className="text-xl mb-4 text-gray-800">Bachelor of Technology in Artificial Intelligence and Data Science</p>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                    <Calendar size={16} className="text-indigo-600" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                    <MapPin size={16} className="text-indigo-600" />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-inner">
                  <p className="text-gray-700 font-medium">CGPA: <span className="text-indigo-600 font-bold">8.71</span> (till 7th sem)</p>
                </div>
              </div>
            </div>

            {/* Bharathidhasanar Matriculation Higher Secondary School */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl border border-purple-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-24 bg-gradient-to-r from-purple-600 to-indigo-600 relative">
                <div className="absolute -bottom-12 left-8 w-24 h-24 bg-white p-2 rounded-xl shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">HSC</span>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-2xl font-bold mb-2 text-purple-600">Bharathidhasanar Matriculation Higher Secondary School</h3>
                <p className="text-xl mb-4 text-gray-800">Higher Secondary Education (HSC & SSLC)</p>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                    <Calendar size={16} className="text-purple-600" />
                    <span>2018 - 2021</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                    <MapPin size={16} className="text-purple-600" />
                    <span>Arakkonam, Tamil Nadu</span>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-inner">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-gray-700">Class XII</p>
                      <p className="text-purple-600 font-bold text-lg">90.17%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-700">Class X</p>
                      <p className="text-purple-600 font-bold text-lg">89.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16 mt-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-200 bg-clip-text text-transparent">Let's Connect</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-8"></div>
              <p className="text-indigo-200 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:prem672003@gmail.com" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://github.com/premkumar0607" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://linkedin.com/in/prem-kumar-2003in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://instagram.com/prem.kumar.67" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://medium.com/@prem672003" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Medium"
                >
                  <BookOpen size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 mt-8">
              <div className="text-center">
                <div className="text-indigo-200 font-medium mb-4">
                  <p>© 2025 Prem Kumar. All rights reserved.</p>
                </div>
                <p className="text-indigo-300/60 text-sm">
                  Designed with passion and built with modern technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;