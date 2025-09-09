import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Globe, 
  Mail, 
  Instagram,
  Youtube,
  Moon,
  Sun,
  ExternalLink,
  BookOpen,
  MessageCircle
} from 'lucide-react';

// Premium Profile Configuration
const PROFILE_CONFIG = {
  name: "Avnish singh",
  title: "Cybersecurity Student",
  bio: "Passionate about Cybersecurity and Ethical Hacking experiences with modern technologies. Always learning, always Hacking and somethimes building.",
  profileImage: "https://raw.githubusercontent.com/lazyroot-here/web-img/main/profile/profile.png",
  email: "avnishsinghch@outlook.com", // Separate email field for mailto functionality
  links: [
    {
      title: "Portfolio",
      subtitle: "Featured Work",
      url: "https://avnishsingh.tech",
      icon: Globe,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      description: "Explore my latest projects",
      type: "external"
    },
    {
      title: "Blog",
      subtitle: "Tech Articles",
      url: "https://blog.avnishsingh.tech",
      icon: BookOpen,
      gradient: "from-emerald-500 via-teal-500 to-green-600",
      description: "Read my cybersecurity insights",
      type: "external"
    },
    {
      title: "GitHub",
      subtitle: "Open Source",
      url: "https://github.com/lazyroot-here",
      icon: Github,
      gradient: "from-gray-700 via-gray-800 to-black",
      description: "Code repositories & contributions",
      type: "external"
    },
    {
      title: "LinkedIn",
      subtitle: "Professional",
      url: "https://linkedin.com/in/lazyroot_here",
      icon: Linkedin,
      gradient: "from-blue-600 via-blue-700 to-indigo-700",
      description: "Connect & network with me",
      type: "external"
    },
    {
      title: "Discord",
      subtitle: "Community",
      url: "https://discord.com/users/889887611978657832",
      icon: MessageCircle,
      gradient: "from-indigo-500 via-purple-500 to-violet-600",
      description: "Join our cybersec community",
      type: "external"
    },
    {
      title: "Email",
      subtitle: "Get in Touch",
      url: "avnishsinghch@outlook.com",
      icon: Mail,
      gradient: "from-rose-400 via-pink-500 to-red-500",
      description: "Let's discuss your project",
      type: "email"
    },
    {
      title: "Twitter",
      subtitle: "Latest Updates",
      url: "https://twitter.com/lazyroot_here",
      icon: Twitter,
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      description: "Follow for tech insights",
      type: "external"
    }
  ]
};

const FloatingOrbs = ({ isDark }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${isDark ? 'bg-purple-600/8' : 'bg-indigo-300/25'} blur-3xl animate-pulse`}></div>
      <div className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full ${isDark ? 'bg-indigo-600/6' : 'bg-purple-300/20'} blur-3xl animate-pulse animation-delay-2000`}></div>
      <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full ${isDark ? 'bg-violet-600/8' : 'bg-pink-300/25'} blur-3xl animate-pulse animation-delay-4000`}></div>
      <div className={`absolute top-1/3 right-1/3 w-48 h-48 rounded-full ${isDark ? 'bg-blue-600/5' : 'bg-blue-300/15'} blur-2xl animate-pulse animation-delay-6000`}></div>
    </div>
  );
};

const LinkCard = ({ link, isDark, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const IconComponent = link.icon;

  // Handle different link types
  const handleClick = (e) => {
    if (link.type === 'email') {
      e.preventDefault();
      const subject = encodeURIComponent(`Hello ${PROFILE_CONFIG.name}`);
      const body = encodeURIComponent(`Hi ${PROFILE_CONFIG.name},\n\nI found your profile and would like to get in touch.\n\nBest regards`);
      window.location.href = `mailto:${link.url}?subject=${subject}&body=${body}`;
    }
  };

  const getHref = () => {
    if (link.type === 'email') {
      return `mailto:${link.url}`;
    }
    return link.url;
  };

  const getTarget = () => {
    return link.type === 'email' ? '_self' : '_blank';
  };

  return (
    <a
      href={getHref()}
      target={getTarget()}
      rel={link.type === 'email' ? '' : 'noopener noreferrer'}
      className="group block w-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      onClick={handleClick}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 rounded-xl sm:rounded-2xl blur-sm scale-105`}></div>
      
      {/* Glass card */}
      <div className={`relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 transform ${
        isDark 
          ? 'bg-gray-800/80 backdrop-blur-xl border-gray-600/50 hover:bg-gray-700/90 hover:border-gray-500/60 active:bg-gray-700/95 shadow-xl shadow-black/30' 
          : 'bg-white/90 backdrop-blur-xl border-gray-200/60 hover:bg-white/95 hover:border-gray-300/70 active:bg-white shadow-xl shadow-gray-900/10'
      } ${
        isHovered || isTouched ? 'scale-[1.02] shadow-2xl shadow-black/20' : 'shadow-lg shadow-gray-900/10'
      }`}>
        
        {/* Shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-1000 rounded-xl sm:rounded-2xl`}></div>
        
        <div className="relative flex items-center space-x-3 sm:space-x-4 md:space-x-5">
          {/* Icon container with gradient background */}
          <div className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 group-active:scale-105 transition-all duration-300 shadow-lg`}>
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
            {/* Icon glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-50 group-active:opacity-50 blur-xl transition-all duration-300 rounded-xl sm:rounded-2xl`}></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
              <h3 className={`font-bold text-lg sm:text-xl ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${link.gradient} group-hover:bg-clip-text transition-all duration-300 truncate`}>
                {link.title}
              </h3>
              <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full flex-shrink-0 ${isDark ? 'bg-white/10 text-white/70' : 'bg-black/10 text-black/70'} group-hover:scale-105 group-active:scale-105 transition-transform duration-200`}>
                {link.subtitle}
              </span>
              {link.type !== 'email' && (
                <ExternalLink className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-white/50' : 'text-black/50'} opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-200 flex-shrink-0`} />
              )}
            </div>
            <p className={`text-sm sm:text-base ${isDark ? 'text-white/70' : 'text-black/70'} group-hover:text-white group-active:text-white transition-colors duration-200 leading-tight sm:leading-relaxed`}>
              {link.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-50 ${
        isDark 
          ? 'bg-white/10 backdrop-blur-xl text-yellow-400 border border-white/20 hover:bg-white/20 active:bg-white/30' 
          : 'bg-black/10 backdrop-blur-xl text-gray-700 border border-black/20 hover:bg-black/20 active:bg-black/30'
      }`}
      aria-label="Toggle theme"
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      <div className="relative">
        {isDark ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
        <div className="absolute inset-0 blur-lg opacity-50">
          {isDark ? <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />}
        </div>
      </div>
    </button>
  );
};

const ProfileSection = ({ isDark, isLoaded }) => {
  return (
    <div className={`text-center mb-12 sm:mb-16 ${isLoaded ? 'animate-heroFade' : 'opacity-0'}`}>
      {/* Profile Image with Enhanced Premium Effects */}
      <div className="relative inline-block mb-6 sm:mb-8 group cursor-pointer">
        <div className="relative">
          {/* Main profile image */}
          <img
            src={PROFILE_CONFIG.profileImage}
            alt={PROFILE_CONFIG.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl object-cover shadow-2xl border-4 border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative z-10 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          />
          
          {/* Professional gradient border */}
          <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-1 -z-10 group-hover:scale-105 transition-all duration-700">
            <div className={`w-full h-full rounded-2xl sm:rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
          </div>
        </div>
        
        {/* Professional glow effects */}
        <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-700/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"></div>
        <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-1200 delay-200"></div>
      </div>
      
      {/* Name with gradient text */}
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x px-4`}>
        {PROFILE_CONFIG.name}
      </h1>
      
      {/* Title with shine effect */}
      <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 ${isDark ? 'text-white/90' : 'text-gray-800'} tracking-wide px-4`}>
        {PROFILE_CONFIG.title}
      </h2>
      
      {/* Bio with glass morphism */}
      <div className={`relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl max-w-xs sm:max-w-sm md:max-w-md mx-auto ${
        isDark 
          ? 'bg-gray-800/70 backdrop-blur-xl border border-gray-600/50 shadow-xl shadow-black/30' 
          : 'bg-white/85 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-900/10'
      }`}>
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
          {PROFILE_CONFIG.bio}
        </p>
      </div>
    </div>
  );
};

export default function PremiumLinkInBio() {
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen relative transition-all duration-1000 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-purple-950/30 to-gray-950' 
        : 'bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/30'
    }`}>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-heroFade {
          animation: heroFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>

      {/* Floating Background Orbs */}
      <FloatingOrbs isDark={isDark} />
      
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Premium Profile Section */}
        <ProfileSection isDark={isDark} isLoaded={isLoaded} />

        {/* Premium Links Grid */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {PROFILE_CONFIG.links.map((link, index) => (
            <LinkCard
              key={link.title}
              link={link}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Premium Footer */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12">
          <div className={`inline-block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl mx-4 ${
            isDark 
              ? 'bg-gray-800/70 backdrop-blur-xl border border-gray-600/50 shadow-xl shadow-black/30' 
              : 'bg-white/85 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-900/10'
          }`}>
            <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
              Crafted with passion & precision
            </p>
            <div className="flex items-center justify-center space-x-2 flex-wrap">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse flex-shrink-0"></div>
              <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'} text-center`}>
                React • Tailwind CSS • Premium Design
              </p>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
