'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X, Edit2, Trash2, Check } from 'lucide-react';

interface JobCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export default function JobCategoriesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<JobCategory[]>([
    {
      id: '1',
      name: 'Construction',
      description: 'General construction and building work',
      skills: ['Carpentry', 'Masonry', 'Concrete work']
    },
    {
      id: '2',
      name: 'Welding & Metal Work',
      description: 'Metal fabrication and welding',
      skills: ['Arc welding', 'MIG welding', 'Metal fabrication']
    },
    {
      id: '3',
      name: 'Electrical',
      description: 'Electrical installation and maintenance',
      skills: ['High voltage', 'Low voltage', 'HVAC']
    },
    {
      id: '4',
      name: 'Heavy Equipment',
      description: 'Equipment operation and maintenance',
      skills: ['Excavator operation', 'Crane operation', 'Equipment maintenance']
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    skills: ''
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

    const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(s => s);

    if (editingId) {
      setCategories(categories.map(cat =>
        cat.id === editingId
          ? {
              ...cat,
              name: formData.name,
              description: formData.description,
              skills: skillsArray
            }
          : cat
      ));
    } else {
      setCategories([
        ...categories,
        {
          id: Date.now().toString(),
          name: formData.name,
          description: formData.description,
          skills: skillsArray
        }
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', skills: '' });
    setShowForm(false);
    setEditingId(null);
  };

  const startEdit = (category: JobCategory) => {
    setFormData({
      name: category.name,
      description: category.description,
      skills: category.skills.join(', ')
    });
    setEditingId(category.id);
    setShowForm(true);
  };

  const deleteCategory = (id: string) => {
    if (confirm('Are you sure?')) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Job Categories</h1>
          <p className="text-gray-600 mt-1">Manage job categories and skills</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Category
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {editingId ? 'Edit Category' : 'Add New Category'}
            </h2>
            <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Job category name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Job category description"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills (comma-separated) *</label>
              <textarea
                value={formData.skills}
                onChange={e => setFormData({...formData, skills: e.target.value})}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Skill 1, Skill 2, Skill 3"
                rows={2}
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

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(category)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">{category.description}</p>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Skills:</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
