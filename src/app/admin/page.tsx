'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, FileText, Settings, BarChart3, Clock, AlertCircle, Download, Plus, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useCrewStore } from '@/store/useCrewStore';
import { generatePDF } from '@/lib/pdf-generator';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
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

  const handleGeneratePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin mb-4"><BarChart3 className="w-12 h-12 text-blue-600" /></div>
          <p className="text-gray-600 font-semibold">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'New Requests',
      value: requests.filter(r => r.status === 'new').length,
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-600',
      href: '/admin/requests',
      change: '+5 this week'
    },
    {
      title: 'Total Crews',
      value: crews.length,
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/crew',
      change: 'Active crews'
    },
    {
      title: 'All Requests',
      value: requests.length,
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/requests',
      change: requests.filter(r => r.status === 'contacted').length + ' contacted'
    },
    {
      title: 'Conversion Rate',
      value: requests.length > 0 ? Math.round((requests.filter(r => r.status === 'contacted').length / requests.length) * 100) : 0,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      href: '/admin/requests',
      change: '%'
    }
  ];

  const recentRequests = requests.slice(-5).reverse();
  const completedRequests = requests.filter(r => r.status === 'contacted').length;
  const avgResponseTime = 4.2; // hours

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between animate-fade-in-down">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back to ALFarabi Admin Panel</p>
          </div>
          <button
            onClick={handleGeneratePDF}
            disabled={isGeneratingPDF}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            {isGeneratingPDF ? 'Generating...' : 'Generate PDF'}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Link key={idx} href={stat.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer animate-fade-in-up">
                  <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {stat.change && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{stat.change}</span>}
                    </div>
                    <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    <p className="text-4xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6"><Plus className="w-6 h-6" /> Quick Actions</h2>

            {[
              { href: '/admin/crew', title: 'Manage Crews', desc: 'Add, edit or remove crews', icon: '👥', color: 'from-blue-500 to-blue-600' },
              { href: '/admin/job-categories', title: 'Job Categories', desc: 'Manage skills & categories', icon: '📂', color: 'from-purple-500 to-purple-600' },
              { href: '/admin/services', title: 'Services', desc: 'Edit service offerings', icon: '⚙️', color: 'from-green-500 to-green-600' },
              { href: '/admin/brochure', title: 'Brochure', desc: 'Generate PDF brochure', icon: '📄', color: 'from-orange-500 to-orange-600' }
            ].map((action, idx) => (
              <Link key={idx} href={action.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer group animate-fade-in-up">
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl group-hover:scale-110 transition-transform`}>{action.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Requests */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Recent Requests</h2>
                  <p className="text-sm text-gray-600 mt-1">Latest crew requests from clients</p>
                </div>
                <Link href="/admin/requests" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  View All →
                </Link>
              </div>

              {recentRequests.length === 0 ? (
                <div className="text-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No requests yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentRequests.map((request, idx) => {
                    const statusConfig = {
                      'new': { bg: 'bg-yellow-50', border: 'border-l-4 border-yellow-500', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800' },
                      'in-review': { bg: 'bg-blue-50', border: 'border-l-4 border-blue-500', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
                      'contacted': { bg: 'bg-green-50', border: 'border-l-4 border-green-500', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
                      'completed': { bg: 'bg-gray-50', border: 'border-l-4 border-gray-500', text: 'text-gray-700', badge: 'bg-gray-100 text-gray-800' }
                    };
                    const config = statusConfig[request.status as keyof typeof statusConfig] || statusConfig['new'];
                    return (
                      <div key={idx} className={`${config.bg} ${config.border} rounded-lg p-4 hover:shadow-md transition-all duration-300`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-gray-900">{request.companyName}</h3>
                            <p className="text-sm text-gray-600 mt-1">{request.projectType} • {request.requiredCrews} crew members</p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${config.badge}`}>
                            {request.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{request.email}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white overflow-hidden relative animate-fade-in-up">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 bg-opacity-20 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 opacity-70" />
                <span className="text-sm bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full">This week</span>
              </div>
              <p className="text-blue-100 text-sm font-medium mb-1">Average Response Time</p>
              <p className="text-4xl font-bold">{avgResponseTime.toFixed(1)}h</p>
              <p className="text-blue-100 text-xs mt-2">Fast and reliable support</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white overflow-hidden relative animate-fade-in-up">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-400 bg-opacity-20 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle2 className="w-8 h-8 opacity-70" />
                <span className="text-sm bg-green-600 bg-opacity-50 px-3 py-1 rounded-full">Completion Rate</span>
              </div>
              <p className="text-green-100 text-sm font-medium mb-1">Requests Contacted</p>
              <p className="text-4xl font-bold">{completedRequests}/{requests.length}</p>
              <p className="text-green-100 text-xs mt-2">{requests.length > 0 ? Math.round((completedRequests / requests.length) * 100) : 0}% completion</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-8 text-white overflow-hidden relative animate-fade-in-up">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400 bg-opacity-20 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 opacity-70" />
                <span className="text-sm bg-purple-600 bg-opacity-50 px-3 py-1 rounded-full">Crews</span>
              </div>
              <p className="text-purple-100 text-sm font-medium mb-1">Total Crews Available</p>
              <p className="text-4xl font-bold">{crews.length}</p>
              <p className="text-purple-100 text-xs mt-2">Ready for deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
