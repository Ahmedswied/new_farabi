import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import Image from 'next/image';
import { CheckCircle, Users, Shield, Zap, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const benefits = [
    { icon: CheckCircle, title: 'Tested & Certified', desc: 'All workers rigorously tested and internationally certified', color: 'from-green-500 to-emerald-600' },
    { icon: Zap, title: 'Flexible Solutions', desc: 'Custom crew composition based on your requirements', color: 'from-blue-500 to-blue-600' },
    { icon: Shield, title: 'Safety Guaranteed', desc: 'Comprehensive safety protocols and compliance', color: 'from-purple-500 to-purple-600' },
    { icon: Users, title: 'Complete Support', desc: 'Accommodation, transportation, meals & supervision', color: 'from-orange-500 to-orange-600' },
    { icon: Award, title: 'Expert Teams', desc: '88-member professional crew with diverse skills', color: 'from-pink-500 to-pink-600' },
    { icon: TrendingUp, title: 'On-Time Delivery', desc: 'Proven track record of project completion', color: 'from-indigo-500 to-indigo-600' }
  ];

  return (
    <Layout>
      <Hero />

      {/* Why Choose ALFarabi - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Why Choose ALFarabi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading workforce supply solutions with proven expertise in complex projects across Egypt and the region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up group">
                  <div className={`bg-gradient-to-r ${benefit.color} h-2`}></div>
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Our Project Expertise</h2>
            <p className="text-xl text-gray-600">Delivering excellence across diverse sectors and scales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in-up">
                <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={`/images/home/${num}.jpg`}
                    alt={`Project ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Major Construction Project</h3>
                      <p className="text-sm text-gray-200">Professional crew management & execution</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strength Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold mb-6">Built on Excellence</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                With over 15 years of experience, ALFarabi has established itself as a trusted leader in workforce supply solutions. Our commitment to quality, safety, and professional excellence sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-lg">88</div>
                  <div>
                    <p className="font-semibold">Professional Crew Members</p>
                    <p className="text-blue-100 text-sm">Certified and experienced</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-lg">50+</div>
                  <div>
                    <p className="font-semibold">Successful Projects</p>
                    <p className="text-blue-100 text-sm">Completed on time</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <p className="font-semibold">Strategic Locations</p>
                    <p className="text-blue-100 text-sm">Cairo & El Dabaa</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="inline-block mt-8 px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-down">
              <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 border border-blue-400 border-opacity-50">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-blue-100">Safety Compliance</p>
              </div>
              <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 border border-blue-400 border-opacity-50">
                <p className="text-4xl font-bold mb-2">24hrs</p>
                <p className="text-blue-100">Response Time</p>
              </div>
              <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 border border-blue-400 border-opacity-50">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-blue-100">Years Experience</p>
              </div>
              <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 border border-blue-400 border-opacity-50">
                <p className="text-4xl font-bold mb-2">5★</p>
                <p className="text-blue-100">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10">Request a crew today and experience professional workforce solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition-all">
              Request a Crew
            </Link>
            <Link href="/services" className="px-10 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
