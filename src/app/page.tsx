import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose ALFarabi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Tested & Certified</h3>
              <p className="text-gray-600">All workers are rigorously tested and internationally certified for safety and quality.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Flexible Solutions</h3>
              <p className="text-gray-600">Customize crew composition based on your project requirements and timeline.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Complete Support</h3>
              <p className="text-gray-600">We provide accommodation, transportation, meals, and full project supervision.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
