'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Phone, MapPin, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Excellence in Healthcare",
    subtitle: "Your Health, Our Priority",
    description: "Experience world-class medical care with our team of expert physicians and state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Book Appointment"
  },
  {
    id: 2,
    title: "Advanced Medical Technology",
    subtitle: "Innovation in Every Treatment",
    description: "Cutting-edge equipment and innovative procedures ensure the best possible outcomes for our patients.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Our Services"
  },
  {
    id: 3,
    title: "Compassionate Care",
    subtitle: "Healing with Heart",
    description: "Our dedicated medical professionals provide personalized care with compassion and expertise.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Meet Our Doctors"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/90 to-medical-blue/70" />
          
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-4xl text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-poppins animate-slide-up">
                  {slide.title}
                </h1>
                <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-medical-green animate-slide-up">
                  {slide.subtitle}
                </h2>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed animate-slide-up max-w-3xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                  <button className="btn-green flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{slide.cta}</span>
                  </button>
                  <button className="btn-outline flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Emergency: (555) 911-HELP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Access Cards */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container-custom py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-medical">
              <div className="bg-red-500 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-gray-900">Emergency Care</h3>
                <p className="text-medical-gray-600">24/7 Emergency Services</p>
                <p className="text-red-500 font-bold">(555) 911-HELP</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-medical">
              <div className="bg-medical-blue p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-gray-900">Book Appointment</h3>
                <p className="text-medical-gray-600">Schedule your visit online</p>
                <button className="text-medical-blue font-semibold hover:underline">
                  Book Now →
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-medical">
              <div className="bg-medical-green p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-gray-900">Find Us</h3>
                <p className="text-medical-gray-600">123 Medical Center Drive</p>
                <button className="text-medical-green font-semibold hover:underline">
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}