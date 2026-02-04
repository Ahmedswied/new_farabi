'use client';

import { Layout } from '@/components/layout/Layout';
import { Calendar, Users, Briefcase, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  type: string;
  duration: string;
  crewSize: number;
  status: 'completed' | 'ongoing' | 'upcoming';
  description: string;
  highlights: string[];
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 'new-admin-capital',
      name: 'New Administrative Capital - Phase 1',
      client: 'Egyptian Government',
      location: 'New Cairo',
      type: 'Construction',
      duration: '18 months',
      crewSize: 88,
      status: 'ongoing',
      description: 'Major construction project for government administrative buildings',
      highlights: [
        'Zero lost-time accidents',
        'On-schedule delivery',
        '100% safety compliance',
        'Advanced equipment utilization'
      ]
    },
    {
      id: 'port-expansion',
      name: 'Port Authority Expansion',
      client: 'Ain Sokhna Port Authority',
      location: 'Ain Sokhna',
      type: 'Infrastructure',
      duration: '24 months',
      crewSize: 88,
      status: 'ongoing',
      description: 'Port terminal expansion and modernization project',
      highlights: [
        'Complex logistics coordination',
        'Maritime safety certifications',
        'Equipment handling expertise',
        'International standards compliance'
      ]
    },
    {
      id: 'resort-complex',
      name: 'Red Sea Resort Complex',
      client: 'Private Developer',
      location: 'Red Sea',
      type: 'Hospitality',
      duration: '14 months',
      crewSize: 65,
      status: 'completed',
      description: 'Luxury resort development with accommodation and dining facilities',
      highlights: [
        'Successfully completed ahead of schedule',
        'High-end finishing standards',
        'Accommodation support for 85 workers',
        'Full safety record maintained'
      ]
    },
    {
      id: 'pipeline-project',
      name: 'Gas Pipeline Infrastructure',
      client: 'National Gas Authority',
      location: 'Western Desert',
      type: 'Energy',
      duration: '12 months',
      crewSize: 88,
      status: 'completed',
      description: 'Natural gas pipeline installation and commissioning',
      highlights: [
        'High-pressure equipment handling',
        'Specialized welding teams',
        'Environmental compliance',
        'Remote site expertise'
      ]
    },
    {
      id: 'tech-park',
      name: 'Technology Park Development',
      client: 'Smart Cities Initiative',
      location: 'Smart Village',
      type: 'Technology Infrastructure',
      duration: '20 months',
      crewSize: 88,
      status: 'ongoing',
      description: 'Data center and office complex for tech sector development',
      highlights: [
        'Specialized electrical installation',
        'HVAC and cooling systems',
        'Data center precision work',
        'Future-ready infrastructure'
      ]
    },
    {
      id: 'highway-upgrade',
      name: 'Cairo Ring Road Upgrade',
      client: 'Ministry of Transportation',
      location: 'Greater Cairo',
      type: 'Transportation',
      duration: '16 months',
      crewSize: 88,
      status: 'upcoming',
      description: 'Major highway upgrade and widening project',
      highlights: [
        'Heavy equipment operation',
        'Traffic management coordination',
        'Road safety standards',
        'Schedule precision required'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle className="w-5 h-5" />;
    return null;
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-700">
            Successful execution of complex projects across Egypt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Completed</h3>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">3</p>
            <p className="text-gray-600 text-sm">Projects delivered successfully</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">In Progress</h3>
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-gray-600 text-sm">Active projects on-going</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Pipeline</h3>
              <Calendar className="w-6 h-6 text-amber-600" />
            </div>
            <p className="text-3xl font-bold text-amber-600">1</p>
            <p className="text-gray-600 text-sm">Upcoming projects</p>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-blue-600"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {getStatusIcon(project.status)}
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Crew Size</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.crewSize}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Project Highlights:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mt-12">
          <h3 className="text-2xl font-bold mb-4">Why Our Projects Succeed</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">Experienced crew with proven track record</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">Advanced equipment and technology</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">Comprehensive safety protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">Strict quality assurance standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">On-time project delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </span>
              <span className="text-gray-700">Excellent communication and reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
