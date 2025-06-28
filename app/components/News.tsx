'use client'

import { Calendar, ArrowRight, Award, Users, Heart, Microscope } from 'lucide-react'

export default function News() {
  const news = [
    {
      id: 1,
      category: "Medical Breakthrough",
      title: "Dovepeak Performs First Robotic Heart Surgery in Region",
      excerpt: "Our cardiac surgery team successfully completed the region's first fully robotic heart valve repair, marking a new era in minimally invasive cardiac care.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Heart,
      featured: true
    },
    {
      id: 2,
      category: "Recognition",
      title: "Hospital Receives Top Safety Award",
      excerpt: "Dovepeak International Hospital has been recognized with the highest patient safety award for the third consecutive year.",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Award
    },
    {
      id: 3,
      category: "Community",
      title: "Free Health Screening Program Launches",
      excerpt: "Our new community outreach program offers free health screenings for underserved populations in the greater metropolitan area.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Users
    },
    {
      id: 4,
      category: "Research",
      title: "Cancer Research Center Opens New Clinical Trial",
      excerpt: "Groundbreaking immunotherapy trial offers new hope for patients with advanced cancer, with promising early results.",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Microscope
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Medical Breakthrough':
        return 'bg-medical-blue text-white'
      case 'Recognition':
        return 'bg-medical-green text-white'
      case 'Community':
        return 'bg-purple-500 text-white'
      case 'Research':
        return 'bg-orange-500 text-white'
      default:
        return 'bg-medical-gray-500 text-white'
    }
  }

  return (
    <section id="news" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Latest News & Updates
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Stay informed about the latest developments, medical breakthroughs, 
            and community initiatives at Dovepeak International Hospital.
          </p>
        </div>

        {/* Featured Article */}
        {news.filter(article => article.featured).map((article) => {
          const Icon = article.icon
          return (
            <div key={article.id} className="medical-card overflow-hidden mb-12 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/50 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-medical-blue" />
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-medical-gray-500 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-medical-gray-900 mb-4 font-poppins">
                    {article.title}
                  </h3>
                  <p className="text-medical-gray-600 text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="btn-primary w-fit flex items-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.filter(article => !article.featured).map((article) => {
            const Icon = article.icon
            return (
              <div key={article.id} className="medical-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon className="h-4 w-4 text-medical-blue" />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-medical-gray-900 mb-3 group-hover:text-medical-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-medical-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-medical-gray-500 text-xs flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </span>
                    <button className="text-medical-blue hover:text-medical-green font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-green rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
            Stay Informed
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest health tips, medical 
            breakthroughs, and hospital updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="btn-outline whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}