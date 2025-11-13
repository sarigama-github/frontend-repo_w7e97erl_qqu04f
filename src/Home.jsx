import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Rent Bikes & Cars in Minutes
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Affordable, reliable, and fast. Choose from a curated fleet of cars and bikes for city rides, weekend getaways, or business trips.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">Book Now</Link>
                <Link to="/fleet" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold transition-colors">View Fleet</Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-gray-900">150+</p>
                  <p className="text-sm text-gray-500">Vehicles</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-600 to-purple-600" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-56">
                <p className="text-sm text-gray-500">Popular Car</p>
                <p className="font-semibold text-gray-900">Toyota Glanza</p>
                <p className="text-sm text-green-600 font-semibold mt-1">$35/day</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-56">
                <p className="text-sm text-gray-500">Popular Bike</p>
                <p className="font-semibold text-gray-900">Yamaha MT-15</p>
                <p className="text-sm text-green-600 font-semibold mt-1">$15/day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Flexible Plans', desc: 'Hourly, daily, and weekly rentals to fit your schedule.'
            },{
              title: 'Well-Maintained Fleet', desc: 'Regularly serviced vehicles for safe, smooth rides.'
            },{
              title: 'Easy Pickup & Drop', desc: 'Multiple locations and doorstep delivery available.'
            }].map((f) => (
              <div key={f.title} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-lg font-semibold text-gray-900">{f.title}</p>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
