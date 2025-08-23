import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Code, Database, Server, PenTool as Tool, Calendar, Building2, ChevronRight } from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Nest.js', 'Express.js', 'Microservices'],
    databases: ['PostgreSQL', 'MSSQL', 'MongoDB'],
    tools: ['Git', 'VSCode', 'Jira', 'Docker', 'Kafka', 'OpenShift', 'Vault', 'AquaSec', 'MobaXterm', 'Swagger', 'Postman']
  };

  const experiences = [
    {
      company: 'Jio Platforms Limited',
      position: 'Software Engineer',
      duration: 'April 2024 - Present',
      location: 'Bangalore, India',
      domain: 'IoT & Smart Metering',
      highlights: [
        'Developing IoT solutions for smart metering systems',
        'Working with real-time data processing and analytics',
        'Building scalable backend services with Node.js and Nest.js',
        'Implementing secure data management solutions'
      ]
    },
    {
      company: 'Mphasis',
      position: 'Software Engineer',
      duration: 'October 2021 - April 2024',
      location: 'Bangalore, India',
      domain: 'Banking & Financial Services',
      highlights: [
        'Developed banking applications using React.js and Node.js',
        'Worked on secure financial transaction processing systems',
        'Implemented database solutions with PostgreSQL and MSSQL',
        'Collaborated on enterprise-level financial software solutions'
      ]
    }
  ];

  const projects = [
    {
      title: 'Smart Metering Analytics Dashboard',
      description: 'IoT-based real-time analytics platform for smart meters with data visualization and monitoring capabilities.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Kafka'],
      features: ['Real-time data processing', 'Interactive dashboards', 'Alert system', 'Data export functionality']
    },
    {
      title: 'Banking Transaction System',
      description: 'Secure financial transaction processing system with advanced security features and audit trails.',
      tech: ['TypeScript', 'Nest.js', 'PostgreSQL', 'Docker'],
      features: ['Secure transactions', 'Audit logging', 'Role-based access', 'Compliance reporting']
    },
    {
      title: 'Enterprise API Gateway',
      description: 'Microservices architecture with API gateway for managing banking and IoT service communications.',
      tech: ['Express.js', 'Docker', 'Kubernetes', 'Vault'],
      features: ['Load balancing', 'Authentication', 'Rate limiting', 'Service discovery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Santanu Mohanty
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Software
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Passionate full-stack developer with 4+ years of experience in building scalable applications for 
                <span className="font-semibold text-blue-600"> Banking</span> and 
                <span className="font-semibold text-blue-600"> IoT</span> domains.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  Get In Touch <ChevronRight size={18} />
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-1000 delay-300">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Code size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">MERN</h3>
                    <p className="text-slate-600">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Journey</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    As a dedicated Software Engineer with over 4 years of hands-on experience, I specialize in creating robust, 
                    scalable applications that drive business success. My expertise spans across the full development stack, 
                    with particular strength in modern web technologies.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Currently at <span className="font-semibold text-blue-600">Jio Platforms Limited</span>, I'm working on 
                    cutting-edge IoT solutions and smart metering systems. Previously at <span className="font-semibold text-blue-600">Mphasis</span>, 
                    I contributed to enterprise banking applications, ensuring security, reliability, and performance.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    I'm passionate about clean code, innovative solutions, and staying updated with the latest technology trends. 
                    Whether it's building complex backend systems or crafting intuitive user interfaces, I deliver quality solutions 
                    that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-blue-600" size={24} />
                    <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                  </div>
                  <p className="text-slate-600">Bangalore, India</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-blue-600" size={24} />
                    <h3 className="text-lg font-semibold text-slate-800">Experience</h3>
                  </div>
                  <p className="text-slate-600">4+ Years in Software Development</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="text-blue-600" size={24} />
                    <h3 className="text-lg font-semibold text-slate-800">Domains</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">Banking & Finance</div>
                    <div className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-lg text-sm font-medium">IoT & Smart Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
              <p className="text-xl text-slate-600 mt-6">Technologies I work with to bring ideas to life</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Server className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Backend</h3>
                </div>
                <div className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Databases</h3>
                </div>
                <div className="space-y-2">
                  {skills.databases.map((skill, index) => (
                    <div key={index} className="bg-purple-50 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Tool className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Tools & DevOps</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.slice(0, 5).map((skill, index) => (
                    <div key={index} className="bg-orange-50 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                  <div className="text-xs text-slate-500 pt-2">
                    +{skills.tools.length - 5} more tools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
              <p className="text-xl text-slate-600 mt-6">My professional journey across leading technology companies</p>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900">{exp.position}</h3>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {index === 0 ? 'Current' : 'Previous'}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                          Domain: {exp.domain}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <ChevronRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Building2 size={48} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
              <p className="text-xl text-slate-600 mt-6">Showcasing solutions built for real-world challenges</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Code size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <ChevronRight size={12} className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium flex items-center justify-center gap-2">
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
              <div className="w-24 h-1 bg-white/30 mx-auto"></div>
              <p className="text-xl text-blue-100 mt-6">Ready to bring your next project to life? Let's connect!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Email</p>
                      <a href="mailto:santanumohanty1998@gmail.com" className="text-white text-lg font-semibold hover:text-blue-200 transition-colors">
                        santanumohanty1998@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Phone</p>
                      <a href="tel:+916371638690" className="text-white text-lg font-semibold hover:text-blue-200 transition-colors">
                        +91 6371638690
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Location</p>
                      <p className="text-white text-lg font-semibold">Bangalore, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-blue-100 mb-4">Connect with me:</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/santanu-mohanty/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Linkedin className="text-white" size={24} />
                    </a>
                    <a href="https://github.com/SantanuMohanty95" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Github className="text-white" size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors">
                      <option value="" className="text-slate-800">Select project type</option>
                      <option value="web-app" className="text-slate-800">Web Application</option>
                      <option value="mobile-app" className="text-slate-800">Mobile Application</option>
                      <option value="backend" className="text-slate-800">Backend Development</option>
                      <option value="consulting" className="text-slate-800">Technical Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Santanu Mohanty
              </h3>
              <p className="text-slate-400">Software Engineer & Full-Stack Developer</p>
            </div>
            <div className="text-slate-400">
              <p>&copy; 2024 Santanu Mohanty. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-on-scroll {
          transition: all 0.8s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;