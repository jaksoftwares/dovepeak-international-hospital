'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Departments from './components/Departments'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Emergency from './components/Emergency'
import News from './components/News'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Departments />
      <Doctors />
      <Testimonials />
      <Emergency />
      <News />
      <Footer />
    </div>
  )
}