function Fleet() {
  const items = [
    { id: 1, type: 'Car', name: 'Toyota Glanza', price: 35, img: '', fuel: 'Petrol', seats: 5, trans: 'Automatic' },
    { id: 2, type: 'Car', name: 'Hyundai i20', price: 40, img: '', fuel: 'Petrol', seats: 5, trans: 'Manual' },
    { id: 3, type: 'Bike', name: 'Yamaha MT-15', price: 15, img: '', fuel: 'Petrol', seats: 2, trans: 'Manual' },
    { id: 4, type: 'Bike', name: 'Honda Activa', price: 10, img: '', fuel: 'Petrol', seats: 2, trans: 'Automatic' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Fleet</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(v => (
          <div key={v.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{v.type}</p>
                <p className="text-sm font-semibold text-green-600">${v.price}/day</p>
              </div>
              <p className="mt-1 text-lg font-semibold text-gray-900">{v.name}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="px-2 py-1 rounded bg-gray-100">{v.fuel}</span>
                <span className="px-2 py-1 rounded bg-gray-100">{v.seats} seats</span>
                <span className="px-2 py-1 rounded bg-gray-100">{v.trans}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold">Select</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fleet
