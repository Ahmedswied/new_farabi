'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCrewStore } from '@/store/useCrewStore';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function RequestsPage() {
  const router = useRouter();
  const { requests, updateRequest } = useCrewStore();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'in-review' | 'contacted' | 'closed'>('all');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const filteredRequests = filterStatus === 'all' 
    ? requests 
    : requests.filter(r => r.status === filterStatus);

  const handleStatusChange = (id: string | undefined, newStatus: 'new' | 'in-review' | 'contacted' | 'closed') => {
    if (!id) return;
    const request = requests.find(r => r.id === id);
    if (request) {
      updateRequest(id, { ...request, status: newStatus });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-review':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Crew Requests</h1>
        <p className="text-gray-600 mt-1">Manage and respond to crew requests from clients</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {(['all', 'new', 'in-review', 'contacted', 'closed'] as const).map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            {status !== 'all' && ` (${requests.filter(r => r.status === status as typeof filterStatus).length})`}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            No requests found for the selected filter.
          </div>
        ) : (
          filteredRequests.map(request => (
            <div
              key={request.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <button
                onClick={() => {
                  if (request.id) {
                    setExpandedId(expandedId === request.id ? null : request.id);
                  }
                }}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{request.companyName}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {request.projectType} • {request.requiredCrews} crew members • {request.country}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedId === request.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {expandedId === request.id && (
                <div className="px-6 py-4 bg-gray-50 border-t space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Request Details</h4>
                      <dl className="space-y-2 text-sm">
                        <div>
                          <dt className="text-gray-600">Company</dt>
                          <dd className="font-medium">{request.companyName}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600">Email</dt>
                          <dd className="font-medium">{request.email}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600">Phone</dt>
                          <dd className="font-medium">Not provided</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600">Country</dt>
                          <dd className="font-medium">{request.country}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600">Project Type</dt>
                          <dd className="font-medium">{request.projectType}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600">Crew Size</dt>
                          <dd className="font-medium">{request.requiredCrews} members</dd>
                        </div>
                      </dl>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Message</h4>
                      <p className="text-sm text-gray-700 bg-white p-4 rounded border">
                        {request.message || 'No additional details provided'}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Update Status</h4>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => handleStatusChange(request.id, 'new')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          request.status === 'new'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        }`}
                      >
                        New
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'in-review')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          request.status === 'in-review'
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                      >
                        In Review
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'contacted')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          request.status === 'contacted'
                            ? 'bg-green-500 text-white'
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'closed')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          request.status === 'closed'
                            ? 'bg-red-500 text-white'
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                      >
                        Closed
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
