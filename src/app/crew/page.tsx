'use client';

import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StandardCrew = () => {
  const [expandedPositions, setExpandedPositions] = useState<string[]>([]);

  const crewStructure = [
    {
      id: 'project-manager',
      title: 'Project Manager',
      count: 1,
      description: 'Overall project supervision and coordination',
      certifications: ['PMP', 'NEBOSH', 'OSHA 30']
    },
    {
      id: 'site-engineer',
      title: 'Site Engineers',
      count: 2,
      description: 'Technical supervision and quality assurance',
      certifications: ['Civil Engineering Degree', 'OSHA 30', 'ISO 9001']
    },
    {
      id: 'supervisor',
      title: 'Supervisors',
      count: 4,
      description: 'Crew supervision and daily planning',
      certifications: ['First Aid', 'NEBOSH', 'HSE Certification']
    },
    {
      id: 'safety-officer',
      title: 'Safety Officer',
      count: 1,
      description: 'Safety compliance and incident management',
      certifications: ['NEBOSH', 'OSHA', 'Risk Assessment']
    },
    {
      id: 'skilled-workers',
      title: 'Skilled Workers',
      count: 50,
      description: 'Experienced craftsmen and technicians',
      certifications: ['Trade Certification', 'Safety Training', 'Equipment Operation']
    },
    {
      id: 'general-laborers',
      title: 'General Laborers',
      count: 25,
      description: 'Support workers with basic safety training',
      certifications: ['Safety Induction', 'First Aid', 'Health Certification']
    },
    {
      id: 'medic',
      title: 'Medical Officer',
      count: 1,
      description: 'On-site medical support',
      certifications: ['RN/Paramedic', 'First Aid Trainer', 'Emergency Response']
    },
    {
      id: 'logistics',
      title: 'Logistics Coordinator',
      count: 1,
      description: 'Materials and equipment management',
      certifications: ['Logistics Certification', 'Equipment Handling', 'Inventory Management']
    },
    {
      id: 'admin',
      title: 'Administrative Staff',
      count: 4,
      description: 'Documentation and payroll management',
      certifications: ['Data Management', 'Office Management', 'Communication Skills']
    }
  ];

  const togglePosition = (id: string) => {
    setExpandedPositions(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Standard 88-Person Crew</h2>
        <p className="text-lg">Fully trained and certified workforce ready for any project</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-sm text-gray-600">Total Crew Size</p>
          <p className="text-3xl font-bold text-blue-600">88</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <p className="text-sm text-gray-600">Management</p>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
          <p className="text-sm text-gray-600">Skilled Workers</p>
          <p className="text-3xl font-bold text-yellow-600">50</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <p className="text-sm text-gray-600">Support</p>
          <p className="text-3xl font-bold text-purple-600">30</p>
        </div>
      </div>

      <div className="space-y-4">
        {crewStructure.map(position => (
          <div key={position.id} className="border rounded-lg overflow-hidden bg-white shadow">
            <button
              onClick={() => togglePosition(position.id)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold">{position.title}</h3>
                <p className="text-gray-600 text-sm">{position.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-600">{position.count}</span>
                {expandedPositions.includes(position.id) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {expandedPositions.includes(position.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t">
                <h4 className="font-semibold mb-3">Required Certifications:</h4>
                <ul className="space-y-2">
                  {position.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mt-12">
        <h3 className="text-2xl font-bold mb-4">Custom Crew Configuration</h3>
        <p className="text-gray-700 mb-4">
          Need a different crew composition? We can customize the crew based on your project requirements:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Adjust the number of supervisors and engineers
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Select specialized skills (welding, carpentry, electrical, mechanical)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Add specialized equipment operators
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Scale up or down based on project timeline
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function CrewPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <StandardCrew />
      </div>
    </Layout>
  );
}
