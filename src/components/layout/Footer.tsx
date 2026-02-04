'use client';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ALFarabi</h3>
            <p className="text-gray-200">
              Providing professional workforce supply and project execution services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Headquarters</h4>
            <p className="text-gray-200">Cairo, Egypt</p>
            <p className="text-gray-200">Phone: +20 123 456 789</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400">© ALFarabi International Group</p>
        </div>
      </div>
    </footer>
  );
}
