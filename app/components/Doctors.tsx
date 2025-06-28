'use client'

import { Star, Calendar, Award, GraduationCap, MapPin } from 'lucide-react'

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiothoracic Surgery",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "15+ years",
      education: "Harvard Medical School",
      rating: 4.9,
      reviews: 127,
      languages: ["English", "Spanish"],
      specializations: ["Heart Surgery", "Valve Repair", "Transplant Surgery"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatric Oncology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "12+ years",
      education: "Johns Hopkins University",
      rating: 4.8,
      reviews: 89,
      languages: ["English", "Mandarin"],
      specializations: ["Childhood Cancer", "Bone Marrow Transplant", "Clinical Trials"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurosurgery",
      image: "https://images.unsplash.com/photo-1594824388853-d0d4c0b5e0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "18+ years",
      education: "Mayo Clinic",
      rating: 4.9,
      reviews: 156,
      languages: ["English", "Spanish", "Portuguese"],
      specializations: ["Brain Surgery", "Spine Surgery", "Minimally Invasive Procedures"]
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Orthopedic Surgery",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "20+ years",
      education: "Stanford Medical School",
      rating: 4.7,
      reviews: 203,
      languages: ["English"],
      specializations: ["Joint Replacement", "Sports Medicine", "Arthroscopic Surgery"]
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialty: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "10+ years",
      education: "UCLA Medical School",
      rating: 4.8,
      reviews: 94,
      languages: ["English", "Korean"],
      specializations: ["Trauma Care", "Critical Care", "Emergency Procedures"]
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Ophthalmology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "14+ years",
      education: "University of Pennsylvania",
      rating: 4.9,
      reviews: 178,
      languages: ["English", "French"],
      specializations: ["Cataract Surgery", "Retinal Disorders", "LASIK Surgery"]
    }
  ]

  return (
    <section id="doctors" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Meet Our Expert Physicians
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Our team of board-certified physicians and specialists are dedicated 
            to providing exceptional medical care with compassion, expertise, 
            and the latest medical advances.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="medical-card group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-medical-gray-900 mb-2">
                {doctor.name}
              </h3>
              <p className="text-medical-blue font-semibold mb-4">
                {doctor.specialty}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-medical-gray-600">
                  <GraduationCap className="h-4 w-4" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-medical-gray-600">
                  <Award className="h-4 w-4" />
                  <span>{doctor.experience} Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-medical-gray-600">
                  <Star className="h-4 w-4" />
                  <span>{doctor.reviews} Patient Reviews</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-medical-gray-900 mb-2">Specializations:</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-medical-blue/10 text-medical-blue text-xs font-medium rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-medical-gray-900 mb-2">Languages:</h4>
                <p className="text-sm text-medical-gray-600">
                  {doctor.languages.join(", ")}
                </p>
              </div>
              
              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          ))}
        </div>

        {/* Find a Doctor Section */}
        <div className="bg-medical-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-medical-gray-900 mb-4 font-poppins">
              Find the Right Doctor for You
            </h3>
            <p className="text-large max-w-2xl mx-auto">
              Search our comprehensive directory of physicians by specialty, 
              location, or name to find the perfect match for your healthcare needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                  Specialty
                </label>
                <select className="input-field">
                  <option>All Specialties</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Oncology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Ophthalmology</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                  Location
                </label>
                <select className="input-field">
                  <option>All Locations</option>
                  <option>Main Hospital</option>
                  <option>North Campus</option>
                  <option>South Campus</option>
                  <option>Downtown Clinic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                  Language
                </label>
                <select className="input-field">
                  <option>All Languages</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Mandarin</option>
                  <option>French</option>
                  <option>Korean</option>
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn-primary">
                Search Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}