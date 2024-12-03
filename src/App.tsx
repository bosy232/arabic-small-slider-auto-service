import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Doctors from './components/Doctors';
import PatientInfo from './components/PatientInfo';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services
        selectedService={selectedService}
        onServiceSelect={setSelectedService}
      />
      <Doctors />
      <PatientInfo />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;