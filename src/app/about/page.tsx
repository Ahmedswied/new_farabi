import { Layout } from '@/components/layout/Layout';

export const metadata = {
  title: 'About Us | ALFarabi International Group',
  description: 'Learn about ALFarabi International Group - leading provider of professional workforce solutions.',
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ALFarabi</h1>
          <p className="text-xl text-blue-100">Leading the Future of Professional Workforce Solutions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section */}
          <div className="mb-20 animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-xl border border-blue-200 shadow-lg">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the leading provider of professional workforce solutions in the Middle East, 
                delivering excellence through innovation, safety, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-20 animate-fade-in-up">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-12 rounded-xl border border-indigo-200 shadow-lg">
              <h2 className="text-4xl font-bold mb-6 text-indigo-900">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To provide dependable, highly-trained, and certified workforce solutions that exceed client expectations, 
                while ensuring the safety, professional development, and welfare of our team members.
              </p>
            </div>
          </div>

          {/* Locations Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Cairo Headquarters</h3>
                <p className="text-gray-600 mb-6">
                  Our main office and recruitment center in Cairo serves as the hub for workforce management, 
                  testing, and certification.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><span className="text-blue-600 mr-3 font-bold">✓</span> Recruitment & Selection</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-3 font-bold">✓</span> Professional Testing</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-3 font-bold">✓</span> Certification Programs</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-3 font-bold">✓</span> Administrative Hub</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">El Dabaa Operations</h3>
                <p className="text-gray-600 mb-6">
                  Our operational facility in El Dabaa manages active project deployments and provides 
                  field supervision for our workforce teams.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><span className="text-indigo-600 mr-3 font-bold">✓</span> Field Operations</li>
                  <li className="flex items-center"><span className="text-indigo-600 mr-3 font-bold">✓</span> Project Management</li>
                  <li className="flex items-center"><span className="text-indigo-600 mr-3 font-bold">✓</span> Crew Coordination</li>
                  <li className="flex items-center"><span className="text-indigo-600 mr-3 font-bold">✓</span> Quality Assurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 rounded-xl animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-3 text-blue-300">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-blue-100">Unwavering commitment to workplace safety and employee wellbeing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-3 text-blue-300">⭐</div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-blue-100">Delivering superior quality in every aspect of our services</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-3 text-blue-300">🤝</div>
                <h3 className="text-xl font-bold mb-2">Partnership</h3>
                <p className="text-blue-100">Building lasting relationships with clients and team members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
