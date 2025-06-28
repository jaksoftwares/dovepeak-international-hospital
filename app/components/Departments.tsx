'use client'

import { 
  Heart, 
  Baby, 
  Brain, 
  Bone, 
  Eye, 
  Microscope,
  Stethoscope,
  Zap,
  Pill,
  Activity
} from 'lucide-react'

export default function Departments() {
  const departments = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Comprehensive heart and cardiovascular care with advanced diagnostic and treatment options.",
      services: ["Cardiac Surgery", "Interventional Cardiology", "Heart Failure Clinic", "Cardiac Rehabilitation"],
      doctors: 12,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Specialized medical care for children from birth through adolescence.",
      services: ["Neonatal Care", "Pediatric Surgery", "Child Development", "Immunizations"],
      doctors: 15,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Microscope,
      name: "Oncology",
      description: "Comprehensive cancer care with multidisciplinary treatment approaches.",
      services: ["Medical Oncology", "Radiation Therapy", "Surgical Oncology", "Palliative Care"],
      doctors: 18,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Advanced care for neurological conditions affecting the brain and nervous system.",
      services: ["Neurosurgery", "Stroke Care", "Epilepsy Treatment", "Movement Disorders"],
      doctors: 10,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Expert treatment for musculoskeletal conditions and sports injuries.",
      services: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"],
      doctors: 14,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgeries.",
      services: ["Cataract Surgery", "Retinal Care", "Glaucoma Treatment", "LASIK Surgery"],
      doctors: 8,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section id="departments" className="section-padding bg-medical-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Medical Departments
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Our specialized departments bring together expert physicians, 
            advanced technology, and evidence-based treatments to provide 
            comprehensive care across all medical specialties.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => {
            const Icon = department.icon
            return (
              <div key={index} className="medical-card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-medical-blue" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-medical-gray-900 mb-3">
                  {department.name}
                </h3>
                <p className="text-medical-gray-600 mb-4 leading-relaxed">
                  {department.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-medical-gray-900 mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {department.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-medical-gray-600">
                        <div className="w-2 h-2 bg-medical-green rounded-full" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="h-4 w-4 text-medical-blue" />
                    <span className="text-sm font-medium text-medical-gray-700">
                      {department.doctors} Specialists
                    </span>
                  </div>
                  <button className="text-medical-blue hover:text-medical-green font-semibold transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Emergency Department Highlight */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-3 rounded-lg">
                  <Zap className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold font-poppins">Emergency Department</h3>
              </div>
              <p className="text-xl mb-6 leading-relaxed">
                Our 24/7 Emergency Department is equipped to handle all types of 
                medical emergencies with rapid response times and expert trauma care.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">{"< 15 min"}</div>
                  <div className="text-red-100">Average Wait Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Level 1</div>
                  <div className="text-red-100">Trauma Center</div>
                </div>
              </div>
              <button className="btn-outline">
                Emergency: (555) 911-HELP
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Emergency Department"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}