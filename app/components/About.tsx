'use client'

import { Award, Users, Heart, Shield, Clock, Globe } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "JCI Accredited",
      description: "Internationally recognized for quality and patient safety standards"
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Over 200 board-certified physicians and specialists"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Compassionate care tailored to each patient's unique needs"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and innovative treatments"
    }
  ]

  const milestones = [
    { year: "1985", event: "Hospital Founded" },
    { year: "1995", event: "First Heart Transplant" },
    { year: "2005", event: "Cancer Center Opened" },
    { year: "2015", event: "Robotic Surgery Program" },
    { year: "2020", event: "Telemedicine Services" },
    { year: "2024", event: "AI Diagnostic Center" }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">
              About Dovepeak International Hospital
            </h2>
            <p className="text-large mb-6">
              For nearly four decades, Dovepeak International Hospital has been 
              a beacon of excellence in healthcare, serving our community with 
              unwavering dedication to healing, innovation, and compassionate care.
            </p>
            <p className="text-large mb-8">
              Our mission is to provide world-class medical care that combines 
              cutting-edge technology with the human touch, ensuring every patient 
              receives personalized treatment in a healing environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-medical-blue p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-medical-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medical-xl">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dovepeak International Hospital"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-medical-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue">39</div>
                <div className="text-medical-gray-600 text-sm">Years of Service</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-medical-green rounded-xl shadow-medical-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/90 text-sm">Beds Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="medical-card text-center">
            <div className="bg-medical-blue p-4 rounded-xl w-fit mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-medical-gray-900 mb-4">Our Mission</h3>
            <p className="text-medical-gray-600">
              To provide exceptional healthcare services that heal, comfort, and inspire 
              hope while advancing medical knowledge through research and education.
            </p>
          </div>
          
          <div className="medical-card text-center">
            <div className="bg-medical-green p-4 rounded-xl w-fit mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-medical-gray-900 mb-4">Our Vision</h3>
            <p className="text-medical-gray-600">
              To be the leading healthcare institution recognized globally for clinical 
              excellence, innovation, and compassionate patient care.
            </p>
          </div>
          
          <div className="medical-card text-center">
            <div className="bg-medical-blue p-4 rounded-xl w-fit mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-medical-gray-900 mb-4">Our Values</h3>
            <p className="text-medical-gray-600">
              Compassion, Excellence, Integrity, Innovation, and Respect guide 
              everything we do in our commitment to healing and caring.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-medical-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-medical-gray-900 mb-12 font-poppins">
            Our Journey of Excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-medical-blue text-white font-bold py-2 px-4 rounded-lg mb-3">
                  {milestone.year}
                </div>
                <p className="text-sm text-medical-gray-600 font-medium">
                  {milestone.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}