import { Layout } from '@/components/layout/Layout';
import { Calendar, Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Projects | ALFarabi International Group',
  description: 'Explore our successful projects across Egypt - from construction to infrastructure.',
};

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
  icon: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const statusConfig = {
    completed: { color: 'from-green-500 to-emerald-600', icon: '✓', label: 'Completed' },
    ongoing: { color: 'from-blue-500 to-blue-600', icon: '⚙️', label: 'In Progress' },
    upcoming: { color: 'from-amber-500 to-orange-600', icon: '📋', label: 'Upcoming' }
  };

  const config = statusConfig[project.status];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up border-t-4 border-blue-600">
      <div className={`bg-gradient-to-r ${config.color} text-white p-6`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-opacity-90 text-white">{project.client}</p>
          </div>
          <div className="text-4xl">{project.icon}</div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-6">{project.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Location</p>
            <p className="font-bold text-gray-900">{project.location}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Type</p>
            <p className="font-bold text-gray-900">{project.type}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Duration</p>
            <p className="font-bold text-gray-900">{project.duration}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Crew Size</p>
            <p className="font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-4 h-4" /> {project.crewSize}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Key Highlights</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.color}`}>
          <span>{config.icon}</span>
          {config.label}
        </span>
      </div>
    </div>
  );
};

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
      description: 'Major construction project for government administrative buildings featuring advanced infrastructure.',
      highlights: [
        'Zero lost-time accidents',
        'On-schedule delivery',
        '100% safety compliance',
        'Advanced equipment utilization'
      ],
      icon: '🏗️'
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
      description: 'Port terminal expansion and modernization with specialized maritime operations.',
      highlights: [
        'Complex logistics coordination',
        'Maritime safety certifications',
        'Equipment handling expertise',
        'International standards compliance'
      ],
      icon: '🚢'
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
      description: 'Luxury resort development with accommodation and premium dining facilities.',
      highlights: [
        'Successfully completed ahead of schedule',
        'High-end finishing standards',
        'Accommodation support for 85 workers',
        'Full safety record maintained'
      ],
      icon: '🏨'
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
      description: 'Natural gas pipeline installation and commissioning in remote locations.',
      highlights: [
        'High-pressure equipment handling',
        'Specialized welding teams',
        'Environmental compliance',
        'Remote site expertise'
      ],
      icon: '⚡'
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
      description: 'Data center and office complex for digital transformation initiative.',
      highlights: [
        'Specialized electrical installation',
        'HVAC and cooling systems',
        'Data center precision work',
        'Future-ready infrastructure'
      ],
      icon: '💻'
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
      description: 'Major highway upgrade and widening project enhancing Cairo transportation network.',
      highlights: [
        'Heavy equipment operation',
        'Traffic management coordination',
        'Road safety standards',
        'Schedule precision required'
      ],
      icon: '🛣️'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100">Successful execution of complex projects across Egypt and the region</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-children">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Completed</h3>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-green-600 mb-2">3</p>
              <p className="text-gray-600">Projects delivered with excellence</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">In Progress</h3>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
              <p className="text-gray-600">Active projects on-going</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Pipeline</h3>
                <Calendar className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-4xl font-bold text-amber-600 mb-2">1</p>
              <p className="text-gray-600">Upcoming opportunities</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Project Portfolio</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Why Our Projects Succeed */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-12 border-l-4 border-blue-600 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-10 h-10 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Why Our Projects Succeed</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Experienced Crew</p>
                  <p className="text-gray-700 text-sm">Proven track record with specialized expertise</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Technology</p>
                  <p className="text-gray-700 text-sm">State-of-the-art equipment and tools</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Safety First</p>
                  <p className="text-gray-700 text-sm">Comprehensive protocols and certifications</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Quality Assurance</p>
                  <p className="text-gray-700 text-sm">Strict standards at every stage</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    5
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">On-Time Delivery</p>
                  <p className="text-gray-700 text-sm">Reliable timeline management</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600 text-white font-bold">
                    6
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Communication</p>
                  <p className="text-gray-700 text-sm">Excellent client coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
