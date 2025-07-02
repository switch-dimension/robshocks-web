import { 
  ArrowRight,
  Code,
  Palette,
  Monitor,
  Megaphone,
  Eye,
  Users,
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-black font-bold text-xl">UJXSHUVO</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-black font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="#service" className="text-gray-600 hover:text-black transition-colors">Service</a>
              <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
              <a href="#clients" className="text-gray-600 hover:text-black transition-colors">Clients</a>
              <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full text-black font-medium transition-colors">
                We&apos;re Hiring
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Unlocking the<br />
                Power of Your<br />
                Brand.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-full text-black font-semibold transition-colors">
                Get Connected
              </button>
              <div className="mt-12 flex items-center space-x-4">
                <div className="relative w-64 h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-700">
                    Our working process
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-xl mb-4 mx-auto flex items-center justify-center">
                    <Code className="w-16 h-16 text-gray-600" />
                  </div>
                  <p className="text-gray-700 text-lg">Innovation in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">10 +</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">600 +</div>
              <div className="text-gray-600">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">800 +</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-4">Our Services</p>
            <h2 className="text-4xl font-bold text-black mb-6">
              Elevate Your Brand<br />
              Ignite Your Success
            </h2>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow.
              </p>
                             <button className="mt-6 text-black font-medium inline-flex items-center">
                 Let&apos;s Connect <ArrowRight className="w-4 h-4 ml-2" />
               </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Graphic Design */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-6">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity Empowering.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity Empowering.
              </p>
            </div>

            {/* Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Development</h3>
              <p className="text-gray-600 mb-6">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity Empowering.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity Empowering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 mb-4">Our Projects</p>
            <h2 className="text-4xl font-bold mb-6">
              Building Brands That<br />
              Stand the Test of Time
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium">All Projects</button>
              <button className="text-gray-400 px-6 py-2 rounded-full hover:text-white transition-colors">Graphic Design</button>
              <button className="text-gray-400 px-6 py-2 rounded-full hover:text-white transition-colors">UI/UX Design</button>
              <button className="text-gray-400 px-6 py-2 rounded-full hover:text-white transition-colors">Development</button>
              <button className="text-gray-400 px-6 py-2 rounded-full hover:text-white transition-colors">Digital Marketing</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 h-80 relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold mb-2">UJXSTUDIO AGENCY</h3>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-tl-full"></div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 h-80 relative overflow-hidden text-black">
              <div className="absolute top-6 left-6">
                <div className="w-8 h-8 bg-purple-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Empowering<br />Business With Our<br />Digital Solutions</h3>
              </div>
              <div className="absolute bottom-6 right-6 w-32 h-32 bg-yellow-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">About Us</p>
              <h2 className="text-4xl font-bold text-black mb-6">
                We Create Digital<br />
                Experiences That<br />
                Inspire
              </h2>
              <p className="text-gray-600 mb-8">
                Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow. Where Vision Meets Identity. Empowering Brands for a Bold Tomorrow.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert Team of Designers & Developers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Cutting-edge Technology Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">Our Creative Team</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Trusted by Industry Leaders</h2>
                     <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
             We&apos;ve had the privilege of working with some amazing companies and helping them achieve their digital goals.
           </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                     <p className="text-gray-400 text-lg mb-12">
             Let&apos;s work together to bring your vision to life. Get in touch with our team today.
           </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition-colors">
              Start a Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-black font-bold text-xl">UJXSHUVO</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 UJXSHUVO. Empowering brands for a bold tomorrow.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
