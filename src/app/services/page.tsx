import { Layout } from '@/components/layout/Layout';
import { CheckCircle, X } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Workforce Supply',
      description: 'Professional teams of tested and certified workers ready for deployment.',
      provides: ['Standard Teams', 'Custom Crews', 'Skilled Workers', 'Support Staff'],
      notIncluded: ['Raw Materials', 'Structural Work'],
    },
    {
      title: 'Equipment & Tools',
      description: 'Complete range of professional equipment and tools for project execution.',
      provides: ['Hand Tools', 'Safety Equipment', 'Power Tools', 'Machinery'],
      notIncluded: ['Raw Materials', 'Construction Materials'],
    },
    {
      title: 'Accommodation & Transportation',
      description: 'Full accommodation and transportation solutions for deployed teams.',
      provides: ['Housing', 'Daily Transport', 'Meal Services', 'Medical Support'],
      notIncluded: ['Family Accommodation'],
    },
    {
      title: 'Engineering Supervision',
      description: 'Expert project supervision and quality control throughout execution.',
      provides: ['Civil Engineers', 'Safety Officers', 'Quality Control', 'Site Management'],
      notIncluded: ['Design Services'],
    },
  ];

  return (
    <Layout>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-16">
            Comprehensive workforce and project execution solutions tailored to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-green-600">What We Provide:</h4>
                  <ul className="space-y-2">
                    {service.provides.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Not Included:</h4>
                  <ul className="space-y-2">
                    {service.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <X size={18} className="text-red-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
