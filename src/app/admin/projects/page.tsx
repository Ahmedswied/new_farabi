'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X, Edit2, Trash2, Check } from 'lucide-react';

interface AdminProject {
  id: string;
  name: string;
  client: string;
  location: string;
  type: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  duration: string;
  crewSize: number;
  description: string;
}

export default function ProjectsManagementPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<AdminProject[]>([
    {
      id: '1',
      name: 'New Administrative Capital - Phase 1',
      client: 'Egyptian Government',
      location: 'New Cairo',
      type: 'Construction',
      status: 'ongoing',
      duration: '18 months',
      crewSize: 88,
      description: 'Major construction project for government administrative buildings'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    location: '',
    type: '',
    status: 'upcoming' as const,
    duration: '',
    crewSize: '',
    description: ''
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

    if (editingId) {
      setProjects(projects.map(p =>
        p.id === editingId
          ? {
              ...p,
              ...formData,
              crewSize: parseInt(formData.crewSize) || 0
            }
          : p
      ));
    } else {
      setProjects([
        ...projects,
        {
          id: Date.now().toString(),
          ...formData,
          crewSize: parseInt(formData.crewSize) || 0
        }
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      client: '',
      location: '',
      type: '',
      status: 'upcoming',
      duration: '',
      crewSize: '',
      description: ''
    });
    setShowForm(false);
    setEditingId(null);
  };

  const startEdit = (project: AdminProject) => {
    setFormData({
      name: project.name,
      client: project.client,
      location: project.location,
      type: project.type,
      status: project.status,
      duration: project.duration,
      crewSize: project.crewSize.toString(),
      description: project.description
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const deleteProject = (id: string) => {
    if (confirm('Are you sure?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-600 mt-1">Manage completed and ongoing projects</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Project
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {editingId ? 'Edit Project' : 'Add New Project'}
            </h2>
            <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Client *</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={e => setFormData({...formData, client: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <input
                  type="text"
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Duration *</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={e => setFormData({...formData, duration: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., 12 months"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Crew Size *</label>
                <input
                  type="number"
                  value={formData.crewSize}
                  onChange={e => setFormData({...formData, crewSize: e.target.value})}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Status *</label>
                <select
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value as any})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Project</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Client</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Crew Size</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No projects yet.
                  </td>
                </tr>
              ) : (
                projects.map(project => (
                  <tr key={project.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-gray-600">{project.location}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{project.client}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'ongoing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{project.crewSize}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => startEdit(project)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
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
