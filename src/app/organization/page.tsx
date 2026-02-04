import { Layout } from '@/components/layout/Layout';
import { MapPin, Users, Briefcase, Target } from 'lucide-react';

export const metadata = {
  title: 'Organization | ALFarabi International Group',
  description: 'Learn about our organizational structure and management team.',
};

interface TeamMember {
  name: string;
  position: string;
  department: string;
  location: string;
  icon: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up">
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 text-center">
      <div className="text-4xl mb-3">{member.icon}</div>
      <h4 className="font-bold text-lg">{member.name}</h4>
    </div>
    <div className="p-6">
      <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
      <p className="text-gray-600 text-sm">{member.department}</p>
    </div>
  </div>
);

const OrganizationChart = ({ location, members, color }: { location: string; members: TeamMember[]; color: string }) => (
  <div className="mb-16 animate-fade-in-up">
    <div className={`bg-gradient-to-r ${color} text-white py-8 px-6 rounded-xl mb-8 shadow-lg`}>
      <div className="flex items-center gap-3 mb-2">
        <MapPin className="w-8 h-8" />
        <h3 className="text-3xl font-bold">{location} Hub</h3>
      </div>
      <p className="text-opacity-90 text-white">{location === 'Cairo' ? 'Headquarters managing corporate strategy and operations' : 'Regional operations and on-site management'}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, idx) => (
        <TeamCard key={idx} member={member} />
      ))}
    </div>
  </div>
);

export default function OrganizationPage() {
  const cairoTeam: TeamMember[] = [
    { name: 'Ahmed Hassan', position: 'General Manager', department: 'Executive Management', location: 'Cairo', icon: '👔' },
    { name: 'Fatima Mohammad', position: 'Operations Manager', department: 'Operations', location: 'Cairo', icon: '⚙️' },
    { name: 'Omar Khalil', position: 'Finance Director', department: 'Finance & Accounting', location: 'Cairo', icon: '💼' },
    { name: 'Sarah Naguib', position: 'HR Manager', department: 'Human Resources', location: 'Cairo', icon: '👥' },
    { name: 'Mohamed Saad', position: 'Sales Manager', department: 'Business Development', location: 'Cairo', icon: '📈' },
    { name: 'Layla Amin', position: 'QA Director', department: 'Quality Assurance', location: 'Cairo', icon: '✅' },
    { name: 'Karim Nassar', position: 'Projects Manager', department: 'Project Management', location: 'Cairo', icon: '📊' },
    { name: 'Dina Elkhatib', position: 'Safety Manager', department: 'Health & Safety', location: 'Cairo', icon: '🛡️' }
  ];

  const elDabaaTeam: TeamMember[] = [
    { name: 'Ibrahim Rashid', position: 'Regional Manager', department: 'Regional Operations', location: 'El Dabaa', icon: '🏢' },
    { name: 'Amira Hassan', position: 'Site Supervisor', department: 'On-Site Operations', location: 'El Dabaa', icon: '👷' },
    { name: 'Youssef Ahmed', position: 'Logistics Coordinator', department: 'Logistics', location: 'El Dabaa', icon: '🚚' },
    { name: 'Hana Zahra', position: 'HR Officer', department: 'HR & Admin', location: 'El Dabaa', icon: '📝' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Organization Structure</h1>
          <p className="text-xl text-blue-100">Dedicated teams across strategic locations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cairo Team */}
          <OrganizationChart location="Cairo" members={cairoTeam} color="from-blue-600 to-blue-800" />

          {/* El Dabaa Team */}
          <OrganizationChart location="El Dabaa" members={elDabaaTeam} color="from-indigo-600 to-purple-800" />

          {/* Departments Overview */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Executive</h3>
                </div>
                <p className="text-gray-700 mb-4">Strategic leadership and corporate governance</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> General Management</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Strategic Planning</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Board Relations</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Operations</h3>
                </div>
                <p className="text-gray-700 mb-4">Daily execution and project management</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Project Delivery</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Quality Control</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Safety Management</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Support Services</h3>
                </div>
                <p className="text-gray-700 mb-4">Finance, HR, and administrative functions</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><span className="text-purple-600">✓</span> Finance & Accounting</li>
                  <li className="flex items-center gap-2"><span className="text-purple-600">✓</span> Human Resources</li>
                  <li className="flex items-center gap-2"><span className="text-purple-600">✓</span> Administration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
