'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X, Edit2, Trash2, Check, GripVertical } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  excludes: string[];
  price?: string;
  order: number;
}

export default function ServicesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      title: 'Workforce Supply',
      description: 'Professional workforce for construction and industrial projects',
      includes: ['Skilled workers', 'Safety training', 'Project management', 'Quality assurance'],
      excludes: ['Equipment rental', 'Site accommodation beyond 100km'],
      price: 'Custom',
      order: 1
    },
    {
      id: '2',
      title: 'Equipment Rental',
      description: 'Heavy machinery and equipment for all types of projects',
      includes: ['Equipment delivery', 'Operator training', 'Regular maintenance', 'Insurance'],
      excludes: ['Site preparation', 'Equipment modification'],
      order: 2
    },
    {
      id: '3',
      title: 'Accommodation Services',
      description: 'Complete accommodation solutions for workforce',
      includes: ['Housing facilities', 'Meals', 'Transportation', 'Security'],
      excludes: ['Personal expenses', 'Entertainment'],
      price: 'Per head',
      order: 3
    },
    {
      id: '4',
      title: 'Engineering & Consulting',
      description: 'Technical expertise and project consulting',
      includes: ['Project planning', 'Technical supervision', 'Quality management', 'Safety consulting'],
      excludes: ['Design services', 'Permitting'],
      order: 4
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    includes: '',
    excludes: '',
    price: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const includesArray = formData.includes.split('\n').map(s => s.trim()).filter(s => s);
    const excludesArray = formData.excludes.split('\n').map(s => s.trim()).filter(s => s);

    if (editingId) {
      setServices(services.map(svc =>
        svc.id === editingId
          ? {
              ...svc,
              title: formData.title,
              description: formData.description,
              includes: includesArray,
              excludes: excludesArray,
              price: formData.price
            }
          : svc
      ));
    } else {
      setServices([
        ...services,
        {
          id: Date.now().toString(),
          title: formData.title,
          description: formData.description,
          includes: includesArray,
          excludes: excludesArray,
          price: formData.price,
          order: services.length + 1
        }
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      includes: '',
      excludes: '',
      price: ''
    });
    setShowForm(false);
    setEditingId(null);
  };

  const startEdit = (service: Service) => {
    setFormData({
      title: service.title,
      description: service.description,
      includes: service.includes.join('\n'),
      excludes: service.excludes.join('\n'),
      price: service.price || ''
    });
    setEditingId(service.id);
    setShowForm(true);
  };

  const deleteService = (id: string) => {
    if (confirm('Are you sure?')) {
      setServices(services.filter(svc => svc.id !== id));
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-gray-600 mt-1">Manage service offerings</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Service
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {editingId ? 'Edit Service' : 'Add New Service'}
            </h2>
            <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Service title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., $5000, Per head, Custom"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Service description"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What's Included (one per line)</label>
              <textarea
                value={formData.includes}
                onChange={e => setFormData({...formData, includes: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Item 1&#10;Item 2&#10;Item 3"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What's Not Included (one per line)</label>
              <textarea
                value={formData.excludes}
                onChange={e => setFormData({...formData, excludes: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Exclusion 1&#10;Exclusion 2&#10;Exclusion 3"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                <Check className="w-5 h-5" />
                {editingId ? 'Update' : 'Add'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services List */}
      <div className="space-y-4">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-1">{service.description}</p>
                {service.price && <p className="text-blue-600 font-semibold mt-2">Price: {service.price}</p>}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(service)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deleteService(service.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Included:</h4>
                <ul className="space-y-1">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-green-600">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Not Included:</h4>
                <ul className="space-y-1">
                  {service.excludes.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-red-600">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
