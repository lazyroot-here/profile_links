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
  ExternalLink
} from 'lucide-react';

// Premium Profile Configuration
const PROFILE_CONFIG = {
  name: "Avnish singh",
  title: "Cybersecurity Student",
  bio: "Passionate about Cybersecurity and Ethical Hacking experiences with modern technologies. Always learning, always Hacking and somethimes building.",
  profileImage: "https://raw.githubusercontent.com/lazyroot-here/web-img/main/profile/profile.png",
  links: [
    {
      title: "Portfolio",
      subtitle: "Featured Work",
      url: "https:avnishsingh.tech",
      icon: Globe,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      description: "Explore my latest projects"
    },
    {
      title: "GitHub",
      subtitle: "Open Source",
      url: "https://github.com/lazyroot-here",
      icon: Github,
      gradient: "from-gray-700 via-gray-800 to-black",
      description: "Code repositories & contributions"
    },
    {
      title: "LinkedIn",
      subtitle: "Professional",
      url: "https://linkedin.com/in/lazyroot_here",
      icon: Linkedin,
      gradient: "from-blue-600 via-blue-700 to-indigo-700",
      description: "Connect & network with me"
    },
    {
      title: "Email",
      subtitle: "Get in Touch",
      url: "avnishsinghch@outlook.com",
      icon: Mail,
      gradient: "from-rose-400 via-pink-500 to-red-500",
      description: "Let's discuss your project"
    },
    {
      title: "Twitter",
      subtitle: "Latest Updates",
      url: "https://twitter.com/lazyroot_here",
      icon: Twitter,
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      description: "Follow for tech insights"
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
  const IconComponent = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm scale-105`}></div>
      
      {/* Glass card */}
      <div className={`relative p-6 rounded-2xl border transition-all duration-500 transform ${
        isDark 
          ? 'bg-gray-800/80 backdrop-blur-xl border-gray-600/50 hover:bg-gray-700/90 hover:border-gray-500/60 shadow-xl shadow-black/30' 
          : 'bg-white/90 backdrop-blur-xl border-gray-200/60 hover:bg-white/95 hover:border-gray-300/70 shadow-xl shadow-gray-900/10'
      } ${
        isHovered ? 'scale-[1.02] shadow-2xl shadow-black/20' : 'shadow-lg shadow-gray-900/10'
      }`}>
        
        {/* Shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl`}></div>
        
        <div className="relative flex items-center space-x-5">
          {/* Icon container with gradient background */}
          <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
            {/* Icon glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300 rounded-2xl`}></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${link.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                {link.title}
              </h3>
              <span className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white/70' : 'bg-black/10 text-black/70'} group-hover:scale-105 transition-transform duration-200`}>
                {link.subtitle}
              </span>
              <ExternalLink className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-black/50'} opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200`} />
            </div>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'} group-hover:text-white transition-colors duration-200`}>
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
      className={`fixed top-8 right-8 p-4 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 z-50 ${
        isDark 
          ? 'bg-white/10 backdrop-blur-xl text-yellow-400 border border-white/20 hover:bg-white/20' 
          : 'bg-black/10 backdrop-blur-xl text-gray-700 border border-black/20 hover:bg-black/20'
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        <div className="absolute inset-0 blur-lg opacity-50">
          {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </div>
      </div>
    </button>
  );
};

const ProfileSection = ({ isDark, isLoaded }) => {
  return (
    <div className={`text-center mb-16 ${isLoaded ? 'animate-heroFade' : 'opacity-0'}`}>
      {/* Profile Image with Enhanced Premium Effects */}
      <div className="relative inline-block mb-8 group cursor-pointer">
        <div className="relative">
          {/* Main profile image */}
          <img
            src={PROFILE_CONFIG.profileImage}
            alt={PROFILE_CONFIG.name}
            className="w-40 h-40 rounded-3xl object-cover shadow-2xl border-4 border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative z-10 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          />
          
          {/* Professional gradient border */}
          <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-1 -z-10 group-hover:scale-105 transition-all duration-700">
            <div className={`w-full h-full rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
          </div>
        </div>
        
        {/* Professional glow effects */}
        <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-700/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 w-40 h-40 rounded-3xl border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"></div>
        <div className="absolute inset-0 w-40 h-40 rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-1200 delay-200"></div>
      </div>
      
      {/* Name with gradient text */}
      <h1 className={`text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x`}>
        {PROFILE_CONFIG.name}
      </h1>
      
      {/* Title with shine effect */}
      <h2 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white/90' : 'text-gray-800'} tracking-wide`}>
        {PROFILE_CONFIG.title}
      </h2>
      
      {/* Bio with glass morphism */}
      <div className={`relative p-6 rounded-2xl max-w-md mx-auto ${
        isDark 
          ? 'bg-gray-800/70 backdrop-blur-xl border border-gray-600/50 shadow-xl shadow-black/30' 
          : 'bg-white/85 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-900/10'
      }`}>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
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
      
      <div className="relative z-10 container mx-auto px-6 py-16 max-w-2xl">
        {/* Premium Profile Section */}
        <ProfileSection isDark={isDark} isLoaded={isLoaded} />

        {/* Premium Links Grid */}
        <div className="space-y-6">
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
        <div className="text-center mt-20 pt-12">
          <div className={`inline-block p-6 rounded-2xl ${
            isDark 
              ? 'bg-gray-800/70 backdrop-blur-xl border border-gray-600/50 shadow-xl shadow-black/30' 
              : 'bg-white/85 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-900/10'
          }`}>
            <p className={`text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
              Crafted with passion & precision
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse"></div>
              <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                React • Tailwind CSS • Premium Design
              </p>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
