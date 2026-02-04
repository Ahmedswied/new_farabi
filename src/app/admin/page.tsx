'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, FileText, Settings, BarChart3, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useCrewStore } from '@/store/useCrewStore';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { requests, crews } = useCrewStore();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const stats = [
    {
      title: 'New Requests',
      value: requests.filter(r => r.status === 'new').length,
      icon: AlertCircle,
      color: 'bg-yellow-100 text-yellow-600',
      href: '/admin/requests'
    },
    {
      title: 'Total Crews',
      value: crews.length,
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      href: '/admin/crew'
    },
    {
      title: 'All Requests',
      value: requests.length,
      icon: FileText,
      color: 'bg-purple-100 text-purple-600',
      href: '/admin/requests'
    },
    {
      title: 'Services',
      value: 4,
      icon: Settings,
      color: 'bg-green-100 text-green-600',
      href: '/admin/services'
    }
  ];

  const recentRequests = requests.slice(-5).reverse();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to the ALFarabi Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link key={idx} href={stat.href}>
              <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold">Quick Actions</h2>

          <Link href="/admin/crew">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Manage Crews</h3>
              <p className="text-sm text-gray-600">Add, edit, or remove crews</p>
            </div>
          </Link>

          <Link href="/admin/job-categories">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Job Categories</h3>
              <p className="text-sm text-gray-600">Manage job categories and skills</p>
            </div>
          </Link>

          <Link href="/admin/services">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <p className="text-sm text-gray-600">Edit service offerings</p>
            </div>
          </Link>

          <Link href="/admin/brochure">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Brochure</h3>
              <p className="text-sm text-gray-600">Generate PDF brochure</p>
            </div>
          </Link>
        </div>

        {/* Recent Requests */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Requests</h2>
              <Link href="/admin/requests" className="text-blue-600 text-sm hover:underline">
                View All
              </Link>
            </div>

            {recentRequests.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No requests yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentRequests.map((request, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {request.companyName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {request.projectType} • {request.requiredCrews} crew members
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          request.status === 'new'
                            ? 'bg-yellow-100 text-yellow-800'
                            : request.status === 'in-review'
                            ? 'bg-blue-100 text-blue-800'
                            : request.status === 'contacted'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{request.email}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Average Response Time</p>
              <p className="text-3xl font-bold">4 hrs</p>
            </div>
            <Clock className="w-12 h-12 opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Request Completion</p>
              <p className="text-3xl font-bold">92%</p>
            </div>
            <BarChart3 className="w-12 h-12 opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
