import { Layout } from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12">About ALFarabi International Group</h1>

          <div className="bg-white p-8 rounded-lg shadow mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              To be the leading provider of professional workforce solutions in the Middle East, 
              delivering excellence through innovation, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Cairo Headquarters</h2>
              <p className="text-gray-600 mb-4">
                Our main office and recruitment center in Cairo serves as the hub for workforce management, 
                testing, and certification.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Recruitment & Selection</li>
                <li>✓ Professional Testing</li>
                <li>✓ Certification Programs</li>
                <li>✓ Administrative Hub</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">El Dabaa Operations</h2>
              <p className="text-gray-600 mb-4">
                Our operational facility in El Dabaa manages active project deployments and provides 
                field supervision for our workforce teams.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Field Operations</li>
                <li>✓ Project Management</li>
                <li>✓ Crew Coordination</li>
                <li>✓ Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
