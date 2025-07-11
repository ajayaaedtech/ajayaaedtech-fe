'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  form_submit_Api } from './../../../utils/Api.js';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Valid email is required';
    if (!/^\d{10}$/.test(form.phone)) return '10-digit phone number is required';
    if (!form.college.trim()) return 'College name is required';
    if (!form.course.trim()) return 'Course is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return setStatus({ type: 'error', message: error });
 
    setIsSubmitting(true);
    try {
      const response = await fetch(form_submit_Api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Submission failed');
      setStatus({ type: 'success', message: 'We will contact you shortly!' });
      setForm({ name: '', email: '', phone: '', college: '', course: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to submit' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 mt-10"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="md:flex">
          {/* Left Info Panel */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#004EA5] to-[#5598B5] p-10 text-white md:w-2/5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Enquire About Our Courses
              </h2>
              <p className="text-base md:text-lg mb-10">Hybrid learning model with industry experts</p>
              <div className="space-y-6">
                <ContactIcon
                  iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  text="+91 9876543210"
                />
                <ContactIcon
                  iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  text="info@ajayaaedtech.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <div className="p-8 md:w-3/5">
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 mb-5 rounded-lg text-base md:text-lg font-medium ${status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                    }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name*" name="name" value={form.name} placeh="Enter your full name" onChange={handleChange} icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <InputField label="Email*" name="email" type="email" value={form.email} placeh="example@gmail.com" onChange={handleChange} icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              <InputPhoneField label="Phone*" value={form.phone} onChange={handleChange} icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              <InputField label="College*" name="college" value={form.college} placeh="Enter your college name" onChange={handleChange} icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </div>

            <div className="mt-6">
              <DropdownField
                label="Course *"
                name="course"
                value={form.course}
                onChange={handleChange}
                icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                options={[
                  'Python',
                  'Java',
                  'JavaScript',
                  'Web Development',
                  'Full Stack',
                  'Django',
                  'Salesforce'
                ]}
              />
            </div>

            <div className="mt-6">
              <label className="block text-base font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                placeholder="Enter message here..."
                className="w-full text-base text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004EA5] focus:border-transparent"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-[#01319E] text-white py-4 text-lg rounded-xl font-semibold transition duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

const InputField = ({ label, name, type = 'text', value, onChange, icon, placeh = '' }) => (
  <div>
    <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeh}
        className="w-full text-base text-gray-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004EA5] focus:border-transparent"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </div>
    </div>
  </div>
);

const InputPhoneField = ({ label, value, onChange, icon }) => {
  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    if (digitsOnly.length <= 10) {
      onChange({ target: { name: 'phone', value: digitsOnly } });
    }
  };

  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          name="phone"
          value={value}
          onChange={handlePhoneChange}
          inputMode="numeric"
          placeholder="Enter 10-digit number"
          className="w-full text-base text-gray-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004EA5] focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
      </div>
    </div>
  );
};

const DropdownField = ({ label, name, value, onChange, icon, options }) => (
  <div>
    <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-base text-gray-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004EA5] focus:border-transparent appearance-none"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </div>
    </div>
  </div>
);

const ContactIcon = ({ iconPath, text }) => (
  <div className="flex items-center gap-3">
    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
    </svg>
    <span className="text-lg">{text}</span>
  </div>
);
