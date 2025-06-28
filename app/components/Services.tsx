'use client'

import { Heart, Stethoscope, Brain, Bone, Baby, Eye, Microscope, Fence as Ambulance, Shield, Clock, Award, Users } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Ambulance,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response times and expert trauma care.",
      features: ["24/7 Availability", "Trauma Center", "Critical Care"]
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and cardiac surgery.",
      features: ["Heart Surgery", "Cardiac Imaging", "Preventive Care"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Advanced neurological care for brain, spine, and nervous system disorders.",
      features: ["Brain Surgery", "Stroke Care", "Neuroimaging"]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents.",
      features: ["Newborn Care", "Pediatric Surgery", "Child Development"]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and musculoskeletal conditions.",
      features: ["Joint Replacement", "Sports Medicine", "Rehabilitation"]
    },
    {
      icon: Microscope,
      title: "Oncology",
      description: "Comprehensive cancer care with the latest treatments and therapies.",
      features: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology"]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgeries.",
      features: ["Cataract Surgery", "Retinal Care", "Vision Correction"]
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Primary care and treatment of adult diseases and health conditions.",
      features: ["Preventive Care", "Chronic Disease", "Health Screenings"]
    }
  ]

  const stats = [
    { icon: Users, number: "50,000+", label: "Patients Served Annually" },
    { icon: Award, number: "95%", label: "Patient Satisfaction Rate" },
    { icon: Clock, number: "24/7", label: "Emergency Services" },
    { icon: Shield, number: "100%", label: "Safety Compliance" }
  ]

  return (
    <section id="services" className="section-padding bg-medical-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Comprehensive Medical Services
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            From emergency care to specialized treatments, we offer a full range 
            of medical services delivered by expert physicians using the latest 
            technology and evidence-based practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="medical-card group hover:scale-105 transition-all duration-300">
                <div className="bg-medical-blue p-4 rounded-xl w-fit mb-6 group-hover:bg-medical-green transition-colors duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-medical-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-medical-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-medical-gray-600">
                      <div className="w-2 h-2 bg-medical-green rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-medical-blue hover:text-medical-green font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-medical-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-medical-gray-900 mb-12 font-poppins">
            Excellence in Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-medical-blue p-4 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-medical-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-medical-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Need Medical Care?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our medical experts are here to help. Schedule an appointment 
              or contact us for emergency care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-outline">
                Book Appointment
              </button>
              <button className="btn-outline">
                Emergency: (555) 911-HELP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}