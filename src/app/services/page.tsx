import { Layout } from '@/components/layout/Layout';
import { CheckCircle, X } from 'lucide-react';

export const metadata = {
  title: 'Services | ALFarabi International Group',
  description: 'Comprehensive workforce and project execution solutions tailored to your needs.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Workforce Supply',
      description: 'Professional teams of tested and certified workers ready for deployment.',
      provides: ['Standard Teams', 'Custom Crews', 'Skilled Workers', 'Support Staff'],
      notIncluded: ['Raw Materials', 'Structural Work'],
      icon: '👷',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Equipment & Tools',
      description: 'Complete range of professional equipment and tools for project execution.',
      provides: ['Hand Tools', 'Safety Equipment', 'Power Tools', 'Machinery'],
      notIncluded: ['Raw Materials', 'Construction Materials'],
      icon: '🔧',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Accommodation & Transportation',
      description: 'Full accommodation and transportation solutions for deployed teams.',
      provides: ['Housing', 'Daily Transport', 'Meal Services', 'Medical Support'],
      notIncluded: ['Family Accommodation'],
      icon: '🏨',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Engineering Supervision',
      description: 'Expert project supervision and quality control throughout execution.',
      provides: ['Civil Engineers', 'Safety Officers', 'Quality Control', 'Site Management'],
      notIncluded: ['Design Services'],
      icon: '⚙️',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive workforce and project execution solutions tailored to your needs.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Service Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.color} text-white p-8`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>

                {/* Service Body */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-green-700 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      What We Provide
                    </h4>
                    <ul className="space-y-2 ml-7">
                      {service.provides.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-red-700 flex items-center gap-2">
                      <X size={20} className="text-red-600" />
                      Not Included
                    </h4>
                    <ul className="space-y-2 ml-7">
                      {service.notIncluded.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 rounded-xl mt-20 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 text-lg">Contact us today for a customized solution</p>
            <a href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
