// pages/index.js
import React from 'react';
import Hero from '../components/Hero';
import Link from 'next/link';
import { Shield, HeadphonesIcon, Clock, ThumbsUp, Car, Wifi, Fuel, Snowflake } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Insurance Included',
      description: 'Full coverage insurance with every rental'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Flexible Returns',
      description: 'Return at any of our locations'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: 'Best Price Guarantee',
      description: 'We match any competitor price'
    }
  ];

  const popularCars = [
    { name: 'Tesla Model 3', price: '$99/day', image: '/api/placeholder/400/300', type: 'Electric' },
    { name: 'BMW X5', price: '$129/day', image: '/api/placeholder/400/300', type: 'SUV' },
    { name: 'Mercedes C-Class', price: '$89/day', image: '/api/placeholder/400/300', type: 'Luxury' },
    { name: 'Toyota Camry', price: '$49/day', image: '/api/placeholder/400/300', type: 'Economy' },
  ];

  const amenities = [
    { icon: <Wifi />, name: 'Free WiFi' },
    { icon: <Fuel />, name: 'Full Tank' },
    { icon: <Snowflake />, name: 'Air Conditioning' },
    { icon: <Car />, name: 'GPS Available' },
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DriveRent?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide the best car rental experience with transparent pricing and excellent service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Vehicles
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our wide selection of well-maintained vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{car.type}</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-3">{car.price}</p>
                  <Link href="/booking" className="block text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Rent Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/cars" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Every Rental Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="text-blue-500">{amenity.icon}</div>
                <span className="text-lg">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your car today and get 20% off your first rental
          </p>
          <Link href="/booking" className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}