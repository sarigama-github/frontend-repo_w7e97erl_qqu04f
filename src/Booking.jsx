import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', vehicleType: 'Car', vehicle: '', pickupDate: '', dropoffDate: '', location: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const vehicles = {
    Car: ['Toyota Glanza', 'Hyundai i20', 'Maruti Swift'],
    Bike: ['Yamaha MT-15', 'Honda Activa', 'Royal Enfield Classic']
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Ride</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Location</label>
            <input name="location" value={form.location} onChange={handleChange} required className="w-full border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Vehicle Type</label>
            <select name="vehicleType" value={form.vehicleType} onChange={handleChange} className="w-full border-gray-200 rounded-md">
              <option>Car</option>
              <option>Bike</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Vehicle</label>
            <select name="vehicle" value={form.vehicle} onChange={handleChange} required className="w-full border-gray-200 rounded-md">
              <option value="" disabled>Select vehicle</option>
              {vehicles[form.vehicleType].map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Pickup Location</label>
            <input name="pickup" value={form.pickup} onChange={handleChange} required className="w-full border-gray-200 rounded-md" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Pickup Date</label>
            <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required className="w-full border-gray-200 rounded-md" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Dropoff Date</label>
            <input type="date" name="dropoffDate" value={form.dropoffDate} onChange={handleChange} required className="w-full border-gray-200 rounded-md" />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold">Confirm Booking</button>
      </form>

      {submitted && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
          <h2 className="text-xl font-semibold text-green-800">Booking Summary</h2>
          <div className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-green-900">
            {Object.entries(form).map(([k,v]) => (
              <p key={k}><span className="font-semibold capitalize">{k}:</span> {String(v)}</p>
            ))}
          </div>
          <p className="mt-3 text-green-700">This is a frontend-only demo. In a full project, this would be sent to the backend and stored in the database.</p>
        </div>
      )}
    </div>
  )
}

export default Booking
