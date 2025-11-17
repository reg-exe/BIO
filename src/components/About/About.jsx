import React from 'react';

const About = () => {
  const titles = React.useMemo(() => [
    'Reverse Engineering Student',
    'Software Analyst',
    'Security Research Enthusiast',
    'System Explorer'
  ], []);

  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  React.useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10 gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting with fade-in animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight animate-fadeIn">
            Hi, I am
          </h1>
          
          {/* Name with gradient and glow */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Tarun Kaushik
          </h2>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <span className="text-white">I am a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#e059ff]">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-gradient-to-b from-[#8245ec] to-[#e059ff] ml-1 animate-blink"></span>
            </span>
          </h3>
          
          {/* About Me Paragraph with subtle entrance */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed animate-fadeIn backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
            I am a reverse engineering student with a strong passion for
            understanding software at its deepest levels. Skilled in analyzing
            and breaking down complex systems, I focus on identifying how
            applications work from the inside out. I specialize in studying
            software behavior, uncovering vulnerabilities, and improving
            overall system security and performance. My goal is to develop
            advanced technical expertise while building practical solutions
            through hands-on exploration and continuous learning.
          </p>
          
          {/* Enhanced Resume Button */}
          <a
            href="https://drive.google.com/file/d/1I-vsXHHQ5f2HDFokhL8IVseqmNOC-CLT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-fadeIn relative overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7, #8245ec)',
              backgroundSize: '200% 100%',
              boxShadow: '0 0 30px rgba(130, 69, 236, 0.5), 0 0 60px rgba(130, 69, 236, 0.3)',
              animationDelay: '0.8s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 0';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              DOWNLOAD CV
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </a>
        </div>
        
        {/* Right Side - Quadrilateral Profile */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Rotating ring effect - diamond shape */}
            <div className="absolute inset-0 animate-spin-slow" style={{
              background: 'conic-gradient(from 0deg, transparent, #8245ec, #e059ff, transparent)',
              filter: 'blur(25px)',
              width: 'calc(100% + 50px)',
              height: 'calc(100% + 50px)',
              left: '-25px',
              top: '-25px',
              opacity: 0.6,
              transform: 'rotate(45deg)'
            }}></div>
            
            {/* Main quadrilateral container */}
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] transition-all duration-700 cursor-pointer relative"
              style={{
                transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) rotate(45deg) scale(${isHovering ? 1.1 : 1})`,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Layered glowing borders */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 p-1 animate-pulse-slow">
                <div className="absolute inset-2 bg-gradient-to-tr from-purple-800/60 via-pink-800/60 to-purple-900/60 backdrop-blur-md"></div>
              </div>
              
              {/* Secondary glow layer */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-xl animate-pulse"></div>
              
              {/* Image container - rotated back to normal */}
              <div 
                className="relative w-full h-full overflow-hidden border-4 border-purple-400/40 shadow-2xl"
                style={{
                  transform: 'rotate(-45deg) translateZ(20px)',
                  boxShadow: isHovering 
                    ? '0 30px 60px rgba(130, 69, 236, 0.8), inset 0 0 60px rgba(130, 69, 236, 0.3)' 
                    : '0 20px 40px rgba(130, 69, 236, 0.6), inset 0 0 40px rgba(130, 69, 236, 0.2)'
                }}
              >
                <img
                  src="https://i.ibb.co.com/cSJz5CTw/logo.jpg"
                  alt="A!"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    filter: isHovering 
                      ? 'brightness(1.15) contrast(1.1) saturate(1.2)' 
                      : 'brightness(1) contrast(1.05) saturate(1.1)',
                    transform: isHovering ? 'scale(1.15)' : 'scale(1.1)'
                  }}
                />
                
                {/* Animated overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30 mix-blend-overlay animate-gradient"></div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan opacity-40"></div>
                </div>
              </div>
              
              {/* Corner accent lights */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400 animate-ping" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 animate-ping" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0%)', animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 animate-ping" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', animationDelay: '0.6s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500 animate-ping" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)', animationDelay: '0.9s' }}></div>
              
              {/* Floating particles around quadrilateral */}
              <div className="absolute -top-6 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-6 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 -left-6 w-2 h-2 bg-pink-500 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes gradient {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(2000%); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 4s ease-in-out infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;