import React from 'react';
import FlightSearch from './FlightSearch';
import { Plane, Umbrella, MapPin, Star } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')", opacity: 0.3}}></div>
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">Find and book your perfect getaway with ease</p>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FlightSearch />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Plane />} title="Best Flight Deals" description="Find the most competitive prices for your flights" />
            <FeatureCard icon={<Umbrella />} title="Complete Packages" description="Get flights, hotels, and activities in one place" />
            <FeatureCard icon={<MapPin />} title="World-wide Destinations" description="Explore destinations across the globe" />
            <FeatureCard icon={<Star />} title="5-Star Experience" description="Enjoy top-rated customer service and support" />
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DestinationCard imageUrl="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" title="Paris, France" />
            <DestinationCard imageUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" title="Tokyo, Japan" />
            <DestinationCard imageUrl="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" title="New York, USA" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Sign up now and get exclusive deals on your next trip!</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DestinationCard: React.FC<{ imageUrl: string; title: string }> = ({ imageUrl, title }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <img src={imageUrl} alt={title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
      <h3 className="text-white text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

export default LandingPage;