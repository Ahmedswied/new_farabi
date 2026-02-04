'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCrewStore } from '@/store/useCrewStore';
import { Trash2, Edit2, Plus, X, Check } from 'lucide-react';

interface CrewFormData {
  name: string;
  specialization: string;
  certifications: string;
  experience: number;
  availability: boolean;
}

export default function CrewManagementPage() {
  const router = useRouter();
  const { crews, addCrew, updateCrew, deleteCrew } = useCrewStore();
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<CrewFormData>({
    name: '',
    specialization: '',
    certifications: '',
    experience: 0,
    availability: true
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      await updateCrew(editingId, formData);
    } else {
      await addCrew({
        ...formData,
        id: Date.now().toString()
      } as any);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      specialization: '',
      certifications: '',
      experience: 0,
      availability: true
    });
    setShowForm(false);
    setEditingId(null);
  };

  const startEdit = (crew: any) => {
    setFormData({
      name: crew.name,
      specialization: crew.specialization,
      certifications: crew.certifications,
      experience: crew.experience,
      availability: crew.availability
    });
    setEditingId(crew.id);
    setShowForm(true);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Crew Management</h1>
          <p className="text-gray-600 mt-1">Add, edit, and manage crew members</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Crew Member
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {editingId ? 'Edit Crew Member' : 'Add New Crew Member'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Crew member name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Specialization *</label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={e => setFormData({...formData, specialization: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., Welding, Carpentry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Certifications *</label>
                <input
                  type="text"
                  value={formData.certifications}
                  onChange={e => setFormData({...formData, certifications: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., OSHA, NEBOSH"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Experience (Years)</label>
                <input
                  type="number"
                  value={formData.experience}
                  onChange={e => setFormData({...formData, experience: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="availability"
                checked={formData.availability}
                onChange={e => setFormData({...formData, availability: e.target.checked})}
                className="rounded"
              />
              <label htmlFor="availability" className="text-sm font-medium">
                Available for assignment
              </label>
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

      {/* Crew List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Specialization</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Certifications</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Experience</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {crews.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No crew members yet. Add one to get started!
                  </td>
                </tr>
              ) : (
                crews.map(crew => (
                  <tr key={crew.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{crew.name}</td>
                    <td className="px-6 py-4">{crew.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{crew.totalWorkers} workers</td>
                    <td className="px-6 py-4">{crew.isActive ? 'Active' : 'Inactive'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        crew.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {crew.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => startEdit(crew)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => crew.id && deleteCrew(crew.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
