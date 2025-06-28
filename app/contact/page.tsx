'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, Clock, Send, Calendar, Fence as Ambulance, MessageCircle, CheckCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  department: z.string().min(1, 'Please select a department'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Main Hospital",
      details: "(555) 123-CARE (2273)",
      description: "General inquiries and appointments"
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      details: "(555) 911-HELP",
      description: "24/7 emergency medical care"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@dovepeakhospital.com",
      description: "General information and inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Medical Center Drive",
      description: "Health City, HC 12345"
    }
  ]

  const departments = [
    'General Inquiry',
    'Patient Services',
    'Billing & Insurance',
    'Medical Records',
    'Human Resources',
    'Media Relations',
    'Volunteer Services',
    'Donations & Fundraising'
  ]

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Contact form data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting contact form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-medical-gray-50">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-4">
              Contact Us
            </h1>
            <p className="text-large max-w-3xl mx-auto">
              We're here to help. Reach out to us for any questions, concerns, 
              or to schedule an appointment. Our team is ready to assist you.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="medical-card text-center group hover:scale-105 transition-all duration-300">
                  <div className={`p-4 rounded-xl w-fit mx-auto mb-4 ${
                    info.title === 'Emergency Services' 
                      ? 'bg-red-500' 
                      : 'bg-medical-blue'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-medical-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-medical-blue font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-medical-gray-600">
                    {info.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-medical-xl p-8 text-center">
                  <div className="bg-medical-green p-4 rounded-full w-fit mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-medical-gray-900 mb-4 font-poppins">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-medical-gray-600 mb-8">
                    Thank you for contacting us. We have received your message 
                    and will respond within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-medical-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageCircle className="h-6 w-6 text-medical-blue" />
                    <h2 className="text-2xl font-bold text-medical-gray-900 font-poppins">
                      Send us a Message
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          className="input-field"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="input-field"
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="input-field"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                          Department *
                        </label>
                        <select {...register('department')} className="input-field">
                          <option value="">Select a department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                        {errors.department && (
                          <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        className="input-field"
                        placeholder="Enter the subject of your message"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className="input-field"
                        placeholder="Enter your message..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Map and Hours */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-medical-xl overflow-hidden">
                <div className="h-64 bg-medical-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-medical-gray-400 mx-auto mb-4" />
                    <p className="text-medical-gray-500">Interactive Map</p>
                    <p className="text-sm text-medical-gray-400">
                      123 Medical Center Drive, Health City, HC 12345
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-medical-gray-900 mb-4">
                    Directions & Parking
                  </h3>
                  <div className="space-y-3 text-sm text-medical-gray-600">
                    <p>• Free parking available in our main garage</p>
                    <p>• Valet parking available at main entrance</p>
                    <p>• Public transportation: Bus routes 15, 22, 45</p>
                    <p>• Wheelchair accessible entrances</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-medical-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-medical-blue" />
                  <h3 className="text-lg font-bold text-medical-gray-900">
                    Hospital Hours
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Department</h4>
                    <p className="text-red-700">24 hours a day, 7 days a week</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-medical-gray-900">General Services</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-medical-gray-600">6:00 AM - 10:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-medical-gray-600">8:00 AM - 8:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-medical-gray-600">10:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Holidays</p>
                        <p className="text-medical-gray-600">Limited Hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-medical-blue to-medical-green rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="btn-outline w-full flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </button>
                  <button className="btn-outline w-full flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Main Line</span>
                  </button>
                  <button className="btn-outline w-full flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Patient Portal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}