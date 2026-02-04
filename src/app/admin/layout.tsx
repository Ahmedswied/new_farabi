'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminNavigation = ({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Crew Management', href: '/admin/crew' },
    { name: 'Job Categories', href: '/admin/job-categories' },
    { name: 'Services', href: '/admin/services' },
    { name: 'Projects', href: '/admin/projects' },
    { name: 'Requests', href: '/admin/requests' },
    { name: 'Brochure', href: '/admin/brochure' }
  ];

  if (!isLoggedIn) return null;

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">ALFarabi Admin</h1>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition-colors w-full justify-center mt-4"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken') !== null;
    }
    return false;
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    router.push('/admin/login');
  };

  if (!isLoggedIn) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
