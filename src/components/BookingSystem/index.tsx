import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Calendar, Users, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import ParticleEffect from '../ParticleEffect';
import BubbleEffect from '../BubbleEffect';
import GlowEffect from '../GlowEffect';
import 'react-day-picker/dist/style.css';

const consultationTypes = [
  {
    id: 'academic',
    title: 'Academic Planning',
    description: 'Get expert guidance on course selection and academic goals',
    icon: Calendar,
    duration: '60 min'
  },
  {
    id: 'career',
    title: 'Career Guidance',
    description: 'Explore career paths and opportunities with industry experts',
    icon: Users,
    duration: '45 min'
  }
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM'
];

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!selectedType;
      case 2:
        return !!selectedDate;
      case 3:
        return !!selectedTime;
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      setDirection(1);
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceed()) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <ParticleEffect count={30} />
      <BubbleEffect count={20} />
      
      <div className="absolute top-20 left-1/4">
        <GlowEffect color="#DC2626" size={400} blur={150} opacity={0.1} />
      </div>
      <div className="absolute bottom-40 right-1/4">
        <GlowEffect color="#DC2626" size={300} blur={120} opacity={0.08} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">
              Book Your
              <span className="text-brand-red-500"> Session</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Schedule a personalized consultation with our expert team
            </p>
          </motion.div>
        </div>

        {/* Google Form Embed */}
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfK8Rq4CfFRz_pB4xlvZUQ4LVbdBZxXFXz0X9QZiPhWxwQPDw/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;