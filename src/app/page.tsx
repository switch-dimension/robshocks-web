import { 
  Play, 
  Code, 
  Zap, 
  Youtube, 
  Github, 
  Twitter,
  BookOpen,
  Cpu,
  Sparkles,
  ArrowRight,
  Star
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Rob Shocks</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#content" className="text-gray-300 hover:text-white transition-colors">Content</a>
              <a href="#tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Rob <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Shocks</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mastering AI Development Tools & Modern Coding Workflows
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Unlock the power of Cursor AI, DeepSeek, and cutting-edge development tools through comprehensive tutorials and real-world coding projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://youtube.com/@robshocks" 
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </a>
              <Link 
                href="/blog" 
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="content" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Content</h2>
            <p className="text-gray-400 text-lg">Latest tutorials and coding insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stop Coding Like It's 2024",
                description: "Cursor 1.0's Changing The Game - Master the latest AI-powered development environment",
                icon: <Zap className="w-6 h-6" />,
                tag: "Cursor AI"
              },
              {
                title: "Unlock DeepSeek & Cursor AI",
                description: "Complete guide to integrating DeepSeek with Cursor for enhanced coding productivity",
                icon: <Cpu className="w-6 h-6" />,
                tag: "AI Integration"
              },
              {
                title: "Cursor AI Cheat Sheet Tutorial",
                description: "Essential shortcuts and workflows for maximum productivity with Cursor AI",
                icon: <BookOpen className="w-6 h-6" />,
                tag: "Tutorial"
              },
              {
                title: "OpenAI's Responses API",
                description: "Full AI Agent Tutorial - Build powerful agents with the latest OpenAI features",
                icon: <Sparkles className="w-6 h-6" />,
                tag: "AI Agents"
              },
              {
                title: "Why You Suck At Vibe Code",
                description: "10 Rules to Fix It - Transform your coding approach with proven strategies",
                icon: <Code className="w-6 h-6" />,
                tag: "Best Practices"
              },
              {
                title: "MCP: The Next BIG Thing",
                description: "Is Model Context Protocol becoming the future of AI development?",
                icon: <Star className="w-6 h-6" />,
                tag: "Emerging Tech"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  Watch Tutorial <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Rob Shocks</h2>
              <p className="text-gray-300 text-lg mb-6">
                Rob Shocks is a passionate developer and educator who specializes in AI-powered development tools and modern coding workflows. With extensive experience in cutting-edge technologies like Cursor AI, DeepSeek, and various AI development platforms.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Through comprehensive tutorials and real-world examples, Rob helps developers level up their skills and embrace the future of AI-assisted programming.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-gray-400">YouTube Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-400">Tutorial Videos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center">
                <Code className="w-24 h-24 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">AI-Powered Development</h3>
                <p className="text-purple-100">
                  Transforming how we code with intelligent tools and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Tutorial Series</h2>
            <p className="text-gray-400 text-lg">Step-by-step guides to master AI development tools</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Cursor AI Mastery</h3>
              </div>
              <p className="mb-6 opacity-90">
                Complete series covering everything from basic setup to advanced AI-assisted coding techniques.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Getting Started with Cursor 1.0
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Advanced AI Code Generation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Workflow Optimization Tips
                </li>
              </ul>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">AI Agent Development</h3>
              </div>
              <p className="mb-6 opacity-90">
                Build powerful AI agents using OpenAI's latest APIs and cutting-edge techniques.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  OpenAI Responses API Deep Dive
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Building Autonomous Agents
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Production Deployment Strategies
                </li>
              </ul>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Series
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Connect With Rob</h2>
          <p className="text-gray-400 text-lg mb-12">
            Follow along for the latest tutorials, AI development insights, and coding tips
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://youtube.com/@robshocks" 
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Youtube className="w-5 h-5 mr-2" />
              YouTube Channel
            </a>
            <a 
              href="https://github.com/robshocks" 
              className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a 
              href="https://twitter.com/robshocks" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Rob Shocks</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Rob Shocks. Empowering developers with AI-powered tools.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
