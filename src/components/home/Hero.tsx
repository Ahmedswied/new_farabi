import Link from 'next/link';
import { ArrowRight, Users, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/logo.png" alt="ALFarabi logo" className="w-40 h-40 mb-6 animate-bounce-slow" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Professional Workforce Supply
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              ALFarabi International Group provides comprehensive workforce solutions with tested and certified professionals.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2"
              >
                Request a Crew <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-white">
              <Users className="mb-3" size={32} />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p>Professional Teams</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-white">
              <Zap className="mb-3" size={32} />
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p>Trained Workers</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-white">
              <Shield className="mb-3" size={32} />
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p>Safety Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
