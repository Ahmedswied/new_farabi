'use client';

import { Layout } from '@/components/layout/Layout';
import { useTranslation } from 'next-i18next';
import { MapPin, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  department: string;
  location: string;
  image?: string;
}

const OrganizationChart = ({ location, members }: { location: string; members: TeamMember[] }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold">{location} Headquarters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              {member.name.charAt(0)}
            </div>
            <h4 className="font-semibold text-lg text-center mb-2">{member.name}</h4>
            <p className="text-blue-600 font-medium text-center mb-2">{member.position}</p>
            <p className="text-gray-600 text-sm text-center">{member.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OrganizationPage() {
  const cairoTeam: TeamMember[] = [
    {
      name: 'Ahmed Hassan',
      position: 'General Manager',
      department: 'Executive Management',
      location: 'Cairo'
    },
    {
      name: 'Fatima Mohammad',
      position: 'Operations Manager',
      department: 'Operations',
      location: 'Cairo'
    },
    {
      name: 'Omar Khalil',
      position: 'Finance Director',
      department: 'Finance & Accounting',
      location: 'Cairo'
    },
    {
      name: 'Sarah Naguib',
      position: 'HR Manager',
      department: 'Human Resources',
      location: 'Cairo'
    },
    {
      name: 'Mohamed Saad',
      position: 'Sales Manager',
      department: 'Business Development',
      location: 'Cairo'
    },
    {
      name: 'Layla Amin',
      position: 'QA Director',
      department: 'Quality Assurance',
      location: 'Cairo'
    },
    {
      name: 'Karim Nassar',
      position: 'Projects Manager',
      department: 'Project Management',
      location: 'Cairo'
    },
    {
      name: 'Dina Elkhatib',
      position: 'Safety Manager',
      department: 'Health & Safety',
      location: 'Cairo'
    }
  ];

  const elDabaaTeam: TeamMember[] = [
    {
      name: 'Ibrahim Rashid',
      position: 'Regional Manager',
      department: 'Regional Operations',
      location: 'El Dabaa'
    },
    {
      name: 'Amira Hassan',
      position: 'Site Supervisor',
      department: 'On-Site Operations',
      location: 'El Dabaa'
    },
    {
      name: 'Youssef Ahmed',
      position: 'Logistics Coordinator',
      department: 'Logistics',
      location: 'El Dabaa'
    },
    {
      name: 'Hana Zahra',
      position: 'Human Resources Officer',
      department: 'HR & Admin',
      location: 'El Dabaa'
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Organization Structure</h1>
          <p className="text-lg text-gray-700">
            Our management and operations team across all locations
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6 rounded-lg mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Executive & Central Functions</h2>
          </div>
          <p>
            Based in Cairo, our headquarters manages all corporate functions and strategic operations across the region.
          </p>
        </div>

        <OrganizationChart location="Cairo" members={cairoTeam} />

        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8 px-6 rounded-lg mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Regional Operations</h2>
          </div>
          <p>
            Our El Dabaa facility handles on-site operations, logistics, and crew management for mega-projects in the North Coast region.
          </p>
        </div>

        <OrganizationChart location="El Dabaa" members={elDabaaTeam} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">Cairo HQ</h3>
            <p className="text-gray-700 text-sm mb-4">
              Headquarters managing corporate strategy, finance, HR, sales, and quality assurance.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Strategic Planning</li>
              <li>✓ Financial Management</li>
              <li>✓ Business Development</li>
              <li>✓ Quality Standards</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
            <h3 className="text-xl font-bold mb-3">El Dabaa Operations</h3>
            <p className="text-gray-700 text-sm mb-4">
              Regional hub for on-site management, crew coordination, and logistics.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Crew Management</li>
              <li>✓ Site Supervision</li>
              <li>✓ Logistics</li>
              <li>✓ Local Administration</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-bold mb-3">Field Operations</h3>
            <p className="text-gray-700 text-sm mb-4">
              Direct crew supervision and project execution across multiple client projects.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Project Management</li>
              <li>✓ Safety Compliance</li>
              <li>✓ Quality Control</li>
              <li>✓ Daily Operations</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
