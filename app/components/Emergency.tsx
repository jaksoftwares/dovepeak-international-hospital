'use client'

import { Phone, Clock, MapPin, Fence as Ambulance, Heart, AlertTriangle } from 'lucide-react'

export default function Emergency() {
  const emergencyServices = [
    {
      icon: Heart,
      title: "Cardiac Emergency",
      description: "Immediate care for heart attacks, chest pain, and cardiac emergencies",
      response: "< 5 minutes"
    },
    {
      icon: AlertTriangle,
      title: "Trauma Care",
      description: "Level 1 trauma center for severe injuries and accidents",
      response: "< 10 minutes"
    },
    {
      icon: Ambulance,
      title: "Emergency Transport",
      description: "Advanced life support ambulance services available 24/7",
      response: "< 8 minutes"
    }
  ]

  const whenToCall = [
    "Chest pain or difficulty breathing",
    "Severe bleeding or trauma",
    "Loss of consciousness",
    "Severe allergic reactions",
    "Stroke symptoms (FAST)",
    "Poisoning or overdose"
  ]

  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 p-4 rounded-full w-fit mx-auto mb-6 animate-pulse-slow">
            <Phone className="h-12 w-12 text-white" />
          </div>
          <h2 className="heading-secondary text-red-600">
            Emergency Services
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Our 24/7 Emergency Department is equipped to handle all types of medical 
            emergencies with rapid response times and expert trauma care.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-500 rounded-2xl p-8 lg:p-12 text-white text-center mb-16">
          <h3 className="text-4xl lg:text-6xl font-bold mb-4 font-poppins">
            EMERGENCY
          </h3>
          <div className="text-3xl lg:text-5xl font-bold mb-6">
            (555) 911-HELP
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call immediately for life-threatening emergencies. 
            Our emergency team is standing by 24/7.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6" />
              <span className="font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6" />
              <span className="font-semibold">123 Medical Center Dr</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Ambulance className="h-6 w-6" />
              <span className="font-semibold">Ambulance Ready</span>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="medical-card text-center">
                <div className="bg-red-500 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-medical-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-medical-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-red-600 font-bold">Response Time</div>
                  <div className="text-2xl font-bold text-red-500">{service.response}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* When to Call Emergency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="heading-tertiary text-red-600 mb-6">
              When to Call Emergency Services
            </h3>
            <p className="text-large mb-6">
              Don't hesitate to call for emergency help if you or someone else 
              is experiencing any of these serious symptoms:
            </p>
            <ul className="space-y-3">
              {whenToCall.map((symptom, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0" />
                  <span className="text-medical-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Remember FAST for Stroke:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li><strong>F</strong>ace drooping</li>
                    <li><strong>A</strong>rm weakness</li>
                    <li><strong>S</strong>peech difficulty</li>
                    <li><strong>T</strong>ime to call emergency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Emergency Department"
              className="rounded-xl shadow-medical-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-xl" />
            
            {/* Emergency Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500">< 15 min</div>
                    <div className="text-sm text-medical-gray-600">Avg Wait Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">Level 1</div>
                    <div className="text-sm text-medical-gray-600">Trauma Center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}