'use client';

import { Layout } from '@/components/layout/Layout';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield } from 'lucide-react';
import { useCrewStore } from '@/store/useCrewStore';

const INITIAL_FORM_STATE = {
  companyName: '',
  country: '',
  email: '',
  phone: '',
  projectType: '',
  crewSize: '',
  duration: '',
  message: ''
};

export default function ContactPage() {
  const { addCrewRequest } = useCrewStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit to store (in real app, this would be Firebase)
      await addCrewRequest({
        companyName: formData.companyName,
        country: formData.country,
        email: formData.email,
        projectType: formData.projectType,
        requiredCrews: parseInt(formData.crewSize) || 0,
        message: formData.message,
        status: 'new'
      });

      setSuccess(true);
      setFormData(INITIAL_FORM_STATE);

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    'Construction',
    'Infrastructure',
    'Hospitality',
    'Energy',
    'Manufacturing',
    'Technology',
    'Transportation',
    'Other'
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email',
      value: 'info@alfarabi.com',
      description: 'Send us your detailed request',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: 'Phone',
      value: '+20 2 1234 5678',
      description: 'Available Mon-Fri, 9AM-6PM',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: 'Location',
      value: 'Cairo & El Dabaa, Egypt',
      description: 'Two strategic locations',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">Request a crew or inquire about our services</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <div className={`bg-gradient-to-r ${method.color} p-8 text-white flex items-center justify-center h-24`}>
                  {method.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{method.value}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-10 animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Request a Crew</h2>

                {success && mounted && (
                  <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-xl p-6 flex items-start gap-4 animate-fade-in-down">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-green-900 text-lg mb-1">Request Submitted Successfully!</h4>
                      <p className="text-green-800">
                        We've received your crew request and will contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="Project country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="+20 1234 567890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors bg-white"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Crew Size Needed
                      </label>
                      <input
                        type="number"
                        name="crewSize"
                        value={formData.crewSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="88"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Project Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="e.g., 12 months, 6 weeks"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Project Details & Special Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                      placeholder="Tell us more about your project, specific skills needed, timeline, and any special requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-6 h-6" />
                    {loading ? 'Submitting...' : 'Submit Crew Request'}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    * Required fields. We respect your privacy and will only use your information to respond to your request.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600 animate-fade-in-up">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h3>
                <ol className="space-y-5">
                  {[
                    { num: '1', title: 'Submit Request', desc: 'Fill out the form with your project details' },
                    { num: '2', title: 'Review & Planning', desc: 'Our team reviews your requirements' },
                    { num: '3', title: 'Proposal', desc: 'Receive customized crew proposal' },
                    { num: '4', title: 'Deployment', desc: 'Crew mobilization and project start' }
                  ].map((step) => (
                    <li key={step.num} className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-700">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Response Times */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-l-4 border-green-600 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Cairo Office</p>
                    <p className="font-bold text-green-600 text-lg">24 Hours</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Custom Requirements</p>
                    <p className="font-bold text-green-600 text-lg">48 Hours</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Emergency Requests</p>
                    <p className="font-bold text-green-600 text-lg">4 Hours</p>
                  </div>
                </div>
              </div>

              {/* Trust & Security */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-l-4 border-purple-600 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Trusted Since 2010</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span> Certified crews
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span> Safety assured
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span> Quality guaranteed
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span> Professional support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
