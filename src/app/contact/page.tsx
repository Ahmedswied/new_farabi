'use client';

import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useCrewStore } from '@/store/useCrewStore';

export default function ContactPage() {
  const { addCrewRequest } = useCrewStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    email: '',
    phone: '',
    projectType: '',
    crewSize: '',
    duration: '',
    message: ''
  });

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
      // Submit to Firebase
      await addCrewRequest({
        companyName: formData.companyName,
        country: formData.country,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        crewSize: parseInt(formData.crewSize) || 0,
        duration: formData.duration,
        message: formData.message,
        status: 'pending'
      });

      setSuccess(true);
      setFormData({
        companyName: '',
        country: '',
        email: '',
        phone: '',
        projectType: '',
        crewSize: '',
        duration: '',
        message: ''
      });

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

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Request a Crew</h1>
          <p className="text-lg text-gray-700">
            Need a skilled workforce for your project? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className="text-gray-700">info@alfarabi.com</p>
            <p className="text-gray-600 text-sm mt-2">Send us your detailed request</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <p className="text-gray-700">+20 2 1234 5678</p>
            <p className="text-gray-600 text-sm mt-2">Available Monday to Friday, 9AM-6PM</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">Location</h3>
            </div>
            <p className="text-gray-700">Cairo & El Dabaa</p>
            <p className="text-gray-600 text-sm mt-2">Egypt</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {success && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Request Submitted Successfully</h4>
                    <p className="text-green-800 text-sm">
                      We've received your crew request and will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Project country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="+20 1234 567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Crew Size Needed
                    </label>
                    <input
                      type="number"
                      name="crewSize"
                      value={formData.crewSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="88"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="e.g., 12 months, 6 weeks"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details & Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us more about your project, specific skills needed, timeline, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {loading ? 'Submitting...' : 'Submit Crew Request'}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  * Required fields. We respect your privacy and will only use your information to respond to your request.
                </p>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Submit Request</h4>
                    <p className="text-sm text-gray-700">Fill out the form with your project details</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Review & Planning</h4>
                    <p className="text-sm text-gray-700">Our team reviews your requirements</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Proposal</h4>
                    <p className="text-sm text-gray-700">Receive customized crew proposal</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Deployment</h4>
                    <p className="text-sm text-gray-700">Crew mobilization and project start</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold mb-4">Response Time</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Cairo Office</p>
                  <p className="font-semibold text-gray-900">24 hours</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Custom Requirements</p>
                  <p className="font-semibold text-gray-900">48 hours</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Emergency Requests</p>
                  <p className="font-semibold text-gray-900">4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
