'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Heart, 
  Phone, 
  Clock, 
  MapPin,
  ChevronDown,
  Calendar,
  User,
  Search
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    {
      name: 'About',
      href: '#about',
      dropdown: [
        { name: 'Our Story', href: '#story' },
        { name: 'Mission & Vision', href: '#mission' },
        { name: 'Leadership Team', href: '#leadership' },
        { name: 'Awards & Recognition', href: '#awards' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: [
        { name: 'Cardiology', href: '#cardiology' },
        { name: 'Pediatrics', href: '#pediatrics' },
        { name: 'Oncology', href: '#oncology' },
        { name: 'Orthopedics', href: '#orthopedics' },
        { name: 'Neurology', href: '#neurology' },
        { name: 'Emergency Medicine', href: '#emergency' }
      ]
    },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Emergency Care', href: '#emergency-care' },
        { name: 'Surgery', href: '#surgery' },
        { name: 'Diagnostics', href: '#diagnostics' },
        { name: 'Rehabilitation', href: '#rehabilitation' },
        { name: 'Preventive Care', href: '#preventive' }
      ]
    },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-medical-blue text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: +1 (555) 911-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Medical Center Drive, Health City</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-medical-green transition-colors">
                <User className="h-4 w-4" />
                <span>Patient Portal</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-medical-green transition-colors">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-medical-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-medical-blue p-3 rounded-xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-medical-blue font-poppins">
                  Dovepeak International
                </h1>
                <p className="text-sm text-medical-gray-600">Hospital</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-medical-gray-700 hover:text-medical-blue font-medium transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                  
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-medical-xl border border-medical-gray-100 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-medical-gray-700 hover:bg-medical-blue hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button className="btn-primary flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-medical-gray-700 hover:text-medical-blue"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-medical-gray-200">
            <div className="container-custom py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block text-medical-gray-700 hover:text-medical-blue font-medium py-2"
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-medical-gray-600 hover:text-medical-blue py-1"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="btn-primary w-full mt-4 flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}