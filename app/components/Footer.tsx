'use client'

import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight,
  Calendar,
  Stethoscope,
  Shield
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Find a Doctor', href: '#doctors' },
    { name: 'Patient Portal', href: '#portal' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const departments = [
    { name: 'Emergency Medicine', href: '#emergency' },
    { name: 'Cardiology', href: '#cardiology' },
    { name: 'Pediatrics', href: '#pediatrics' },
    { name: 'Oncology', href: '#oncology' },
    { name: 'Neurology', href: '#neurology' },
    { name: 'Orthopedics', href: '#orthopedics' }
  ]

  const patientResources = [
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Medical Records', href: '#records' },
    { name: 'Insurance Information', href: '#insurance' },
    { name: 'Billing & Payment', href: '#billing' },
    { name: 'Visitor Information', href: '#visitors' },
    { name: 'Patient Rights', href: '#rights' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' }
  ]

  return (
    <footer className="bg-medical-gray-900 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-500 py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-bold">Emergency: (555) 911-HELP</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5" />
              <span>24/7 Emergency Services Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-medical-blue p-3 rounded-xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins">
                  Dovepeak International
                </h3>
                <p className="text-medical-gray-400">Hospital</p>
              </div>
            </div>
            
            <p className="text-medical-gray-300 mb-6 leading-relaxed">
              For nearly four decades, Dovepeak International Hospital has been 
              providing world-class medical care with compassion, innovation, 
              and excellence. Your health is our priority.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-medical-green flex-shrink-0" />
                <span className="text-medical-gray-300">
                  123 Medical Center Drive, Health City, HC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical-green flex-shrink-0" />
                <span className="text-medical-gray-300">Main: (555) 123-CARE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-medical-green flex-shrink-0" />
                <span className="text-medical-gray-300">info@dovepeakhospital.com</span>
              </div>
            </div>

            {/* Accreditations */}
            <div className="mt-8">
              <h4 className="font-bold text-white mb-4">Accreditations & Certifications</h4>
              <div className="flex items-center space-x-4">
                <div className="bg-medical-gray-800 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-medical-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">JCI Accredited</p>
                  <p className="text-xs text-medical-gray-400">International Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-medical-gray-300 hover:text-medical-green transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((department) => (
                <li key={department.name}>
                  <a
                    href={department.href}
                    className="text-medical-gray-300 hover:text-medical-green transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {department.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Patient Resources</h4>
            <ul className="space-y-3">
              {patientResources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-medical-gray-300 hover:text-medical-green transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="border-t border-medical-gray-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-medical-gray-800 hover:bg-medical-blue p-3 rounded-lg transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-medical-gray-300 group-hover:text-white" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Appointment */}
            <div>
              <h4 className="text-lg font-bold mb-4">Book Appointment</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Online</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <Stethoscope className="h-4 w-4" />
                  <span>Find a Doctor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-medical-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-medical-gray-400 text-sm">
              © 2024 Dovepeak International Hospital. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-medical-gray-400 hover:text-medical-green transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-medical-gray-400 hover:text-medical-green transition-colors">
                Terms of Service
              </a>
              <a href="#hipaa" className="text-medical-gray-400 hover:text-medical-green transition-colors">
                HIPAA Notice
              </a>
              <a href="#accessibility" className="text-medical-gray-400 hover:text-medical-green transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}