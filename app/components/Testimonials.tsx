'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      condition: "Heart Surgery Patient",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "The cardiac team at Dovepeak saved my life. Dr. Johnson and her team were not only incredibly skilled but also compassionate throughout my entire journey. The care I received was exceptional, and I'm grateful to be here today.",
      date: "March 2024"
    },
    {
      id: 2,
      name: "James Thompson",
      condition: "Orthopedic Surgery Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "After my knee replacement surgery, I'm back to playing tennis! Dr. Thompson and the rehabilitation team helped me regain my mobility and confidence. The facilities are world-class and the staff truly cares about patient outcomes.",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Sarah Chen",
      condition: "Cancer Survivor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "The oncology team at Dovepeak gave me hope when I needed it most. Their comprehensive approach to cancer care, combined with emotional support, made all the difference in my treatment and recovery.",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Robert Wilson",
      condition: "Emergency Care Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "When I had my accident, the emergency team at Dovepeak responded immediately. Their quick action and expertise saved my life. I can't thank them enough for their dedication and professionalism.",
      date: "March 2024"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-medical-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Patient Stories & Testimonials
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Hear from our patients about their experiences at Dovepeak International Hospital. 
            Their stories inspire us to continue providing exceptional care every day.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="medical-card text-center p-12">
            <div className="mb-8">
              <Quote className="h-12 w-12 text-medical-blue mx-auto mb-6" />
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < testimonials[currentTestimonial].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-medical-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-medical-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-medical-blue font-medium">
                  {testimonials[currentTestimonial].condition}
                </p>
                <p className="text-sm text-medical-gray-500">
                  {testimonials[currentTestimonial].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-medical-lg p-3 rounded-full hover:bg-medical-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-medical-blue" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-medical-lg p-3 rounded-full hover:bg-medical-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-medical-blue" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-medical-blue' : 'bg-medical-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Patient Satisfaction Stats */}
        <div className="bg-white rounded-2xl shadow-medical-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-medical-gray-900 mb-12 font-poppins">
            Patient Satisfaction Scores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">98%</div>
              <div className="text-medical-gray-600">Overall Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-green mb-2">96%</div>
              <div className="text-medical-gray-600">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">4.8</div>
              <div className="text-medical-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-green mb-2">99%</div>
              <div className="text-medical-gray-600">Safety Score</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Experience Exceptional Care
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have trusted us with their health. 
              Schedule your appointment today and experience the Dovepeak difference.
            </p>
            <button className="btn-outline">
              Schedule Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}