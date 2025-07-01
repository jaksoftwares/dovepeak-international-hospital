'use client'

export default function Services() {
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

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-medical-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-medical-gray-900 mb-12 font-poppins">
            Excellence in Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stats content can be added here if needed */}
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