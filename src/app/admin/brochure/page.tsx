'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Download, FileText } from 'lucide-react';

export default function BrochureGeneratorPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [selectedSections, setSelectedSections] = useState({
    cover: true,
    aboutUs: true,
    services: true,
    crew: true,
    projects: true,
    contact: true
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleGeneratePDF = async () => {
    setGenerating(true);
    try {
      // In a real app, this would call a backend API to generate PDF
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create a mock PDF (in production, use jsPDF or similar)
      alert('PDF brochure generated! (This is a demo)');
      // window.location.href = '/api/generate-brochure-pdf';
    } catch (error) {
      alert('Error generating PDF');
    } finally {
      setGenerating(false);
    }
  };

  const handleCheckbox = (section: keyof typeof selectedSections) => {
    setSelectedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const sections = [
    { id: 'cover', label: 'Cover Page', description: 'Professional cover with company branding' },
    { id: 'aboutUs', label: 'About Us', description: 'Company history, mission, and vision' },
    { id: 'services', label: 'Our Services', description: 'Service descriptions and offerings' },
    { id: 'crew', label: 'Crew Structure', description: 'Crew composition and specializations' },
    { id: 'projects', label: 'Portfolio', description: 'Past and ongoing projects' },
    { id: 'contact', label: 'Contact Info', description: 'Contact details and how to request crew' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brochure Generator</h1>
        <p className="text-gray-600 mt-1">Generate professional PDF brochure with selected sections</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Select Brochure Sections</h2>
              <p className="text-gray-600 text-sm mb-6">
                Choose which sections to include in your PDF brochure
              </p>

              <div className="space-y-3">
                {sections.map(section => (
                  <label
                    key={section.id}
                    className="flex items-start gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSections[section.id as keyof typeof selectedSections]}
                      onChange={() => handleCheckbox(section.id as keyof typeof selectedSections)}
                      className="mt-1 w-5 h-5 rounded text-blue-600"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{section.label}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-bold mb-4">Brochure Options</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="format" defaultChecked className="w-4 h-4" />
                    <div>
                      <h4 className="font-semibold">Standard Brochure (PDF)</h4>
                      <p className="text-sm text-gray-600">Letter-size PDF for printing</p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="flex items-center gap-3 cursor-pointer opacity-50">
                    <input type="radio" name="format" disabled className="w-4 h-4" />
                    <div>
                      <h4 className="font-semibold">Digital Brochure (PDF)</h4>
                      <p className="text-sm text-gray-600">Optimized for digital distribution (Coming soon)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6 space-y-6 sticky top-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">PDF</span>
                </div>

                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Sections:</span>
                  <span className="font-semibold">
                    {Object.values(selectedSections).filter(Boolean).length}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Est. Pages:</span>
                  <span className="font-semibold">
                    {Math.ceil(Object.values(selectedSections).filter(Boolean).length * 1.5)}
                  </span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Est. Size:</span>
                  <span className="font-semibold">~2-3 MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleGeneratePDF}
              disabled={generating || Object.values(selectedSections).every(v => !v)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${
                generating || Object.values(selectedSections).every(v => !v)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Download className="w-5 h-5" />
              {generating ? 'Generating...' : 'Generate PDF'}
            </button>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                PDF Features
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ Professional branding</li>
                <li>✓ Print-ready layout</li>
                <li>✓ Company contact info</li>
                <li>✓ High-quality images</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-bold text-yellow-900 mb-2">Note</h3>
        <p className="text-yellow-800 text-sm">
          To fully implement PDF generation, you'll need to install jsPDF or PDFKit library. The demo version simulates PDF generation.
        </p>
      </div>
    </div>
  );
}
