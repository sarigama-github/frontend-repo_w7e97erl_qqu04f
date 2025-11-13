import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const base = 'text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition-colors'
  const active = 'text-blue-600 font-semibold'

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">R</span>
          <span className="text-xl font-bold text-gray-800">RentRide</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={({isActive}) => `${base} ${isActive ? active : ''}`}>Home</NavLink>
          <NavLink to="/fleet" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Fleet</NavLink>
          <NavLink to="/booking" className={({isActive}) => `${base} ${isActive ? active : ''}`}>Booking</NavLink>
        </nav>
        <div className="hidden md:block">
          <Link to="/booking" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
