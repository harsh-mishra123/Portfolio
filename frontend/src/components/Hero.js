import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const heroRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    // Initialize Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ["Software Engineer", "Full Stack Developer", "Web3 Enthusiast", "React Developer", "Node.js Developer"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 border border-blue-400 rounded-full opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/2 w-32 h-32 border border-cyan-400 rounded-full opacity-8"></div>
      </div>

      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="opacity-0" data-aos="fade-right" data-aos-delay="200">
            <div className="text-left">
              <p className="text-cyan-400 text-lg mb-4 font-medium">Hey! It's Me</p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Harsh Mishra
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-gray-300 mb-8 h-16 flex items-center">
                <span>I am a </span>
                <span ref={typedElementRef} className="text-cyan-400 font-semibold ml-2"></span>
              </div>

              <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions and exploring the decentralized future of technology.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-6 mb-8">
                <span className="text-gray-400">Connect with me:</span>
                <a
                  href="https://github.com/harsh-mishra123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-mishra-45a162306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  CONTACT ME
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="opacity-0 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="400">
            <div className="relative">
              {/* Large Profile Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img
                  src="/profile.jpg"
                  alt="Harsh Mishra - Full Stack Developer"
                  className="w-full h-full rounded-3xl object-cover shadow-2xl"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-cyan-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-80"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;