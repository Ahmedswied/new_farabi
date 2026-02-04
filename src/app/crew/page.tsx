import { Layout } from '@/components/layout/Layout';
import { MapPin, Users, Briefcase, Target } from 'lucide-react';

export const metadata = {
  title: 'Our Crew | ALFarabi International Group',
  description: 'Meet our professional 88-person crew structure and customizable team configurations.',
};

interface CrewPosition {
  id: string;
  title: string;
  count: number;
  description: string;
  certifications: string[];
  emoji: string;
}

const CrewCard = ({ position }: { position: CrewPosition }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up border-l-4 border-blue-600">
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-xl font-bold">{position.title}</h4>
        <div className="text-3xl">{position.emoji}</div>
      </div>
      <p className="text-blue-100">{position.count}x Position(s)</p>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">{position.description}</p>
      <div>
        <h5 className="font-semibold text-gray-900 mb-3">Certifications:</h5>
        <ul className="space-y-2">
          {position.certifications.map((cert, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="text-blue-600">✓</span> {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function CrewPage() {
  const crewStructure: CrewPosition[] = [
    {
      id: 'project-manager',
      title: 'Project Manager',
      count: 1,
      description: 'Overall project supervision and coordination',
      certifications: ['PMP', 'NEBOSH', 'OSHA 30'],
      emoji: '👔'
    },
    {
      id: 'site-engineer',
      title: 'Site Engineers',
      count: 2,
      description: 'Technical supervision and quality assurance',
      certifications: ['Civil Engineering Degree', 'OSHA 30', 'ISO 9001'],
      emoji: '🛠️'
    },
    {
      id: 'supervisor',
      title: 'Supervisors',
      count: 4,
      description: 'Crew supervision and daily planning',
      certifications: ['First Aid', 'NEBOSH', 'HSE Certification'],
      emoji: '👷'
    },
    {
      id: 'safety-officer',
      title: 'Safety Officer',
      count: 1,
      description: 'Safety compliance and incident management',
      certifications: ['NEBOSH', 'OSHA', 'Risk Assessment'],
      emoji: '🛡️'
    },
    {
      id: 'skilled-workers',
      title: 'Skilled Workers',
      count: 50,
      description: 'Experienced craftsmen and technicians',
      certifications: ['Trade Certification', 'Safety Training', 'Equipment Operation'],
      emoji: '⚒️'
    },
    {
      id: 'general-laborers',
      title: 'General Laborers',
      count: 25,
      description: 'Support workers with basic safety training',
      certifications: ['Safety Induction', 'First Aid', 'Health Certification'],
      emoji: '💪'
    },
    {
      id: 'medic',
      title: 'Medical Officer',
      count: 1,
      description: 'On-site medical support',
      certifications: ['RN/Paramedic', 'First Aid Trainer', 'Emergency Response'],
      emoji: '🏥'
    },
    {
      id: 'logistics',
      title: 'Logistics Coordinator',
      count: 1,
      description: 'Materials and equipment management',
      certifications: ['Logistics Certification', 'Equipment Handling', 'Inventory Management'],
      emoji: '📦'
    },
    {
      id: 'admin',
      title: 'Administrative Staff',
      count: 4,
      description: 'Documentation and payroll management',
      certifications: ['Data Management', 'Office Management', 'Communication Skills'],
      emoji: '📋'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Professional Team</h1>
          <p className="text-xl text-blue-100">88-member crew with expert certifications ready for any challenge</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 stagger-children">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 animate-fade-in-up">
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Total Crew</p>
              <p className="text-5xl font-bold text-blue-600">88</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 animate-fade-in-up">
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Management</p>
              <p className="text-5xl font-bold text-orange-600">8</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 animate-fade-in-up">
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Skilled Workers</p>
              <p className="text-5xl font-bold text-green-600">50</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600 animate-fade-in-up">
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Support Staff</p>
              <p className="text-5xl font-bold text-indigo-600">30</p>
            </div>
          </div>

          {/* Crew Structure Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Crew Structure & Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {crewStructure.map(position => (
                <CrewCard key={position.id} position={position} />
              ))}
            </div>
          </div>

          {/* Custom Configuration */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 rounded-xl shadow-xl animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6">Custom Crew Configuration</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Need a different crew composition? We can customize based on your specific project requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Flexible Roles</h4>
                  <p className="text-blue-100">Adjust supervisors and engineers ratio based on project needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Specialized Skills</h4>
                  <p className="text-blue-100">Welding, carpentry, electrical, mechanical, and more</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Scalability</h4>
                  <p className="text-blue-100">Scale up or down based on timeline and project scope</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Equipment Operators</h4>
                  <p className="text-blue-100">Specialized machinery and heavy equipment operators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
