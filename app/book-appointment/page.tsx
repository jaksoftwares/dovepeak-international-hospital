'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const appointmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  department: z.string().min(1, 'Please select a department'),
  doctor: z.string().min(1, 'Please select a doctor'),
  appointmentDate: z.string().min(1, 'Please select an appointment date'),
  appointmentTime: z.string().min(1, 'Please select an appointment time'),
  reason: z.string().min(10, 'Please provide a reason for your visit (minimum 10 characters)'),
  insurance: z.string().optional(),
  emergencyContact: z.string().optional(),
  medicalHistory: z.string().optional(),
})

type AppointmentForm = z.infer<typeof appointmentSchema>

export default function BookAppointment() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema)
  })

  const departments = [
    'Cardiology',
    'Pediatrics',
    'Oncology',
    'Neurology',
    'Orthopedics',
    'Ophthalmology',
    'Emergency Medicine',
    'Internal Medicine'
  ]

  const doctors = [
    'Dr. Sarah Johnson - Cardiothoracic Surgery',
    'Dr. Michael Chen - Pediatric Oncology',
    'Dr. Emily Rodriguez - Neurosurgery',
    'Dr. David Thompson - Orthopedic Surgery',
    'Dr. Lisa Park - Emergency Medicine',
    'Dr. James Wilson - Ophthalmology'
  ]

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ]

  const onSubmit = async (data: AppointmentForm) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Appointment data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting appointment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-medical-gray-50">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-medical-xl p-12">
                <div className="bg-medical-green p-4 rounded-full w-fit mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-medical-gray-900 mb-4 font-poppins">
                  Appointment Request Submitted!
                </h1>
                <p className="text-lg text-medical-gray-600 mb-8">
                  Thank you for choosing Dovepeak International Hospital. 
                  We have received your appointment request and will contact 
                  you within 24 hours to confirm your appointment.
                </p>
                <div className="bg-medical-blue/10 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-medical-blue mb-2">What's Next?</h3>
                  <ul className="text-sm text-medical-gray-600 space-y-2 text-left">
                    <li>• Our scheduling team will review your request</li>
                    <li>• You'll receive a confirmation call within 24 hours</li>
                    <li>• We'll send appointment details via email and SMS</li>
                    <li>• Please arrive 15 minutes early for your appointment</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Book Another Appointment
                  </button>
                  <button className="btn-secondary">
                    Return to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-medical-gray-50">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="heading-primary mb-4">
                Book Your Appointment
              </h1>
              <p className="text-large max-w-2xl mx-auto">
                Schedule your visit with our expert medical team. 
                We're here to provide you with exceptional healthcare.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-medical-xl p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <User className="h-6 w-6 text-medical-blue" />
                    <h2 className="text-xl font-bold text-medical-gray-900">Personal Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        {...register('firstName')}
                        className="input-field"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register('lastName')}
                        className="input-field"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
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
                        Date of Birth *
                      </label>
                      <input
                        {...register('dateOfBirth')}
                        type="date"
                        className="input-field"
                      />
                      {errors.dateOfBirth && (
                        <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Insurance Provider
                      </label>
                      <input
                        {...register('insurance')}
                        className="input-field"
                        placeholder="Enter your insurance provider"
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="h-6 w-6 text-medical-blue" />
                    <h2 className="text-xl font-bold text-medical-gray-900">Appointment Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Preferred Doctor *
                      </label>
                      <select {...register('doctor')} className="input-field">
                        <option value="">Select a doctor</option>
                        {doctors.map((doctor) => (
                          <option key={doctor} value={doctor}>{doctor}</option>
                        ))}
                      </select>
                      {errors.doctor && (
                        <p className="text-red-500 text-sm mt-1">{errors.doctor.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        {...register('appointmentDate')}
                        type="date"
                        className="input-field"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.appointmentDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.appointmentDate.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select {...register('appointmentTime')} className="input-field">
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.appointmentTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.appointmentTime.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-6 w-6 text-medical-blue" />
                    <h2 className="text-xl font-bold text-medical-gray-900">Medical Information</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Reason for Visit *
                      </label>
                      <textarea
                        {...register('reason')}
                        rows={4}
                        className="input-field"
                        placeholder="Please describe the reason for your visit..."
                      />
                      {errors.reason && (
                        <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Medical History
                      </label>
                      <textarea
                        {...register('medicalHistory')}
                        rows={3}
                        className="input-field"
                        placeholder="Please list any relevant medical history, current medications, or allergies..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <input
                        {...register('emergencyContact')}
                        className="input-field"
                        placeholder="Emergency contact name and phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="border-t border-medical-gray-200 pt-8">
                  <div className="bg-medical-blue/10 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-medical-blue mb-2">Important Information</h3>
                    <ul className="text-sm text-medical-gray-600 space-y-1">
                      <li>• Please arrive 15 minutes early for your appointment</li>
                      <li>• Bring a valid ID and insurance card</li>
                      <li>• Bring a list of current medications</li>
                      <li>• Appointment confirmation will be sent via email and SMS</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Submitting...' : 'Submit Appointment Request'}
                    </button>
                    <button
                      type="button"
                      onClick={() => reset()}
                      className="btn-secondary"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}